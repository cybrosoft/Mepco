// hooks/useFadeIn.js
"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Returns [ref, isVisible].
 * Attach ref to any element — isVisible flips true once it enters the viewport.
 * threshold: 0–1, how much of the element must be visible before triggering.
 */
export function useFadeIn(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // fire once only
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}
