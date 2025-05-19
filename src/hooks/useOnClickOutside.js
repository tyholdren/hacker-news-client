import { useEffect } from 'react';

export default function useOnClickOutside(ref, fn) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        event.target instanceof Node &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        fn();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchevent', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchevent', handleClickOutside);
    };
  }, [fn]);
}
