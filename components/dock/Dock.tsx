'use client';

import { useMotionValue } from 'framer-motion';
import DockItem from './DockItem';
import { useWindowStore } from '@/store/windowStore';
import CalendarIcon from '../icon/calendar';

export type AppItem = {
  id: string;
  name: string;
  icon?: string;
  iconComponent?: React.ReactNode;
  href?: string;
};

const apps: AppItem[] = [
  { id: 'finder', name: 'Finder', icon: '/icons/finder.png' },
  { id: 'terminal', name: 'Terminal', icon: '/icons/terminal.png' },
  { id: 'safari', name: 'Safari', icon: '/icons/safari.png' },
  { id: 'calendar', name: 'Calendar', iconComponent: <CalendarIcon /> },
  { id: 'profile', name: 'Profile', icon: '/icons/profile.png' },
  { id: 'camera', name: 'Camera', icon: '/icons/camera.png' },
  { id: 'vscode', name: 'VS Code', icon: '/icons/vscode.png' },
  {
    id: 'github-desktop',
    name: 'Github',
    icon: '/icons/ghd.png',
    href: 'https://github.com/dangtranhuu'
  }
];

export default function Dock() {
  const mouseX = useMotionValue<number | null>(null);

  const dockSize = 55;
  const dockMag = 1.8;

  const openWindow = useWindowStore((s) => s.openWindow);
  const restoreWindow = useWindowStore((s) => s.restoreWindow);
  const windows = useWindowStore((s) => s.windows);

  const openApp = (id: string) => {
    const win = windows.find((w) => w.app === id);
    if (win?.minimized) {
      restoreWindow(win.id);
    } else {
      openWindow(id as any);
    }
  };

  const isOpen = (id: string) => windows.some((w) => w.app === id);

  return (
    <div
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(null)}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 flex px-4 py-2 space-x-4
                 bg-black/30 backdrop-blur-md border border-white/10
                 rounded-2xl shadow-2xl z-50 h-[70px] items-end overflow-visible"
    >
      {apps.map((app) => (
        <DockItem
          key={app.id}
          app={app}
          mouseX={mouseX}
          openApp={openApp}
          isOpen={isOpen(app.id)}
          dockSize={dockSize}
          dockMag={dockMag}
        />
      ))}
    </div>
  );
}
