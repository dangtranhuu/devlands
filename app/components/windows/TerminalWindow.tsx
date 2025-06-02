'use client';

export default function TerminalWindow() {
  return (
    <div className="absolute top-40 left-60 w-[600px] bg-black text-green-400 rounded-md border shadow-lg z-10">
      <div className="flex items-center justify-between bg-gray-800 px-3 py-1 border-b border-gray-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-sm text-white">Terminal</span>
        <div />
      </div>
      <div className="p-4 font-mono">
        <p>Last login: Mon Jun 2 11:00:00 on ttys000</p>
        <p>$ echo "Welcome to macOS UI"</p>
        <p>Welcome to macOS UI</p>
      </div>
    </div>
  );
}
