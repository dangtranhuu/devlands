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

  return (
    <Draggable handle=".title-bar" nodeRef={nodeRef} onStart={() => focusWindow(id)}>
      <div ref={nodeRef} className={`absolute top-40 left-60 ${className}`} style={{ zIndex }}>
        <div className="bg-white rounded-md border shadow-lg">
          <div className="title-bar flex justify-between items-center bg-gray-100 border-b px-3 py-1">
            <WindowControls
              onClose={onClose}
              onMinimize={onMinimize}
              onMaximize={onMaximize}
            />
            <span className="text-sm font-medium">{title}</span>
            <div />
          </div>
          <div className="p-4">{children}</div>
        </div>
      </div>
    </Draggable>
  );
}
