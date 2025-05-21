import { useEffect } from 'react';

type Handler = (event: MouseEvent) => void;

const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handler: Handler
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

export default useClickOutside;
