// AboutHistory.jsx
"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const AboutHistory = ({ data }) => {
  const slides = useMemo(() => data?.slides || [], [data]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
  });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const update = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    update();
    emblaApi.on("select", update);
    emblaApi.on("reInit", update);
  }, [emblaApi, update]);

  // Matches max-w-7xl (80rem) + px-6 (1.5rem)
  const containerLeftOffset =
    "calc((100vw - min(80rem, 100vw)) / 2 + 1.5rem)";
  const sliderViewportWidth = `calc(100vw - (${containerLeftOffset}))`;

  const total = slides.length;
  const progress = total <= 1 ? 0 : (selectedIndex / (total - 1)) * 100;

  if (!data) return null;

  return (
    <section className="w-full bg-[#f9f8f3] py-14 overflow-hidden">
      {/* ===== Header (nav in same row) ===== */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-none text-[#111]">
            {data.heading || "Our History"}
          </h2>

          {/* ===== Navigation ===== */}
          {(canPrev || canNext) && (
            <div className="flex justify-end pr-2 pl-2 lg:pr-2 relative z-30">
              <div className="inline-flex items-center rounded-full border border-white/90 bg-black/50 backdrop-blur-[2px] px-5 py-2 shadow-sm">
                <button
                  onClick={() => emblaApi?.scrollPrev()}
                  disabled={!canPrev}
                  aria-label="Previous"
                  className="disabled:opacity-40 p-4 -m-4"
                >
                  <img
                    src={data?.navIcons?.prev || "/arrow-prev.svg"}
                    alt=""
                    className="h-4 w-4 opacity-95 pointer-events-none"
                  />
                </button>

                <span className="mx-4 h-4 w-px bg-white/70 pointer-events-none" />

                <button
                  onClick={() => emblaApi?.scrollNext()}
                  disabled={!canNext}
                  aria-label="Next"
                  className="disabled:opacity-40 p-4 -m-4"
                >
                  <img
                    src={data?.navIcons?.next || "/arrow-next.svg"}
                    alt=""
                    className="h-4 w-4 opacity-95 pointer-events-none"
                  />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ===== Slider ===== */}
      <div className="mt-10 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div
            ref={emblaRef}
            className="overflow-hidden"
            style={{ width: sliderViewportWidth }}
          >
            <div className="flex gap-6">
              {slides.map((item, idx) => (
                <div
                  key={item.id ?? `${item.year}-${idx}`}
                  className="flex-none w-[78vw] sm:w-[48vw] md:w-[34vw] lg:w-[300px]"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-2xl h-[420px] sm:h-[440px] md:h-[440px] lg:h-[440px] bg-neutral-200">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title || item.year || "History"}
                        className="w-full h-full object-cover"
                      />
                    ) : null}
                  </div>

                  {/* Year */}
                  {item.year && (
                    <div className="mt-5 text-[#01646e] text-lg sm:text-xl font-semibold">
                      {item.year}
                    </div>
                  )}

                  {/* Title */}
                  {item.title && (
                    <h3 className="mt-2 text-lg sm:text-xl font-semibold text-[#111]">
                      {item.title}
                    </h3>
                  )}

                  {/* Description */}
                  {item.desc && (
                    <p className="mt-2 text-sm leading-relaxed text-[#666]">
                      {item.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ===== Progress Bar + slide number ===== */}
          <div className="mt-12">
            <div className="h-[3px] w-full bg-neutral-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#01646e] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-3 text-xs text-[#777]">
              Slide {Math.min(selectedIndex + 1, total)} of {total}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistory;
