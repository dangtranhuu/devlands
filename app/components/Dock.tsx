'use client';

import { useWindowStore } from '@/store/windowStore';
import clsx from 'clsx';

const apps = [
  { id: 'finder', name: 'Finder', icon: '/icons/finder.png' },
  { id: 'terminal', name: 'Terminal', icon: '/icons/terminal.png' },
  { id: 'safari', name: 'Safari', icon: '/icons/safari.png' },
];

export default function Dock() {
  const openWindow = useWindowStore((s) => s.openWindow);
  const windows = useWindowStore((s) => s.windows);
  const focusedId = useWindowStore((s) => s.focusedId);
  const focusedApp = windows.find((w) => w.id === focusedId)?.app;

  const isOpen = (appId: string) => windows.some((w) => w.app === appId);

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4 px-4 py-2 bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl z-50">
      {apps.map((app) => (
        <div key={app.id} className="relative group flex flex-col items-center">
          <button
            onClick={() => openWindow(app.id as any)}
            className="transition-transform duration-150 hover:scale-125 active:scale-95"
          >
            <img
              src={app.icon}
              alt={app.name}
              className="w-12 h-12 object-contain"
              draggable={false}
            />
          </button>

          {/* Indicator dot */}
          {isOpen(app.id) && (
            <span
              className={clsx(
                'w-2 h-2 rounded-full mt-1',
                focusedApp === app.id ? 'bg-white' : 'bg-gray-300'
              )}
            ></span>
          )}
        </div>
      ))}
    </div>
  );
}
