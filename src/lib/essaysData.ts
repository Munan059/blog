/* 随笔数据 */
export type Essay = {
  id: number;
  date: string;
  title: string;
  content: string;
  markdown?: string;
  tags: string[];
};

export const AI_NOTES_MD = `# 1. 机器学习
机器学习就是从数据中获得规律，通过人对规律进行标注，然后人将这个规律写成一套算法，使算法能够准确判断或识别出对应物体。

# 2. 深度学习
深度学习在机器学习的基础上，不需要人对规律进行总结，其内部会将输入的数据总结、分析规律、形成一套算法，从而识别或判断出对应物体。

![机器学习vs深度学习](/ml-vs-dl.png)

# 3. 神经网络
机器模拟人类大脑神经元工作的一种算法，input输入经过多层参数线性运算的叠加，最终得到一个output输出，下图为简单的三层神经网络的模型。

![神经网络模型](/neural-network.png)

# 4. 大语言模型(LLM)
大语言模型是深度学习领域专门设计用于自然语言处理领域特殊的深度神经网络。规模大，训练数据大，算力大，参数规模大，故称之为大语言模型。`;

export const PYTHON_REVIEW_MD = `# print函数
### print(values, sep=" ", end="\\n", file=None, flush=False)
- sep内赋值的内容将作为每个元素输出的间隔符。
- end内赋值的内容将作为value结束末尾的换行。
- file内可选择对文件的打开方式。常见有r：只读。w：只写。a：追加。添加+表示允许读写。
- flush可选True和False两种选择，True代表每运行一步屏幕就立刻显示一步，False则是最后一起在屏幕显示出来。
# 格式化输出
### 格式化字符
- %c：字符
- %s：字符串
- %d：十进制整数
- %f：浮点数
### 格式化输出模板
### 基本格式化输出：使用%
\`\`\`python

print('我的名字是%s，年龄是%d岁' % ("01", 18))

\`\`\`
#### format()格式化输出
\`\`\`python

print("我的名字是：{}，年龄为：{}岁".format("01", 18))

\`\`\`
#### f表达式格式化输出(常用)
\`\`\`python

name, age = "01", 18

print(f"名字是{name}，今年{age}岁")

\`\`\`
# 对象
### python对象的三要素
  - \`id\`：对象的唯一标识符。
  - \`type\`：对象的类型。
  - \`value\`：对象的值。
# input函数
可以自己输入需要的元素，默认以字符串形式返回，但可使用int以及其他类型进行强制转换。
\`\`\`python
a=int(input("请输入"))
print(a)
\`\`\``;

export const WORLD_MODEL_MD = `# 世界模型
### 广义世界模型
能够预测之后会发生什么的模型都可以被称之为广义世界模型。
- LLM能够预测下一个Token，例如：智谱GLM5.2、Claude code Sonnet4.8等。
- 视频生成模型可以预测下一帧的画面，例如：豆包Seedance2.5、即梦等。
### 狭义世界模型(action-conditioned)
必须以动作为条件，强调在动作之后世界会发生的变化。
# 世界模型的三种功能性类型
### 渲染器
渲染器主要做的是输出观察到的信息，可以以图片或者视频的格式进行输出，例如：文生视频模型Sora(已下架)、交互式生成系统RTFM(Real-Time Frame Model)等都属于渲染器。
### 模拟器
模拟器的职责是输出世界本来的状态，需要遵循物理、几何、动力学的规律，追求极致真实，遵从牛顿定理，符合因果规律。常见的模拟器：Dreamer系列。
### 规划器
当给定了观察和目标后，规划器输出动作。与渲染器相反，渲染器主要是把动作转化为观察；规划期主要是把观察转化为动作。常见的规划器：VLA(Vision-Language-Action)。
### 逻辑闭环过程
输入真实情况→规划器决定动作→模拟器推演后果→渲染器画出预测的画面→对比误差修正下一轮输入。
# RTFM与JEPA的对立
两种路线的对立本质上是以Yann LeCun为代表提出的、与当前主流生成式AI截然不同的一条通往“世界模型”和自主智能的技术路径。

| 对比维度     | **RTFM路线**    | **JEPA式路线**     |
| -------- | ------------- | --------------- |
| **输出**   | 直接生成2D像素图片/视频 | 输出抽象的特征向量       |
| **目标**   | 看起来真实的画面      | 理解真实的物理规律       |
| **计算负担** | 重             | 轻               |
| **适用情况** | 适合展示结果、给人看    | 适合内部规划、给AI自己推理用 |`;

export const WORLD_MODEL_TERMS_MD = `# 世界模型名词解释

- **ViT（Vision Transformer）**：把图像按一个一个切成方块，像处理单词一样处理这些方块，主要是使用 Transformer 来处理图像。是主流的视觉大模型的首选方案。
- **Autoencoder（自编码器）**：先压缩再还原，编码器把图像压成低维的隐变量，解码器再把它还原。目的是逼着网络学会提取最核心的特征。
- **MAE（Masked Autoencoder）**：一种简单的自监督学习机制。先遮住多数的方块，只保留少数的可见方块，然后需要解码器将剩余的部分补齐。
- **师生网络（Teacher-Student Network）**：是一种对称的架构，学生网络负责从输入中学习特征，教师网络负责为学生生成标准答案（即预测目标）。使用学生网络的权重做 EMA 来缓慢更新，相当于老师比学生学得慢但更稳，以此引导模型提取高质量特征。
- **DINO（DIstillation with NO labels）**：一种自监督学习框架，核心是师生网络。学生网络看图的局部裁剪，教师网络看图全局裁剪，让学生去拟合教师的输出。以此能让 ViT 自动学会分割物体轮廓，不需要人工标注。
- **EMA（Exponential Moving Average）**：在上述 DINO 或 MAE 中，教师网络的权重是通过学生网络权重的滑动平均（EMA）来缓慢更新，保证了训练的稳定性。
- **JEPA（Joint Embedding Predictive Architecture）**：Yann LeCun 力推的新范式。与 MAE 预测**像素**不同，JEPA 的预测目标是输入数据的抽象表征（嵌入）。例如：给一张不完整的图，它预测完整图的特征向量。`;


