// app/home/HomeAbout.jsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { parseStatValue, useCountUp } from "@/hooks/useCountUp";
import { useReveal } from "@/components/useReveal";

import SectionHeading from "@/components/SectionHeading";

function StatItem({ stat, delay = 0 }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { prefix, number, suffix } = parseStatValue(stat.value);
  const count = useCountUp(number, 1800, active);
  const display = number !== null
    ? `${prefix}${number % 1 !== 0 ? count.toFixed(2) : count}${suffix}`
    : stat.value;

  return (
    <div
      ref={ref}
      className="reveal-card flex flex-col"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="text-4xl font-extrabold text-[#01646e] mb-2 tabular-nums">{display}</span>
      <p className="text-[#4a4a4a] text-sm md:text-base leading-snug italic max-w-xs">{stat.label}</p>
    </div>
  );
}

const HomeAbout = ({ data }) => {
  const heading   = data?.heading    || "Who we are ?";
  const paragraphs = Array.isArray(data?.paragraphs) ? data.paragraphs : [];
  const statsData  = Array.isArray(data?.stats)      ? data.stats      : [];

  const leftRef  = useReveal(0.12);
  const rightRef = useReveal(0.08);

  return (
    <section className="w-full py-16 lg:py-24 bg-[#F9F8F3]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-10 lg:gap-24">

        {/* Left — heading up, paras down */}
        <div ref={leftRef} className="lg:w-2/5 flex flex-col justify-start">
          <SectionHeading className="pb-10" color="#111" label="About MEPCO">
                                      Who we are?
                                  </SectionHeading>
          {paragraphs.map((text, idx) => (
            <p
              key={idx}
              className="reveal-down text-[#4a4a4a] text-body"
              style={{ transitionDelay: `${80 + idx * 80}ms` }}
            >
              {text}
            </p>
          ))}
        </div>

        {/* Right — stat cards stagger up */}
        <div ref={rightRef} className="lg:w-3/5">
          <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            {statsData.map((stat, index) => (
              <StatItem key={index} stat={stat} delay={index * 100} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeAbout;
