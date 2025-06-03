'use client';

interface Props {
  onClose?: () => void;
}

export default function WindowControls({ onClose }: Props) {
  return (
    <div className="flex space-x-2">
      <div
        className="w-3 h-3 bg-red-500 rounded-full cursor-pointer hover:brightness-110 transition"
        onClick={onClose}
      />
      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
      <div className="w-3 h-3 bg-green-500 rounded-full" />
    </div>
  );
}
