import { useState } from 'react';
//just a function which uses state variable
export function useLogger(counter) {
  console.log('From cutome logger: ', counter);
}

export function useCounter(init) {
  const [counter, setCounter] = useState(init);
  // const [data, setCounter] = useState(0);

  function incrementCounter() {
    setCounter((count) => count + 1);
  }

  function decrementCounter() {
    setCounter((count) => count - 1);
  }
  // return { counter: data, incrementCounter, decrementCounter };
  return { counter, incrementCounter, decrementCounter };
}
