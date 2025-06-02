'use client';
import { useWindowStore } from '@/store/windowStore';

export default function Dock() {
  const openWindow = useWindowStore((s) => s.openWindow);

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 bg-white/40 backdrop-blur-md px-6 py-2 rounded-xl shadow-lg z-50">
      <img
        src="/icons/finder.png"
        alt="Finder"
        className="w-10 h-10 hover:scale-110 transition-transform cursor-pointer"
        onClick={() => openWindow('finder')}
      />
      <img
        src="/icons/terminal.png"
        alt="Terminal"
        className="w-10 h-10 hover:scale-110 transition-transform cursor-pointer"
        onClick={() => openWindow('terminal')}
      />
    </div>
  );
}
