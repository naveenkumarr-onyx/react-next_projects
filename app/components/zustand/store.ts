import { create } from "zustand";

const useCounter = create((set: any) => ({
  count: 0,
  increment: () => set((state: any) => state.count + 1),
  decrement: () => set((state: any) => state.count - 1),
}));

export default useCounter;
