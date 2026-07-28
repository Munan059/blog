import React from 'react';

// Document file icon - white page with red corner fold
export const FileIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="8" y="4" width="32" height="40" rx="2" fill="white" stroke="#555" strokeWidth="1.5" />
    <path d="M28 4L28 14C28 15.1 28.9 16 30 16L40 16" fill="#c84040" />
    <path d="M28 4L28 14C28 15.1 28.9 16 30 16L40 16" stroke="#555" strokeWidth="1.5" strokeLinejoin="round" />
    <line x1="14" y1="22" x2="34" y2="22" stroke="#999" strokeWidth="1.5" />
    <line x1="14" y1="28" x2="34" y2="28" stroke="#999" strokeWidth="1.5" />
    <line x1="14" y1="34" x2="28" y2="34" stroke="#999" strokeWidth="1.5" />
  </svg>
);

// Folder icon
// Project icon - Windows 11 style code window: blue title bar (dots) + white body with blue </> glyph
// Shares the approved "white/light-blue body + blue accent + soft shadow" language
export const FolderIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="w-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="1" stopColor="#d9e7f6" />
      </linearGradient>
      <linearGradient id="w-bar" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#54c0ff" />
        <stop offset="1" stopColor="#0a72cc" />
      </linearGradient>
      <linearGradient id="w-code" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#45baff" />
        <stop offset="1" stopColor="#006ac4" />
      </linearGradient>
      <radialGradient id="w-sh" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="#14223d" stopOpacity="0.38" />
        <stop offset="0.7" stopColor="#14223d" stopOpacity="0.15" />
        <stop offset="1" stopColor="#14223d" stopOpacity="0" />
      </radialGradient>
    </defs>
    <ellipse cx="24" cy="44.5" rx="16" ry="2.4" fill="url(#w-sh)" />
    <path d="M4 11 Q4 7 8 7 H40 Q44 7 44 11 V36 Q44 40 40 40 H8 Q4 40 4 36 Z" fill="url(#w-body)" />
    <path d="M4 11 Q4 7 8 7 H40 Q44 7 44 11 V14.5 H4 Z" fill="url(#w-bar)" />
    <rect x="4.5" y="7.5" width="39" height="2.6" rx="1.3" fill="#ffffff" opacity="0.35" />
    <rect x="8" y="9.8" width="12" height="2" rx="1" fill="#ffffff" opacity="0.7" />
    <circle cx="32" cy="10.8" r="1.4" fill="#ffffff" opacity="0.95" />
    <circle cx="36.2" cy="10.8" r="1.4" fill="#ffffff" opacity="0.8" />
    <circle cx="40.4" cy="10.8" r="1.4" fill="#ffffff" opacity="0.65" />
    <g stroke="url(#w-code)" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18.5 22 L13.5 27 L18.5 32" />
      <path d="M29.5 22 L34.5 27 L29.5 32" />
      <line x1="26" y1="20.5" x2="22" y2="33.5" />
    </g>
  </svg>
);

// Trash icon - simple recycle bin (24x24 viewBox)
export const TrashIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="6" y="7" width="12" height="13" rx="1" fill="#ddd" stroke="#999" strokeWidth="0.8" />
    <rect x="5" y="5" width="14" height="3" rx="1" fill="#bbb" stroke="#999" strokeWidth="0.8" />
    <rect x="10" y="3.5" width="4" height="2" rx="0.5" fill="#bbb" stroke="#999" strokeWidth="0.6" />
    <line x1="9" y1="10" x2="9" y2="17" stroke="#999" strokeWidth="0.8" />
    <line x1="11" y1="10" x2="11" y2="17" stroke="#999" strokeWidth="0.8" />
    <line x1="13" y1="10" x2="13" y2="17" stroke="#999" strokeWidth="0.8" />
    <line x1="15" y1="10" x2="15" y2="17" stroke="#999" strokeWidth="0.8" />
  </svg>
);

