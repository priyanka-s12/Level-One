import { useState } from 'react';

export function useToggle(init) {
  const [value, setValue] = useState(init);

  function toggle() {
    if (value === true) {
      setValue(false);
    } else {
      setValue(true);
    }
  }

  return { value, toggle };
}
