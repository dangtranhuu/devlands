'use client';

import { useWindowStore } from '@/store/windowStore';
import clsx from 'clsx';
import { useRef, useState } from 'react';
import type { WindowType } from '@/store/windowStore';

const apps = [
  { id: 'finder', name: 'Finder', icon: '/icons/finder.png' },
  { id: 'terminal', name: 'Terminal', icon: '/icons/terminal.png' },
  { id: 'safari', name: 'Safari', icon: '/icons/safari.png' },
  { id: 'profile', name: 'Profile', icon: '/icons/profile.png' },
  { id: 'camera', name: 'Camera', icon: '/icons/camera.png' },
  { id: 'vscode', name: 'VS Code', icon: '/icons/vscode.png' },
  { id: 'github-desktop', name: 'Github Desktop', icon: '/icons/github-desktop.png' },
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
              <button
                onClick={() => openWindow(app.id as any)}
                className="transition-transform duration-150"
              >
                <img
                  src={app.icon}
                  alt={app.name}
                  className="w-[64px] h-[64px] object-contain pointer-events-none select-none"
                  draggable={false}
                />
              </button>

              {/* Dot: small, subtle, positioned just below icon */}
              <span
                className={clsx(
                  'absolute top-full left-1/2 -translate-x-1/2 mt-[2px] w-[2px] h-[2px] rounded-full transition-opacity duration-200',
                  isAppOpen
                    ? isFocused
                      ? 'bg-white opacity-100'
                      : 'bg-neutral-500 opacity-100'
                    : 'opacity-0'
                )}
              ></span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
