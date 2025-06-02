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
  focusedId: string | null;
  openWindow: (app: WindowType) => void;
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
};

let zCounter = 100;

export const useWindowStore = create<State>((set) => ({
  windows: [],
  focusedId: null,
  openWindow: (app) => {
    const id = crypto.randomUUID();
    return set((state) => ({
      windows: [
        ...state.windows,
        { id, app, zIndex: ++zCounter, isOpen: true },
      ],
      focusedId: id,
    }));
  },
  closeWindow: (id) =>
    set((state) => ({
      windows: state.windows.filter((w) => w.id !== id),
      focusedId:
        state.focusedId === id
          ? state.windows.filter((w) => w.id !== id).at(-1)?.id ?? null
          : state.focusedId,
    })),
  focusWindow: (id) =>
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, zIndex: ++zCounter } : w
      ),
      focusedId: id,
    })),
}));
