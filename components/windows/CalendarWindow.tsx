'use client';

import DraggableWindowShell from '@/components/DraggableWindowShell';
import { useWindowStore } from '@/store/windowStore';
import { useState } from 'react';

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function generateMonthMatrix(date: Date): (number | null)[][] {
  const year = date.getFullYear();
  const month = date.getMonth(); // 0-indexed

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const matrix: (number | null)[][] = [];
  let currentDay = 1;

  const firstWeekday = (firstDay.getDay() + 6) % 7; // Convert Sun=0 to Sun=6

  for (let week = 0; week < 6; week++) {
    const row: (number | null)[] = [];

    for (let i = 0; i < 7; i++) {
      const cellIndex = week * 7 + i;
      if (cellIndex < firstWeekday || currentDay > lastDay.getDate()) {
        row.push(null);
      } else {
        row.push(currentDay++);
      }
    }

    matrix.push(row);
    if (currentDay > lastDay.getDate()) break;
  }

  return matrix;
}

export default function CalendarWindow({ id, zIndex }: { id: string; zIndex: number }) {
  const { closeWindow, minimizeWindow } = useWindowStore.getState();
  const [isMaximized, setIsMaximized] = useState(false);

  const today = new Date();
  const monthMatrix = generateMonthMatrix(today);
  const currentDay = today.getDate();
  const monthName = today.toLocaleString('default', { month: 'long' });
  const year = today.getFullYear();

  return (
    <DraggableWindowShell
      id={id}
      zIndex={zIndex}
      title="Calendar"
      onClose={() => closeWindow(id)}
      onMinimize={() => minimizeWindow(id)}
      onMaximize={() => setIsMaximized((v) => !v)}
      className={isMaximized ? 'top-0 left-0 w-full h-full' : 'w-[400px]'}
    >
      <div className="p-4">
        <div className="text-center mb-4">
          <h2 className="text-xl font-semibold">
            {monthName} {year}
          </h2>
        </div>

        <div className="grid grid-cols-7 gap-1 text-sm text-center font-medium text-gray-600">
          {daysOfWeek.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1 mt-1 text-center">
          {monthMatrix.flat().map((date, idx) => (
            <div
              key={idx}
              className={`h-10 flex items-center justify-center rounded ${date === currentDay
                ? 'bg-blue-500 text-white font-bold'
                : 'text-gray-800'
                }`}
            >
              {date ?? ''}
            </div>
          ))}
        </div>
      </div>
    </DraggableWindowShell>
  );
}