export const PYTHON_PRACTICE_MD = `### 1.1 内置数据类型

| 类型      | 名称   | 特征                 | 典型用途  |
| ------- | ---- | ------------------ | ----- |
| \`int\`   | 整型   | 无小数点的数字            | 计数、索引 |
| \`float\` | 浮点型  | 含小数点的数字            | 度量、权重 |
| \`str\`   | 字符串型 | 由引号界定的字符序列         | 文本    |
| \`bool\`  | 布尔型  | 仅 \`True\` / \`False\` | 条件判断  |


### 1.2 关键约束
- **文字必须包裹在引号中**（单引号 \`'\` 或双引号 \`"\` 均可，需成对）。
- **数字禁止加引号**，否则会被当成文字。
- 代码中的标点（引号、逗号、冒号、括号）必须使用英文半角符号，中文全角符号会导致 \`SyntaxError\`。

\`\`\`python
age = 18            # int，整型
height = 1.75       # float，浮点型
name = "小明"        # str，字符串型（引号界定）
is_student = True   # bool，布尔型
\`\`\`

### 1.3 练习回顾
- 声明标识符 \`my_name\` 并绑定字符串值：
  \`\`\`python
  my_name = "munan"
  \`\`\`
- 声明标识符 \`study_hours\` 并绑定整型值：
  \`\`\`python
  study_hours = 5
  \`\`\`

---

## 二、列表与字典

### 2.1 列表
列表就是一串按顺序排好的数据，里面的内容可以随时改。

- 元素通过索引访问。
- 从 0 开始数：首个元素编号为 \`0\`，第二个为 \`1\`，依此类推。这是最常见的越界/错位错误来源。

\`\`\`python
fruits = ["苹果", "香蕉", "橘子"]
print(fruits[0])   # 输出：苹果  （索引 0 对应第一个元素）
print(fruits[1])   # 输出：香蕉
\`\`\`

### 2.2 字典
字典用键对应值的方式来存数据。

\`\`\`python
person = {"name": "小明", "age": 18, "city": "北京"}
print(person["name"])   # 输出：小明
print(person["age"])    # 输出：18
\`\`\`

### 2.3 二者区分
- 列表：以索引访问元素。
- 字典：以键访问元素。
- 实际写代码时，配置文件多为 \`dict\`，批量数据多为 \`list\`。

### 2.4 练习回顾
\`\`\`python
eat = ["苹果", "栗子", "香蕉"]
print(eat[0])                       # 输出：苹果

dicc = {"书名": "长城", "价格": "10", "有没有货": "无"}
print(dicc["价格"])                 # 输出：10
\`\`\`

---

## 三、字符串处理

### 3.1 f-string
以前缀 \`f\` 标记，花括号 \`{}\` 内可嵌入表达式，运行时被替换为对应值。

\`\`\`python
name = "小明"
age = 18
msg = f"我叫{name}，今年{age}岁"
print(msg)   # 输出：我叫小明，今年18岁
\`\`\`

### 3.2 str.replace(old, new)
返回将 \`old\` 子串替换为 \`new\` 子串后的新字符串。

\`\`\`python
s = "我喜欢苹果"
s2 = s.replace("苹果", "香蕉")
print(s2)   # 输出：我喜欢香蕉
\`\`\`

### 3.3 str.split(sep)
以分隔符 \`sep\` 拆分字符串，返回由子串组成的列表。

\`\`\`python
s = "苹果,香蕉,橘子"
parts = s.split(",")
print(parts)   # 输出：['苹果', '香蕉', '橘子']
\`\`\`

### 3.4 练习回顾
- 题：\`city = "北京"; hello = f"你好，{city}!"; print(hello)\` → 输出 \`你好，北京！\`
- 题：\`text = "今天天气真好"; new = text.replace("真好", "一般"); print(new)\` → 输出 \`今天天气一般\`

---

## 四、函数定义

### 4.1 定义与调用
- \`def\` 语句用于定义函数，封装可复用的代码块。
- 函数名后括号内声明形参。
- \`return\` 语句将计算结果作为返回值传出；无 \`return\` 时函数返回 \`None\`。

\`\`\`python
def greet(name):          # name 为形参
    sentence = f"你好，{name}！"
    return sentence       # 返回计算结果

result = greet("小明")    # "小明" 为实参
print(result)            # 输出：你好，小明！
\`\`\`

### 4.2 形参 vs 实参
- 形参：函数定义时括号中声明的占位标识符，此时尚无具体值。
- 实参：函数调用时实际传入的具体值。
- 调用发生时，实参按位置或按关键字绑定到对应的形参。

\`\`\`python
def add_one(n):      # n 为形参
    return n + 1

answer = add_one(5)  # 5 为实参，绑定到形参 n
print(answer)        # 输出：6
\`\`\`

---

## 五、异常处理

### 5.1 try / except 结构
- \`try\` 子句：包裹可能引发异常的代码。
- \`except\` 子句：捕获指定异常并执行兜底逻辑，防止程序因未处理异常而终止。
- 若不捕获异常，错误会一路向上传，最终导致程序中断并打印一大串报错信息。

\`\`\`python
try:
    number = int("abc")   # 触发 ValueError：'abc' 无法转为 int
except:
    print("转数字失败了，但我接住了，程序继续跑")
\`\`\`

### 5.2 经典场景：除零错误
\`\`\`python
try:
    print(10 / 0)         # 触发 ZeroDivisionError
except:
    print("不能除以0哦")   # 输出：不能除以0哦
\`\`\`
> 读取可能不存在的配置文件、调用可能失败的服务、执行可能除零的计算等位置，若缺少 \`try/except\` 即为典型的「未捕获异常」类 bug。

---

## 六、类与对象

### 6.1 类与实例
类定义一种类型，描述这类对象共有的属性和方法。通过 \`实例 = 类名(...)\` 创建实例。

\`\`\`python
class Cat:
    def __init__(self, name):
        self.name = name
    def meow(self):
        return self.name + "喵"

mimi = Cat("咪咪")
print(mimi.meow())   # 输出：咪咪喵
\`\`\`

### 6.2 构造方法
\`__init__\` 是构造方法，创建实例时由解释器自动调用，用来给新对象设置初始属性。

- **构造方法的首个形参固定为 \`self\`**，代表正在被创建的这个实例。

### 6.3 self 是什么
\`self\` 是实例方法的第一个形参，调用时由解释器自动传入，代表调用该方法的那个实例。

- **self 随调用者变化**：同一份方法，谁调用，self 就是谁。
- 调用 \`mimi.meow()\` 在内部等价于 \`Cat.meow(mimi)\`，即把 \`mimi\` 作为实参自动传给形参 \`self\`。

\`\`\`python
class Cat:
    def __init__(self, name):
        self.name = name
    def meow(self):
        return self.name + "喵"

mimi = Cat("咪咪")
huahua = Cat("花花")
print(mimi.meow())     # 输出：咪咪喵（self 是 mimi）
print(huahua.meow())   # 输出：花花喵（self 是 huahua）
\`\`\`

### 6.4 self.name = name 逐个看
以 \`self.name = name\` 为例，从左到右四部分：

- \`self\`：这一刻正在被创建的那个实例。
- \`.name\`：这个实例身上的一个属性，专门用来存名字。
- \`=\`：把右边的值装进左边的属性。
- \`name\`（右边）：方法收到的参数值，比如 \`"咪咪"\`。

整行含义：把传进来的名字，存进这个对象自己的名字属性里。

- **左右两个 name 不是一回事**：右边是参数，左边是属性。

走一遍：\`mimi = Cat("咪咪")\` 时，解释器造出 \`mimi\`，把 \`"咪咪"\` 绑给参数 \`name\`，\`self\` 等于 \`mimi\`，执行 \`self.name = name\` 之后，\`mimi\` 就有了 \`name\` 属性，值为 \`"咪咪"\`。

### 6.5 完整示例
学生（存两个属性）：
\`\`\`python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def intro(self):
        return "我叫" + self.name + "，今年" + str(self.age) + "岁"

xiaoming = Student("小明", 18)
print(xiaoming.intro())   # 输出：我叫小明，今年18岁
\`\`\`

矩形（同一方法，不同实例结果不同）：
\`\`\`python
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
    def area(self):
        return self.width * self.height

a = Rectangle(3, 4)
b = Rectangle(5, 6)
print(a.area())   # 输出：12（此时 self 是 a）
print(b.area())   # 输出：30（此时 self 是 b）
\`\`\`

### 6.6 练习与易错点
题：写一个 \`Book\` 类，创建时存书名和价格，有方法 \`描述()\` 返回 \`《书名》售价价格元\`，创建《Python入门》价格 59 并打印。
\`\`\`python
class Book:
    def __init__(self, shuming, jiage):
        self.shuming = shuming
        self.jiage = jiage
    def 描述(self):
        return self.shuming + "售价" + str(self.jiage) + "元"   # 数字拼文字要先转成文字

book1 = Book("《Python入门》", 59)
print(book1.描述())   # 输出：《Python入门》售价59元
\`\`\`

- **易错点**：数字（如 \`59\`）不能直接和文字相加，否则报错。凡是把数字拼进句子，先套 \`str()\` 转成文字。`;