// Pricing icon - calculator
export const PricingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="10" y="6" width="28" height="36" rx="3" fill="#e8e8e8" stroke="#555" strokeWidth="1.5" />
    <rect x="14" y="10" width="20" height="8" rx="1" fill="#4a7c3f" />
    <text x="24" y="16" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">0</text>
    <rect x="15" y="21" width="7" height="5" rx="1" fill="#ccc" />
    <rect x="24" y="21" width="7" height="5" rx="1" fill="#ccc" />
    <rect x="15" y="28" width="7" height="5" rx="1" fill="#ccc" />
    <rect x="24" y="28" width="7" height="5" rx="1" fill="#ccc" />
    <rect x="15" y="35" width="16" height="4" rx="1" fill="#c84040" />
  </svg>
);

// Demo icon - film clapper
export const DemoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="8" y="10" width="32" height="24" rx="2" fill="#1a1a1a" stroke="#555" strokeWidth="1.5" />
    <path d="M8 16L22 10L22 34L8 40V16Z" fill="white" stroke="#555" strokeWidth="1" />
    <path d="M22 10L34 14L34 34L22 40V10Z" fill="white" stroke="#555" strokeWidth="1" />
    <rect x="8" y="10" width="6" height="4" fill="#c84040" />
    <text x="11" y="13" textAnchor="middle" fill="white" fontSize="3" fontWeight="bold">DEMO</text>
  </svg>
);

// Docs icon - red book
export const DocsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 10C8 8.9 8.9 8 10 8H16L24 4L32 8H38C39.1 8 40 8.9 40 10V38C40 39.1 39.1 40 38 40H10C8.9 40 8 39.1 8 38V10Z" fill="#c84040" stroke="#a03030" strokeWidth="1.5" />
    <line x1="24" y1="4" x2="24" y2="40" stroke="#a03030" strokeWidth="1.5" />
    <text x="24" y="24" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">P</text>
  </svg>
);

// Email icon - Windows 11 style envelope: white gradient body + blue gradient flap
export const EmailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="m-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="1" stopColor="#d9e7f6" />
      </linearGradient>
      <linearGradient id="m-flap" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#54c0ff" />
        <stop offset="1" stopColor="#0a72cc" />
      </linearGradient>
      <radialGradient id="m-sh" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="#14223d" stopOpacity="0.38" />
        <stop offset="0.7" stopColor="#14223d" stopOpacity="0.15" />
        <stop offset="1" stopColor="#14223d" stopOpacity="0" />
      </radialGradient>
    </defs>
    <ellipse cx="24" cy="43" rx="16" ry="2.4" fill="url(#m-sh)" />
    <rect x="4" y="11" width="40" height="28" rx="4" fill="url(#m-body)" />
    <path d="M4 15 Q4 11 8 11 H40 Q44 11 44 15 L24 30 Z" fill="url(#m-flap)" />
    <path d="M4 15 Q4 11 8 11 H40 Q44 11 44 15" stroke="#bfe4ff" strokeWidth="1" opacity="0.7" fill="none" />
    <path d="M5.5 38 L18.5 26 M42.5 38 L29.5 26" stroke="#9db8d8" strokeWidth="1" opacity="0.6" />
    <rect x="4.5" y="11.5" width="39" height="3" rx="1.5" fill="#ffffff" opacity="0.4" />
  </svg>
);

// Question icon - speech bubble
export const QuestionIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="8" y="6" width="32" height="24" rx="6" fill="white" stroke="#555" strokeWidth="1.5" />
    <path d="M16 30L22 38L28 30" fill="white" stroke="#555" strokeWidth="1.5" />
    <text x="24" y="22" textAnchor="middle" fill="#4a90d9" fontSize="16" fontWeight="bold">?</text>
  </svg>
);

