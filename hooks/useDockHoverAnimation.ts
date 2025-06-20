import useRaf from '@rooks/use-raf';
import {
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue
} from 'framer-motion';

export const useDockHoverAnimation = (
  mouseX: MotionValue<number | null>,
  ref: React.RefObject<HTMLDivElement>,
  dockSize: number,
  dockMag: number
) => {
  const distanceLimit = dockSize * 6;

  // Tạo vùng hover logic giống macOS
  const input = [
    -distanceLimit,
    -dockSize * 2.5,
    -dockSize * 1.2,
    0,
    dockSize * 1.2,
    dockSize * 2.5,
    distanceLimit
  ];

  const output = [
    dockSize,
    dockSize * 1.2,
    dockSize * 1.5,
    dockSize * dockMag,
    dockSize * 1.5,
    dockSize * 1.2,
    dockSize
  ];

  const distance = useMotionValue(distanceLimit + 1);
  const widthPX = useSpring(useTransform(distance, input, output), {
    stiffness: 1400,
    damping: 90
  });

  const width = useTransform(widthPX, (w) => `${w}px`);

  useRaf(() => {
    const el = ref.current;
    const x = mouseX.get();
    if (el && x != null) {
      const rect = el.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      distance.set(x - center);
    } else {
      distance.set(distanceLimit + 1);
    }
  }, true);

  return { width };
};
