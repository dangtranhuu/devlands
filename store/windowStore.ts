import { create } from 'zustand';

type WindowType = 'finder' | 'terminal' | 'safari';

type Window = {
  id: string;
  app: WindowType;
  zIndex: number;
  isOpen: boolean;
};

type State = {
  windows: Window[];
  openWindow: (app: WindowType) => void;
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
};

let zCounter = 100;

export const useWindowStore = create<State>((set) => ({
  windows: [],
  openWindow: (app) =>
    set((state) => ({
      windows: [
        ...state.windows,
        {
          id: crypto.randomUUID(),
          app,
          zIndex: ++zCounter,
          isOpen: true,
        },
      ],
    })),
  closeWindow: (id) =>
    set((state) => ({
      windows: state.windows.filter((w) => w.id !== id),
    })),
  focusWindow: (id) =>
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, zIndex: ++zCounter } : w
      ),
    })),
}));
