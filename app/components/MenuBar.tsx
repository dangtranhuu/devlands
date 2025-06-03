'use client';

import { useEffect, useState } from 'react';
import { useWindowStore } from '@/store/windowStore';
import { useSpotlightStore } from '@/store/spotlightStore';
import { FaWifi, FaSearch, FaApple } from 'react-icons/fa';
import { CiBatteryFull } from 'react-icons/ci';
import clsx from 'clsx';

export default function MenuBar() {
  const [time, setTime] = useState('');
  const [batteryPercent] = useState(87); // fake, bạn có thể lấy real nếu muốn
  const { isOpen, open } = useSpotlightStore();
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
        <FaApple className="invert w-4 h-4" />
        {/* App name */}
        <span className="font-semibold capitalize">{focusedApp}</span>
        {/* Dynamic menu */}
        {getMenuItems().map((item) => (
          <span
            key={item}
            className="hover:bg-white/30 px-2 py-1 rounded transition-colors cursor-default"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex items-center space-x-3">
        {/* Wi-Fi */}
        <FaWifi className="invert w-4 h-4" />
        {/* Battery */}
        <div className="flex items-center space-x-1">
          <CiBatteryFull className="invert w-5 h-5" />
          <span className="text-xs">{batteryPercent}%</span>
        </div>
        {/* Spotlight */}
        <button
          onClick={() => open()}
          className="hover:bg-white/30 rounded px-1 py-0.5 transition-colors"
        >
          <FaSearch className="invert w-4 h-4" />
        </button>
        {/* Time */}
        <span>{time}</span>
      </div>
    </div>
  );
}
