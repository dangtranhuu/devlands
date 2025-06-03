'use client';

import { useEffect, useState } from 'react';
import { useWindowStore } from '@/store/windowStore';
import { useSpotlightStore } from '@/store/spotlightStore';
import { FaWifi, FaSearch, FaApple } from 'react-icons/fa';
import { MdBatteryChargingFull, MdBatteryFull } from 'react-icons/md';
import { IoIosOptions } from 'react-icons/io';

export default function MenuBar() {
  const [time, setTime] = useState('');
  const [batteryPercent] = useState(100);
  const [charging] = useState(true); // giả lập đang sạc
  const [showControl, setShowControl] = useState(false);

  const { open } = useSpotlightStore();
  const focusedId = useWindowStore((s) => s.focusedId);
  const windows = useWindowStore((s) => s.windows);
  const focusedApp = windows.find((w) => w.id === focusedId)?.app ?? 'finder';

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
      };
      setTime(now.toLocaleString('en-US', options));
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
        <FaApple className="invert w-4 h-4" />
        <span className="font-semibold capitalize">{focusedApp}</span>
        {getMenuItems().map((item) => (
          <span
            key={item}
            className="hover:bg-white/30 px-2 py-1 rounded transition-colors cursor-default"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex items-center space-x-3 relative">
        {/* Battery */}
        <div className="flex items-center space-x-1">
          {charging ? (
            <MdBatteryChargingFull className="text-green-400 w-5 h-5" />
          ) : (
            <MdBatteryFull className="w-5 h-5" />
          )}
          <span className="text-xs">{batteryPercent}%</span>
        </div>

        {/* Wi-Fi */}
        <FaWifi className="invert w-4 h-4" />

        {/* Spotlight */}
        <button
          onClick={() => open()}
          className="hover:bg-white/30 rounded px-1 py-0.5 transition-colors"
        >
          <FaSearch className="invert w-4 h-4" />
        </button>

        {/* Control Center toggle */}
        <button
          onClick={() => setShowControl((prev) => !prev)}
          className="hover:bg-white/30 rounded px-1 py-0.5 transition-colors"
        >
          <IoIosOptions className="invert w-5 h-5" />
        </button>

        {/* Time */}
        <span>{time}</span>

        {/* Control Center dropdown */}
        {showControl && (
          <div className="absolute right-0 top-7 mt-2 w-80 bg-white rounded-xl shadow-2xl p-4 text-black z-[9999]">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col">
                <span className="font-medium">Wi-Fi</span>
                <span className="text-xs text-gray-500">Home</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Light Mode</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Bluetooth</span>
                <span className="text-xs text-gray-500">On</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">AirDrop</span>
                <span className="text-xs text-gray-500">Contacts Only</span>
              </div>
              <div className="flex flex-col col-span-2">
                <span className="font-medium">Display</span>
                <input type="range" min="0" max="100" defaultValue="80" />
              </div>
              <div className="flex flex-col col-span-2">
                <span className="font-medium">Sound</span>
                <input type="range" min="0" max="100" defaultValue="50" />
              </div>
              <div className="col-span-2">
                <div className="flex items-center justify-between bg-gray-100 rounded p-2">
                  <div>
                    <p className="text-sm font-medium">Sunflower</p>
                    <p className="text-xs text-gray-500">Post Malone / Swae Lee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
