'use client';

import { useWindowStore } from '@/store/windowStore';
import clsx from 'clsx';
import { useRef, useState } from 'react';
import type { WindowType } from '@/store/windowStore';
import CalendarIcon from './icon/calendar';

type AppItem = {
  id: string;
  name: string;
  icon?: string;
  iconComponent?: React.ReactNode;
  href?: string;
};

const apps: AppItem[] = [
  { id: 'finder', name: 'Finder', icon: '/icons/finder.png' },
  { id: 'terminal', name: 'Terminal', icon: '/icons/terminal.png' },
  { id: 'safari', name: 'Safari', icon: '/icons/safari.png' },
  { id: 'calendar', name: 'Calendar', iconComponent: <CalendarIcon /> },
  { id: 'profile', name: 'Profile', icon: '/icons/profile.png' },
  { id: 'camera', name: 'Camera', icon: '/icons/camera.png' },
  { id: 'vscode', name: 'VS Code', icon: '/icons/vscode.png' },
  { id: 'github-desktop', name: 'Github', icon: '/icons/ghd.png', href: 'https://github.com/dangtranhuu' },
];

export default function Dock() {
  const openWindow = useWindowStore((s) => s.openWindow);
  const windows = useWindowStore((s) => s.windows);
  const focusedId = useWindowStore((s) => s.focusedId);
  const focusedApp = windows.find((w) => w.id === focusedId)?.app;

  const [mouseX, setMouseX] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const dockRef = useRef<HTMLDivElement>(null);

  const iconSize = 72;

  const isOpen = (appId: string) => windows.some((w) => w.app === appId);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = dockRef.current?.getBoundingClientRect();
    if (!rect) return;

    const relativeX = e.clientX - rect.left;
    setMouseX(relativeX);

    const index = Math.floor(relativeX / iconSize);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setMouseX(null);
    setHoveredIndex(null);
  };

  const getTransform = (index: number): string => {
    if (hoveredIndex === null) return 'scale(1) translate(0, 0)';

    const distance = index - hoveredIndex;

    if (index === hoveredIndex) {
      return 'scale(1.5) translate(0, -10px)';
    }

    const shift = 20 * Math.exp(-Math.abs(distance));
    const translateX = distance > 0 ? shift : -shift;

    return `translate(${translateX}px, 0)`;
  };

  const restoreWindow = useWindowStore((s) => s.restoreWindow);
  const handleClick = (appId: WindowType) => {
    const existing = windows.find((w) => w.app === appId);
    if (existing?.minimized) {
      restoreWindow(existing.id);
    } else {
      openWindow(appId);
    }
  };


  return (
    <div
      ref={dockRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex px-2 py-1 bg-white/20 backdrop-blur-md rounded-xl shadow-md z-50"
    >
      {apps.map((app, index) => {
        const isFocused = focusedApp === app.id;
        const isAppOpen = isOpen(app.id);

        return (
          <div
            key={app.id}
            className="relative flex flex-col items-center"
            style={{
              width: iconSize,
              transition: 'transform 0.15s ease',
              transform: getTransform(index),
            }}
          >
            {/* Label */}
            <div
              className={clsx(
                'absolute -top-7 px-1.5 py-0.5 text-xs text-black bg-white/80 rounded shadow-sm',
                'flex items-center justify-center whitespace-nowrap',
                index === hoveredIndex ? 'opacity-100' : 'opacity-0 pointer-events-none',
                'transition-opacity duration-150'
              )}
            >
              {app.name}
              {/* <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white/80 rotate-45 z-[-1]" /> */}
            </div>

            {/* Icon */}
            <div className="relative">
              {app.href ? (
                <a
                  href={app.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-150 block"
                >
                  {app.iconComponent ? (
                    <div className="w-[64px] h-[64px] flex items-center justify-center">
                      {app.iconComponent}
                    </div>
                  ) : (
                    <img
                      src={app.icon}
                      alt={app.name}
                      className="w-[64px] h-[64px] object-contain pointer-events-none select-none"
                      draggable={false}
                    />
                  )}

                </a>
              ) : (
                <button
                  onClick={() => handleClick(app.id as WindowType)}
                  className="transition-transform duration-150"
                >
                  {app.iconComponent ? (
                    <div className="w-[64px] h-[64px] flex items-center justify-center">
                      {app.iconComponent}
                    </div>
                  ) : (
                    <img
                      src={app.icon}
                      alt={app.name}
                      className="w-[64px] h-[64px] object-contain pointer-events-none select-none"
                      draggable={false}
                    />
                  )}
                </button>
              )}
            </div>

          </div>
        );
      })}
    </div>
  );
}
