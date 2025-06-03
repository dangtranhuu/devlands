'use client';
import Draggable from 'react-draggable';
import { useWindowStore } from '@/store/windowStore';
import WindowControls from '@/app/components/WindowControls';

export default function FinderWindow({ id, zIndex }: { id: string; zIndex: number }) {
  const closeWindow = useWindowStore((s) => s.closeWindow);
  const focusWindow = useWindowStore((s) => s.focusWindow);

  return (
    <Draggable handle=".title-bar" onStart={() => focusWindow(id)}>
      <div className="absolute top-20 left-20 w-[600px]" style={{ zIndex }}>
        <div className="bg-white rounded-md border shadow-lg">
          <div className="title-bar flex items-center justify-between bg-gray-100 px-3 py-1 border-b cursor-move">
            <WindowControls onClose={() => closeWindow(id)} />
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
