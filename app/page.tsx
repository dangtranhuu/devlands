'use client';

import MenuBar from '@/components/MenuBar';
import Dock from '@/components/Dock';
import Spotlight from '@/components/Spotlight';
import { useWindowStore } from '@/store/windowStore';
import FinderWindow from '@/components/windows/FinderWindow';
import TerminalWindow from '@/components/windows/TerminalWindow';
import VSCodeWindow from '@/components/windows/VSCodeWindow';

export default function Home() {
  const windows = useWindowStore((s) => s.windows);

  return (
    <main className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('/wallpapers/default.jpg')` }}
      ></div>

      <MenuBar />

      {windows.map((w) => {
        if (w.app === 'finder') return <FinderWindow key={w.id} id={w.id} zIndex={w.zIndex} />;
        if (w.app === 'terminal') return <TerminalWindow key={w.id} id={w.id} zIndex={w.zIndex} />;
        if (w.app === 'vscode') return <VSCodeWindow key={w.id} id={w.id} zIndex={w.zIndex} />;
        return null;
      })}

      <Dock />
      <Spotlight />
    </main>
  );
}
