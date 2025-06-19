'use client';

import { useEffect, useState } from 'react';
import { Rnd } from 'react-rnd';
import { useWindowStore } from '@/store/windowStore';
import WindowControls from '@/components/WindowControls';
import clsx from 'clsx';

type Props = {
  id: string;
  zIndex: number;
  title: string;
  onClose: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  className?: string;
  children: React.ReactNode;
};

export default function DraggableWindowShell({
  id,
  zIndex,
  title,
  onClose,
  onMinimize,
  onMaximize,
  children,
}: Props) {
  const { focusWindow, windows } = useWindowStore.getState();
  const windowData = windows.find((w) => w.id === id);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timeout);
  }, []);

  if (windowData?.minimized) return null;

  const width = 600;
  const height = 400;

  return (
    <Rnd
      default={{
        x: typeof window !== 'undefined' ? window.innerWidth / 2 - width / 2 : 100,
        y: typeof window !== 'undefined' ? window.innerHeight / 2 - height / 2 : 100,
        width,
        height,
      }}
      size={
        isMaximized
          ? {
            width: typeof window !== 'undefined' ? window.innerWidth : '100%',
            height: typeof window !== 'undefined' ? window.innerHeight - 28 : '100%',
          }
          : undefined
      }
      position={isMaximized ? { x: 0, y: 28 } : undefined}
      enableResizing={!isMaximized}
      disableDragging={isMaximized}
      bounds="window"
      dragHandleClassName="title-bar"
      onDragStart={() => focusWindow(id)}
      style={{
        zIndex,
        transform: isAnimating
          ? 'scale(0.8) translateY(20px)'
          : 'scale(1) translate(0, 0)',
        transition: 'transform 300ms ease-out, opacity 300ms',
        opacity: isAnimating ? 0 : 1,
      }}
      className={clsx('absolute')}
    >
      <div className="bg-white rounded-md border shadow-lg flex flex-col w-full h-full overflow-hidden">
        {/* Title bar */}
        <div className="title-bar flex justify-between items-center bg-gray-100 border-b px-3 py-1 cursor-move">
          <WindowControls
            onClose={onClose}
            onMinimize={onMinimize}
            onMaximize={() => {
              setIsMaximized((v) => !v); // 🔥 Toggle trạng thái fullscreen
              onMaximize?.(); // Gọi callback nếu cần
            }}
          />
          <span className="text-sm font-medium">{title}</span>
          <div />
        </div>

        {/* Nội dung */}
        <div className="overflow-auto flex-1">{children}</div>
      </div>
    </Rnd>
  );
}
