'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

export function useInView({ threshold = 0.1, triggerOnce = true }: UseInViewOptions = {}) {
  const [isInView, setIsInView] = useState(false);
  const [node, setNode] = useState<Element | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const ref = useCallback((element: Element | null) => {
    setNode(element);
  }, []);

  useEffect(() => {
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);

        if (inView && triggerOnce && observerRef.current) {
          observerRef.current.unobserve(node);
        }
      },
      { threshold }
    );

    observerRef.current.observe(node);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [node, threshold, triggerOnce]);

  return { ref, isInView };
}
