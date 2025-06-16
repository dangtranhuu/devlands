
'use client';

import DraggableWindowShell from '@/components/DraggableWindowShell';
import { useWindowStore } from '@/store/windowStore';
import { useState } from 'react';

export default function VSCodeWindow({ id, zIndex }: { id: string; zIndex: number }) {
  const { closeWindow, minimizeWindow } = useWindowStore.getState();
  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <DraggableWindowShell
      id={id}
      zIndex={zIndex}
      title="Visual Studio Code"
      onClose={() => closeWindow(id)}
      onMinimize={() => minimizeWindow(id)}
      onMaximize={() => setIsMaximized((v) => !v)}
      className={isMaximized ? 'top-0 left-0 w-full h-full' : 'w-[960px] h-[600px]'}
    >
      <iframe
        src="https://github1s.com/dangtranhuu/dangth/tree/main"
        title="VSCode Preview"
        className="w-full h-full border-none rounded-md"
      />
    </DraggableWindowShell>
  );
}
