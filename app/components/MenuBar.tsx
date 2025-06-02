'use client';
import { useEffect, useState } from 'react';
import { useWindowStore } from '@/store/windowStore';
import Image from 'next/image';

export default function MenuBar() {
  const [time, setTime] = useState('');
  const focusedId = useWindowStore((s) => s.focusedId);
  const windows = useWindowStore((s) => s.windows);

  const focusedApp = windows.find((w) => w.id === focusedId)?.app ?? 'finder';

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        hour: '2-digit',
        minute: '2-digit',
      };
      setTime(now.toLocaleTimeString('en-US', options));
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  const getMenuItems = () => {
    switch (focusedApp) {
      case 'terminal':
        return ['Shell', 'Edit', 'View', 'Window', 'Help'];
      case 'safari':
        return ['File', 'Edit', 'View', 'History', 'Bookmarks', 'Window', 'Help'];
      case 'finder':
      default:
        return ['File', 'Edit', 'View', 'Go', 'Window', 'Help'];
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 h-7 bg-white/20 backdrop-blur-md flex justify-between px-4 text-sm text-white z-50 font-light select-none">
      <div className="flex items-center space-x-4 h-full">
        {/* Apple logo */}
        <Image src="/icons/apple.svg" alt="Apple" width={16} height={16} className="invert" />

        {/* App name */}
        <span className="font-semibold">{focusedApp.charAt(0).toUpperCase() + focusedApp.slice(1)}</span>

        {/* Dynamic menu items */}
        {getMenuItems().map((item) => (
          <span
            key={item}
            className="hover:bg-white/30 px-2 py-1 rounded transition-colors cursor-default"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex items-center space-x-2">
        {/* (Optional icons) Wi-Fi, battery, spotlight */}
        <Image src="/icons/wifi.svg" alt="WiFi" width={16} height={16} className="invert" />
        <Image src="/icons/battery.svg" alt="Battery" width={16} height={16} className="invert" />
        <Image src="/icons/spotlight.svg" alt="Search" width={16} height={16} className="invert" />
        <span className="ml-2">{time}</span>
      </div>
    </div>
  );
}
