import React, { useMemo } from 'react';

interface Props {
  width?: string;
}

const CalendarIcon = ({ width = '100%' }: Props) => {
  const now = useMemo(() => new Date(), []);
  const day = now.getDate();
  const weekday = now.toLocaleDateString('en-US', {
    weekday: 'short'
  }).toUpperCase();

  return (
    <div
      className="rounded-[20%] bg-white overflow-hidden border shadow pointer-events-none select-none flex flex-col w-full h-full"
    >
      <div className="bg-red-600 text-white text-[10px] font-bold py-[2px] text-center leading-none">
        {weekday}
      </div>
      <div className="flex-1 flex items-center justify-center text-[22px] font-bold text-black leading-none pt-[3px]">
        {day}
      </div>
    </div>
  );
};

export default CalendarIcon;