export const PUREEDGE_VLM_MD = `> 项目代号：**PureEdgeVLM** · 目标设备：骁龙865手机，8GB 内存、纯 CPU · 技术栈：Kotlin + C++17 + NCNN + llama.cpp
>
> 一句话概括：在旧手机上纯本地跑通"拍照 → 视觉理解 → 大模型回答"的多模态系统，零网络依赖。



---

## 0. 为什么要做这个

端侧 AI 我自己很看好，模型跑在设备本地、不依赖云端，这件事本身就很有意思，也很有前景。我一直想亲手把一个多模态系统真正部署到手机上跑通，而不是只停留在调用接口、运行现成演示的层面。

目标很明确：在一台旧的骁龙 865 手机上，不联网、纯靠手机自己的 CPU，跑一个"看到照片 → 理解内容 → 用大模型回答"的多模态 App。

定了几条硬约束，后面所有技术选择都围着它们转：

- **纯 CPU，不用 DSP / GPU**：旧机不怕损耗，开发简单，跨平台兼容。
- **零网络依赖**：模型全打包进安装包，断网也能跑。
- **不做算法**：用现成预训练权重。
- **框架统一**：视觉模型全用 NCNN，大模型用 llama.cpp，只用两个框架，避免编译灾难。

阶段一的目标很明确：把环境装好、把 4 个模型准备好、在电脑上验证它们都能用。

---

## 1. 技术选型

| 模型                 | 干什么                   | 权重来源            | 量化           | 框架        |
| ------------------ | --------------------- | --------------- | ------------ | --------- |
| YOLOv11n           | 物体检测，认人、车、瓶子等 80 类    | Ultralytics 官方  | FP16         | NCNN      |
| ResNet50 Places365 | 场景识别，认机场、卧室、花园等 365 类 | MIT 官方          | FP16         | NCNN      |
| PP-OCRv5           | 中英文文字识别               | 百度开源 NCNN 版     | FP16         | NCNN      |
| MiniCPM5-1B        | 本地大模型，生成自然语言回答        | OpenBMB 官方 GGUF | INT4（Q4_K_M） | llama.cpp |

两个关键决定：

- **三个视觉模型统一用 NCNN**：腾讯开源的推理框架，对 ARM CPU 优化好、库体积小，是端侧视觉推理的主流选择。
- **大模型用 llama.cpp**：GGUF 格式生态成熟，跨平台，MiniCPM5 官方就提供 GGUF 版。

量化上，视觉模型走 FP16，只有大模型压到 INT4，0.5GB 就能装下 1.08B 参数的模型，是端侧跑得动的关键。

---

## 2. 环境搭建

先搭建开发环境，准备好以下工具：

- **Android Studio**：写安卓 App 的主软件，装 Standard 版，主题随便。
- **NDK r26c + CMake 3.22.1**：让 App 能用 C++ 跑模型推理，版本固定别用太新的。
- **Python 3.10**：处理模型用。本机有两个 Python，干活这个叫 \`py -3.10\`，环境里装好了 torch、ultralytics、onnx 等库。
- **adb**：电脑和手机通信的工具，用于装 App、看日志。
- **手机开开发者选项 + USB 调试**：连上电脑能被识别。

环境搭好后，用 Android Studio 建一个 Native C++ 模板项目，点 Run 装到手机上，看到 "Hello from C++" 就说明整条"电脑编译 → 手机运行"的链路通了。

---

## 3. 模型准备

四个模型分开准备，每个做完先验证再做下一个。

### 3.1 YOLOv11n（物体检测）

流程最简单的一个，一行命令导出 NCNN 格式：

\`\`\`bash
yolo export model=yolo11n.pt format=ncnn imgsz=640 simplify=True
\`\`\`

跑完得到 \`model.ncnn.param\`（结构）和 \`model.ncnn.bin\`（权重），约 3.2MB。

### 3.2 ResNet50 Places365（场景识别）

下载 MIT 官方的 Places365 权重，用 \`predict_places365.py\` 在电脑上验证能输出 top5 场景就算过。NCNN 格式转换留给阶段二，因为要先编译好 NCNN 再转。

> 这个模型来源中途换过，详见第 6 节踩坑。最终定的是 MIT 官方 ResNet50，不是 MobileNet。

### 3.3 PP-OCRv5（文字识别）

百度新一代 OCR，直接拿现成的安卓 NCNN 移植版：

\`\`\`bash
git clone https://github.com/equationl/ncnn-android-ppocrv5
\`\`\`

仓库里 \`app/src/main/assets/\` 自带 det（检测）和 rec（识别）两套 NCNN 模型，字符表内嵌在代码里，不用单独下词典。

### 3.4 MiniCPM5-1B（本地大模型）

从 ModelScope 下 GGUF 格式，务必是 Q4_K_M 这个 4 比特版本，约 500MB：

\`\`\`bash
modelscope download --model OpenBMB/MiniCPM5-1B-GGUF minicpm5-1b-Q4_K_M.gguf --local_dir ./models/minicpm5
\`\`\`

别下 Q2_K，会乱码；也别下 Q8，体积过大手机无法运行。

---

## 4. 模型放进项目

把四个模型拷进安卓项目的 \`app/src/main/assets/models/\`，分四个子目录：

\`\`\`
assets/models/
├─ yolo/    # YOLO 的 param + bin
├─ scene/   # ResNet50 的 NCNN，阶段二转换后放
├─ ocr/     # PP-OCRv5 的 det + rec
└─ llm/     # MiniCPM5 的 gguf
\`\`\`

安卓会从这里读模型。总大小控制在 700MB 以内。

---

## 5. 电脑端验证

四个模型在手机上跑是后面的事，阶段一先在电脑确认它们没坏、能正常推理。写好验证脚本，核对输出。

| 验证       | 脚本                     | 怎么算过                             |
| -------- | ---------------------- | -------------------------------- |
| YOLO     | \`test_yolo.py\`         | 能检出 bus、person 等物体，打印"验证通过"      |
| ResNet50 | \`predict_places365.py\` | 输出 top5 场景名，不是报错        |
| PP-OCRv5 | 模型文件到位即过               | NCNN 版电脑跑要先编译 NCNN 不划算，功能验证留到手机端 |
| MiniCPM5 | \`test_llm.py\`          | 输出一句通顺中文，打印"验证通过"                |

最后一步最关键：MiniCPM5 用 llama-cpp-python 加载，能生成通顺中文，说明模型文件没坏、格式能被 llama.cpp 读、中文输出正常。

---

## 6. 踩过的坑

以下是阶段一实际遇到的问题，记录下来避免重复踩坑。

1. **同盘拖拽变移动**：Windows 同一块硬盘内拖文件默认是"移动"不是"复制"，源文件被直接移走，assets 涨到 677MB 但源目录空了。往 assets 放模型一律用 Ctrl+C / Ctrl+V，或拖拽时按住 Ctrl 出现"+"才是复制。
2. **两个 Python 打架**：机器上有 \`py -3.10\` 和系统另一个 3.13。用裸 \`python\` 跑脚本报缺库，统一前缀 \`py -3.10\` 就正常。
3. **MiniCPM5 文件名大小写 404**：教程写 \`minicpm5-1b-Q4_K_M.gguf\`，仓库真实文件名是 \`MiniCPM5-1B-Q4_K_M.gguf\`，下载直接 404。下之前核对大小写。
4. **ResNet50 权重源迭代**：原计划 clone 的仓库已下架，临时改方案 B 用 ImageNet 权重做场景识别，复查发现 ImageNet 训的是"物体"不是"场景"，和 YOLO 功能重叠；又试 MIT MobileNetV2 Places365，最终改用 MIT 官方 **ResNet50** Places365。认准官方源别将就。
5. **误装 paddlepaddle + 错误镜像**：想用 paddle 验证 OCR，镜像路径早废了装不上；更关键，PP-OCRv5 是 NCNN 版，电脑跑根本不需要百度飞桨框架。已卸载误装的包。教训：先想清楚技术路线再装依赖。
6. **Git 删文件还在历史里**：文档从仓库删除并提交，旧提交仍能翻到全文。要彻底消失得重写历史。私人文档从第一天就进 \`.gitignore\`。
7. **cmd 命令行直接敲 Python 代码**：在 \`C:\\>\` 下输入 \`import torch\` 全报"不是内部或外部命令"。命令行窗口只认 Windows 命令，Python 代码要写进 \`.py\` 文件用 \`py -3.10 xxx.py\` 跑，或先 \`py -3.10\` 进交互模式。
8. **包名大小写改名失败**：默认包名 \`com.Munan...\` 想改成小写，Windows 不区分大小写导致改名不生效。用两步改名法：先改成 \`munantmp\` 再改成 \`munan\`。
9. **INSTALL_FAILED_TEST_ONLY**：点 Run 装 App 报这个，因为调试包带了测试标记，真我 / OPPO / vivo 会拒装。在 \`gradle.properties\` 加 \`android.injected.testOnly=false\` 重装即可。
10. **项目路径含空格警告**：保存路径有空格时 NDK 工具会出问题，路径改成不含空格。

---

## 7. 一个重要的架构更正

阶段一收尾时核实 MiniCPM5 的架构，发现原方案文档写错了，需要特别记录，架构名是后续所有文档的基准，错了会一路传下去。

原文档多处写"MiniCPM5 使用 SALA 混合注意力架构，需 llama.cpp b3500+ 支持"。查 HuggingFace 官方模型卡，事实是：

- **MiniCPM5-1B 是标准 LlamaForCausalLM 架构**，无需定制内核，llama.cpp 原生支持。
- SALA 是另一个独立模型（MiniCPM-SALA），跟 MiniCPM5-1B 不是一回事。
- 因此没有"b3500+ 版本门槛"这回事，实测 llama-cpp-python 0.3.34 直接就能加载。

已把正确结论写进项目根的 \`notes.md\`，并把两份方案文档里的 SALA / b3500+ 全部改成标准 LlamaForCausalLM。

> 教训：写进文档的架构名，一定要去官方来源核实再落笔，别照抄方案草稿，否则被追问细节就会出错。

---

## 8. 写在最后

到这，阶段一全部完成：环境通了、四个模型齐了、电脑验证全过。接下来是阶段二，编译 NCNN 静态库、写检测器、让 YOLO 先在 865 手机上真正跑起来。

这一阶段最花时间的不是技术，而是把环境弄对、把模型来源理顺、把一路踩的坑填平。做完回头看，核心逻辑不复杂，难的是"每一步都别想当然"。

项目地址：https://github.com/Munan059/PureEdgeVLM

*本文写于 2026-07-19，记录 PureEdgeVLM 端侧多模态系统阶段一的搭建过程。*
`;
export const PUREEDGE_VLM_STAGE2_MD = `# PureEdgeVLM 阶段二搭建记录

> 项目代号：PureEdgeVLM · 目标设备：骁龙 865 手机，8GB 内存、纯 CPU · 技术栈：Kotlin + C++17 + NCNN
>
> 一句话概括：把手机上跑视觉模型的地基打牢，编译 NCNN 推理库、把 ResNet50 也转成 NCNN、写出 YOLO 和场景识别两个检测器，让你在旧手机上选一张图就能看到检测框和场景名。
>
> 本文所有路径都相对项目根 \`C:\\Users\\Blue\\Desktop\\work\\localai\`。

---

## 0. 阶段二

阶段一结束时，四个模型文件都下好了、在电脑上分别验证能跑。但能在电脑上跑和能在手机上跑之间，还隔着一整条工程链：

- 手机是 ARM CPU，NCNN 推理库得专门给它编译一份，不能直接用电脑上的；
- ResNet50 在阶段一只下了 PyTorch 权重，还没变成手机能用的 NCNN 格式，scene 目录是空的；
- 模型只是躺在那，没人把它接进 App：图片怎么变成矩阵、检测框怎么画出来、界面怎么调 C++，全得从零写。

阶段二就是干这三件事：编译 NCNN、转好 ResNet50、写出 YOLO 和场景识别这条可运行的链路，让前两个视觉模型在真机上第一次跑起来。OCR 和大模型留到阶段三、四，本阶段先不管。

---

## 1. 这个阶段做了什么

阶段二只碰两个视觉模型，其余严格不动：

- 只做 YOLO（物体检测）+ ResNet50 场景识别
- 不做 PP-OCRv5（阶段三）
- 不做 MiniCPM5 大模型（阶段三、四）
- 不做三个模型串联（阶段四）

最终产出的代码骨架如下，这套图片转矩阵、检测器、识别器、JNI 桥后面阶段三、四接着复用：

| 文件 | 干什么 |
| --- | --- |
| \`app/src/main/cpp/image_util.h\` / \`image_util.cpp\` | 把安卓 Bitmap 锁出像素指针，零拷贝、速度快 |
| \`app/src/main/cpp/yolo_detector.h\` / \`yolo_detector.cpp\` | YOLO 检测器：加载模型、letterbox、解码、NMS、坐标反算 |
| \`app/src/main/cpp/scene_classifier.h\` / \`scene_classifier.cpp\` | 场景识别器：加载模型、归一化、softmax、取 Top5 |
| \`app/src/main/cpp/native_bridge.cpp\` | C++ 与 Kotlin 的桥：加载模型 + 两个对外接口 |
| \`app/src/main/cpp/CMakeLists.txt\` | 把 NCNN 静态库 + OpenMP 链进 App |
| \`app/src/main/java/com/munan/pureedgevlm/NativeBridge.kt\` | Kotlin 侧的桥：声明 external 函数、类别名、读场景标签 |
| \`app/src/main/java/com/munan/pureedgevlm/YoloBox.kt\` / \`SceneResult.kt\` | 检测结果的数据类 |
| \`app/src/main/java/com/munan/pureedgevlm/MainActivity.kt\` | 临时界面：点按钮选图，显示检测框 + 场景名 |

这套临时界面只为验证阶段二。后面阶段五会做正式的相机页和聊天页，到时这套会被替换或整合。

---

## 2. 编译 NCNN 安卓静态库

**做什么**：把 NCNN 源码编译成一份专门给骁龙 865（arm64）用的零件包 \`libncnn.a\`，C++ 代码要链接它才能跑模型。

**怎么做**（阶段一已装好 NDK r26c）：

\`\`\`bash
cd /c/Users/Blue/Desktop/work/localai
git clone https://github.com/Tencent/ncnn.git
cd ncnn
mkdir build-android-arm64-v8a && cd build-android-arm64-v8a
cmake -G Ninja \\
  -DCMAKE_TOOLCHAIN_FILE="你的NDK路径/build/cmake/android.toolchain.cmake" \\
  -DANDROID_ABI=arm64-v8a \\
  -DANDROID_PLATFORM=android-28 \\
  -DNCNN_VULKAN=OFF \\
  -DNCNN_BUILD_EXAMPLES=OFF \\
  -DNCNN_BUILD_TESTS=OFF \\
  -DNCNN_BUILD_TOOLS=OFF \\
  ..
cmake --build . -j$(nproc)
cmake --install . --prefix /c/Users/Blue/Desktop/work/localai/ncnn/ncnn-android-install
\`\`\`

关键两处：\`NCNN_VULKAN=OFF\`（纯 CPU，不依赖显卡）；\`NCNN_BUILD_TOOLS=OFF\`（手机端不需要转换工具，编得快）。

**怎么算成功**：最后出现 \`[100%] Built target ncnn\`，且 \`ncnn/ncnn-android-install/lib/libncnn.a\` 存在。这一步全量编译 20~40 分钟，期间不要中断。

---

## 3. 把 ResNet50 转成 NCNN

**做什么**：阶段一留下的空 \`scene\` 目录，这一步填上 ResNet50 的 NCNN 文件。转换需要两个工具 \`onnx2ncnn\`（ONNX 转 NCNN）和 \`ncnnoptimize\`（压缩），它们是给电脑（主机）跑的一次性工具，得在电脑或 WSL 里再编一份 NCNN 主机工具版（\`NCNN_BUILD_TOOLS=ON\`，不指定安卓）。

**流程**（两端配合：Windows 出 ONNX，WSL 转 NCNN）：

1. WSL 里装依赖并编译主机工具版 NCNN，装完工具在 \`~/ncnn-host-install/bin/\`。
2. Windows 用 \`py -3.10\` 跑导出脚本 \`export_resnet50_places365_to_onnx.py\`：建一个 365 类的 ResNet50 空壳，加载 MIT 官方 \`.pth.tar\` 权重（注意 \`state_dict\` 里键名带 \`module.\` 前缀要去掉），导出 ONNX。
3. \`py -3.10 -m onnxsim\` 简化，再切回 WSL 用 \`onnx2ncnn\` 转 NCNN。
4. 把成品拷进 \`app/src/main/assets/models/scene/\`：\`resnet50_fp32.param\` + \`resnet50_fp32.bin\` + \`categories_places365.txt\`（365 类标签，场景识别器靠它把编号翻成中文名）。

**一个重要的真实修正**：方案里原本计划压成 fp16（即 \`resnet50_places365_opt\`），但实际最后留在 assets 里的是 fp32 版（\`resnet50_fp32.param/.bin\`）。原因是中途一度怀疑 fp16 把模型压成 NaN 导致场景识别崩，后来用 md5 校验发现 \`resnet50_fp32.bin\`、\`resnet50_places365.bin\`、\`resnet50_places365_opt.bin\` 三份字节完全一样，模型从头到尾是同一份完好的 fp32，所谓 fp16 转坏纯属误判。fp32 在手机上也能跑、精度更稳，于是保留了 fp32，少压一步。

---

## 4. 把 NCNN 接进工程 + 写图片工具

**接 NCNN**：把第 2 步编好的 \`libncnn.a\` 和头文件放进项目：

\`\`\`
app/src/main/cpp/third_party/ncnn/lib/libncnn.a
app/src/main/cpp/third_party/ncnn/include/ncnn/*.h
\`\`\`

\`CMakeLists.txt\` 让 App 参与编译并链接它。阶段二只需链接 NCNN 和 OpenMP，OpenMP 是 NDK 自带的运行库，NCNN 靠它开多线程，不链接会报 \`libomp.so\` 找不到。

\`\`\`cmake
add_library(\${CMAKE_PROJECT_NAME} SHARED
        native_bridge.cpp
        image_util.cpp
        yolo_detector.cpp
        scene_classifier.cpp)

target_include_directories(\${CMAKE_PROJECT_NAME} PRIVATE \${NCNN_DIR}/include)
target_link_libraries(\${CMAKE_PROJECT_NAME}
        \${NCNN_DIR}/lib/libncnn.a
        omp android log)
\`\`\`

说明：这份 CMakeLists 后来阶段三、四又陆续加进了 OpenCV 和 llama.cpp，但阶段二的核心就是上面这几行。

**图片工具** \`image_util.cpp\`：手机图片是 Bitmap，NCNN 要 \`ncnn::Mat\`。这里只做一件最基础的事，\`lockBitmap\` 用 \`AndroidBitmap_lockPixels\` 把像素锁出来（零拷贝，速度快），\`unlockBitmap\` 用完立刻解锁。YOLO 和场景识别都先调它拿像素，避免每个检测器重复写一遍锁图逻辑。

---

## 5. 写 YOLO 检测器 + 场景识别器

检测器代码已写入项目，两个类的接口很干净：

\`\`\`cpp
// yolo_detector.h
std::vector<YoloBox> detect(JNIEnv*, jobject bitmap, float conf, float nms,
                            float* max_score_out = nullptr, int* max_label_out = nullptr);

// scene_classifier.h
std::vector<SceneTop> classify(JNIEnv*, jobject bitmap, int topk = 5);
\`\`\`

**YOLO 检测器要点**：

- 加载时 \`net.opt.use_vulkan_compute = false\`（纯 CPU）、\`num_threads = 4\`。
- 图片处理：按最长边缩到 640，短边补灰边（letterbox 填充，灰边值 114），得到 640×640；RGBA 转 RGB；归一化到 0~1（mean 全 0、norm 全 1/255）。
- 解码：YOLO 输出通常是 \`[8400, 84]\`，84 是 4 个框坐标加 80 类分数。不同 NCNN 导出对维度排布不同，代码里自动判断 8400 和 84 各在哪个维度，兼容所有布局，不用手改。
- 先按 0.45 的置信度阈值过滤，再对每个类别做 NMS（重叠太多的框只留分数最高的）。
- 坐标反算：检测是在 640 缩放图上做的，最后除以缩放比、夹回原图范围，把框映射回原图像素坐标，Kotlin 直接画。

**场景识别器要点**：

- 直接缩到 224×224（场景识别不补灰边）。
- 归一化是这里最容易写错的地方（详见第 8 节坑四），正确值是 \`mean=[123.675, 116.28, 103.53]\`、\`norm=[0.017129, 0.017507, 0.017425]\`。
- 输出 365 个分数，先 softmax 成 0~1 概率，取前 5 个把编号交给 Kotlin，Kotlin 用 \`categories_places365.txt\` 翻成场景名。

---

## 6. 写 JNI 桥 + Kotlin 临时界面

**C++ 桥** \`native_bridge.cpp\` 里有三个对外函数（函数名里的 \`com_munan_pureedgevlm\` 必须和包名一致）：

\`\`\`cpp
Java_com_munan_pureedgevlm_NativeBridge_nativeInit(JNIEnv*, jclass, jobject assetManager);
Java_com_munan_pureedgevlm_NativeBridge_yoloDetect(JNIEnv*, jclass, jobject bitmap, jfloat conf, jfloat nms);
Java_com_munan_pureedgevlm_NativeBridge_sceneRecognize(JNIEnv*, jclass, jobject bitmap);
\`\`\`

- \`nativeInit\`：拿到 AssetManager，从 \`assets/models/yolo/model.ncnn.*\` 和 \`assets/models/scene/resnet50_fp32.*\` 把模型读进内存、加载好，并记一条初始化日志（\`g_init_debug\`）。
- \`yoloDetect\` 内部调 \`YoloDetector::detect\`，把结果拼成 \`YoloBox\` 对象数组回传，还会记一条最近一次检测的日志。
- \`sceneRecognize\` 内部调 \`SceneClassifier::classify\`，拼成 \`SceneResult\` 对象数组回传。
- 还有一个 \`getDebug()\` 把上面两段日志吐给 Kotlin，界面上能直接看到，方便排查问题。

**Kotlin 侧**：

- \`NativeBridge.kt\` 是个单例 \`object\`，\`init { System.loadLibrary("pureedgevlm") }\` 加载库；声明 \`external fun yoloDetect / sceneRecognize / nativeInit / getDebug\`；内置 COCO 80 类名称数组（\`cocoLabels\`）；\`init(context)\` 里调 \`nativeInit\` 并把 \`categories_places365.txt\` 读成 \`sceneLabels\` 列表。
- \`YoloBox.kt\` / \`SceneResult.kt\` 是两个独立的数据类，Kotlin 和 C++ 两边字段一一对应。
- \`MainActivity.kt\` 是临时界面：一个选择图片按钮，后台线程里跑 \`yoloDetect\`、把框画到图上、\`sceneRecognize\`，在文字区列出场景 Top5 名字。后台线程是为了不让界面卡住。

---

## 7. 真机验收

装到手机，点按钮选一张图，应该看到：

- 图上出现 YOLO 检测框 + 类别标签（如 bus、person）；
- 文字区出现场景 Top5 名字；
- 整个过程 1 秒内完成，界面不卡。

实测结果：选阶段一用的 \`bus.jpg\`，YOLO 正常框出 bus、person 等；场景识别在修正归一化后 Top5 分散且合理，与电脑端 onnxruntime 标准答案一致。延迟方面 YOLO 单张约百毫秒，ResNet50 更快。

**一个必须讲清的情况**：换一张猫图，YOLO 给的是 \`cat=0.239 / dog=0.243\`，猫分和狗分几乎平手，模型靠微弱优势把票投给了 dog，于是猫被标成 dog。代码经核对没有问题（猫=15、狗=16 映射正确，红框准确框在猫身上，预处理和输出形状都对），问题出在 yolo11n（nano）这个最小模型本身细分类能力有限。根治办法是换更大的 yolo11s，输出结构相同，只需替换权重重新编译，解码代码不用改，那属于项目做完后的锦上添花，不阻塞阶段二验收。

---

## 8. 踩过的坑

阶段二真机调试踩到的坑，按发生顺序记录，供后续参考。

1. **选图后永远显示检测到 0 个物体，但不崩溃（最隐蔽的坑）**。编译通过、能选图，但无论选什么图都显示 0 个物体，不报错也不闪退。根因是加载成功和失败的判断写反了。NCNN 里 \`load_param_mem\`（读结构）返回整数、0 表示成功；而 \`load_model\`（读权重）返回的是消耗的字节数，0 表示失败、非 0 才是成功。代码曾把 \`load_model(...) == 0\` 当成功，正好反了，模型实际返回了约一千万字节（权重真读到了），却被当成失败，检测函数一进来发现模型没加载直接返回空数组。正确写法：成功等于 \`load_param_mem(...) == 0\`，且成功等于 \`load_model(...) != 0\`。教训：写加载判断前先查所用库的头文件确认返回值语义，不要统一按 0 表示成功处理。

2. **编 NCNN 主机工具后，安装目录里独缺 \`onnx2ncnn\`**。按 \`cmake -DNCNN_BUILD_TOOLS=ON\` 编译并安装后，\`caffe2ncnn\`、\`ncnnoptimize\` 等都在，就是没有转现代模型必需的 \`onnx2ncnn\`，且无任何报错。根因是拉的 NCNN 每日构建版把 \`onnx2ncnn\` 从默认构建列表里移除了。修法：在 clone 下来的 \`tools/CMakeLists.txt\` 末尾手动加一行 \`add_subdirectory(onnx)\`，重配重编重装即可。教训：编完主机工具一定先 \`ls\` 安装目录确认 \`onnx2ncnn\` 在不在。

3. **WSL 里粘贴命令变乱码，以及 cmd 跑还是 WSL 跑的切换摩擦**。阶段二被拆成两端，Windows（导出 ONNX、onnxsim，在 cmd 或 Git Bash，用 \`py -3.10\`）和 WSL（转 NCNN、压 fp16，在 Ubuntu 终端，用 \`~/ncnn-host-install/bin/...\`）。WSL 里别用 \`Ctrl+V\` 粘贴（会变乱码），要用鼠标右键或 \`Shift+Insert\`；Windows 的 C 盘在 WSL 里是 \`/mnt/c/\`；WSL 里敲 \`py -3.10\` 会报命令找不到（那是 Windows 的 Python）。动手前先想清楚当前这条命令属于哪一端。

4. **场景识别永远输出同一个类（真因，曾误判成 fp16）**。App 装上后场景模型能加载、输出维度 365 也对，但无论选什么图都输出同一个编号（如 idx=306 即天空）且概率 =1.0000，停车场也显示天空。根因是 \`scene_classifier.cpp\` 里 \`substract_mean_normalize(mean, norm)\` 的参数写反了。查 NCNN 源码确认：这个函数做的是 \`out = (input − mean) × norm\`（乘法），而 ImageNet 标准是 \`(pixel/255 − mean) / std\`。旧代码填的是 \`mean=[0.485, 0.456, 0.406]\`、\`norm=[0.229, 0.224, 0.225]\`，且输入是 0~255，没有先除 255，于是实际在算 \`(pixel − 0.485) × 0.229\`，数值范围严重越界，网络输出退化成某一维等于 1.0。修法：令 \`mean = mean×255\`、\`norm = 1/(255×std)\`，即 \`mean=[123.675, 116.28, 103.53]\`、\`norm=[0.017129, 0.017507, 0.017425]\`。改后 Top5 分散，与电脑端标准答案一致。教训：第一，文件重命名或复制不等于内容改了，动模型前先用 md5 校验；第二，不要迷信 fp16 转成 NaN 的第一直觉，先查源码确认算子语义；第三，调试时打印输入图的 mean/std，正确应约等于 0/1，是判断预处理对错的黄金指标。

---

## 9. 写在最后

到这，阶段二全部完成：NCNN 编译进 App 了、ResNet50 转成 NCNN 填进了 scene 目录、YOLO 和场景识别两个检测器在骁龙 865 上真机跑通、选一张图就能看到检测框和场景名。

这一阶段最花时间的，一半是编译等待（NCNN 全量编 20~40 分钟），一半是加载判断和归一化这两处写成反了的坑，它们都不崩溃、表面看不出毛病，容易被误判成模型没认出物体。做完回头看，核心逻辑并不复杂，难点在于每一处加载和成功判断都要查头文件确认，不能凭直觉。

接下来是阶段三：把 PP-OCRv5 文字识别接进来，并把 llama.cpp 的大模型运行库编进工程，让手机上能跑通 OCR 和 MiniCPM5 生成文字。

项目地址：https://github.com/Munan059/PureEdgeVLM

*本文写于 2026-07-21，记录 PureEdgeVLM 端侧多模态系统阶段二的搭建过程。*
`;

