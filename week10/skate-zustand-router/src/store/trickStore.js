import { create } from 'zustand';

export const useTrickStore = create((set) => ({
  tricks: [],

  addTrick: (name) =>
    set((state) => ({
      tricks: [...state.tricks, { id: crypto.randomUUID(), name }],
    })),

  updateTrick: (id, name) =>
    set((state) => ({
      tricks: state.tricks.map((trick) =>
        trick.id === id ? { ...trick, name } : trick,
      ),
    })),

  deleteTrick: (id) =>
    set((state) => ({
      tricks: state.tricks.filter((trick) => trick.id !== id),
    })),
}));
