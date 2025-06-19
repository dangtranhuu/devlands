'use client';
import { Rnd } from 'react-rnd';
import { useWindowStore } from '@/store/windowStore';
import WindowControls from '@/components/WindowControls';

type Props = {
  id: string;
  zIndex: number;
  title: string;
  onClose: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  className?: string;
  children: React.ReactNode;
};

export default function DraggableWindowShell({
  id,
  zIndex,
  title,
  onClose,
  onMinimize,
  onMaximize,
  className,
  children,
}: Props) {
  const { focusWindow, windows } = useWindowStore.getState();
  const windowData = windows.find((w) => w.id === id);

  if (windowData?.minimized) return null;

  const isMaximized = className?.includes('w-full') && className?.includes('h-full');

  return (
    <Rnd
      default={{
        x: window.innerWidth / 2 - 300,
        y: window.innerHeight / 2 - 200,
        width: 600,
        height: 400,
      }}
      minWidth={300}
      minHeight={200}
      bounds="window"
      dragHandleClassName="title-bar"
      enableResizing={!isMaximized}
      onDragStart={() => focusWindow(id)}
      style={{ zIndex }}
      className={`absolute ${className || ''}`}
    >
      <div className="bg-white rounded-md border shadow-lg flex flex-col w-full h-full">
        <div className="title-bar flex justify-between items-center bg-gray-100 border-b px-3 py-1 cursor-move">
          <WindowControls
            onClose={onClose}
            onMinimize={onMinimize}
            onMaximize={onMaximize}
          />
          <span className="text-sm font-medium">{title}</span>
          <div />
        </div>

        <div className="overflow-auto flex-1">
          {children}
        </div>
      </div>
    </Rnd>
  );
}
