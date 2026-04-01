// hooks/useCountUp.js
"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Parses a stat value string like "450K", "23.08%", "300+", "#1", "19"
 * Returns { prefix, number, suffix } — number is null if not parseable
 */
export function parseStatValue(raw) {
  if (typeof raw !== "string") return { prefix: "", number: null, suffix: raw };

  // e.g. "#1"
  const hashMatch = raw.match(/^(#)(\d+(?:\.\d+)?)(.*)$/);
  if (hashMatch) return { prefix: "#", number: parseFloat(hashMatch[2]), suffix: hashMatch[3] };

  // e.g. "450K", "875K", "23.08%", "300+", "19"
  const match = raw.match(/^([^\d]*)(\d+(?:\.\d+)?)([^\d]*)$/);
  if (match) return { prefix: match[1], number: parseFloat(match[2]), suffix: match[3] };

  return { prefix: "", number: null, suffix: raw };
}

/**
 * Counts from 0 → target over `duration` ms once `active` becomes true.
 */
export function useCountUp(target, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!active || target === null) return;

    const start = performance.now();
    const isDecimal = !Number.isInteger(target);

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setCount(isDecimal ? parseFloat(current.toFixed(2)) : Math.floor(current));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
      else setCount(target);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, [active, target, duration]);

  return count;
}
