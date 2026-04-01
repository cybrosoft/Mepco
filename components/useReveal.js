// components/useReveal.js
"use client";
import { useEffect, useRef } from "react";

/**
 * Re-triggers every time the section scrolls in AND out.
 * Adds "visible" on enter, removes it on leave — so each scroll is fresh.
 */
export function useReveal(threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const targets = el.querySelectorAll(
          ".reveal-up, .reveal-down, .reveal-fade, .reveal-card"
        );
        if (entry.isIntersecting) {
          targets.forEach((child) => child.classList.add("visible"));
        } else {
          targets.forEach((child) => child.classList.remove("visible"));
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
