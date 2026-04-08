'use client';

import { useState, useEffect, useRef } from 'react';

interface ScrollState {
  scrollDirection: 'up' | 'down';
  scrollY: number;
}

export function useScrollDirection(): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollDirection: 'up',
    scrollY: 0,
  });

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateScrollState = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY.current ? 'down' : 'up';

      setScrollState({
        scrollDirection: direction,
        scrollY: currentScrollY,
      });

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(updateScrollState);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrollState;
}
