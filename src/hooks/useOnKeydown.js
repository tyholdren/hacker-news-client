import { useEffect } from 'react';

export default function useOnKeydown(key, fn) {
  useEffect(() => {
    function handleKeydown(event) {
      if (event.key === key) {
        fn();
      }
    }
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [fn]);
}