// Chart icon
export const ChartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="8" y="8" width="32" height="32" rx="2" fill="white" stroke="#555" strokeWidth="1.5" />
    <line x1="12" y1="36" x2="12" y2="28" stroke="#4a90d9" strokeWidth="4" strokeLinecap="round" />
    <line x1="20" y1="36" x2="20" y2="18" stroke="#c84040" strokeWidth="4" strokeLinecap="round" />
    <line x1="28" y1="36" x2="28" y2="22" stroke="#4a7c3f" strokeWidth="4" strokeLinecap="round" />
    <line x1="36" y1="36" x2="36" y2="14" stroke="#d4a843" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

// Changelog icon - bell/calendar
export const ChangelogIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="8" y="6" width="32" height="34" rx="3" fill="white" stroke="#555" strokeWidth="1.5" />
    <rect x="10" y="10" width="28" height="6" fill="#c84040" />
    <text x="24" y="15" textAnchor="middle" fill="white" fontSize="4" fontWeight="bold">JUL</text>
    <text x="24" y="30" textAnchor="middle" fill="#555" fontSize="14" fontWeight="bold">5</text>
  </svg>
);

// Bilibili icon - official logo (from simple-icons)
export const BilibiliIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z" fill="#FB7299" />
  </svg>
);

// This PC icon - Windows 10 style monitor with stand
export const ThisPCIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="5" y="5" width="38" height="28" rx="2" fill="#4a5a6c" stroke="#5a6c80" strokeWidth="1.5" />
    <rect x="7" y="7" width="34" height="24" rx="1" fill="#7eb8e0" />
    <rect x="7" y="7" width="34" height="3" fill="white" opacity="0.25" />
    <path d="M19 33L17 41H31L29 33Z" fill="#5a6878" stroke="#3a4858" strokeWidth="1" strokeLinejoin="round" />
    <rect x="13" y="41" width="22" height="3" rx="1" fill="#5a6878" stroke="#3a4858" strokeWidth="1" />
  </svg>
);

// Handbook icon - open book
export const HandbookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 8H20C22 8 24 10 24 12V40C24 38 22 36 20 36H8V8Z" fill="white" stroke="#555" strokeWidth="1.5" />
    <path d="M40 8H28C26 8 24 10 24 12V40C24 38 26 36 28 36H40V8Z" fill="white" stroke="#555" strokeWidth="1.5" />
    <line x1="14" y1="14" x2="20" y2="14" stroke="#ddd" strokeWidth="1" />
    <line x1="14" y1="18" x2="20" y2="18" stroke="#ddd" strokeWidth="1" />
    <line x1="14" y1="22" x2="19" y2="22" stroke="#ddd" strokeWidth="1" />
    <line x1="28" y1="14" x2="34" y2="14" stroke="#ddd" strokeWidth="1" />
    <line x1="28" y1="18" x2="34" y2="18" stroke="#ddd" strokeWidth="1" />
    <line x1="28" y1="22" x2="33" y2="22" stroke="#ddd" strokeWidth="1" />
  </svg>
);

// Store icon - shopping bag
export const StoreIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 18L16 8H32L36 18V38C36 39.1 35.1 40 34 40H14C12.9 40 12 39.1 12 38V18Z" fill="#d4a843" stroke="#b89230" strokeWidth="1.5" />
    <path d="M16 18C16 14 20 10 24 10C28 10 32 14 32 18" fill="none" stroke="#b89230" strokeWidth="2" />
    <path d="M12 18H36" stroke="#b89230" strokeWidth="1.5" />
  </svg>
);

// Work icon - briefcase
export const WorkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="8" y="14" width="32" height="24" rx="3" fill="#8b6914" stroke="#6b4f10" strokeWidth="1.5" />
    <rect x="14" y="8" width="20" height="10" rx="2" fill="#8b6914" stroke="#6b4f10" strokeWidth="1.5" />
    <rect x="18" y="6" width="12" height="4" rx="1" fill="#8b6914" stroke="#6b4f10" strokeWidth="1" />
    <rect x="19" y="21" width="10" height="10" rx="1" fill="white" opacity="0.5" />
  </svg>
);

// Switch mode icon
export const SwitchModeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="6" y="8" width="28" height="22" rx="2" fill="white" stroke="#555" strokeWidth="1.5" />
    <rect x="8" y="10" width="24" height="4" fill="#ddd" />
    <rect x="24" y="8" width="4" height="4" rx="1" fill="#c84040" />
    <rect x="28" y="8" width="4" height="4" rx="1" fill="#d4a843" />
    <rect x="32" y="8" width="4" height="4" rx="1" fill="#4a7c3f" />
    <path d="M34 28L42 20" stroke="#4a90d9" strokeWidth="2" />
    <path d="M34 20L42 28" stroke="#4a90d9" strokeWidth="2" />
  </svg>
);

// Product OS icon
export const ProductOSIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="6" y="6" width="36" height="36" rx="4" fill="#c84040" stroke="#a03030" strokeWidth="1.5" />
    <text x="24" y="32" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">P</text>
  </svg>
);

// GitHub icon
export const GitHubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="24" cy="24" r="20" fill="#1a1a1a" stroke="#555" strokeWidth="1" />
    <path d="M24 6C14.06 6 6 14.06 6 24c0 7.95 5.16 14.7 12.31 17.08.9.17 1.23-.39 1.23-.87 0-.43-.02-1.85-.02-3.35-5.01 1.09-6.06-2.42-6.06-2.42-.82-2.08-2-2.64-2-2.64-1.64-1.12.12-1.1.12-1.1 1.81.13 2.76 1.86 2.76 1.86 1.61 2.76 4.22 1.96 5.25 1.5.16-1.17.63-1.96 1.15-2.41-4.01-.46-8.22-2.01-8.22-8.94 0-1.97.7-3.58 1.86-4.85-.19-.46-.81-2.29.18-4.78 0 0 1.51-.48 4.96 1.85a17.3 17.3 0 019.02 0c3.45-2.33 4.96-1.85 4.96-1.85.99 2.49.37 4.32.18 4.78a7.03 7.03 0 011.86 4.85c0 6.95-4.22 8.48-8.24 8.93.65.56 1.22 1.66 1.22 3.34 0 2.41-.02 4.35-.02 4.94 0 .48.33 1.04 1.23.87A18.02 18.02 0 0042 24c0-9.94-8.06-18-18-18z" fill="white" />
  </svg>
);

// Munan Logo - hedgehog
export const MunanLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" {...props}>
    <ellipse cx="12" cy="14" rx="8" ry="7" fill="white" />
    <circle cx="9" cy="11" r="1.5" fill="#1a1a1a" />
    <circle cx="15" cy="11" r="1.5" fill="#1a1a1a" />
    <ellipse cx="12" cy="15" rx="2" ry="1.5" fill="#1a1a1a" />
    <path d="M6 12L4 10M18 12L20 10M8 9L7 7M16 9L17 7" stroke="#1a1a1a" strokeWidth="1" />
  </svg>
);

