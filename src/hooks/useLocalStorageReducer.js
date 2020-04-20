import { useReducer, useEffect } from 'react';

function useLocalStorageReducer(key, initialValue, todoReducer) {
  const [state, dispatch] = useReducer(todoReducer, initialValue, () => {
    let value;
    try {
      value = JSON.parse(window.localStorage.getItem(key) || String(initialValue));
    } catch(e) {
      value = initialValue;
    }
    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
}

export default useLocalStorageReducer;
