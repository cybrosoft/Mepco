// app/about-us/AboutHistoryTimeline.jsx
"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import Reveal from "@/components/Reveal";

const AboutHistoryTimeline = ({ data }) => {
  const slides = data?.slides || [];
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const checkScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => { el.removeEventListener("scroll", checkScroll); window.removeEventListener("resize", checkScroll); };
  }, [checkScroll]);

  const scroll = (dir) => { trackRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" }); };

  if (!data) return null;

  return (
    <section className="w-full bg-[#f9f8f3] py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex items-center justify-between mb-14">
            <h2 className="reveal-up text-3xl md:text-4xl font-bold text-[#111]" style={{ transitionDelay: "0ms" }}>
              {data.heading || "Our History"}
            </h2>
            <div className="reveal-fade inline-flex items-center gap-2" style={{ transitionDelay: "200ms" }}>
              <button onClick={() => scroll(-1)} disabled={!canPrev} aria-label="Previous"
                className="w-10 h-10 rounded-full border border-[#01646e] text-[#01646e] flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#01646e] hover:text-white transition">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={() => scroll(1)} disabled={!canNext} aria-label="Next"
                className="w-10 h-10 rounded-full border border-[#01646e] text-[#01646e] flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#01646e] hover:text-white transition">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Scrollable track */}
      <div ref={trackRef} className="overflow-x-auto overflow-y-visible scrollbar-hide cursor-grab active:cursor-grabbing select-none"
        style={{ WebkitOverflowScrolling: "touch" }}>
        <div className="px-6 lg:px-[calc((100vw-80rem)/2+1.5rem)]" style={{ minWidth: "max-content" }}>

          {/* Top — odd items */}
          <div className="flex">
            {slides.map((item, idx) => (
              <div key={`top-${item.id ?? idx}`}
                className="w-[260px] lg:w-[300px] shrink-0 px-4 flex flex-col items-start justify-end pb-8"
                style={{ minHeight: "140px" }}>
                {idx % 2 !== 0 && (
                  <>
                    <span className="inline-block text-xs font-bold text-white bg-[#01646e] px-3 py-1 rounded-full mb-2">{item.year}</span>
                    <h3 className="text-sm font-semibold text-[#111] leading-snug mb-1">{item.title}</h3>
                    <p className="text-xs leading-relaxed text-[#777]">{item.desc}</p>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Spine */}
          <div className="flex items-center">
            {slides.map((item, idx) => (
              <div key={`spine-${item.id ?? idx}`} className="w-[260px] lg:w-[300px] shrink-0 flex items-center">
                <div className={`h-[2px] flex-1 ${idx === 0 ? "bg-transparent" : "bg-[#c8c2b8]"}`} />
                <div className="w-5 h-5 rounded-full bg-[#01646e] ring-4 ring-[#f9f8f3] border-2 border-[#01646e] z-10 shrink-0" />
                <div className={`h-[2px] flex-1 ${idx === slides.length - 1 ? "bg-transparent" : "bg-[#c8c2b8]"}`} />
              </div>
            ))}
          </div>

          {/* Bottom — even items */}
          <div className="flex">
            {slides.map((item, idx) => (
              <div key={`bottom-${item.id ?? idx}`}
                className="w-[260px] lg:w-[300px] shrink-0 px-4 pt-8"
                style={{ minHeight: "140px" }}>
                {idx % 2 === 0 && (
                  <>
                    <span className="inline-block text-xs font-bold text-white bg-[#01646e] px-3 py-1 rounded-full mb-2">{item.year}</span>
                    <h3 className="text-sm font-semibold text-[#111] leading-snug mb-1">{item.title}</h3>
                    <p className="text-xs leading-relaxed text-[#777]">{item.desc}</p>
                  </>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHistoryTimeline;
