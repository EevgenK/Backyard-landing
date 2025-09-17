import { useEffect, useState } from 'react';
import { makeId } from '../helpers/makeHref';

export const useActiveSection = (ids: string[]) => {
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(makeId(id));
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setActive(id);
          }
        },
        { threshold: 0.8 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return active;
};
