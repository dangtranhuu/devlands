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

  const input = [
    -distanceLimit,
    -distanceLimit / (dockMag * 0.65),
    -distanceLimit / (dockMag * 0.85),
    0,
    distanceLimit / (dockMag * 0.85),
    distanceLimit / (dockMag * 0.65),
    distanceLimit
  ];

  const output = [
    dockSize,
    dockSize * (dockMag * 0.55),
    dockSize * (dockMag * 0.75),
    dockSize * dockMag,
    dockSize * (dockMag * 0.75),
    dockSize * (dockMag * 0.55),
    dockSize
  ];

  const distance = useMotionValue(distanceLimit + 1);
  const widthPX = useSpring(useTransform(distance, input, output), {
    stiffness: 1600,
    damping: 85
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
