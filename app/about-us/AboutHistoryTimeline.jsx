// app/about-us/AboutHistoryTimeline.jsx
import React from "react";
import SectionHeading from "@/components/SectionHeading";

const Milestone = ({ item }) => (
  <>
    <span className="inline-block text-xs font-bold text-white bg-[#01646e] px-3 py-1 rounded-full mb-2">
      {item.year}
    </span>
    <h3 className="text-sm font-semibold text-[#111] leading-snug mb-1">
      {item.title}
    </h3>
    <p className="text-xs leading-relaxed text-[#777]">{item.desc}</p>
  </>
);

const AboutHistoryTimeline = ({ data }) => {
  if (!data) return null;

  const slides = data?.slides || [];

  return (
    <section className="w-full bg-[#f9f8f3] py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading (unchanged) */}
        <SectionHeading className="mb-14" color="#111" label="Our Journey">
          {data.heading || "Our History"}
        </SectionHeading>

        {/* ===== Desktop (lg+) : horizontal timeline that fits the viewport ===== */}
        <div className="hidden lg:block">
          {/* Top content row — odd indices sit above the spine */}
          <div className="flex">
            {slides.map((item, idx) => (
              <div
                key={`top-${item.id ?? idx}`}
                className="flex-1 min-w-0 px-3 flex flex-col items-start justify-end pb-8"
                style={{ minHeight: "160px" }}
              >
                {idx % 2 !== 0 && <Milestone item={item} />}
              </div>
            ))}
          </div>

          {/* Spine row — line + evenly spaced dots */}
          <div className="flex items-center">
            {slides.map((item, idx) => (
              <div
                key={`spine-${item.id ?? idx}`}
                className="flex-1 min-w-0 flex items-center"
              >
                {/* Left connecting line */}
                <div
                  className={`h-[2px] flex-1 ${
                    idx === 0 ? "bg-transparent" : "bg-[#c8c2b8]"
                  }`}
                />

                {/* Dot */}
                <div className="shrink-0 w-4 h-4 rounded-full bg-[#01646e] ring-4 ring-[#f9f8f3] border-2 border-[#01646e]" />

                {/* Right connecting line */}
                <div
                  className={`h-[2px] flex-1 ${
                    idx === slides.length - 1 ? "bg-transparent" : "bg-[#c8c2b8]"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Bottom content row — even indices sit below the spine */}
          <div className="flex">
            {slides.map((item, idx) => (
              <div
                key={`bottom-${item.id ?? idx}`}
                className="flex-1 min-w-0 px-3 pt-8"
                style={{ minHeight: "160px" }}
              >
                {idx % 2 === 0 && <Milestone item={item} />}
              </div>
            ))}
          </div>
        </div>

        {/* ===== Mobile / tablet (below lg) : vertical timeline ===== */}
        <ol className="lg:hidden relative">
          {slides.map((item, idx) => {
            const isLast = idx === slides.length - 1;

            return (
              <li key={`v-${item.id ?? idx}`} className="relative pl-9 pb-10 last:pb-0">
                {/* Vertical connector down to the next dot */}
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[7px] top-2 bottom-0 w-[2px] bg-[#c8c2b8]"
                  />
                )}

                {/* Dot */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1 w-4 h-4 rounded-full bg-[#01646e] ring-4 ring-[#f9f8f3] border-2 border-[#01646e]"
                />

                {/* Year */}
                <span className="inline-block text-xs font-bold text-white bg-[#01646e] px-3 py-1 rounded-full">
                  {item.year}
                </span>

                {/* Title */}
                <h3 className="mt-3 text-base font-semibold text-[#111] leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-1 text-sm leading-relaxed text-[#777]">
                  {item.desc}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default AboutHistoryTimeline;
