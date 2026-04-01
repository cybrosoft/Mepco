// app/about-us/AboutStrategySafety.jsx
"use client";
import React, { useState } from "react";
import Reveal from "@/components/Reveal";

const AboutStrategySafety = ({ data }) => {
  const [openStrategyIndex, setOpenStrategyIndex] = useState(null);
  const [openSafetyIndex, setOpenSafetyIndex] = useState(null);
  if (!data) return null;
  const { image, strategyHeading, strategyIntro, strategyPillars, safetyHeading, safetyIntro, safetyBlocks } = data;

  return (
    <section className="w-full bg-white py-14">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top image */}
        <Reveal threshold={0.1}>
          <div className="reveal-card relative overflow-hidden rounded-3xl h-[380px] bg-neutral-200">
            {image?.src && <img src={image.src} alt={image.alt || "Strategy"} className="w-full h-full object-cover" />}
          </div>
        </Reveal>

        {/* Two columns */}
        <div className="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Strategy */}
          <Reveal threshold={0.1}>
            <h3 className="reveal-up text-3xl md:text-4xl font-bold text-neutral-900" style={{ transitionDelay: "0ms" }}>
              {strategyHeading || "Strategy"}
            </h3>
            <div className="mt-4 lg:min-h-[156px] xl:min-h-[130px]">
              <p className="reveal-down text-neutral-700 leading-relaxed" style={{ transitionDelay: "100ms" }}>{strategyIntro}</p>
            </div>
            <div className="mt-10 space-y-4">
              {strategyPillars?.map((pillar, idx) => {
                const isOpen = openStrategyIndex === idx;
                return (
                  <div key={pillar.title}
                    className="reveal-card border-b border-neutral-200 pb-3 transition-all duration-300 hover:pl-2 hover:rounded-lg cursor-pointer"
                    style={{ transitionDelay: `${200 + idx * 80}ms` }}>
                    <button type="button" onClick={() => setOpenStrategyIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left" aria-expanded={isOpen}>
                      <span className="text-sm md:text-base font-medium text-[#2d2d2d]">{pillar.title}</span>
                      <span className={`text-[#01646e] text-3xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} aria-hidden="true">+</span>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="text-[#4a4a4a] leading-relaxed whitespace-pre-line pl-2 pt-3">{pillar.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* Safety */}
          <Reveal threshold={0.1}>
            <h3 className="reveal-up text-3xl md:text-4xl font-bold text-neutral-900" style={{ transitionDelay: "0ms" }}>
              {safetyHeading || "Security & Safety"}
            </h3>
            <div className="mt-4 lg:min-h-[156px] xl:min-h-[130px]">
              <p className="reveal-down text-neutral-700 leading-relaxed" style={{ transitionDelay: "100ms" }}>{safetyIntro}</p>
            </div>
            <div className="mt-10 space-y-4">
              {safetyBlocks?.map((block, idx) => {
                const isOpen = openSafetyIndex === idx;
                return (
                  <div key={block.title}
                    className="reveal-card border-b border-neutral-200 pb-3 transition-all duration-300 hover:pl-2 hover:rounded-lg cursor-pointer"
                    style={{ transitionDelay: `${200 + idx * 80}ms` }}>
                    <button type="button" onClick={() => setOpenSafetyIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left" aria-expanded={isOpen}>
                      <span className="text-sm md:text-base font-medium text-[#2d2d2d]">{block.title}</span>
                      <span className={`text-[#01646e] text-3xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} aria-hidden="true">+</span>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="text-[#4a4a4a] leading-relaxed whitespace-pre-line pl-2 pt-3">
                        <ul className="list-disc pl-5 space-y-2">{block.items?.map((t, i) => <li key={i}>{t}</li>)}</ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default AboutStrategySafety;
