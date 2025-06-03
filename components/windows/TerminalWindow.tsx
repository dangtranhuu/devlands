'use client';
import { useState } from 'react';
import Draggable from 'react-draggable';
import { useWindowStore } from '@/store/windowStore';
import WindowControls from '@/components/WindowControls';

export default function TerminalWindow({ id, zIndex }: { id: string; zIndex: number }) {
  const closeWindow = useWindowStore((s) => s.closeWindow);
  const focusWindow = useWindowStore((s) => s.focusWindow);
  const windowData = useWindowStore((s) =>
    s.windows.find((w) => w.id === id)
  );

  const minimizeWindow = useWindowStore((s) => s.minimizeWindow);
  const [isMaximized, setIsMaximized] = useState(false); // 👈 THÊM DÒNG NÀY

  if (windowData?.minimized) return null;


  return (
    <Draggable handle=".title-bar" onStart={() => focusWindow(id)}>
      <div
        className={`absolute ${isMaximized ? 'top-0 left-0 w-full h-full' : 'top-40 left-60 w-[600px]'
          }`}
        style={{ zIndex }}
      >

        <div className="bg-black text-green-400 rounded-md border shadow-lg font-mono">
          <div className="title-bar flex items-center justify-between bg-gray-800 px-3 py-1 border-b border-gray-700">
            <div className="flex space-x-2">
              <WindowControls
                onClose={() => closeWindow(id)}
                onMinimize={() => minimizeWindow(id)} // <-- THÊM
                onMaximize={() => setIsMaximized((prev) => !prev)}
              />

            </div>
            <span className="text-sm text-white">Terminal</span>
            <div />
          </div>
          <div className="p-4 text-sm">
            <p>Last login: Mon Jun 2 11:00:00 on ttys000</p>
            <p>$ echo &ldquo;Hello macOS UI&ldquo;</p>
            <p>Hello macOS UI</p>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
