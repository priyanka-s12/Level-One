import { useState } from 'react';

//just a function which uses state variable
function useCustomLogger(counter) {
  console.log('From cutome logger: ', counter);
}

export default function App() {
  const [counter, setCounter] = useState(0);

  useCustomLogger(counter);
  return (
    <div className="app">
      <h1>⚛️ useCustomeHooks {counter}</h1>
      <button onClick={() => setCounter((count) => count + 1)}>+</button>
      <button onClick={() => setCounter((count) => count - 1)}>-</button>
    </div>
  );
}
