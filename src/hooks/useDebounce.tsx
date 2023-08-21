import { useState, useEffect } from "react";

function useDebounce<T>(value: T, interval: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, interval);

    return () => {
      clearTimeout(handler);
    };
  }, [value, interval]);

  return debouncedValue;
}

export default useDebounce;