// Article icon - Windows 11 style document: gradient page, folded corner, blue text lines, back sheet
export const ArticleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="a-page" x1="0" y1="0" x2="0.3" y2="1">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="1" stopColor="#d4e6fa" />
      </linearGradient>
      <linearGradient id="a-back" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#bcd8f2" />
        <stop offset="1" stopColor="#8fb9e6" />
      </linearGradient>
      <linearGradient id="a-fold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#eef6ff" />
        <stop offset="1" stopColor="#9fc8ee" />
      </linearGradient>
      <linearGradient id="a-line" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#45baff" />
        <stop offset="1" stopColor="#006ac4" />
      </linearGradient>
      <radialGradient id="a-sh" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="#14223d" stopOpacity="0.38" />
        <stop offset="0.7" stopColor="#14223d" stopOpacity="0.15" />
        <stop offset="1" stopColor="#14223d" stopOpacity="0" />
      </radialGradient>
    </defs>
    <ellipse cx="24" cy="44.8" rx="14" ry="2.4" fill="url(#a-sh)" />
    <g transform="rotate(4 26 24)">
      <path d="M13 4.5 Q13 2.8 14.8 2.8 H31 L40 11 V40 Q40 42 38 42 H14.8 Q13 42 13 40 Z" fill="url(#a-back)" />
    </g>
    <path d="M9 7 Q9 5 11 5 H30 L40 15 V42 Q40 44 38 44 H11 Q9 44 9 42 Z" fill="url(#a-page)" />
    <path d="M30 5 V13 Q30 15 32 15 H40 Z" fill="url(#a-fold)" />
    <path d="M11 5.5 H22 L9.5 19 V7.5 Q9.5 5.5 11 5.5 Z" fill="#ffffff" opacity="0.55" />
    <rect x="15" y="20" width="20" height="3" rx="1.5" fill="url(#a-line)" />
    <rect x="15" y="26.5" width="20" height="3" rx="1.5" fill="url(#a-line)" opacity="0.85" />
    <rect x="15" y="33" width="20" height="3" rx="1.5" fill="url(#a-line)" opacity="0.7" />
    <rect x="15" y="39.5" width="12.5" height="3" rx="1.5" fill="url(#a-line)" opacity="0.5" />
  </svg>
);

// FriendLink icon candidate A - Windows favorites star: folder + star (bookmarked links)
export const FriendLinkA: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M6 12 H18 L22 16 H42 V40 H6 Z" fill="white" stroke="#7a7a7a" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M24 19 L26 24 L31 24.5 L27 28 L28 33 L24 30.5 L20 33 L21 28 L17 24.5 L22 24 Z" fill="#4a90d9" />
  </svg>
);

// FriendLink icon candidate B - Windows globe link: earth + chain link (web links)
export const FriendLinkB: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="22" cy="24" r="14" fill="white" stroke="#4a90d9" strokeWidth="1.6" />
    <ellipse cx="22" cy="24" rx="6" ry="14" fill="none" stroke="#4a90d9" strokeWidth="1.2" />
    <line x1="8" y1="24" x2="36" y2="24" stroke="#4a90d9" strokeWidth="1.2" />
    <line x1="10" y1="17" x2="34" y2="17" stroke="#4a90d9" strokeWidth="1" opacity="0.7" />
    <line x1="10" y1="31" x2="34" y2="31" stroke="#4a90d9" strokeWidth="1" opacity="0.7" />
    {/* chain link */}
    <path d="M36 28 L40 24 C42 22 45 22 47 24 C49 26 49 29 47 31 L43 35" fill="none" stroke="#4a90d9" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M40 35 L36 39 C34 41 31 41 29 39 C27 37 27 34 29 32 L33 28" fill="none" stroke="#4a90d9" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// FriendLink icon candidate C - Windows links folder: folder with globe + bookmarked rows
export const FriendLinkC: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5 10 H18 L22 14 H43 V40 H5 Z" fill="white" stroke="#7a7a7a" strokeWidth="1.2" strokeLinejoin="round" />
    {/* globe badge */}
    <circle cx="16" cy="24" r="6" fill="#e6f0fa" stroke="#4a90d9" strokeWidth="1.3" />
    <ellipse cx="16" cy="24" rx="2.5" ry="6" fill="none" stroke="#4a90d9" strokeWidth="0.9" />
    <line x1="10" y1="24" x2="22" y2="24" stroke="#4a90d9" strokeWidth="0.9" />
    {/* link rows */}
    <line x1="26" y1="21" x2="40" y2="21" stroke="#4a90d9" strokeWidth="1.4" />
    <line x1="26" y1="27" x2="38" y2="27" stroke="#4a90d9" strokeWidth="1.4" />
    <line x1="26" y1="33" x2="36" y2="33" stroke="#4a90d9" strokeWidth="1.4" />
  </svg>
);