export const PUREEDGE_VLM_STAGE3_MD = `# PureEdgeVLM 阶段三搭建记录

> 项目代号：PureEdgeVLM · 目标设备：骁龙 865 手机，8GB 内存、纯 CPU · 技术栈：Kotlin + C++17 + NCNN + OpenCV-mobile + llama.cpp
>
> 一句话概括：在阶段二已跑通 YOLO 检测与 ResNet50 场景识别的基础上，接进百度 PP-OCRv5 文字识别，让手机选一张带字的图就能把图里的字读出来。
>
> 本文路径均相对项目根 \`C:\\Users\\Blue\\Desktop\\work\\localai\`。

---

## 0. 阶段三

阶段二结束时，手机已经能选一张图看到 YOLO 检测框和场景 Top5。但看懂一张图还差最后一块，就是图里写了什么字。阶段三就是补上这一块，把 PP-OCRv5 文字识别接进 App，让手机选一张带字的图就能把字读出来。

阶段三只加 OCR 这一块：模型用现成的 NCNN 版，代码从第三方库移植，主要工作是下载一个精简版 OpenCV 做检测后处理，再把这套能力接到已有的图片管道和界面上。MiniCPM5 大模型留到阶段四。

---

## 1. 这个阶段做了什么

阶段三只加 OCR，复用阶段二写好的图片转矩阵、JNI 桥、Kotlin 调度，不碰 YOLO 和场景识别。新增与改动的文件如下：

| 文件 | 内容 |
| --- | --- |
| \`app/src/main/cpp/ocr/ppocrv5.h\` | OCR 引擎头文件，声明检测、识别、加载等接口 |
| \`app/src/main/cpp/ocr/ppocrv5.cpp\` | OCR 引擎主体，检测与识别逻辑，移植自第三方库，删掉了原版在图上画框的 draw |
| \`app/src/main/cpp/ocr/ppocrv5_dict.h\` | 约 18400 字的字表，识别出的编号查这个表变文字 |
| \`app/src/main/cpp/opencv_omp_shim.cpp\` | 一个空实现函数，修 OpenMP 版本错配，见第 7 节坑五 |
| \`app/src/main/cpp/third_party/opencv-mobile-4.13.0-android/\` | 精简版 OpenCV，只含 core 与 imgproc，供检测后处理 |
| \`app/src/main/assets/models/ocr/\` | 4 个 OCR 模型文件，det 与 rec 各一份 param 和 bin，fp16 版 |
| \`app/src/main/cpp/native_bridge.cpp\` | 加 OCR 引擎全局变量，nativeInit 里加载 OCR，新增 ocrRecognize 接口 |
| \`app/src/main/cpp/CMakeLists.txt\` | 加 OpenCV 查找与链接，把 ocr/ppocrv5.cpp 和 opencv_omp_shim.cpp 加进编译 |
| \`app/src/main/java/com/munan/pureedgevlm/NativeBridge.kt\` | 加 ocrRecognize 桥接口声明 |
| \`app/src/main/java/com/munan/pureedgevlm/MainActivity.kt\` | 选图后统一转 ARGB_8888，调用 ocrRecognize，结果拼到界面下方 |

对应提交 \`b8badbe\`：阶段三 PP-OCRv5 OCR 集成，含 OpenMP deinit 空实现修复，2026-07-20。

---

## 2. 准备 OpenCV-mobile

**做什么**：下载精简版 OpenCV 放到工程。OCR 文字检测算完后，要把歪着的文字框摆正、裁剪出来才能识别，这一步的几何变换靠 OpenCV 完成，具体是找轮廓、旋转矩形、透视变换。用 nihui 编译的 opencv-mobile，比官方 OpenCV 小很多，只含 core 与 imgproc 两个模块。

**怎么做**：

1. 从发布页 \`https://github.com/nihui/opencv-mobile/releases\` 下载。版本要注意：顶部最新的 v36 是 opencv 5.0.0，不要下；下标签为 v35 的（opencv 4.13.0），资产里点 \`opencv-mobile-4.13.0-android.zip\`。
2. 解压，把文件夹重命名成 exactly \`opencv-mobile-4.13.0-android\`，整体移动到 \`app/src/main/cpp/third_party/\`。最终路径应存在：
   \`app/src/main/cpp/third_party/opencv-mobile-4.13.0-android/sdk/native/jni/OpenCVConfig.cmake\`

**为什么单独要 OpenCV**：YOLO 与 ResNet50 的推理全靠 NCNN，但 PP-OCRv5 的检测后处理是几何操作，把斜的字摆正、裁剪出来都要靠它，用 OpenCV 最方便。只装 core 与 imgproc，App 体积增加不多。

---

## 3. 确认 OCR 模型文件就位

**做什么**：确认 4 个 OCR 模型文件已在 assets。它们是从 \`equationl/ncnn-android-ppocrv5\` 拿的现成 NCNN 格式，这个仓库移植自 nihui 原版，阶段一就放进来了，本阶段默认已在：

\`\`\`
app/src/main/assets/models/ocr/
  PP_OCRv5_mobile_det.ncnn.param
  PP_OCRv5_mobile_det.ncnn.bin
  PP_OCRv5_mobile_rec.ncnn.param
  PP_OCRv5_mobile_rec.ncnn.bin
\`\`\`

这 4 个文件是 fp16 版，和代码里 \`use_fp16 = true\` 对应。字表不单独放文件，内嵌在 \`ocr/ppocrv5_dict.h\` 里，约 18400 字。

---

## 4. 写 OCR 引擎

OCR 引擎代码直接放进工程，三件套：

- \`ocr/ppocrv5.h\`：声明检测、识别、加载等接口，对外暴露 \`detect\`、\`recognize\`、\`detect_and_recognize\` 三个方法。
- \`ocr/ppocrv5.cpp\`：检测用 DB 算法找出文字区域，识别用 CRNN 加 CTC 把裁出来的字区域变成文字。移植自第三方库，删掉了原版在图上画框写字的 draw，因为框显示交给 Kotlin 界面统一处理。
- \`ocr/ppocrv5_dict.h\`：约 18400 字的字表，识别模型输出的是字符编号，查这个表才变成真字。

**关键设计点**：

- 模型加载用 OCR 库自带的、从 \`AAssetManager\` 直接读的 load 版本，路径相对 assets 根目录，例如 \`models/ocr/PP_OCRv5_mobile_det.ncnn.param\`。
- \`use_fp16 = true\`：读 fp16 权重，更快、更省内存，精度基本无损。
- 识别结果排序：先按文字框的 y 坐标分行，同一行里按 x 坐标从左到右排，每行文字用换行拼起来返回。横排中文很准，竖排或多栏排版可能顺序乱，属后续优化项，不阻塞本阶段。

---

## 5. 接进工程

**CMakeLists.txt**：加 OpenCV 查找，把 OCR 源文件和 OpenMP 补丁文件加进编译列表，链接时加 \`\${OpenCV_LIBS}\`：

\`\`\`cmake
set(OpenCV_DIR \${CMAKE_CURRENT_SOURCE_DIR}/third_party/opencv-mobile-4.13.0-android/sdk/native/jni)
find_package(OpenCV REQUIRED core imgproc)

add_library(\${CMAKE_PROJECT_NAME} SHARED
        native_bridge.cpp
        ...
        ocr/ppocrv5.cpp
        opencv_omp_shim.cpp)

target_link_libraries(\${CMAKE_PROJECT_NAME}
        ...
        \${OpenCV_LIBS}
        ...)
\`\`\`

说明：这份 CMakeLists 阶段二只链接 NCNN 与 OpenMP，阶段三加了 OpenCV，阶段四又加 llama.cpp。OpenCV 必须 \`find_package(OpenCV REQUIRED core imgproc)\` 且链接 \`\${OpenCV_LIBS}\`，否则报 \`undefined reference to cv::findContours\` 之类。

**C++ 桥** \`native_bridge.cpp\`：

- 顶部加 \`#include "ocr/ppocrv5.h"\` 与 \`#include "ocr/ppocrv5_dict.h"\`，声明全局 \`static PPOCRv5 g_ocr;\`。
- \`nativeInit\` 末尾加一段：用 \`AAssetManager\` 把 det 与 rec 四个文件读进来，调 \`g_ocr.load(...)\`，打一条 \`ocr init: load=0 loaded=1\` 的初始化日志。
- 新增对外函数 \`ocrRecognize\`：接收 Bitmap，检测加识别，按阅读顺序排序，查字表拼成文字，返回字符串。模型没加载时返回"（OCR 模型未加载）"，没识别到字返回"（未识别到文字）"。

**Kotlin 侧**：

- \`NativeBridge.kt\` 加一行 \`external fun ocrRecognize(bitmap: Bitmap): String?\`。
- \`MainActivity.kt\`：选图后统一把 Bitmap 转成 \`ARGB_8888\`，OCR 读像素要这个格式，原因见第 7 节坑二，调 \`ocrRecognize\`，返回文字拼到界面下方的 OCR 文字区域，和已有的检测框、场景 Top5 并列显示。

---

## 6. 编译与真机验收

Android Studio 里点 Run，第一次编译要链接 NCNN 静态库与 OpenCV，可能 3 到 8 分钟。装到手机后点选择图片，选一张字多、清晰、正向拍的图，餐厅菜单最容易一次成功，等几秒看界面下方 OCR 文字后面有没有出现一行行文字。

实测结果：菜单图几百毫秒内输出全部文本，界面下方出现能看懂的文字，和图里写的差不多。Logcat 过滤 \`OCR\` 能看到 \`ocr init: load=0 loaded=1\`，说明模型加载成功。YOLO 框与场景 Top5 仍正常，OCR 是叠加，不影响前两个。

---

## 7. 踩过的坑

阶段三真机调试遇到的问题，按发生顺序记录。

1. **OpenCV 文件夹名字不对，编译找不到**。Android Studio 编译报 \`Could not find a package configuration file with name "OpenCVConfig.cmake"\`。根因是 \`CMakeLists.txt\` 写死按 \`third_party/opencv-mobile-4.13.0-android/sdk/native/jni\` 找 OpenCV，但解压出来的文件夹可能叫 \`OpenCV-android-sdk\` 或带别的版本后缀，名字对不上就找不到。修法：把解压出的文件夹重命名成 exactly \`opencv-mobile-4.13.0-android\`。教训：路径写死、名字必须匹配，下载解压后第一件事就是核对最终路径和 CMakeLists 里写的是否一致。另外发布页顶部 v36（opencv 5.0.0）别下，下 v35（opencv 4.13.0）即可。

2. **OCR 读图前 Bitmap 格式不对**。Android 的 Bitmap 内存序是 RGBA，OCR 接口要的是 RGB，而且不是所有 Bitmap 都是 ARGB_8888，有的可能是 RGB_565，格式不对 lockBitmap 读出来的像素会错位。修法：在 \`MainActivity.kt\` 的 \`runPipeline\` 里，调用 OCR 前统一把图转成 ARGB_8888，再把这张转好的图同时传给 YOLO、场景、OCR。凡是 C++ 要读 Bitmap 像素，统一转 ARGB_8888 最稳。

3. **字表大小和模型输出类数对不上会越界**。PP-OCRv5 识别模型输出 18385 类，对应字表里 18385 个常用字符，其中一个是空白类占位。代码里用 \`if (id < 0 || id >= character_dict_size)\` 做越界保护，越界的编号会被跳过，不会让程序崩溃。修法：别手改 \`ppocrv5_dict.h\` 的字表内容或行数，它必须和模型配套。识别结果若整段乱码，先查字表大小是否约 18401 行，以及模型是不是 mobile 版，server 版类数不同。字表是模型配套文件，换模型必须连字表一起换。

4. **OCR 代码 \`#include <net.h>\` 裸名，编译报 net.h file not found**。编译 \`ppocrv5.cpp\` 时卡在 \`fatal error: 'net.h' file not found\`。根因：从第三方库搬来的代码引用 NCNN 头文件用裸名 \`#include <net.h>\` 与 \`#include "cpu.h"\`，但本项目把 NCNN 头文件搜索路径只设到 \`third_party/ncnn/include\`，而 \`net.h\` 真实位置是 \`third_party/ncnn/include/ncnn/net.h\`，比搜索路径多一层 \`ncnn/\`。项目里 YOLO 与场景的代码早就写成 \`#include <ncnn/net.h>\`，带 \`ncnn/\` 前缀，OCR 这段是后来加的、没对齐。修法：把 OCR 代码的 3 处裸名包含改成带 \`ncnn/\` 前缀，具体是 \`net.h\` 改 \`ncnn/net.h\`、\`cpu.h\` 改 \`ncnn/cpu.h\`。从别的 NCNN 工程搬 C++ 代码，先看它 include 头文件是裸名还是带 \`ncnn/\` 前缀。

5. **链接报错 undefined symbol __kmpc_dispatch_deinit（OpenMP 版本错配）**。编译期通过了，到链接 \`libpureedgevlm.so\` 时失败：\`ld.lld: error: undefined symbol: __kmpc_dispatch_deinit\`。根因：opencv-mobile v35（opencv 4.13.0）是用比本项目 NDK r28 更新的 LLVM 与 OpenMP 编出来的，新版本把 OpenMP 调度收尾函数从老名字 \`__kmpc_dispatch_fini_4u\` 改名叫 \`__kmpc_dispatch_deinit\`，而 NDK r28 自带的 libomp 只有老名字，没有 deinit，于是链接报未定义。修法：新建 \`opencv_omp_shim.cpp\`，自己提供一个空实现的 \`__kmpc_dispatch_deinit\`，函数体直接返回、什么都不做，加进 CMakeLists 的 add_library。空实现安全的原因：循环的实际工作已被 init 与 next 跑完，deinit 只是 runtime 收尾清理，空实现不影响结果正确性，代价是每次并行循环结尾有一点 runtime 缓冲没释放，OCR 调用不频繁，可忽略；NCNN 走 fork_call，不调用 deinit，不受影响。第一版补丁曾把 deinit 转发给 NDK 的 \`__kmpc_dispatch_fini_4u\`，以为同功能直转就行，结果真机一跑就闪退（SIGSEGV、空指针、fault addr 0x8c，崩溃栈落在 libomp.so 的 fini 函数）。根因是 init 与 next 用老布局写、deinit 用新布局读，转发后读错位空指针。改成空实现后崩溃消失，OCR 正常。预编译第三方库和本机 NDK 的 OpenMP 运行库可能版本错配，表现就是链接期冒出一个没见过的 kmpc 符号。先看是少了一个符号还是一堆符号都缺，少一个往往是改名或版本差，用 shim 桥接即可。这种改名类错配不能用老函数简单转发，空实现才安全。

---

## 8. 写在最后

到这，阶段三全部完成：精简版 OpenCV 放进工程，PP-OCRv5 的 det 与 rec 模型接进 App，OCR 引擎移植好并接到界面，手机选一张带字的图就能在下方看到读出来的文字。

本阶段主要工作量不在写业务代码，OCR 引擎是从第三方库移植的，难点在两处环境对齐：OpenCV 文件夹名字必须和 CMakeLists 写死的一致，opencv-mobile 与 NDK 的 OpenMP 版本错配用空实现 shim 绕过。这两处都不在业务逻辑里，却卡在编译、链接和真机启动上。

接下来是阶段四：把 llama.cpp 的大模型运行库编进工程，在 App 里用 MiniCPM5 做纯文字多轮对话，并做绑核调度优化性能。

项目地址：https://github.com/Munan059/PureEdgeVLM

*本文写于 2026-07-24，记录 PureEdgeVLM 阶段三的搭建过程。*
`;


