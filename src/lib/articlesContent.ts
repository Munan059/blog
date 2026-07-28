// 文章内容（Markdown 字符串），按文章 id 映射
// 由外部 .md 文件生成，后续新增文章可在此追加
export const ARTICLES_MARKDOWN: Record<number, string> = {
  1: "# 从零搭建我的个人“数字桌面”博客\n\n> 项目代号：**munan-desktop** · 技术栈：Next.js 14（App Router）+ TypeScript + Tailwind CSS + framer-motion\n>\n> 一句话概括：把个人网站做成一个可以点图标、开窗口的桌面操作系统，而非传统博客。\n\n---\n\n## 0. 缘起：为什么我要做一个桌面而非普通博客\n\n做个人博客的人很多，但大多逃不出两种形态：要么是一个首页 + 文章列表 + 详情页的文档站，要么是一个炫酷的落地页。我想做点不一样的。\n\n我的设想是：打开网站，感觉像在使用一个\"迷你操作系统”。\n\n这种形式有几个好处：\n\n- **记忆点强**：第一眼就和传统博客拉开差距；\n- **信息架构自然**：每个窗口 = 一个独立模块，互不干扰；\n- **可玩性高**：拖动窗口、点任务栏这种小交互。\n\n下面就是我从 0 到 1 搭出这个东西的全过程。\n\n---\n\n## 1. 技术选型\n\n确定桌面这个方向后，技术选型的核心诉求只有三个：**组件化、动画顺滑、能静态部署**。\n\n| 需求 | 选择 | 理由 |\n| --- | --- | --- |\n| 框架 | **Next.js 14（App Router）** | React 生态最成熟，自带路由与构建，后续可静态导出 |\n| 语言 | **TypeScript** | 窗口状态、数据结构多，类型能少踩很多坑 |\n| 样式 | **Tailwind CSS 3.4** | 原子化类写 UI 飞快，主题色集中管理 |\n| 动画 | **framer-motion** | 窗口弹出、拖拽、过渡都靠它，弹簧动画手感好 |\n| 内容渲染 | **react-markdown + remark-gfm + react-syntax-highlighter** | 随笔写 Markdown，自动渲染并高亮代码 |\n| 部署 | **next export 静态导出** | 纯静态，可丢到任意托管（GitHub Pages / Vercel / 对象存储） |\n\n为什么不现成用某个桌面 UI 库？因为市面上的桌面模拟库要么太重、要么定制性差。我自己用 React 状态管理窗口，反而更可控、体积也小。\n\n---\n\n## 2. 初始化项目\n\n用官方脚手架起一个新项目，关掉所有花哨的默认配置（我不需要 ESLint 严格模式、不需要默认的示例页）：\n\n```bash\nnpx create-next-app@14 munan-desktop --ts --tailwind --app --no-src-dir --no-eslint\ncd munan-desktop\n```\n\n但这里有个**关键决定**：我把源码放进了 `src/` 目录（脚手架默认是根目录散着），并开启了 `src/app` 结构。接着装动画与渲染依赖：\n\n```bash\nnpm install framer-motion react-markdown remark-gfm react-syntax-highlighter\n```\n\n`package.json` 里真正用到的依赖就这几个，非常轻：\n\n```json\n{\n  \"dependencies\": {\n    \"framer-motion\": \"^12.42.2\",\n    \"next\": \"14.2.35\",\n    \"react\": \"^18\",\n    \"react-dom\": \"^18\",\n    \"react-markdown\": \"^10.1.0\",\n    \"react-syntax-highlighter\": \"^16.1.1\",\n    \"remark-gfm\": \"^4.0.1\"\n  }\n}\n```\n\n---\n\n## 3. 关键配置：让它变成纯静态站\n\n博客不需要服务端渲染，也不需要动态 API。我希望 `npm run build` 直接产出一堆 `.html` 文件，丢哪都能跑。于是 `next.config.mjs` 这样写：\n\n```js\n/** @type {import('next').NextConfig} */\nconst nextConfig = {\n  output: 'export',        // 静态导出，生成 out/ 目录\n  images: { unoptimized: true }, // 静态托管下关闭 Next 图片优化\n  trailingSlash: true,     // 兼容静态服务器的路由\n};\n\nexport default nextConfig;\n```\n\n> ⚠️ 踩坑点：`output: 'export'` 下**不能使用**服务端组件里读取请求头、不能用 `next/image` 的优化、不能写 API Route。整个站必须是客户端能独立跑完的形态。我的 `Desktop`、`ArticlesPage` 等全是 `'use client'` 组件，正好契合。\n\n`tsconfig.json` 里我加了一个路径别名，后面到处都在用：\n\n```json\n\"paths\": { \"@/*\": [\"./src/*\"] }\n```\n\n这样 `import Desktop from '@/components/Desktop'` 比 `../../../` 清爽太多。\n\n---\n\n## 4. 目录结构一览\n\n```\nmunan-desktop/\n├─ next.config.mjs        # 静态导出配置\n├─ tailwind.config.ts     # 主题色 / 字体 / 动画\n├─ postcss.config.mjs\n├─ src/\n│  ├─ app/\n│  │  ├─ layout.tsx       # 根布局（metadata、全局样式）\n│  │  ├─ page.tsx         # 入口：拼装 MenuBar + Desktop\n│  │  ├─ globals.css      # Tailwind 指令 + 基础样式\n│  │  └─ fonts/           # 自托管 Geist 字体\n│  ├─ components/\n│  │  ├─ Desktop.tsx      # ★ 核心：桌面 + 窗口系统\n│  │  ├─ MenuBar.tsx      # 顶部菜单栏\n│  │  ├─ Dock.tsx         # 底部任务栏\n│  │  ├─ DesktopIcon.tsx  # 桌面图标\n│  │  ├─ ArticlesPage.tsx # “文章”窗口内容\n│  │  ├─ EssaysPage.tsx   # “随笔”窗口内容（Markdown）\n│  │  ├─ ProjectsPage.tsx # “项目”窗口\n│  │  ├─ AboutPage.tsx    # “关于”窗口\n│  │  ├─ FriendsLinkPage.tsx\n│  │  ├─ EmailPage.tsx / ThisPCPage.tsx / RecycleBinPage.tsx\n│  │  └─ icons/           # 各窗口/图标的 SVG 组件\n│  └─ lib/\n│     ├─ constants.ts     # 桌面图标、菜单配置（数据驱动）\n│     ├─ articlesData.ts  # 文章列表数据\n│     ├─ essaysData.ts    # 随笔正文（Markdown 字符串）\n│     └─ friendsData.ts   # 友链数据\n└─ public/                # 图片、视频壁纸等静态资源\n```\n\n设计原则很明确：**配置与数据是声明式的，组件是通用的**。要加一个窗口，基本只改 `constants.ts` + 写一个 `XxxPage.tsx`，不用动核心逻辑。\n\n---\n\n## 5. 核心：桌面窗口系统\n\n这是整个项目最难、也最有趣的部分。所有窗口逻辑都集中在 `src/components/Desktop.tsx` 这一个客户端组件里。\n\n### 5.1 窗口状态的全家桶\n\n一个桌面要同时管理：哪些窗口开着、哪个最小化、哪个最大化、哪个在最前（z-index）、窗口被拖到哪了。我用了一组 `useState`：\n\n```ts\nconst [openWindows, setOpenWindows] = useState<string[]>([]);\nconst [minimizedWindows, setMinimizedWindows] = useState<string[]>([]);\nconst [maximizedWindows, setMaximizedWindows] = useState<string[]>([]);\nconst [activeWindow, setActiveWindow] = useState<string | null>(null);\nconst [windowPositions, setWindowPositions] = useState<Record<string, {x:number;y:number}>>({});\n```\n\n每个窗口都用一个唯一 `id` 标识（和桌面图标 `id` 一致），这样“点图标 → 开窗口 → 任务栏出现按钮 → 点按钮最小化/恢复”是一条完整的闭环。\n\n### 5.2 用 ref 让顶栏指挥桌面\n\n顶部 `MenuBar` 的菜单项点下去，要能打开对应的桌面窗口。但 `MenuBar` 和 `Desktop` 是平级组件，怎么通信？答案是 React 的 **`useImperativeHandle` + `forwardRef`**：\n\n```ts\n// Desktop.tsx\nexport interface DesktopHandle { openIcon: (id: string) => void; }\nconst Desktop = forwardRef<DesktopHandle>((_props, ref) => {\n  useImperativeHandle(ref, () => ({ openIcon: handleIconOpen }), [handleIconOpen]);\n  // ...\n});\n\n// page.tsx\nconst desktopRef = useRef<DesktopHandle>(null);\n<MenuBar onNavigate={(iconId) => desktopRef.current?.openIcon(iconId)} />\n<Desktop ref={desktopRef} />\n```\n\n这样 `MenuBar` 完全不用关心窗口内部怎么实现，只管喊一声“打开 xxx”。\n\n### 5.3 窗口拖动：原生事件 + 相对坐标\n\nNext 自带 nothing，我自己用鼠标事件实现拖动。难点在于**避免窗口跳动**——我记录的是鼠标位移增量而不是绝对坐标，并且用相对父容器的坐标：\n\n```ts\nconst onMouseMove = (e: MouseEvent) => {\n  const dx = e.clientX - startMouseX;\n  const dy = e.clientY - startMouseY;\n  setWindowPositions(prev => ({\n    ...prev,\n    [draggingId]: { x: startWindowX + dx, y: startWindowY + dy },\n  }));\n};\n```\n\n同时监听 `mouseup` 结束拖动、`mousemove` 实时更新，记得在 `useEffect` 里清理监听器，否则会内存泄漏。\n\n### 5.4 窗口外观：仿 Windows系统\n\n标题栏用 CSS 毛玻璃（`backdrop-blur`），右侧三个按钮（最小化 / 最大化 / 关闭）全部是手画的 SVG；窗口弹出用 framer-motion 的弹簧动画：\n\n```ts\ninitial={{ scale: 0.8, opacity: 0 }}\nanimate={{ scale: 1, opacity: 1 }}\nexit={{ scale: 0.8, opacity: 0 }}\ntransition={{ type: 'spring', stiffness: 400, damping: 25 }}\n```\n\n退出用 `AnimatePresence` 包裹，关窗口时有缩放淡出，非常顺滑。\n\n---\n\n## 6. 内容系统：数据驱动 + Markdown 渲染\n\n博客的内容和外壳彻底解耦。\n\n### 6.1 文章 = 纯数据\n\n`src/lib/articlesData.ts` 里就是一组对象，加文章只改这个文件：\n\n```ts\nexport type Article = {\n  id: number; date: string; title: string; tags: string[];\n};\nexport const articles: Article[] = [\n  { id: 1, date: '2026-07-08', title: '从零搭建个人数字桌面', tags: ['Next.js','前端'] },\n  // ...\n];\n```\n\n`ArticlesPage.tsx` 把这份数据按日 / 周 / 月 / 年 / 分类分组，做成时间线卡片。分组逻辑全部用 `useMemo` 缓存，切换 Tab 不重算。\n\n### 6.2 随笔 = Markdown 字符串\n\n`src/lib/essaysData.ts` 里，每篇随笔的正文直接是一段 Markdown 字符串（支持图片、代码块）。渲染时：\n\n```tsx\nimport ReactMarkdown from 'react-markdown';\nimport remarkGfm from 'remark-gfm';\nimport { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';\nimport { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';\n\n<ReactMarkdown\n  remarkPlugins={[remarkGfm]}\n  components={{\n    code({ className, children }) {\n      // 用 SyntaxHighlighter 渲染代码块，oneLight 主题\n    },\n  }}\n>{essay.markdown}</ReactMarkdown>\n```\n\n这样我写随笔就像在写 GitHub README，提交即发布，零额外成本。\n\n### 6.3 顶栏搜索 → 深链到随笔\n\n`Dock`（任务栏）里做了个搜索框，输入后点结果能**直接打开对应随笔窗口并滚动到那篇**。实现方式：`Desktop` 维护一个 `essayFocusId` 状态，打开 `EssaysPage` 时作为 prop 传入，窗口挂载后自动聚焦——这就是所谓的深链。\n\n---\n\n## 7. 视觉与动效打磨\n\n### 7.1 集中管理的主题色\n\n`tailwind.config.ts` 里把所有配色声明成语义化的名字，全站统一调用：\n\n```ts\ncolors: {\n  'desktop-bg': '#e8e0d5',\n  'menu-bar':   '#1a1a1a',\n  'cta-orange': '#f54e00',\n  'icon-red':   '#c84040',\n  'icon-blue':  '#4a90d9',\n  // ...\n}\n```\n\n还顺手定义了 `float`、`slide-in-right`、`fade-in` 等 keyframes，菜单弹出来、图标浮动都复用它们。\n\n### 7.2 视频壁纸\n\n桌面背景是一段循环视频，用原生 `<video autoPlay loop muted playsInline>` 铺满。但视频有 **95MB**，绝不可能塞进 Git 仓库。我的做法：\n\n- 视频放在 `public/`，构建时随 `out/` 一起导出；\n- 实际线上引用的是 **GitHub Releases 上的下载直链**：\n\n```tsx\n<source src=\"https://github.com/Munan059/blog/releases/download/v1.0.0/bizhi.mp4\" type=\"video/mp4\" />\n```\n\n> 这样既省了仓库体积，又不用单独买对象存储。Release 下载有带宽限制，但对个人博客完全够用。\n\n### 7.3 用容器查询做响应式\n\n窗口内部用 `cqw`（container query width）单位，而不是 `vw`。这样字号是**相对窗口宽度**缩放的，窗口拉大拉小，排版都好看：\n\n```ts\nstyle={{ fontSize: 'clamp(11px, 1.5cqw, 13px)' }}\n```\n\n配合 `containerType: 'inline-size'`，窗口内容像“活在自己容器里的迷你网页”。\n\n---\n\n## 8. 静态导出与部署\n\n一切就绪后，构建 + 部署只要三步：\n\n```bash\nnpm run build     # 产出 out/ 静态文件\n# 把 out/ 整个目录丢到任意静态托管即可\n```\n\n我目前是把 `out/` 目录部署到 Cloudflare pages / 任意静态服务。因为 `output: 'export'`，**没有服务端依赖**，迁移成本几乎为零。\n\n> 小提示：仓库根目录的 `out/` 通常是构建产物，建议加进 `.gitignore`（除非你用它做 Cloudflare Pages 的发布源）。\n\n---\n\n## 9. 踩过的坑（省你时间）\n\n1. **静态导出不能用服务端特性**：`output:'export'` 后，`next/image` 优化、API Route、cookies 全失效。老老实实 `'use client'` + 关闭图片优化。\n2. **大文件别进 Git**：95MB 视频直接让 clone 卡死。用 Release / 对象存储外链。\n3. **拖动窗口的跳动 bug**：一开始用绝对鼠标坐标，窗口会从原位瞬移到鼠标处。改成相对位移 + 相对父容器坐标后解决。\n4. **监听器泄漏**：`mousemove`/`mouseup` 一定要在 `useEffect` 的 cleanup 里 `removeEventListener`，否则拖动会越来越卡。\n5. **z-index 打架**：用 `activeWindow === id ? 40 : 30` 统一管理层级，点哪个窗口哪个置顶，逻辑清晰不混乱。\n6. **Markdown 代码高亮按需引入**：`react-syntax-highlighter` 全量很大，我专门从 `dist/esm/styles/prism` 只引 `oneLight`，体积可控。\n\n---\n\n## 10. 写在最后\n\n从 `create-next-app` 到第一个能拖动的窗口弹出来，核心逻辑其实不到 500 行。真正花时间的，是把桌面这个比喻做顺：窗口层级、拖动手感、任务栏状态同步、深链跳转……每一个都是小坑，但凑齐了就有那个“哇，这是个系统”的沉浸感。\n\n如果你也在做个人站，欢迎参考我的搭建过程。源码在 GitHub：[Munan059/blog](https://github.com/Munan059/blog)。\n\n---\n\n*本文写于 2026-07-13，记录 munan-desktop 博客从 0 到 1 的搭建过程。*\n",
  14: `# 基于骁龙865的端侧模型与优化

> 项目代号：**PureEdgeVLM** · 设备：骁龙865 手机，8GB 内存、纯 CPU · 技术栈：Kotlin + C++17 + NCNN + llama.cpp
>
> 一句话概括：在旧手机上纯 CPU 部署四个模型组成的多模态感知与本地对话系统，拍照即可本地完成目标检测、场景识别、文字识别与多轮对话，全程零网络依赖。

---

## 1. 技术选型

整套系统由四个模型组成，视觉三个走 NCNN，语言模型走 llama.cpp，只用两个推理框架。

| 模型 | 用途 | 框架 | 精度 | 权重大小 |
| --- | --- | --- | --- | --- |
| YOLOv11s | 目标检测 | NCNN | fp32 | 38MB |
| ResNet50 Places365 | 场景识别 | NCNN | fp32 | ~97MB |
| PP-OCRv5 | 文字识别 | NCNN | fp32 | ~11MB |
| MiniCPM5-1B | 本地多轮对话 | llama.cpp | INT4，即 Q4_K_M | ~657MB |

视觉三个模型统一用 NCNN，是因为它库体积小、对 ARM CPU 优化到位、编译简单，而且同一框架内可以复用内存。语言模型用 llama.cpp，是因为它的 GGUF 格式生态成熟、跨平台，MiniCPM5-1B 这种标准架构开箱即支持。

为什么纯 CPU 不碰 GPU：骁龙865 的 Adreno 650 驱动过旧，与新版 NCNN 生成的 SPIR-V 不兼容，开启 Vulkan 直接崩溃；纯 CPU 没有驱动差异，不同机型行为一致。精度上，骁龙865 上 YOLO 使用 fp16 权重时检测头会输出全零，所以视觉模型固定 fp32；语言模型才用 INT4，因为生成任务对量化更宽容，且不量化就无法装入手机内存。

---

## 2. 环境搭建

开发机用一台普通笔记本即可，模型转换和安卓编译都能胜任。手机是骁龙865，开启开发者选项和 USB 调试。

安卓侧工具链：Android Studio 用 Giraffe 及以上版本，固定 NDK r26c 与 CMake 3.22.1，新建一个 Native C++ 模板工程。点 Run 装到手机，看到 Hello from C++ 就说明电脑编译到手机运行的链路通了。

模型转换侧统一用本机装了 AI 库的那个 Python，命令前缀是 \`py -3.10\`。机器上可能有多套 Python，用裸 \`python\` 会报缺库。还需要 adb 工具，用于装 App 和看日志。

---

## 3. 模型准备与转换

四个模型来源和转换方式各不相同，下面给出实际能跑通的链路。

YOLOv11s 用官方原生导出，必须保持 fp32：通过 ultralytics 导出 NCNN 权重，直接覆盖工程里的对应文件。这里有两个死坑，骁龙865 上 YOLO 一旦用 fp16 权重检测头就输出全零，所以切勿用 ncnnoptimize 压 fp16，也切勿手动 onnx2ncnn 转 yolo11s，两种路径都会把权重静默转坏成全零。

ResNet50 Places365 走 PyTorch 转 ONNX 再转 NCNN：先加载 MIT 官方权重、去掉键名里的 module. 前缀、确认分类数是 365，导出 ONNX，再用 NCNN 的 onnx2ncnn 工具转成 param 和 bin，全程保留 fp32。

PP-OCRv5 不用重转，直接拿百度开源的 NCNN 现成仓库，里面自带 det 和 rec 的 NCNN 模型文件以及 18385 字的字符表。

MiniCPM5-1B 是 llama.cpp 原生支持的 GGUF 格式，无需转换，直接从模型库下载 Q4_K_M 量化版本即可，文件约 657MB、文件名大写 MB；下成 Q2_K 会乱码，下成 Q8 体积过大手机跑不动。

下面这段 Python 脚本把上面四步串起来，在装有 AI 库的 Python 环境里直接运行即可：

\`\`\`python
import subprocess
import sys

# 1. YOLOv11s：必须走 ultralytics 原生导出（PNNX 路径）
#    切勿手动 onnx2ncnn 转 yolo11s，会把权重静默转坏、检测头输出全零
subprocess.run(
    ["yolo", "export", "model=yolo11s.pt", "format=ncnn", "imgsz=640", "simplify=True"],
    check=True,
)

# 2. ResNet50 Places365：先导出 ONNX，再用 onnx2ncnn 转 NCNN
#    注意 onnx2ncnn 需先编译 NCNN（新版 tools/CMakeLists.txt 默认不编，要手动加 add_subdirectory(onnx)）
subprocess.run(
    [sys.executable, "models_workspace/places365/export_resnet50_places365_to_onnx.py"],
    check=True,
)
subprocess.run(
    ["onnx2ncnn", "resnet50_places365_sim.onnx", "resnet50_fp32.param", "resnet50_fp32.bin"],
    check=True,
)

# 3. PP-OCRv5：直接拉取百度开源的 NCNN 现成仓库（内含 det/rec 模型与 18385 字字符表）
subprocess.run(
    ["git", "clone", "https://github.com/equationl/ncnn-android-ppocrv5.git"],
    check=True,
)

# 4. MiniCPM5-1B：GGUF 是 llama.cpp 原生格式，下载 Q4_K_M 量化版（文件名大小写敏感）
#    下成 Q2_K 会乱码、Q8 体积过大手机跑不动；下完复制到 app/src/main/assets/models/llm/
subprocess.run(
    ["modelscope", "download", "--model", "OpenBMB/MiniCPM5-1B-GGUF",
     "MiniCPM5-1B-Q4_K_M.gguf", "--local_dir", "./models/minicpm5"],
    check=True,
)
\`\`\`

两个必须记牢的坑：YOLO 只能用 ultralytics 原生导出的 fp32 权重，fp16 和手动 onnx2ncnn 两种路径在骁龙865 上都会让检测头输出全零；MiniCPM5-1B 要用 Q4_K_M 量化，更低的量化版本会直接乱码。

---

## 4. 架构设计

整个系统分成五层，从上到下职责清晰：

最上层是 Kotlin UI 层，由对话、识别、相机、Benchmark 四个页面组成。其下是 Kotlin ViewModel 层，用协程调度整条流水线，状态通过状态流下发到界面。再往下是 JNI 桥接层，把 Kotlin 侧的调用转成 C++ 入口。核心在 C++ 层，产物是 libpureedgevlm.so，内部包含流水线调度 PipelineCore、YOLO 检测器、场景分类器、OCR 识别器、语言模型引擎、张量内存池 MatPool 与线程绑核 ThreadAffinity。最底层是第三方动态库，放在 arm64-v8a 目录，包括 libncnn、libomp、libllama、libggml。

JNI 桥接层一共暴露九个外部函数，视觉三个检测、一个对话加载、一个对话生成、一个状态查询、一个基准测试、一个释放都在其中。Bitmap 到 NCNN 张量的转换走 \`AndroidBitmap_lockPixels\` 零拷贝，语言模型逐 token 生成用 JNI 回调吐回主线程。

---

## 5. 核心：NCNN 部署三个视觉模型

视觉部分最难的是把三个模型接进同一条流水线，并且处理好图像预处理。

YOLO 检测器负责目标检测，输出框和类别后做非极大值抑制。加载时关掉 Vulkan 计算、线程数设 4；图片按最长边缩到 640、短边补灰边，做 RGBA 转 RGB 和归一化；解码时兼容不同导出的维度排布，先按 0.45 置信度过滤再做非极大值抑制，最后把检测框从 640 缩放图映射回原图像素坐标。

ResNet50 场景分类器先缩到 224×224，再做归一化取 softmax 取前五。这里有个隐蔽的陷阱：NCNN 的 \`substract_mean_normalize\` 实际算的是 \`(输入 - 均值) × 系数\`，是乘法不是除法。正确写法是均值乘 255、系数取标准差与 255 乘积的倒数，即均值 \`[123.675, 116.28, 103.53]\`、系数 \`[0.017129, 0.017507, 0.017425]\`。参数写反会让网络饱和、无论什么图都输出同一类。

PP-OCRv5 走检测加识别两段：先用 DB 算法找出文字区域，再用 CRNN 加 CTC 把裁出来的字区域变成文字，识别模型输出的是字符编号，查 18385 字的字表才变成真字。检测后处理要把斜的字摆正、裁剪出来，这一步的几何变换靠精简版 OpenCV 完成，只装 core 与 imgproc 两个模块。OCR 读像素要 ARGB_8888 格式，所以选图后统一转成这个格式再交给所有视觉模型。

模型加载的成功判断是个隐蔽坑：NCNN 里读结构的接口返回 0 表示成功，读权重的接口返回的是消耗的字节数、非 0 才表示成功。两个接口返回值语义相反，写反了模型实际读到了权重却被当成失败，检测函数一进来就返回空，界面显示 0 个物体且不崩溃。

---

## 6. 核心：llama.cpp 移植与本地对话

本地对话部分先把 llama.cpp 用 NDK 交叉编译成安卓动态库，关键开关是关掉 examples、tests、tools，还要额外关掉 APP、SERVER、UI 与 GGML_OPENMP，只编核心库。新版 llama.cpp 把核心接口拆到了 \`libllama-common.so\`，链接时不能漏，而且要排在 \`libllama\` 之后。

C++ 侧封装一个 \`LlmEngine\` 类管理模型与上下文的生命周期。对话时由 Kotlin 维护多轮历史，用 MiniCPM5-1B 的 ChatML 模板拼装完整对话，句首补上特殊标记，分词时把特殊标记当真正标记处理。点发送后调 \`llmGenerate\`，逐 token 通过回调实时回显，推理在后台线程跑，不卡界面。

多轮对话的最终做法是走 MiniCPM5 的 ChatML 模板，由 Kotlin 维护完整多轮历史；聊天上下文常驻在 C++ 侧，每轮只对新增的 token 做预填充、复用历史 KV 缓存，多轮首字延迟随之下降，设置页可关闭复用退回完整重算以保证对比测试干净。早期曾踩过 KV 缓存前缀复用的坑：第二轮起回答为空、旋转切页后忘前文、历史截断后接错话，四层根因叠加，逐层修复后才稳定复用。语言模型解码用 \`llama_token_to_piece\` 取文字保证 UTF-8 中文正确，用互斥锁把推理入口串行化避免连点并发崩。

---

## 7. 调度与优化

这套系统真正的工程重点在调度，不在单个模型。

骁龙865 是三丛集 CPU：一个 A77 大核、三个 A77 中核、四个 A55 小核，L3 缓存只有 3MB。基于这个硬件，调度策略定为视觉三模型并行、语言模型异步单线程。

| 阶段 | 执行方式 | 线程数 | 绑核 | 耗时 |
| --- | --- | --- | --- | --- |
| 视觉阶段 | 三模型并行 | YOLO 4 / OCR 3 / 场景 1 | 大核组 | 约 332ms，并行实测 |
| 语言模型阶段 | 逐 token 解码 | 1 | Prime 大核 | 约 6500ms，对应 128 token |

视觉三个模型并行是划算的：串行平均 503.2ms，并行平均 331.5ms，提速 34.1%。原因是三个视觉模型权重都不大，并发只抢几 MB 缓存，重叠之后总时间取最慢者。并行后每个模型单独反而变慢，YOLO 199 到 308ms、场景 159 到 246ms、OCR 145 到 287ms，因为被大小核调度和缓存争抢拖慢，但多路重叠节省的时间远大于争抢损失。语言模型不能并进这个并行里，它的解码是访存密集型，每 token 要读全部权重，并进来会和视觉模型互相驱逐缓存，反而更慢，所以保持异步单线程，解码阶段绑到 Prime 大核，速度从 10 tok/s 提到 15 到 18 tok/s。

内存方面，四个模型常驻约 470MB，语言模型键值缓存约 200MB，峰值合计约 820MB，远低于 8GB 上限。关键手段是 MatPool：视觉模型串行执行，同一时刻只活一个，就复用同一组输入输出张量，避免每帧重新分配。

视觉模型不做 int8 量化，因为检测和识别的准确性是底线，量化会引入精度损失，而这几个模型本身不大、量化收益有限；真正的零精度损失提速来自三模型并行。语言模型用 INT4，是因为生成任务对量化更宽容，且不量化无法装入内存。

---

## 8. Benchmark 与数据

基准测试覆盖四个模型、四种线程数、三种分辨率，并加一组绑核对比，共 48 组。下面两张表是其中最有代表性的数据。

三模型并行优化对比，测试条件为骁龙865 纯 CPU、固定 640×640 测试图、串行与并行各跑 10 次取平均：

| 指标 | 串行平均 | 并行平均 | 差值 |
| --- | --- | --- | --- |
| 总耗时 | 503.2ms | 331.5ms | -171.7ms，降 34.1% |
| YOLO 检测 | 199.4ms | 308.5ms | +109.1ms |
| 场景识别 | 159.0ms | 245.9ms | +86.9ms |
| OCR 文字 | 144.8ms | 287.2ms | +142.4ms |

单模型参考性能，README 真机实测取最优线程：YOLOv11s 在 4 线程约 155ms，ResNet50 在 4 线程约 46ms，PP-OCRv5 det 加 rec 约 148ms，MiniCPM5-1B 生成 128 token 约 6500ms。除三模型并行的 503 与 332 是严格实测值外，其余为参考测量，被追问时只报有精确数字的结论，不编造数值。

另有三项定性优化：复用 KV 缓存让多轮对话只算新增内容、首字延迟下降，关闭思维链让生成预算全部用于回答，相机页把场景识别结果缓存 500 毫秒复用、YOLO 仍每帧执行。这三项通过日志确认生效，未做逐毫秒基准，讲清机理即可。

---

## 9. 踩过的坑

1. **YOLO 检测头全零**：fp16 权重和手动 onnx2ncnn 都会让骁龙865 上的 YOLO 输出全零。只用 ultralytics 原生导出的 fp32 权重。
2. **场景识别永远同一类**：归一化参数写反，把乘法当除法。按 \`(输入 - 均值) × 系数\` 重新算，均值乘 255、系数取 \`1 / (255 × 标准差)\`。
3. **模型加载判断写反**：读结构返回 0 是成功，读权重返回非 0 才是成功，两个接口语义相反，写反就静默失败。
4. **OpenMP 符号错配导致闪退**：opencv-mobile 新版调用的 OpenMP 收尾函数，NDK 自带库没有。把那个函数改成空实现最稳妥，不能拿老函数简单转发。
5. **llama.cpp 链接报错**：新版拆出 \`libllama-common.so\`，CMake 链接列表漏掉就报未定义符号。补上即可，且排在 \`libllama\` 之后。
6. **多轮对话接错话，KV 缓存复用翻车**：给对话加键值缓存前缀复用提速，结果第二轮起回答为空，四层根因叠加，症状完全相同。逐层修复才稳定：缓存前缀补齐输入加生成内容、历史轮统一补思维链占位、入库文本原样保存、取 logits 改用批内下标。复用最终生效且回答正确。
7. **误释放未自行分配的 batch**：\`llama_batch_get_one\` 把调用方指针直接存进结构体，对它调用释放会释放野指针导致中止。用 \`get_one\` 就别释放，只有 \`llama_batch_init\` 申请的才配对释放。
8. **相机检测框错位**：预览用相机原生 16:9、分析帧为 4:3，两路各自缩放导致框偏。统一成 4:3 并把分析帧按旋转角转正后再送检测，框与画面对齐。

---

## 10. 写在最后

从空工程到第一个能流畅跑通的端侧多模态系统，代码量不算惊人，真正花时间的是调度策略和那几个硬件相关的坑。三模型并行、语言模型绑核、MatPool 复用，这三件事把纯 CPU 的骁龙865 压榨出了够用的速度。

如果你也在做端侧部署，希望这份搭建过程能帮你少走弯路。完整源码在 GitHub：https://github.com/Topaz059/PureEdgeVLM

---

*本文写于 2026-07-28，记录 PureEdgeVLM 在骁龙865 上从环境搭建到性能优化的全过程。*
`,
};