// Windows 11 style local disk drive icon (C:, D:)
// Gray drive enclosure with blue accent stripe on top
export const DriveIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Drive body - gray enclosure */}
    <rect x="6" y="12" width="36" height="26" rx="3" fill="#c8d0d8" stroke="#8a949e" strokeWidth="1.3" />
    {/* Top blue accent stripe */}
    <path d="M6 15 Q6 12 9 12 H39 Q42 12 42 15 V16 H6 Z" fill="#3b8ced" />
    {/* Front face divider */}
    <rect x="6" y="20" width="36" height="0.8" fill="#8a949e" opacity="0.5" />
    {/* Drive bay lines */}
    <rect x="10" y="24" width="22" height="2" rx="0.5" fill="#9aa4ae" opacity="0.7" />
    <rect x="10" y="28" width="16" height="1.5" rx="0.5" fill="#9aa4ae" opacity="0.5" />
    {/* Activity LED */}
    <circle cx="36" cy="32" r="1.1" fill="#5ade80" />
  </svg>
);

// Windows style optical disc drive icon (DVD/CD - E:)
export const OpticalDriveIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Drive body */}
    <rect x="6" y="12" width="36" height="26" rx="3" fill="#d8d8dc" stroke="#8a8e94" strokeWidth="1.3" />
    {/* Top stripe */}
    <path d="M6 15 Q6 12 9 12 H39 Q42 12 42 15 V16 H6 Z" fill="#6b7078" />
    {/* Disc peeking out of tray */}
    <ellipse cx="24" cy="30" rx="13" ry="3.5" fill="#cfcfcf" stroke="#8a8e94" strokeWidth="0.8" />
    <ellipse cx="24" cy="30" rx="13" ry="3.5" fill="url(#discGrad)" opacity="0.7" />
    <ellipse cx="24" cy="30" rx="3" ry="1" fill="#e8e8ec" stroke="#8a8e94" strokeWidth="0.5" />
    <defs>
      <linearGradient id="discGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#7bb8e8" />
        <stop offset="0.5" stopColor="#b8a8e0" />
        <stop offset="1" stopColor="#7bb8e8" />
      </linearGradient>
    </defs>
  </svg>
);

// Windows 11 style user folder icon (yellow folder, slightly different from blue FolderIcon)
// Used in This PC > Folders section (Desktop, Documents, Downloads, etc.)
export const UserFolderIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Back tab */}
    <path d="M6 13 Q6 10.5 8.5 10.5 H18 L21.5 14 H39.5 Q42 14 42 16.5 V18 H6 Z" fill="#f6c945" stroke="#c99a1f" strokeWidth="1" />
    {/* Main body */}
    <path d="M6 16 Q6 14 8.5 14 H39.5 Q42 14 42 16.5 V35 Q42 37.5 39.5 37.5 H8.5 Q6 37.5 6 35 Z" fill="#ffd96b" stroke="#c99a1f" strokeWidth="1.2" />
    {/* Front flap highlight */}
    <path d="M6 16 Q6 14 8.5 14 H39.5 Q42 14 42 16.5 V19 H6 Z" fill="#ffe48a" />
  </svg>
);

