'use client';

import { useState } from 'react';
import { MacIcons } from '@/components/icon/mac';

interface Props {
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
}

export default function WindowControls({ onClose, onMinimize, onMaximize }: Props) {
  const [hovered, setHovered] = useState<'close' | 'minimize' | 'maximize' | null>(null);

  return (
    <div className="flex space-x-2">
      {/* Close */}
      <button
        onClick={onClose}
        onMouseEnter={() => setHovered('close')}
        onMouseLeave={() => setHovered(null)}
        className="w-3.5 h-3.5"
      >
        {hovered === 'close' ? <MacIcons.closeHover /> : <MacIcons.closeNormal />}
      </button>

      {/* Minimize */}
      <button
        onClick={onMinimize}
        onMouseEnter={() => setHovered('minimize')}
        onMouseLeave={() => setHovered(null)}
        className="w-3.5 h-3.5"
      >
        {hovered === 'minimize' ? <MacIcons.minimizeHover /> : <MacIcons.minimizeNormal />}
      </button>

      {/* Maximize */}
      <button
        onClick={onMaximize}
        onMouseEnter={() => setHovered('maximize')}
        onMouseLeave={() => setHovered(null)}
        className="w-3.5 h-3.5"
      >
        {hovered === 'maximize' ? <MacIcons.maximizeHover /> : <MacIcons.maximizeNormal />}
      </button>
    </div>
  );
}
