// stores/counterStore.ts

import { create } from "zustand";

type CounterStore = {
  count: number;
  increment: () => void;
};
export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

// Що тут відбувається:

// useCounterStore – це хук, який ми будемо викликати у компонентах.
// count: 0 – початкове значення лічильника.
// set – функція, яка дозволяє оновити стан.
// increment – функція, яка збільшує count на 1, використовуючи попередній стан (state).
