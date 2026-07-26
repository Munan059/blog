<div align="center">

# 🖥️ Munan Blog · 数字桌面

**一句话定位：把个人博客做成 Windows 11 风格的可交互桌面，点图标开窗口、拖窗口，任务栏搜索直接深链到某篇随笔/文章；全程零服务端，一条 `npm run build` 产出纯静态站，连上 Cloudflare Pages 即上线。**

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?logo=tailwind-css&logoColor=white)
![framer-motion](https://img.shields.io/badge/framer--motion-12-ff69b4)
![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare_Pages-F38020?logo=cloudflarepages&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow)

🌐 在线预览：https://munan.ink

[这是什么](#-这是什么) · [功能亮点](#-功能亮点) · [架构](#-架构设计) · [快速开始](#-快速开始) · [内容管理](#-内容管理) · [部署](#-部署) · [许可证](#-许可证)

</div>

---

## 📖 这是什么

Munan Blog 是一个能在浏览器里当操作系统用的个人网站：桌面上有图标，点一下弹出窗口；窗口能拖动、最小化、最大化、关闭；顶部菜单栏、底部任务栏、开始菜单都跟窗口状态联动。每个窗口是一个独立模块（文章、随笔、项目、关于、友链……），互不干扰。

> **为什么值得一看**：它长得像桌面系统、交互也像，但本质是 `output: 'export'` 产出的纯静态站，没有服务器、没有数据库、没有 API，却把窗口管理、拖拽、搜索深链全做出来了。克隆下来 `npm run build` 就能原样跑在任何静态托管上。

| 模块 | 入口组件 | 说明 |
| --- | --- | --- |
| 文章 | `ArticlesPage.tsx` | Markdown 正文 + 日/周/月/年/分类时间线 |
| 随笔 | `EssaysPage.tsx` | Markdown 正文，支持任务栏搜索深链 |
| 项目 | `ProjectsPage.tsx` | 项目卡片列表 |
| 关于 | `AboutPage.tsx` | 实时字数统计 + 网站已运行时间 |
| 友链 | `FriendsLinkPage.tsx` | 友链卡片 |
| 邮箱 / 此电脑 / 回收站 | `EmailPage` / `ThisPCPage` / `RecycleBinPage` | 桌面彩蛋式窗口 |

## ✨ 功能亮点

- **🪟 自研桌面窗口系统**：打开 / 最小化 / 最大化 / 关闭 / 拖拽 / 层级管理全套都在 `Desktop.tsx`，毛玻璃标题栏 + framer-motion 弹簧动画。
- **📋 菜单栏 + 任务栏 + 开始菜单**：顶部菜单点一下打开对应窗口；底部任务栏显示已开窗口、可最小化或恢复，左侧还有开始菜单。
- **🔍 任务栏搜索深链**：在任务栏搜索框输入关键词，点结果直接打开对应随笔/文章窗口并滚动到那篇。
- **📝 Markdown 驱动内容**：文章、随笔用 react-markdown + remark-gfm 渲染，代码块用 react-syntax-highlighter（One Light 主题）高亮，写法跟写 GitHub README 一样。
- **🕒 双时间线视图**：文章与随笔都支持按 日 / 周 / 月 / 年 / 分类 切换分组。
- **📊 关于页实时统计**：显示已写文章/随笔总字数（每次挂载重新统计），以及网站已运行秒数（每秒跳动）。
- **🎬 视频壁纸 + 鼠标视差**：桌面背景是循环视频 `yasuo.mp4`，鼠标移动时视频与叠加图层做 Wallpaper Engine 风格视差。
- **📐 容器查询响应式**：窗口内部用 `cqw` 单位，字号随窗口宽度缩放，窗口拉大拉小排版都好看。
- **🗂 数据驱动**：加内容只改数据文件，不动核心逻辑，桌面图标与菜单集中在 `constants.ts`。

## 📊 规模速览

> 数字来自当前仓库真实统计（`git ls-files` + 源码行数）。

| 指标 | 数值 |
| --- | --- |
| 源码规模 | 约 6200 行 TypeScript / TSX（src/ 下） |
| 桌面窗口模块 | 8 个（文章/随笔/项目/关于/友链/邮箱/此电脑/回收站） |
| 视频壁纸 | `public/yasuo.mp4`，25 MB，已入库 |
| 构建产物 | `out/`，纯静态，可直接托管 |

## 🏗 架构设计

```
浏览器
 ├─ MenuBar（顶部菜单栏）── 点击 ──► Desktop.openIcon(id)
 └─ Desktop（核心窗口系统）
      ├─ 状态：openWindows / minimized / maximized / activeWindow / 窗口坐标
      ├─ 渲染：AnimatePresence + framer-motion 弹簧动画
      ├─ Dock（任务栏 + 开始菜单 + 搜索框）
      ├─ 背景层：VideoParallaxBackground + parallax/（鼠标视差）
      └─ 内容层：按 id 路由到各 XxxPage 组件
```

设计决策：

- **纯客户端（`'use client'`）**：所有窗口组件都是客户端组件，天然契合 `output: 'export'`，不依赖任何服务端能力。
- **状态集中、渲染声明式**：窗口的开关 / 层级 / 坐标都集中在 `Desktop.tsx` 的 `useState`；加一个新窗口基本只改 `constants.ts` + 写一个 `XxxPage.tsx`。
- **内容即数据**：文章、随笔、友链都是数据数组，提交即发布，组件只负责渲染。
- **安全响应头随站走**：`public/_headers`（含 CSP、X-Frame-Options 等）会在 `next build` 时复制到 `out/`，Cloudflare Pages 自动生效。

## 🚀 快速开始

环境要求：**Node.js 18.17 及以上**，包管理器用 npm。

```bash
# 1. 克隆仓库
git clone https://github.com/Munan059/blog.git
cd blog
```

```bash
# 2. 安装依赖
npm install
```

```bash
# 3. 本地开发（默认 http://localhost:3000）
npm run dev
```

```bash
# 4. 静态构建（产出 out/ 目录）
npm run build
```

常用脚本：

| 命令 | 作用 |
| --- | --- |
| `npm run dev` | 启动开发服务器（http://localhost:3000） |
| `npm run build` | 静态导出到 `out/` |
| `npm run lint` | 代码检查 |

> 克隆后无需额外下载大文件，视频壁纸 `yasuo.mp4` 已在仓库内，开箱即跑。

## 📂 目录结构

```
munan-desktop/
├─ next.config.mjs          # 静态导出配置（output:'export'）
├─ tailwind.config.ts       # 主题色 / 字体 / 动画 keyframes
├─ postcss.config.mjs
├─ public/
│  ├─ yasuo.mp4             # 视频壁纸（25MB，已入库）
│  ├─ poster.jpg            # 视频封面
│  ├─ _headers              # Cloudflare Pages 安全响应头（含 CSP）
│  └─ *.png / *.webp        # 文章、随笔插图与头像
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx         # 根布局
│  │  ├─ page.tsx           # 入口：拼装 MenuBar + Desktop
│  │  ├─ globals.css        # Tailwind 指令 + 基础样式
│  │  └─ fonts/             # 自托管 Geist 字体（.woff）
│  ├─ components/
│  │  ├─ Desktop.tsx        # ★ 核心：桌面 + 窗口系统
│  │  ├─ MenuBar.tsx        # 顶部菜单栏
│  │  ├─ Dock.tsx           # 底部任务栏（含开始菜单 + 搜索框）
│  │  ├─ StartMenu.tsx      # 开始菜单
│  │  ├─ DesktopIcon.tsx    # 桌面图标
│  │  ├─ DesktopRipple.tsx  # 点击波纹
│  │  ├─ VideoParallaxBackground.tsx # 视频壁纸 + 鼠标视差
│  │  ├─ parallax/          # 鼠标视差背景（Wallpaper Engine 风格）
│  │  ├─ icons/             # 各窗口 / 图标的 SVG 组件
│  │  ├─ ArticlesPage.tsx   # 文章窗口（时间线）
│  │  ├─ EssaysPage.tsx     # 随笔窗口（搜索深链）
│  │  ├─ ProjectsPage.tsx   # 项目窗口
│  │  ├─ AboutPage.tsx      # 关于窗口（字数 / 运行时间）
│  │  ├─ FriendsLinkPage.tsx# 友链窗口
│  │  ├─ EmailPage.tsx      # 邮箱窗口
│  │  ├─ ThisPCPage.tsx     # 此电脑窗口
│  │  └─ RecycleBinPage.tsx # 回收站
│  └─ lib/
│     ├─ constants.ts       # 桌面图标、菜单配置（数据驱动入口）
│     ├─ articlesData.ts    # 文章列表
│     ├─ articlesContent.ts # 文章正文（Markdown 字符串）
│     ├─ essaysData.ts      # 随笔正文（Markdown，~990 行）
│     ├─ friendsData.ts     # 友链数据
│     └─ markdownComponents.tsx # Markdown 渲染配置
```

> 🧹 **仓库备注**：`CursorTrail.tsx`、`CenterIllustration.tsx` 为旧版遗留组件，当前未接入界面，可忽略。

## 📝 内容管理

所有内容都是数据驱动的，写文章 / 随笔就像改一份数据，不用动组件逻辑。

<details>
<summary>📄 加文章 / 随笔 / 项目 / 友链（点开）</summary>

- **加一篇文章**：在 `src/lib/articlesData.ts` 的数组里加一条；若有正文，把 Markdown 串放进 `src/lib/articlesContent.ts`，再在文章对象里引用。
- **加一篇随笔**：在 `src/lib/essaysData.ts` 的数组里加一条，正文写进 `markdown` 字段（支持图片、代码块）。
- **加一个项目**：在 `src/components/ProjectsPage.tsx` 的 `projects` 数组里加一条。
- **加一条友链**：在 `src/lib/friendsData.ts` 的数组里加一条；`avatar` 留空时自动用首字母 + 渐变色生成头像。

</details>

<details>
<summary>⚙️ 改桌面图标 / 菜单 / 主题 / 关于页（点开）</summary>

- **改桌面图标 / 菜单**：编辑 `src/lib/constants.ts`（`leftIcons` / `rightIcons` / `menuLinks`）。
- **改关于页介绍**：编辑 `src/components/AboutPage.tsx` 顶部的 `introLines`；改网站运行起点改同文件的 `SITE_START_TIME`（当前为 `2026-06-22`）。
- **改主题色 / 动画**：集中在 `tailwind.config.ts`。

</details>

## 🚢 部署

本项目是纯静态站，构建后把 `out/` 整个目录部署到任意静态托管即可。下面以 **Cloudflare Pages** 为例。

<details>
<summary>☁️ 方式一：Cloudflare Pages 连接 GitHub 自动部署（推荐）</summary>

1. 登录 Cloudflare 控制台 → **Workers & Pages** → **Create** → **Pages** → **连接到 Git**。
2. 选择仓库 `Munan059/blog`，分支 `main`。
3. 构建设置：
   - **构建命令（Build command）**：`npm run build`
   - **构建输出目录（Build output directory）**：`out`
   - **根目录（Root directory）**：留空（即仓库根）
4. 保存并部署。之后每次 `git push` 到 `main`，Cloudflare Pages 会自动重新构建并上线。
5. `public/_headers` 会在构建时复制到 `out/`，安全响应头自动生效。

</details>

<details>
<summary>📦 方式二：本地构建后手动上传</summary>

```bash
npm run build        # 产出 out/
# 在 Cloudflare Pages 控制台选择直接上传，
# 把本地 out/ 目录拖进去即可。
```

</details>

> ⚠️ **静态导出限制**：`output: 'export'` 下不能使用服务端特性，不能读请求头、不能用 `next/image` 图片优化、不能写 API Route。本项目所有窗口组件都是 `'use client'`，正好契合。

## 📄 许可证

本项目采用 [MIT 许可证](LICENSE) 开源，可自由使用、修改和分发，只需保留版权声明。

<div align="center">觉得有用点个 ⭐</div>
