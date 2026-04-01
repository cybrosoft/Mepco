// app/home/SubsidiaryCompanies.jsx
"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

const SubsidiaryCompanies = ({
  heading = "Subsidiary Companies",
  description = "",
  ctaText = "View All Subsidiaries",
  ctaHref = "/subsideries",
  subsidiaries = [],
}) => {
  const slides = useMemo(() => subsidiaries.slice(0, 3), [subsidiaries]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
    dragFree: false,
  });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [progress, setProgress] = useState(0);

  const update = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
    const idx = emblaApi.selectedScrollSnap();
    const snaps = emblaApi.scrollSnapList().length;
    setProgress(snaps > 1 ? idx / (snaps - 1) : 0);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    update();
    emblaApi.on("select", update);
    emblaApi.on("reInit", update);
  }, [emblaApi, update]);

  // Only used on mobile/tablet
  const containerLeftOffset =
    "calc((100vw - min(80rem, 100vw)) / 2 + 1.5rem)";
  const sliderViewportWidthMobile = `calc(100vw - (${containerLeftOffset}))`;

  return (
    <section className="w-full bg-white pt-12 pb-22 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-10 pb-15">
          <div className="w-full max-w-none lg:max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-6">
              {heading}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#555] w-full lg:max-w-md">
              {description}
            </p>
          </div>

          <Link
            href={ctaHref}
            className="mt-4 lg:mt-2 self-start border border-[#01646e] text-[#01646e] hover:bg-[#01646e] hover:text-white px-8 py-3 rounded-full text-md font-semibold transition"
          >
            {ctaText}
          </Link>
        </div>

        {/* Nav arrows — mobile/tablet only */}
        {(canPrev || canNext) && (
          <div className="flex lg:hidden justify-start mt-6 pr-2 pl-2 relative z-30">
            <div className="inline-flex items-center rounded-full border border-white/90 bg-black/70 backdrop-blur-[2px] px-5 py-2 shadow-sm">
              <button
                type="button"
                onClick={() => emblaApi?.scrollPrev()}
                disabled={!canPrev}
                aria-label="Previous"
                className="disabled:opacity-40 disabled:cursor-not-allowed p-4 -m-4"
              >
                <img src="/arrow-prev.svg" alt="" className="h-5 w-5 pointer-events-none" />
              </button>
              <span className="mx-4 h-4 w-px bg-white/70 pointer-events-none" aria-hidden="true" />
              <button
                type="button"
                onClick={() => emblaApi?.scrollNext()}
                disabled={!canNext}
                aria-label="Next"
                className="disabled:opacity-40 disabled:cursor-not-allowed p-4 -m-4"
              >
                <img src="/arrow-next.svg" alt="" className="h-5 w-5 pointer-events-none" />
              </button>
            </div>
          </div>
        )}

        {/* ── DESKTOP: all 3 slides in one row inside max-w-7xl, no overflow ── */}
        <div className="hidden lg:flex gap-6 mt-10">
          {slides.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex-1 min-w-0 group"
            >
              <div className="relative overflow-hidden rounded-2xl h-[520px] bg-neutral-200">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-6 text-md tracking-wide font-semibold px-4 text-[#2d2d2d]">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* ── MOBILE / TABLET: Embla carousel ── */}
      <div className="lg:hidden mt-10 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div
            ref={emblaRef}
            className="overflow-hidden"
            style={{ width: sliderViewportWidthMobile }}
          >
            <div className="flex gap-6">
              {slides.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="flex-none w-[88vw] sm:w-[70vw] md:w-[60vw]"
                >
                  <div className="relative overflow-hidden rounded-2xl h-[360px] sm:h-[420px] md:h-[520px] bg-neutral-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="mt-6 text-md tracking-wide font-semibold px-4 text-[#2d2d2d]">
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubsidiaryCompanies;