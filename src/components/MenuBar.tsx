'use client';

import React from 'react';
import { menuLinks } from '@/lib/constants';

interface MenuBarProps {
  onNavigate?: (iconId: string) => void;
}

export default function MenuBar({ onNavigate }: MenuBarProps) {
  return (
    <header
      className="fixed top-0 left-0 right-0 h-10 z-50 flex items-center select-none"
      style={{ background: 'transparent' }}
    >
      <div
        className="relative flex items-stretch h-full w-full"
        style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.08)' }}
      >
        {/* 左边：Munan Blog（头像 + 名字） */}
        <div className="flex items-center gap-2 px-4 h-full">
          <img src="/touxiang.jpg" alt="Munan Blog" className="w-5 h-5 rounded-full object-cover" />
          <span className="text-gray-300 font-bold text-sm tracking-wide">Munan Blog</span>
        </div>

        {/* 中间居中：导航项，每项之间细竖线分隔（首尾不加） */}
        <nav className="absolute left-1/2 -translate-x-1/2 flex items-stretch h-full">
          {menuLinks.map((link, i) => (
            <React.Fragment key={link.label}>
              {i > 0 && (
                <div
                  className="w-px self-stretch flex-shrink-0"
                  style={{ background: 'rgba(0, 0, 0, 0.08)' }}
                />
              )}
              <a
                href={link.href}
                onClick={(e) => {
                  if (onNavigate && link.iconId) {
                    e.preventDefault();
                    onNavigate(link.iconId);
                  }
                }}
                className="flex items-center px-8 h-full text-gray-300 hover:text-white text-sm hover:bg-black/[0.04] transition-colors cursor-pointer no-underline"
              >
                {link.label}
              </a>
            </React.Fragment>
          ))}
        </nav>
      </div>
    </header>
  );
}
