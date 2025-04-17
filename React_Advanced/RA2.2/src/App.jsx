import { useCounter, useLogger } from './useCounter';

export default function App() {
  const { counter, incrementCounter, decrementCounter } = useCounter(10);
  useLogger(counter);
  return (
    <div className="app">
      <h1>⚛️ useCustomeHooks {counter}</h1>
      <button onClick={incrementCounter}>+</button>
      <button onClick={decrementCounter}>-</button>
    </div>
  );
}
