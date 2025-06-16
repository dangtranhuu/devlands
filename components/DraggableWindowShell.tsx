'use client';
import { useRef } from 'react';
import Draggable from 'react-draggable';
import { useWindowStore } from '@/store/windowStore';
import WindowControls from '@/components/WindowControls';

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
  className,
  children,
}: Props) {
  const nodeRef = useRef(null);
  const { focusWindow, windows } = useWindowStore.getState();
  const windowData = windows.find((w) => w.id === id);

  if (windowData?.minimized) return null;

  const isMaximized = className?.includes('w-full') && className?.includes('h-full');

  return (
    <Draggable handle=".title-bar" nodeRef={nodeRef} onStart={() => focusWindow(id)}>
      <div
        ref={nodeRef}
        className={`absolute ${className}`}
        style={{
          zIndex,
          top: isMaximized ? 28 : 'calc(50vh - 200px)',   // 400 / 2
          left: isMaximized ? 0 : 'calc(50vw - 300px)',    // 600 / 2
          transform: isMaximized ? 'translate(0px, 0px)' : undefined,
        }}

      >
        <div className="bg-white rounded-md border shadow-lg flex flex-col h-full">
          <div className="title-bar flex justify-between items-center bg-gray-100 border-b px-3 py-1">
            <WindowControls
              onClose={onClose}
              onMinimize={onMinimize}
              onMaximize={onMaximize}
            />
            <span className="text-sm font-medium">{title}</span>
            <div />
          </div>

          {/* Nội dung */}
          <div className={`overflow-auto h-[100%] ${isMaximized ? 'flex-1' : ''}`}>
            {children}
          </div>
        </div>
      </div>
    </Draggable>
  );
}
