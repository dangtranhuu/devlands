'use client';
import { useEffect, useState } from 'react';
import { useWindowStore } from '@/store/windowStore';

export default function MenuBar() {
  const [time, setTime] = useState('');
  const focusedId = useWindowStore((s) => s.focusedId);
  const windows = useWindowStore((s) => s.windows);

  const focusedApp = windows.find((w) => w.id === focusedId)?.app ?? 'Finder';

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  const getMenuItems = () => {
    switch (focusedApp) {
      case 'terminal':
        return ['Shell', 'Edit', 'View', 'Help'];
      case 'finder':
      default:
        return ['File', 'Edit', 'View', 'Go', 'Window', 'Help'];
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 h-7 bg-white/20 backdrop-blur-md flex justify-between px-4 text-sm text-white z-50">
      <div className="flex space-x-4 items-center">
        <span className="font-bold"></span>
        <span>{focusedApp.charAt(0).toUpperCase() + focusedApp.slice(1)}</span>
        {getMenuItems().map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className="flex items-center">{time}</div>
    </div>
  );
}