// About icon - Windows 11 style ID card: white card, blue avatar with silhouette, blue info lines
// Shares the approved "white/light-blue body + blue accent + soft shadow" language of ArticleIcon/EmailIcon
export const AboutIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="c-card" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="1" stopColor="#d9e7f6" />
      </linearGradient>
      <linearGradient id="c-av" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#5ac2ff" />
        <stop offset="1" stopColor="#0a72cc" />
      </linearGradient>
      <linearGradient id="c-line" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#45baff" />
        <stop offset="1" stopColor="#006ac4" />
      </linearGradient>
      <clipPath id="c-clip">
        <circle cx="15.5" cy="24" r="7.3" />
      </clipPath>
      <radialGradient id="c-sh" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="#14223d" stopOpacity="0.38" />
        <stop offset="0.7" stopColor="#14223d" stopOpacity="0.15" />
        <stop offset="1" stopColor="#14223d" stopOpacity="0" />
      </radialGradient>
    </defs>
    <ellipse cx="24" cy="44" rx="15" ry="2.4" fill="url(#c-sh)" />
    <rect x="4" y="9" width="40" height="30" rx="4" fill="url(#c-card)" />
    <rect x="4.5" y="9.5" width="39" height="3" rx="1.5" fill="#ffffff" opacity="0.4" />
    <circle cx="15.5" cy="24" r="7.5" fill="url(#c-av)" />
    <ellipse cx="13" cy="19.5" rx="3.5" ry="2" fill="#ffffff" opacity="0.4" />
    <g clipPath="url(#c-clip)">
      <circle cx="15.5" cy="21.8" r="2.7" fill="#ffffff" />
      <path d="M15.5 25.4 C12.2 25.4 10 27.7 9.6 30.6 Q9.55 31.3 10.3 31.3 H20.7 Q21.45 31.3 21.4 30.6 C21 27.7 18.8 25.4 15.5 25.4 Z" fill="#ffffff" />
    </g>
    <rect x="27" y="16" width="13" height="2.6" rx="1.3" fill="url(#c-line)" />
    <rect x="27" y="22" width="13" height="2.6" rx="1.3" fill="url(#c-line)" opacity={0.8} />
    <rect x="27" y="28" width="9" height="2.6" rx="1.3" fill="url(#c-line)" opacity={0.6} />
  </svg>
);

// Essay icon - open diary/journal (打开的日记本: 双页+装订+横线)
// Diary motif for "随笔" (personal journal entries)
// Distinct from ArticleIcon (single document page) by spread double-page + center binding
// Essay icon - Windows 11 style coil notepad + pencil: white page, blue binding rings, blue lines, blue pencil
// Shares the approved "white/light-blue body + blue accent + soft shadow" language
export const EssayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="n-page" x1="0" y1="0" x2="0.2" y2="1">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="1" stopColor="#d8e9fb" />
      </linearGradient>
      <linearGradient id="n-band" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#bcd8f2" />
        <stop offset="1" stopColor="#9ec4ea" />
      </linearGradient>
      <linearGradient id="n-line" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#45baff" />
        <stop offset="1" stopColor="#006ac4" />
      </linearGradient>
      <linearGradient id="n-pen" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#54c0ff" />
        <stop offset="1" stopColor="#0a72cc" />
      </linearGradient>
      <radialGradient id="n-sh" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="#14223d" stopOpacity="0.38" />
        <stop offset="0.7" stopColor="#14223d" stopOpacity="0.15" />
        <stop offset="1" stopColor="#14223d" stopOpacity="0" />
      </radialGradient>
    </defs>
    <ellipse cx="23" cy="44.8" rx="14" ry="2.4" fill="url(#n-sh)" />
    <path d="M8 10 Q8 8 10 8 H34 Q36 8 36 10 V40 Q36 42 34 42 H10 Q8 42 8 40 Z" fill="url(#n-page)" />
    <path d="M8 10 Q8 8 10 8 H34 Q36 8 36 10 V15 H8 Z" fill="url(#n-band)" />
    <circle cx="12.5" cy="8.5" r="2.4" fill="#eaf4ff" stroke="#0a6fc8" strokeWidth="1.6" />
    <circle cx="18.5" cy="8.5" r="2.4" fill="#eaf4ff" stroke="#0a6fc8" strokeWidth="1.6" />
    <circle cx="24.5" cy="8.5" r="2.4" fill="#eaf4ff" stroke="#0a6fc8" strokeWidth="1.6" />
    <circle cx="30.5" cy="8.5" r="2.4" fill="#eaf4ff" stroke="#0a6fc8" strokeWidth="1.6" />
    <path d="M10 8.3 H18 L8.5 18 V9.5 Q8.5 8.3 10 8.3 Z" fill="#ffffff" opacity="0.5" />
    <rect x="13" y="20" width="17" height="2.6" rx="1.3" fill="url(#n-line)" />
    <rect x="13" y="26" width="15" height="2.6" rx="1.3" fill="url(#n-line)" opacity={0.8} />
    <rect x="13" y="32" width="11" height="2.6" rx="1.3" fill="url(#n-line)" opacity={0.6} />
    <g transform="rotate(-45 36 36)">
      <rect x="33.8" y="24" width="4.4" height="15" rx="1.1" fill="url(#n-pen)" />
      <rect x="33.8" y="24" width="4.4" height="2.4" rx="1.1" fill="#bcd8f2" />
      <path d="M33.8 39 L36 43.5 L38.2 39 Z" fill="#eaf4ff" />
      <path d="M35.2 42.2 L36 43.5 L36.8 42.2 Z" fill="#0a5fb8" />
    </g>
  </svg>
);

