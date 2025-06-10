'use client';
import Draggable from 'react-draggable';
import { useWindowStore } from '@/store/windowStore';
import WindowControls from '@/components/WindowControls';

export default function SafariWindow({ id, zIndex }: { id: string; zIndex: number }) {
  const windowData = useWindowStore((s) =>
    s.windows.find((w) => w.id === id)
  );

  const closeWindow = useWindowStore((s) => s.closeWindow);
  const focusWindow = useWindowStore((s) => s.focusWindow);

  if (windowData?.minimized) return null;

  return (
    <Draggable handle=".title-bar" onStart={() => focusWindow(id)}>
      <div className="absolute top-40 left-60 w-[600px]" style={{ zIndex }}>
        <div className="bg-black text-green-400 rounded-md border shadow-lg font-mono">
          <div className="title-bar flex items-center justify-between bg-gray-800 px-3 py-1 border-b border-gray-700">
            <div className="flex space-x-2">
              <WindowControls onClose={() => closeWindow(id)} />
            </div>
            <span className="text-sm text-white">Safari</span>
            <div />
          </div>
          <div className="p-4 text-sm">
            <iframe
              src="https://github.com/dangtranhuu"
              className="flex-1 w-full border-none"
              title="Safari"
            ></iframe>
          </div>
        </div>
      </div>
    </Draggable>

  );
}