export const essays: Essay[] = [
  { id: 2, date: '2026-07-03', title: '滤波器与 PID 是一对', content: '控制课上讲 PID 整定，突然反应过来：滤波器和 PID 其实是一对，前者收拾信号，后者收拾误差。机器视觉里这俩谁也躲不掉，算是把专业课串起来了。', tags: ['控制工程', '学习'] },
  { id: 3, date: '2026-06-22', title: '最小可运行 Agent 跑通了', content: '跟着教程搭了个最小可运行的 Agent，工具调用跑通的那一刻有点上头。下一步想接 MediaPipe，让它真的"看得见"——这才对得起"机器视觉"这个方向。', tags: ['AI Agent', 'MediaPipe'] },
  { id: 4, date: '2026-06-12', title: 'INFJ 的试错方式', content: 'INFJ 的苦恼：方案没想清楚前不想开口，可 vibe coding 又要求快速试错。和解的办法是——先在代码里试，试完再讲。代码不撒谎，比口头推演省事。', tags: ['随想'] },
  { id: 5, date: '2026-06-01', title: '博客迁到 Next.js', content: '把博客从 Hexo 迁到 Next.js，折腾了一整个周末。静态导出 + Cloudflare Pages，零成本上线，研究生钱包友好。绿点也保住了，值。', tags: ['博客', '部署'] },
  {
    id: 6,
    date: '2026-07-09',
    title: 'AI 概念学习笔记',
    content: '机器学习、深度学习、神经网络和大语言模型的概念梳理——从数据中获得规律，到不需要人工标注规律，再到模拟大脑神经元结构。',
    markdown: AI_NOTES_MD,
    tags: ['AI', '学习笔记'],
  },
  {
    id: 7,
    date: '2026-07-10',
    title: 'Python 语法回顾',
    content: '温习 Python 基础：print 函数的参数、三种字符串格式化方式（% / format / f-string）、对象三要素与 input 函数。',
    markdown: PYTHON_REVIEW_MD,
    tags: ['Python', '学习笔记'],
  },
  {
    id: 8,
    date: '2026-07-12',
    title: '世界模型笔记',
    content:
      '能预测未来的模型都算世界模型：广义（预测下一个 token/帧）vs 狭义（以动作为条件）。三类功能性角色——渲染器、模拟器、规划器，以及 RTFM 与 JEPA 两条技术路线的对立。',
    markdown: WORLD_MODEL_MD,
    tags: ['AI', '世界模型', '学习笔记'],
  },
  {
    id: 9,
    date: '2026-07-14',
    title: '世界模型名词解释',
    content:
      '世界模型相关核心术语速查：ViT、自编码器、MAE、师生网络、DINO、EMA、JEPA——从视觉 Transformer 到 Yann LeCun 力推的联合嵌入预测架构。',
    markdown: WORLD_MODEL_TERMS_MD,
    tags: ['AI', '世界模型', '学习笔记'],
  },
  {
    id: 10,
    date: '2026-07-15',
    title: 'Python 练习笔记',
    content: 'Python 基础练习：内置数据类型、列表与字典、字符串处理（f-string / replace / split）、函数定义与形参实参，以及 try/except 异常处理。',
    markdown: PYTHON_PRACTICE_MD,
    tags: ['Python', '学习笔记'],
  },
  {
    id: 11,
    date: '2026-07-19',
    title: 'PureEdgeVLM 阶段一搭建记录',
    content: '在旧骁龙865手机上纯本地跑通“拍照 → 视觉理解 → 大模型回答”的多模态系统：环境搭建、四个模型准备（YOLO / ResNet50 / PP-OCRv5 / MiniCPM5）与一路踩坑。',
    markdown: PUREEDGE_VLM_MD,
    tags: ['端侧AI', '学习笔记', '搭建记录'],
  },
  {
    id: 12,
    date: '2026-07-21',
    title: 'PureEdgeVLM 阶段二搭建记录',
    content: '阶段二把地基打牢：编译 NCNN 安卓静态库、把 ResNet50 转成 NCNN、写出 YOLO 和场景识别两个检测器，让前两个视觉模型在骁龙 865 上真机跑通。',
    markdown: PUREEDGE_VLM_STAGE2_MD,
    tags: ['端侧AI', '学习笔记', '搭建记录'],
  },
  {
    id: 13,
    date: '2026-07-24',
    title: 'PureEdgeVLM 阶段三搭建记录',
    content: '阶段三在阶段二跑通 YOLO 检测与 ResNet50 场景识别的基础上，接进百度 PP-OCRv5 文字识别，让手机选一张带字的图就能把图里的字读出来。',
    markdown: PUREEDGE_VLM_STAGE3_MD,
    tags: ['端侧AI', '学习笔记', '搭建记录'],
  },
];