// Xiaohongshu (小红书 / RED) icon - 官方原版 App 图标
// 直接引用 public/xiaohongshu.png（取自苹果 App Store 官方应用图标，红底白字「小红书」）
// eslint-disable-next-line @next/next/no-img-element
export const XiaohongshuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <img
    src="/xiaohongshu.png"
    alt="小红书"
    className={props.className}
    style={{
      objectFit: 'contain',
      borderRadius: '22%',
      boxShadow: '0 2px 8px rgba(255, 36, 66, 0.35)',
      transform: 'scale(0.9)',
      transformOrigin: 'center',
    }}
    draggable={false}
  />
);

// FriendLink icon - business card stack (名片堆: 存放朋友网站地址)
// Right-column visual language: concrete object + layered depth (echoes ThisPC/Trash)
// Distinct from ArticleIcon (single document) by stacked cards + avatar motif
export const FriendLinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <radialGradient id="fl-ball" cx="0.36" cy="0.28" r="0.95">
        <stop offset="0" stopColor="#7fd8ff" />
        <stop offset="0.55" stopColor="#1e9ff0" />
        <stop offset="1" stopColor="#005cb6" />
      </radialGradient>
      <linearGradient id="fl-gloss" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ffffff" stopOpacity="0.85" />
        <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
      <clipPath id="fl-clip">
        <circle cx="24" cy="23" r="17.3" />
      </clipPath>
      <radialGradient id="fl-sh" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="#14223d" stopOpacity="0.4" />
        <stop offset="0.7" stopColor="#14223d" stopOpacity="0.15" />
        <stop offset="1" stopColor="#14223d" stopOpacity="0" />
      </radialGradient>
    </defs>
    <ellipse cx="24" cy="44.8" rx="14" ry="2.4" fill="url(#fl-sh)" />
    <g transform="rotate(-18 24 24)">
      <ellipse cx="24" cy="26" rx="22" ry="6.5" fill="none" stroke="#cfe8ff" strokeWidth="3.5" />
    </g>
    <circle cx="24" cy="23" r="17.5" fill="url(#fl-ball)" />
    <g clipPath="url(#fl-clip)">
      <path d="M9 29 A17.5 17.5 0 0 0 39 29 A22 22 0 0 1 9 29 Z" fill="#00417e" opacity="0.3" />
    </g>
    <ellipse cx="18" cy="13" rx="7.5" ry="4.2" fill="url(#fl-gloss)" opacity="0.5" transform="rotate(-16 18 13)" />
    <g transform="rotate(-18 24 24)">
      <path d="M2 26 A22 6.5 0 0 0 46 26" fill="none" stroke="#eaf5ff" strokeWidth="3.5" />
    </g>
  </svg>
);