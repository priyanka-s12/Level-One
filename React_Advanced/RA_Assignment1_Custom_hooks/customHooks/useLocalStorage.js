import { useState } from 'react';

//localStorage in sync with state of UI/ this react component
export function useLocalStorage(key, initialValue = 'Hi') {
  const [value, setStoredValue] = useState(() => getValue());

  function setValue(value) {
    localStorage.setItem('user', value);
    setStoredValue(value);
  }

  function getValue() {
    const data = localStorage.getItem('user');
    return data || 'hi';
  }
  return { value, setValue };
}
