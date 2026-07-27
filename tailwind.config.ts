import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'desktop-bg': '#e8e0d5',
        'menu-bar': '#1a1a1a',
        'cta-orange': '#f54e00',
        'cta-orange-hover': '#e04d00',
        'icon-red': '#c84040',
        'icon-blue': '#4a90d9',
        'icon-green': '#4a7c3f',
        'icon-brown': '#8b6914',
        'icon-yellow': '#d4a843',
        'icon-gray': '#6b6b6b',
        'pixel-green': '#4a7c3f',
        'pixel-brown': '#8b6914',
        'pixel-blue': '#4a90d9',
        'pixel-grass': '#5a8f3c',
        'pixel-water': '#3b7dd8',
        'pixel-wood': '#a0724a',
        'pixel-stone': '#8a8a8a',
      },
      fontFamily: {
        pixel: ['"Courier New"', '"Lucida Console"', 'monospace'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;