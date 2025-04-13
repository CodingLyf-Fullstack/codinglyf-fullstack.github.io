import { useEffect, useState, RefObject } from 'react';

export const useIntersectionObserver = (
  ref: RefObject<Element>,
  options: IntersectionObserverInit = { threshold: 0.1 }
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(([entry]) => {
        setIsVisible(entry.isIntersecting);
      }, options);

      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [ref, options]);

  return isVisible;
};