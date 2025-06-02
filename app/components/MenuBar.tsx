// app/components/MenuBar.tsx
'use client';

import { useEffect, useState } from 'react';

export default function MenuBar() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-7 bg-white/20 backdrop-blur-md flex justify-between px-4 text-sm text-white z-50">
      <div className="flex space-x-4 items-center">
        <span className="font-bold"></span>
        <span>Finder</span>
        <span>File</span>
        <span>Edit</span>
      </div>
      <div className="flex items-center">{time}</div>
    </div>
  );
}
