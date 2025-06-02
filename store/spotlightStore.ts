import { create } from 'zustand';

type SpotlightState = {
  isOpen: boolean;
  query: string;
  open: () => void;
  close: () => void;
  setQuery: (q: string) => void;
};

export const useSpotlightStore = create<SpotlightState>((set) => ({
  isOpen: false,
  query: '',
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false, query: '' }),
  setQuery: (q) => set({ query: q }),
}));
