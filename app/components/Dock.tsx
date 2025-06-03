'use client';

import { useWindowStore } from '@/store/windowStore';
import clsx from 'clsx';
import { useRef, useState } from 'react';

const apps = [
  { id: 'finder', name: 'Finder', icon: '/icons/finder.png' },
  { id: 'terminal', name: 'Terminal', icon: '/icons/terminal.png' },
  { id: 'safari', name: 'Safari', icon: '/icons/safari.png' },
];

export default function Dock() {
  const openWindow = useWindowStore((s) => s.openWindow);
  const windows = useWindowStore((s) => s.windows);
  const focusedId = useWindowStore((s) => s.focusedId);
  const focusedApp = windows.find((w) => w.id === focusedId)?.app;

  const [mouseX, setMouseX] = useState<number | null>(null);
  const dockRef = useRef<HTMLDivElement>(null);

  const iconSize = 64; // Width of icon container including spacing

  const isOpen = (appId: string) => windows.some((w) => w.app === appId);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = dockRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouseX(e.clientX - rect.left);
  };

  const handleMouseLeave = () => {
    setMouseX(null);
  };

  const getHoveredIndex = (): number | null => {
    if (mouseX === null) return null;
    return Math.floor(mouseX / iconSize);
  };

  const hoveredIndex = getHoveredIndex();

  const getTransform = (index: number): string => {
    if (hoveredIndex === null) return 'scale(1) translate(0, 0)';

    const distance = index - hoveredIndex;

    // Icon đang được hover
    if (index === hoveredIndex) {
      return 'scale(1.5) translate(0, -10px)';
    }

    // Icon bên cạnh bị đẩy sang trái/phải
    const shift = 20 * Math.exp(-Math.abs(distance));
    const translateX = distance > 0 ? shift : -shift;

    return `translate(${translateX}px, 0)`;
  };

  return (
    <div
      ref={dockRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex px-4 py-2 bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl z-50"
    >
      {apps.map((app, index) => (
        <div
          key={app.id}
          className="relative group flex flex-col items-center"
          style={{
            width: iconSize,
            transition: 'transform 0.15s ease',
            transform: getTransform(index),
          }}
        >
          <button
            onClick={() => openWindow(app.id as any)}
            className="transition-transform duration-150"
          >
            <img
              src={app.icon}
              alt={app.name}
              className="w-12 h-12 object-contain pointer-events-none select-none"
              draggable={false}
            />
          </button>

          {isOpen(app.id) && (
            <span
              className={clsx(
                'w-2 h-2 rounded-full mt-1',
                focusedApp === app.id ? 'bg-white' : 'bg-gray-300'
              )}
            ></span>
          )}
        </div>
      ))}
    </div>
  );
}
