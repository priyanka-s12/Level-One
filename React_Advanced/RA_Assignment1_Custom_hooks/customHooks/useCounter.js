import { useState } from 'react';

export function useCounter(init) {
  const [counter, setCounter] = useState(init);

  function increment() {
    setCounter((counter) => counter + 1);
  }
  function decrement() {
    setCounter((counter) => counter - 1);
  }

  function reset() {
    setCounter(0);
  }

  return { counter, increment, decrement, reset };
}
