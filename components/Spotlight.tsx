'use client';

import { useEffect, useRef } from 'react';
import { useSpotlightStore } from '@/store/spotlightStore';
import { useWindowStore } from '@/store/windowStore';

export default function Spotlight() {
  const { isOpen, query, setQuery, close } = useSpotlightStore();
  const { openWindow } = useWindowStore();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === ' ') {
        e.preventDefault();
        useSpotlightStore.getState().open();
      } else if (e.key === 'Escape') {
        close();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [close]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.toLowerCase().includes('finder')) openWindow('finder');
    else if (query.toLowerCase().includes('terminal')) openWindow('terminal');
    close();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <form
        onSubmit={handleSubmit}
        className="w-[500px] bg-white rounded-xl shadow-2xl p-4 flex items-center space-x-2"
      >
        <span className="text-xl">🔍</span>
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full outline-none text-lg"
          placeholder="Search apps (Finder, Terminal)…"
        />
      </form>
    </div>
  );
}
