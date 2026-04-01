// components/Reveal.jsx
"use client";
import { useReveal } from "@/components/useReveal";

export default function Reveal({ children, className = "", threshold = 0.12 }) {
  const ref = useReveal(threshold);
  return <div ref={ref} className={className}>{children}</div>;
}
