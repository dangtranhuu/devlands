'use client';

import DraggableWindowShell from '@/components/DraggableWindowShell';
import { useWindowStore } from '@/store/windowStore';
import { useState } from 'react';

export default function TerminalWindow({ id, zIndex }: { id: string; zIndex: number }) {
  const { closeWindow, minimizeWindow } = useWindowStore.getState();
  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <DraggableWindowShell
      id={id}
      zIndex={zIndex}
      title="Finder"
      onClose={() => closeWindow(id)}
      onMinimize={() => minimizeWindow(id)}
      onMaximize={() => setIsMaximized((v) => !v)}
      className={isMaximized ? 'top-0 left-0 w-full h-full' : 'w-[600px]'}
    >
      <div className="p-4">
        <p>📁 Đây là Finder đang mở.</p>
      </div>
    </DraggableWindowShell>
  );
}
