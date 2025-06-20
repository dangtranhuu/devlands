'use client';

import React, { useRef } from 'react';
import { motion, type MotionValue } from 'framer-motion';
import { useDockHoverAnimation } from '@/hooks/useDockHoverAnimation';
import type { AppItem } from './Dock';
import clsx from 'clsx';

interface Props {
  app: AppItem;
  mouseX: MotionValue<number | null>;
  openApp: (id: string) => void;
  isOpen: boolean;
  dockSize: number;
  dockMag: number;
}

export default function DockItem({
  app,
  mouseX,
  openApp,
  isOpen,
  dockSize,
  dockMag
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { width } = useDockHoverAnimation(mouseX, ref, dockSize, dockMag);

  return (
    <li className="relative group flex flex-col items-center justify-end mb-1">
      {/* Tooltip */}
      <p className="absolute bottom-full mb-2 text-xs px-2 py-0.5 bg-gray-800 text-white rounded-md shadow
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
        {app.name}
      </p>

      <div ref={ref} className="flex items-end justify-center aspect-square w-full">
        {app.href ? (
          <a href={app.href} target="_blank" rel="noopener noreferrer">
            <motion.img
              src={app.icon}
              alt={app.name}
              draggable={false}
              className="object-contain aspect-square max-w-full max-h-full rounded-[20%] drop-shadow-md
                         transition-transform duration-200 group-hover:translate-y-0 translate-y-2"
              style={{ width, willChange: 'width' }}
            />
          </a>
        ) : (
          <motion.button onClick={() => openApp(app.id)} style={{ width }}>
            {app.iconComponent ? (
              <motion.div
                ref={ref}
                style={{ width }}
                className="aspect-square flex items-end justify-center
                           transition-transform duration-200 group-hover:translate-y-0 translate-y-2"
              >
                {React.cloneElement(app.iconComponent as React.ReactElement, {
                  width: '100%'
                })}
              </motion.div>
            ) : (
              <motion.div
                ref={ref}
                style={{ width }}
                className="aspect-square flex items-end justify-center
                           transition-transform duration-200 group-hover:translate-y-0 translate-y-2"
              >
                <img
                  src={app.icon}
                  alt={app.name}
                  draggable={false}
                  className="object-contain rounded-[20%] drop-shadow-md w-full h-full"
                />
              </motion.div>
            )}
          </motion.button>
        )}
      </div>

      {/* Dot indicator */}
      <div
        className={clsx(
          'absolute bottom-0 mb-0.5 w-1.5 h-1.5 rounded-full bg-black transition-opacity',
          isOpen ? 'opacity-100' : 'opacity-0'
        )}
      />
    </li>
  );
}
