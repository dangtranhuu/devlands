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
      title="Terminal"
      onClose={() => closeWindow(id)}
      onMinimize={() => minimizeWindow(id)}
      onMaximize={() => setIsMaximized((v) => !v)}
      className={isMaximized ? 'top-0 left-0 w-full h-full' : 'w-[600px]'}
    >
      <div className="text-green-400 font-mono text-sm">
        <p>Last login: Mon Jun 2 11:00:00 on ttys000</p>
        <p>$ echo &ldquo;Hello macOS UI&ldquo;</p>
        <p>Hello macOS UI</p>
      </div>
    </DraggableWindowShell>
  );
}
