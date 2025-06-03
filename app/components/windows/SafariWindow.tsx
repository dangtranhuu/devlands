'use client';

import WindowControls from '@/app/components/WindowControls';

export default function SafariWindow() {
  return (
    <div className="absolute top-32 left-40 w-[800px] h-[500px] bg-white rounded-md border shadow-lg z-10 flex flex-col">
      <div className="flex items-center justify-between bg-gray-100 px-3 py-1 border-b">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-sm">Safari</span>
        <div />
      </div>
      <iframe
        src="https://example.com"
        className="flex-1 w-full border-none"
        title="Safari"
      ></iframe>
    </div>
  );
}
