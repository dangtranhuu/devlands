'use client';
import Draggable from 'react-draggable';
import { useWindowStore } from '@/store/windowStore';

export default function TerminalWindow({ id, zIndex }: { id: string; zIndex: number }) {
  const closeWindow = useWindowStore((s) => s.closeWindow);
  const focusWindow = useWindowStore((s) => s.focusWindow);

  return (
    <Draggable handle=".title-bar" onStart={() => focusWindow(id)}>
      <div className="absolute top-40 left-60 w-[600px]" style={{ zIndex }}>
        <div className="bg-black text-green-400 rounded-md border shadow-lg font-mono">
          <div className="title-bar flex items-center justify-between bg-gray-800 px-3 py-1 border-b border-gray-700 cursor-move">
            <div className="flex space-x-2">
              <div
                className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"
                onClick={() => closeWindow(id)}
              ></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
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
