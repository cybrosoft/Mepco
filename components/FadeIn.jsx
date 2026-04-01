// components/FadeIn.jsx
"use client";

import { useFadeIn } from "@/hooks/useFadeIn";

/**
 * Wraps any section in a scroll-triggered fade + slide-up reveal.
 * Props:
 *   delay   — CSS transition-delay in ms (stagger siblings)
 *   y       — translateY distance in px (default 36)
 *   threshold — IntersectionObserver threshold (default 0.1)
 *   className — extra classes on the wrapper div
 */
export default function FadeIn({
  children,
  delay = 0,
  y = 36,
  threshold = 0.1,
  className = "",
}) {
  const [ref, visible] = useFadeIn(threshold);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : `translateY(${y}px)`,
        transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
