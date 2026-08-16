<div align="center">

🌐 [中文](README.md) | **English**

# 🖥️ Munan Blog · Digital Desktop

**One-liner: A personal blog reimagined as an interactive Windows 11–style desktop — click an icon to open a window, drag windows around, and use the taskbar search to deep-link straight to any essay or article. Zero server-side code: a single `npm run build` produces a fully static site that goes live the moment you connect it to Cloudflare Pages.**

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?logo=tailwind-css&logoColor=white)
![framer-motion](https://img.shields.io/badge/framer--motion-12-ff69b4)
![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare_Pages-F38020?logo=cloudflarepages&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow)

🌐 Live demo: https://munan.ink

[What is this](#-what-is-this) · [Features](#-features) · [Architecture](#-architecture) · [Quick start](#-quick-start) · [Content management](#-content-management) · [Deployment](#-deployment) · [License](#-license)

</div>

---

## 📖 What is this

Munan Blog is a personal website you can use like an operating system inside your browser: there are icons on the desktop, and clicking one pops open a window. Windows can be dragged, minimized, maximized, and closed; the top menu bar, the bottom taskbar, and the Start menu all stay in sync with window state. Each window is an independent module (articles, essays, projects, about, friend links…) that does not interfere with the others.

> **Why it's worth a look**: It looks and behaves like a desktop OS, yet under the hood it's a pure static site produced by `output: 'export'`, with no server, no database, and no API — yet it still implements window management, dragging, and search deep-linking. Clone it, run `npm run build`, and it runs identically on any static host.

| Module | Entry component | Description |
| --- | --- | --- |
| Articles | `ArticlesPage.tsx` | Markdown body + day/week/month/year/category timelines |
| Essays | `EssaysPage.tsx` | Markdown body, supports taskbar search deep-linking |
| Projects | `ProjectsPage.tsx` | Project card list |
| About | `AboutPage.tsx` | Live word-count stats + site uptime |
| Friend links | `FriendsLinkPage.tsx` | Friend-link cards |
| Mail / This PC / Recycle Bin | `EmailPage` / `ThisPCPage` / `RecycleBinPage` | Desktop easter-egg windows |

## ✨ Features

- **🪟 Self-built desktop window system**: open / minimize / maximize / close / drag / z-order management, all in `Desktop.tsx`, with a frosted-glass title bar + framer-motion spring animations.
- **📋 Menu bar + taskbar + Start menu**: click a top menu item to open the corresponding window; the bottom taskbar shows open windows and lets you minimize or restore them, with a Start menu on the left.
- **🔍 Taskbar search deep-linking**: type a keyword in the taskbar search box, click a result, and it opens the matching essay/article window and scrolls straight to that piece.
- **📝 Markdown-driven content**: articles and essays are rendered with react-markdown + remark-gfm; code blocks are highlighted with react-syntax-highlighter (One Light theme). Writing them is just like writing a GitHub README.
- **🕒 Dual timeline views**: both articles and essays support grouping by day / week / month / year / category.
- **📊 Live About-page stats**: shows the total word count of written articles/essays (recomputed on every mount) and the number of seconds the site has been running (ticking every second).
- **🎬 Video wallpaper + mouse parallax**: the desktop background is a looping video `yasuo.mp4`, and the video and overlay layers do Wallpaper Engine–style parallax as the mouse moves.
- **📐 Container-query responsive**: window internals use the `cqw` unit, so font size scales with window width — the layout looks good whether the window is large or small.
- **🗂 Data-driven**: to add content you only edit data files, never the core logic; desktop icons and menus are centralized in `constants.ts`.

## 📊 Scale at a glance

> Numbers come from a real scan of the current repo (`git ls-files` + source line counts).

| Metric | Value |
| --- | --- |
| Source size | ~7,501 lines of TypeScript / TSX (under `src/`) |
| Desktop window modules | 8 (articles / essays / projects / about / friend links / mail / this PC / recycle bin) |
| Video wallpaper | `public/yasuo.mp4`, 25 MB, committed to the repo |
| Build output | `out/`, pure static, ready to host |

## 🏗 Architecture

```
Browser
 ├─ MenuBar (top menu bar)── click ──► Desktop.openIcon(id)
 └─ Desktop (core window system)
      ├─ State: openWindows / minimized / maximized / activeWindow / window coordinates
      ├─ Render: AnimatePresence + framer-motion spring animations
      ├─ Dock (taskbar + Start menu + search box)
      ├─ Background layer: VideoParallaxBackground + parallax/ (mouse parallax)
      └─ Content layer: route to each XxxPage component by id
```

Design decisions:

- **Fully client-side (`'use client'`)**: all window components are client components, which fits `output: 'export'` naturally and relies on no server capability.
- **Centralized state, declarative rendering**: a window's open/close, z-order, and coordinates all live in `Desktop.tsx`'s `useState`; adding a new window basically means editing `constants.ts` + writing an `XxxPage.tsx`.
- **Content as data**: articles, essays, and friend links are all data arrays — commit to publish; components only render.
- **Security headers travel with the site**: `public/_headers` (including CSP, X-Frame-Options, etc.) is copied to `out/` during `next build`, and Cloudflare Pages applies it automatically.

## 🚀 Quick start

Requirements: **Node.js 18.17 or above**, package manager npm.

```bash
# 1. Clone the repo
git clone https://github.com/Munan059/blog.git
cd blog
```

```bash
# 2. Install dependencies
npm install
```

```bash
# 3. Local development (defaults to http://localhost:3000)
npm run dev
```

```bash
# 4. Static build (produces the out/ directory)
npm run build
```

Common scripts:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the dev server (http://localhost:3000) |
| `npm run build` | Static export to `out/` |
| `npm run lint` | Lint the code |

> After cloning you don't need to download any large file separately — the video wallpaper `yasuo.mp4` is already in the repo, so it runs out of the box.

## 📂 Directory structure

```
blog/
├─ next.config.mjs          # Static export config (output:'export')
├─ tailwind.config.ts       # Theme colors / fonts / animation keyframes
├─ postcss.config.mjs
├─ public/
│  ├─ yasuo.mp4             # Video wallpaper (25MB, committed)
│  ├─ poster.jpg            # Video poster
│  ├─ _headers              # Cloudflare Pages security headers (incl. CSP)
│  └─ *.png / *.webp        # Article/essay illustrations and avatars
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx         # Root layout
│  │  ├─ page.tsx           # Entry: assembles MenuBar + Desktop
│  │  ├─ globals.css        # Tailwind directives + base styles
│  │  └─ fonts/             # Self-hosted Geist fonts (.woff)
│  ├─ components/
│  │  ├─ Desktop.tsx        # ★ Core: desktop + window system
│  │  ├─ MenuBar.tsx        # Top menu bar
│  │  ├─ Dock.tsx           # Bottom taskbar (incl. Start menu + search box)
│  │  ├─ StartMenu.tsx      # Start menu
│  │  ├─ DesktopIcon.tsx    # Desktop icon
│  │  ├─ DesktopRipple.tsx  # Click ripple
│  │  ├─ VideoParallaxBackground.tsx # Video wallpaper + mouse parallax
│  │  ├─ parallax/          # Mouse-parallax background (Wallpaper Engine style)
│  │  │  ├─ ParallaxBackground.tsx
│  │  │  ├─ ParallaxLayer.tsx
│  │  │  ├─ ParallaxContext.tsx
│  │  │  └─ index.ts
│  │  ├─ icons/             # SVG components for each window / icon
│  │  ├─ ArticlesPage.tsx   # Articles window (timeline)
│  │  ├─ EssaysPage.tsx     # Essays window (search deep-link)
│  │  ├─ ProjectsPage.tsx   # Projects window
│  │  ├─ AboutPage.tsx      # About window (word count / uptime)
│  │  ├─ FriendsLinkPage.tsx# Friend-links window
│  │  ├─ EmailPage.tsx      # Mail window
│  │  ├─ ThisPCPage.tsx     # This PC window
│  │  └─ RecycleBinPage.tsx # Recycle Bin
│  └─ lib/
│     ├─ constants.ts       # Desktop icons, menu config (data-driven entry)
│     ├─ articlesData.ts    # Article list
│     ├─ articlesContent.ts # Article bodies (Markdown strings)
│     ├─ essaysData.ts      # Essay bodies (Markdown, 1602 lines)
│     ├─ friendsData.ts     # Friend-link data
│     └─ markdownComponents.tsx # Markdown render config
```

> 🧹 **Repo note**: `CursorTrail.tsx` and `CenterIllustration.tsx` are leftover components from an older version; they are not wired into the UI yet and can be ignored.

## 📝 Content management

All content is data-driven — writing an article or essay is like editing a piece of data; you don't touch component logic.

<details>
<summary>📄 Add an article / essay / project / friend link (click to expand)</summary>

- **Add an article**: add an entry to the array in `src/lib/articlesData.ts`; if it has a body, put the Markdown string into `src/lib/articlesContent.ts` and reference it from the article object.
- **Add an essay**: add an entry to the array in `src/lib/essaysData.ts`, with the body written into the `markdown` field (images and code blocks supported).
- **Add a project**: add an entry to the `projects` array in `src/components/ProjectsPage.tsx`.
- **Add a friend link**: add an entry to the array in `src/lib/friendsData.ts`; when `avatar` is left empty, an avatar is auto-generated from the first letter + a gradient.

</details>

<details>
<summary>⚙️ Change desktop icons / menu / theme / About page (click to expand)</summary>

- **Change desktop icons / menu**: edit `src/lib/constants.ts` (`leftIcons` / `rightIcons` / `menuLinks`).
- **Change the About-page intro**: edit `introLines` at the top of `src/components/AboutPage.tsx`; to change the site's start time, edit `SITE_START_TIME` in the same file (currently `2026-06-22`).
- **Change theme colors / animations**: centralized in `tailwind.config.ts`.

</details>

## 🚢 Deployment

This project is a pure static site; after building, deploy the entire `out/` directory to any static host. Below we use **Cloudflare Pages** as an example.

<details>
<summary>☁️ Option 1: Cloudflare Pages connected to GitHub for auto-deploy (recommended)</summary>

1. Log in to the Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select the repo `Munan059/blog`, branch `main`.
3. Build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: leave empty (i.e., the repo root)
4. Save and deploy. After that, every `git push` to `main` makes Cloudflare Pages rebuild and go live automatically.
5. `public/_headers` is copied to `out/` during the build, so the security headers take effect automatically.

</details>

<details>
<summary>📦 Option 2: Build locally then upload manually</summary>

```bash
npm run build        # produces out/
# In the Cloudflare Pages dashboard choose direct upload,
# then drag the local out/ directory in.
```

</details>

> ⚠️ **Static-export limitations**: under `output: 'export'` you can't use server-side features — you can't read request headers, can't use `next/image` image optimization, and can't write API Routes. All window components in this project are `'use client'`, which fits perfectly.

## 📄 License

This project is open-sourced under the [MIT License](LICENSE); you are free to use, modify, and distribute it, as long as you keep the copyright notice.

<div align="center">If you find this useful, give it a ⭐</div>
