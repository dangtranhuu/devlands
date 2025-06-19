'use client';

import { useMemo } from 'react';

const CalendarIcon = () => {
  const now = useMemo(() => new Date(), []);
  const day = now.getDate();
  const weekday = now.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase(); // MON, TUE...

  return (
    <div className="w-[64px] h-[57px] rounded-md overflow-hidden border bg-white shadow text-center select-none pointer-events-none">
      {/* Header (Weekday) */}
      <div className="bg-red-600 text-white text-[10px] font-bold py-0.5 uppercase">
        {weekday}
      </div>

      {/* Day number */}
      <div className="flex items-center justify-center text-2xl font-bold text-black leading-none pt-[5px]">
        {day}
      </div>
    </div>
  );
};

export default CalendarIcon;
