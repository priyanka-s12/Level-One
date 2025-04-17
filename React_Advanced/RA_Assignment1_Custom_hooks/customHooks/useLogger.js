import { useEffect, useState } from 'react';

export function useLogger(init, msg = 'Value changed to:') {
  const [value, setValue] = useState(init);

  useEffect(() => {
    console.log(`${msg} ${value}`);
  }, [value]);

  return { value, setValue };
}
