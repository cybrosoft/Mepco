// AboutStrategySafety.jsx
"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

const AboutStrategySafety = ({ data }) => {
  // One-open-only per column
  const [openStrategyIndex, setOpenStrategyIndex] = useState(null);
  const [openSafetyIndex, setOpenSafetyIndex] = useState(null);

  if (!data) return null;

  const {
    image,
    strategyHeading,
    strategyIntro,
    strategyPillars,
    safetyHeading,
    safetyIntro,
    safetyBlocks,
  } = data;

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Image */}
        <div className="relative overflow-hidden rounded-3xl h-[380px] bg-neutral-200">
          {image?.src ? (
            <img
              src={image.src}
              alt={image.alt || "Strategy and Safety"}
              className="w-full h-full object-cover"
            />
          ) : null}
        </div>

        {/* Two Columns */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          {/* LEFT: Strategy */}
          <div>
            {/* E3: editorial label */}
            <SectionHeading as="h3" label="Our Direction">
              {strategyHeading || "Strategy"}
            </SectionHeading>

            {/* Fixed-height intro area on desktop to align first item */}
            <div className="mt-4 lg:min-h-[156px] xl:min-h-[130px]">
              <p className="text-neutral-700 leading-relaxed">{strategyIntro}</p>
            </div>

            {/* Accordion */}
            <div className="mt-10 space-y-4">
              {strategyPillars?.map((pillar, idx) => {
                const isOpen = openStrategyIndex === idx;

                return (
                  <div
                    key={pillar.title}
                    className="border-b border-neutral-200 pb-3 transition-all duration-300 hover:pl-2 hover:rounded-lg cursor-pointer"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenStrategyIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm md:text-base font-medium text-[#2d2d2d]">
                        {pillar.title}
                      </span>

                      <span
                        className={`text-[#01646e] text-3xl transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="text-[#4a4a4a] leading-relaxed whitespace-pre-line pl-2 pt-3">
                        {pillar.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Security & Safety */}
          <div>
            {/* E3: editorial label */}
            <SectionHeading as="h3" label="Our Priority">
              {safetyHeading || "Security & Safety"}
            </SectionHeading>

            {/* Fixed-height intro area */}
            <div className="mt-4 lg:min-h-[156px] xl:min-h-[130px]">
              <p className="text-neutral-700 leading-relaxed">{safetyIntro}</p>
            </div>

            {/* Accordion */}
            <div className="mt-10 space-y-4">
              {safetyBlocks?.map((block, idx) => {
                const isOpen = openSafetyIndex === idx;

                return (
                  <div
                    key={block.title}
                    className="border-b border-neutral-200 pb-3 transition-all duration-300 hover:pl-2 hover:rounded-lg cursor-pointer"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenSafetyIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm md:text-base font-medium text-[#2d2d2d]">
                        {block.title}
                      </span>

                      <span
                        className={`text-[#01646e] text-3xl transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="text-[#4a4a4a] leading-relaxed whitespace-pre-line pl-2 pt-3">
                        <ul className="list-disc pl-5 space-y-2">
                          {block.items?.map((t, i) => (
                            <li key={i}>{t}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStrategySafety;
