import { create } from "zustand";

export const useStore = create((set) => ({
  shoppingCart: [],
  addToCart: (item) =>
    set((state) => ({ shoppingCart: [item, ...state.shoppingCart] })),
  emptyCart: () => set({ shoppingCart: [] }),
  removeItem: (item) => {
    set((state) => ({ shoppingCart: [...state.shoppingCart.filter((i) => i.uuid != item.uuid)] }))
  }
}));
