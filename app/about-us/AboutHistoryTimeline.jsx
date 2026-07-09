// app/about-us/AboutHistoryTimeline.jsx
"use client";
import React from "react";
import Reveal from "@/components/Reveal";

const AboutHistoryTimeline = ({ data }) => {
  const slides = data?.slides || [];
  if (!data) return null;

  return (
    <section className="w-full bg-[#f9f8f3] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <Reveal>
          <h2 className="reveal-up text-3xl md:text-4xl font-bold text-[#111] mb-14"
            style={{ transitionDelay: "0ms" }}>
            {data.heading || "Our History"}
          </h2>
        </Reveal>

        {/* ── DESKTOP: horizontal, fits full width, no scroll ── */}
        <div className="hidden lg:block">
          {/* Top row — odd items (1, 3, 5 → indices 1,3,5) */}
          <div className="flex">
            {slides.map((item, idx) => (
              <div key={`top-${idx}`} className="flex-1 px-3 flex flex-col items-start justify-end pb-6" style={{ minHeight: "130px" }}>
                {idx % 2 !== 0 && (
                  <>
                    <span className="inline-block text-xs font-bold text-white bg-[#01646e] px-3 py-1 rounded-full mb-2">{item.year}</span>
                    <h3 className="text-xs font-semibold text-[#111] leading-snug mb-1">{item.title}</h3>
                    <p className="text-xs leading-relaxed text-[#777]">{item.desc}</p>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Spine */}
          <div className="flex items-center">
            {slides.map((item, idx) => (
              <div key={`spine-${idx}`} className="flex-1 flex items-center">
                <div className={`h-[2px] flex-1 ${idx === 0 ? "bg-transparent" : "bg-[#c8c2b8]"}`} />
                <div className="w-4 h-4 rounded-full bg-[#01646e] ring-4 ring-[#f9f8f3] border-2 border-[#01646e] z-10 shrink-0" />
                <div className={`h-[2px] flex-1 ${idx === slides.length - 1 ? "bg-transparent" : "bg-[#c8c2b8]"}`} />
              </div>
            ))}
          </div>

          {/* Bottom row — even items (0, 2, 4, 6 → indices 0,2,4,6) */}
          <div className="flex">
            {slides.map((item, idx) => (
              <div key={`bottom-${idx}`} className="flex-1 px-3 pt-6" style={{ minHeight: "130px" }}>
                {idx % 2 === 0 && (
                  <>
                    <span className="inline-block text-xs font-bold text-white bg-[#01646e] px-3 py-1 rounded-full mb-2">{item.year}</span>
                    <h3 className="text-xs font-semibold text-[#111] leading-snug mb-1">{item.title}</h3>
                    <p className="text-xs leading-relaxed text-[#777]">{item.desc}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── MOBILE: vertical timeline ── */}
        <div className="lg:hidden flex flex-col">
          {slides.map((item, idx) => (
            <div key={`mobile-${idx}`} className="flex gap-5 pb-10 last:pb-0">
              {/* Dot + spine */}
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#01646e] ring-4 ring-[#f9f8f3] border-2 border-[#01646e] shrink-0 mt-1" />
                {idx < slides.length - 1 && (
                  <div className="w-[2px] flex-1 bg-[#c8c2b8] mt-2" />
                )}
              </div>
              {/* Content */}
              <div className="pb-2 flex-1">
                <span className="inline-block text-xs font-bold text-white bg-[#01646e] px-3 py-1 rounded-full mb-3">{item.year}</span>
                <h3 className="text-sm font-semibold text-[#111] leading-snug mb-1">{item.title}</h3>
                <p className="text-xs leading-relaxed text-[#777]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutHistoryTimeline;