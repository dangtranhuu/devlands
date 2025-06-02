'use client';
import Draggable from 'react-draggable';
import { useWindowStore } from '@/store/windowStore';

export default function FinderWindow({ id, zIndex }: { id: string; zIndex: number }) {
  const closeWindow = useWindowStore((s) => s.closeWindow);
  const focusWindow = useWindowStore((s) => s.focusWindow);

  return (
    <Draggable handle=".title-bar" onStart={() => focusWindow(id)}>
      <div className="absolute top-20 left-20 w-[600px]" style={{ zIndex }}>
        <div className="bg-white rounded-md border shadow-lg">
          <div className="title-bar flex items-center justify-between bg-gray-100 px-3 py-1 border-b cursor-move">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer" onClick={() => closeWindow(id)}></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-sm">Finder</span>
            <div />
          </div>
          <div className="p-4">
            <p>📁 Đây là Finder đang mở.</p>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
