// components/Counter.tsx

"use client";

import { useCounterStore } from "@/lib/stores/counterStore";

export const Counter = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);

  return <button onClick={increment}>Click: {count}</button>;
};
