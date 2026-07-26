'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function CenterIllustration() {
  const isometricBlocks = [
    { x: 200, y: 280, w: 80, h: 60, color: '#5a8f3c', letter: 'P', topColor: '#6aaf4c', sideColor: '#4a7c2f' },
    { x: 290, y: 250, w: 80, h: 60, color: '#4a7c3f', letter: 'O', topColor: '#5a8f4c', sideColor: '#3a6c30' },
    { x: 380, y: 220, w: 80, h: 60, color: '#6a8f4c', letter: 'S', topColor: '#7aaf5c', sideColor: '#5a7c3c' },
    { x: 470, y: 190, w: 80, h: 60, color: '#4a8c3f', letter: 'T', topColor: '#5aac4f', sideColor: '#3a7c30' },
    { x: 560, y: 160, w: 80, h: 60, color: '#5a8f3c', letter: 'H', topColor: '#6aaf4c', sideColor: '#4a7c2f' },
    { x: 650, y: 130, w: 80, h: 60, color: '#4a7c3f', letter: 'O', topColor: '#5a8f4c', sideColor: '#3a6c30' },
    { x: 740, y: 100, w: 80, h: 60, color: '#6a8f4c', letter: 'G', topColor: '#7aaf5c', sideColor: '#5a7c3c' },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
      <motion.div
        className="relative"
        style={{ width: '900px', height: '500px' }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 900 500" className="w-full h-full" style={{ overflow: 'visible' }}>
          {/* Sky gradient background */}
          <defs>
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#e8e0d5" stopOpacity="0" />
            </linearGradient>
            <filter id="pixelShadow">
              <feDropShadow dx="2" dy="2" stdDeviation="1" floodOpacity="0.15" />
            </filter>
          </defs>

          <rect width="900" height="500" fill="url(#skyGrad)" rx="12" />

          {/* Isometric blocks forming MUNAN */}
          {isometricBlocks.map((block, i) => (
            <g key={i} filter="url(#pixelShadow)">
              {/* Top face */}
              <polygon
                points={`${block.x},${block.y} ${block.x + block.w/2},${block.y - block.h/2} ${block.x + block.w},${block.y} ${block.x + block.w/2},${block.y + block.h/2}`}
                fill={block.topColor}
                stroke="#3a5c20"
                strokeWidth="1"
              />
              {/* Left face */}
              <polygon
                points={`${block.x},${block.y} ${block.x + block.w/2},${block.y + block.h/2} ${block.x + block.w/2},${block.y + block.h/2 + 30} ${block.x},${block.y + 30}`}
                fill={block.sideColor}
                stroke="#3a5c20"
                strokeWidth="1"
              />
              {/* Right face */}
              <polygon
                points={`${block.x + block.w/2},${block.y + block.h/2} ${block.x + block.w},${block.y} ${block.x + block.w},${block.y + 30} ${block.x + block.w/2},${block.y + block.h/2 + 30}`}
                fill={block.color}
                stroke="#3a5c20"
                strokeWidth="1"
              />
              {/* Letter on top */}
              <text
                x={block.x + block.w/2}
                y={block.y + 4}
                textAnchor="middle"
                fill="white"
                fontSize="24"
                fontWeight="bold"
                fontFamily="monospace"
                opacity="0.9"
              >
                {block.letter}
              </text>
            </g>
          ))}

          {/* Hedgehog character 1 - watering */}
          <g transform="translate(180, 290)">
            <ellipse cx="12" cy="18" rx="10" ry="8" fill="#8B6914" />
            <ellipse cx="12" cy="15" rx="7" ry="6" fill="#D2A84B" />
            <circle cx="10" cy="13" r="1.5" fill="#1a1a1a" />
            <circle cx="14" cy="13" r="1.5" fill="#1a1a1a" />
            <ellipse cx="12" cy="16" rx="1.5" ry="1" fill="#1a1a1a" />
            {/* Spines */}
            {[8, 10, 12, 14, 16].map((sx, si) => (
              <line key={si} x1={sx} y1={10} x2={sx} y2={6} stroke="#5a4a10" strokeWidth="1.5" />
            ))}
            {/* Watering can */}
            <rect x="18" y="10" width="10" height="8" rx="2" fill="#4a90d9" />
            <line x1="26" y1="14" x2="34" y2="14" stroke="#4a90d9" strokeWidth="2" />
            <circle cx="36" cy="14" r="3" fill="none" stroke="#4a90d9" strokeWidth="1" />
            {/* Water drops */}
            <circle cx="38" cy="18" r="1" fill="#87CEEB" opacity="0.7" />
            <circle cx="40" cy="22" r="0.8" fill="#87CEEB" opacity="0.5" />
          </g>

          {/* Hedgehog character 2 - with shears */}
          <g transform="translate(720, 100)">
            <ellipse cx="12" cy="18" rx="9" ry="7" fill="#8B6914" />
            <ellipse cx="12" cy="15" rx="6" ry="5" fill="#D2A84B" />
            <circle cx="10" cy="13" r="1.2" fill="#1a1a1a" />
            <circle cx="14" cy="13" r="1.2" fill="#1a1a1a" />
            <ellipse cx="12" cy="16" rx="1.2" ry="0.8" fill="#1a1a1a" />
            {[8, 10, 12, 14, 16].map((sx, si) => (
              <line key={si} x1={sx} y1={10} x2={sx} y2={6} stroke="#5a4a10" strokeWidth="1.5" />
            ))}
            {/* Shears */}
            <line x1="18" y1="12" x2="30" y2="4" stroke="#888" strokeWidth="2" />
            <line x1="18" y1="12" x2="30" y2="20" stroke="#888" strokeWidth="2" />
            <circle cx="18" cy="12" r="2" fill="#666" />
          </g>

          {/* Hedgehog character 3 - with goggles near water */}
          <g transform="translate(500, 300)">
            <ellipse cx="12" cy="18" rx="10" ry="8" fill="#8B6914" />
            <ellipse cx="12" cy="15" rx="7" ry="6" fill="#D2A84B" />
            {/* Goggles */}
            <circle cx="10" cy="13" r="3" fill="none" stroke="#3b7dd8" strokeWidth="1.5" />
            <circle cx="15" cy="13" r="3" fill="none" stroke="#3b7dd8" strokeWidth="1.5" />
            <line x1="13" y1="13" x2="12" y2="13" stroke="#3b7dd8" strokeWidth="1.5" />
            <ellipse cx="12" cy="16" rx="1.5" ry="1" fill="#1a1a1a" />
            {[8, 10, 12, 14, 16].map((sx, si) => (
              <line key={si} x1={sx} y1={10} x2={sx} y2={6} stroke="#5a4a10" strokeWidth="1.5" />
            ))}
          </g>

          {/* Water pool */}
          <ellipse cx="520" cy="360" rx="40" ry="15" fill="#3b7dd8" opacity="0.6" />
          <ellipse cx="520" cy="358" rx="35" ry="12" fill="#5a9df8" opacity="0.4" />

          {/* Lily pads */}
          <ellipse cx="500" cy="355" rx="8" ry="4" fill="#4a7c3f" opacity="0.7" />
          <ellipse cx="540" cy="358" rx="6" ry="3" fill="#5a8f3c" opacity="0.7" />

          {/* Small flowers */}
          <circle cx="498" cy="352" r="2" fill="#ff6b8a" />
          <circle cx="542" cy="355" r="1.5" fill="#ffab3d" />

          {/* Castle/Building */}
          <g transform="translate(420, 240)">
            {/* Base */}
            <rect x="0" y="20" width="60" height="40" rx="2" fill="#a0724a" stroke="#7a5230" strokeWidth="1.5" />
            {/* Towers */}
            <rect x="-5" y="5" width="18" height="55" fill="#b0805a" stroke="#7a5230" strokeWidth="1" />
            <rect x="47" y="5" width="18" height="55" fill="#b0805a" stroke="#7a5230" strokeWidth="1" />
            {/* Tower tops */}
            <polygon points="-5,5 4,-8 13,5" fill="#c84040" stroke="#a03030" strokeWidth="1" />
            <polygon points="47,5 56,-8 65,5" fill="#c84040" stroke="#a03030" strokeWidth="1" />
            {/* Gate */}
            <path d="M24 60 L24 38 A6 6 0 0 1 36 38 L36 60" fill="#5a3a1a" stroke="#3a2010" strokeWidth="1" />
            {/* Windows */}
            <rect x="10" y="30" width="6" height="8" rx="3" fill="#87CEEB" stroke="#7a5230" strokeWidth="0.8" opacity="0.7" />
            <rect x="44" y="30" width="6" height="8" rx="3" fill="#87CEEB" stroke="#7a5230" strokeWidth="0.8" opacity="0.7" />
          </g>

          {/* Ground patches */}
          <ellipse cx="200" cy="350" rx="120" ry="20" fill="#5a8f3c" opacity="0.3" />
          <ellipse cx="700" cy="200" rx="100" ry="18" fill="#5a8f3c" opacity="0.3" />
          <ellipse cx="450" cy="380" rx="150" ry="22" fill="#5a8f3c" opacity="0.25" />
        </svg>
      </motion.div>
    </div>
  );
}