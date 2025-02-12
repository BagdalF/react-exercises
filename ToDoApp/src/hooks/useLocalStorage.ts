import { useEffect, useState } from "react";

export default function useLocalStorage<T>(key: string, defaultValue: T) {
  const [localStorageState, setLocalStorageState] = useState<T>(() => {
    const localStorageCheck = localStorage.getItem(key);

    return localStorageCheck ? JSON.parse(localStorageCheck) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(localStorageState));

    //for display
    const event = new CustomEvent(`${key}-updated`, {
      detail: localStorageState,
    });
    window.dispatchEvent(event);
  }, [localStorageState]);

  return [localStorageState, setLocalStorageState] as const;
}
