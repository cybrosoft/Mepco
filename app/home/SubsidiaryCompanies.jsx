// app/home/SubsidiaryCompanies.jsx
"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useReveal } from "@/components/useReveal";

function splitName(name = "") {
  const parts = name.split(" – ");
  return { short: parts[0]?.trim() ?? name, sub: parts[1]?.trim() ?? "" };
}

function SubsidiaryCard({ item, delay = 0 }) {
  const videoRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const { short, sub } = splitName(item.name);

  const handleEnter = () => {
    setHovered(true);
    if (videoRef.current) { videoRef.current.currentTime = 0; videoRef.current.play().catch(() => {}); }
  };
  const handleLeave = () => {
    setHovered(false);
    if (videoRef.current) { videoRef.current.pause(); }
  };

  return (
    <div className="reveal-card flex-1 min-w-0" style={{ transitionDelay: `${delay}ms` }}>
      <Link
        href={item.href}
        className="group block"
        onMouseEnter={handleEnter} onMouseLeave={handleLeave}
        onFocus={handleEnter}     onBlur={handleLeave}
      >
        <div className="relative overflow-hidden rounded-2xl h-[430px] bg-neutral-200">
          <img
            src={item.image} alt={item.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered && item.video ? "opacity-0" : "opacity-100"}`}
          />
          {item.video && (
            <video
              ref={videoRef} src={item.video}
              muted playsInline loop preload="none"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`}
            />
          )}
          <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${hovered ? "opacity-25" : "opacity-0"}`} />
          <div className={`absolute bottom-5 left-1/2 -translate-x-1/2 transition-all duration-300 ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-black/30 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white">
              Learn More
              <img src="/arrow-next.svg" alt="Arrow" className="w-5 h-5" />
            </span>
          </div>
        </div>

        {/* Single-line name */}
        <p className="mt-5 px-1 text-sm leading-snug">
          <span className="font-bold text-[#01646e] group-hover:text-[#014f57] transition-colors duration-200">
            {short}
          </span>
          {sub && (
            <>
              <span className="text-[#aaa] mx-1">–</span>
              <span className="font-normal text-[#888]">{sub}</span>
            </>
          )}
        </p>
      </Link>
    </div>
  );
}

const SubsidiaryCompanies = ({
  heading = "Subsidiary Companies",
  description = "",
  ctaText = "View All Subsidiaries",
  ctaHref = "/about-us/subsidiaries",
  subsidiaries = [],
}) => {
  const slides = useMemo(() => subsidiaries.slice(0, 3), [subsidiaries]);

  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false, containScroll: "trimSnaps", dragFree: false });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const update = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);
  useEffect(() => {
    if (!emblaApi) return;
    update(); emblaApi.on("select", update); emblaApi.on("reInit", update);
  }, [emblaApi, update]);

  const containerLeftOffset = "calc((100vw - min(80rem, 100vw)) / 2 + 1.5rem)";
  const sliderViewportWidthMobile = `calc(100vw - (${containerLeftOffset}))`;

  const headerRef = useReveal(0.1);
  const gridRef   = useReveal(0.08);

  return (
    <section className="w-full bg-white pt-12 pb-22 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-10 pb-4">
          <div className="w-full max-w-none lg:max-w-xl">
            <h2 className="reveal-up text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-6" style={{ transitionDelay: "0ms" }}>
              {heading}
            </h2>
            <p className="reveal-down text-base leading-relaxed text-[#555] w-full lg:max-w-md" style={{ transitionDelay: "100ms" }}>
              {description}
            </p>
          </div>
          <Link
            href={ctaHref}
            className="reveal-fade mt-4 lg:mt-2 self-start border border-[#01646e] text-[#01646e] hover:bg-[#01646e] hover:text-white px-8 py-3 rounded-full text-md font-semibold transition"
            style={{ transitionDelay: "280ms" }}
          >
            {ctaText}
          </Link>
        </div>

        {/* Desktop grid */}
        <div ref={gridRef} className="hidden lg:flex gap-6 mt-10">
          {slides.map((item, i) => (
            <SubsidiaryCard key={item.id} item={item} delay={i * 150} />
          ))}
        </div>
      </div>

      {/* Mobile carousel */}
      <div className="lg:hidden mt-10 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div ref={emblaRef} className="overflow-hidden" style={{ width: sliderViewportWidthMobile }}>
            <div className="flex gap-6">
              {slides.map((item) => {
                const { short, sub } = splitName(item.name);
                return (
                  <div key={item.id} className="flex-none w-[88vw] sm:w-[70vw] md:w-[60vw]">
                    <div className="relative overflow-hidden rounded-2xl h-[360px] sm:h-[420px] md:h-[520px] bg-neutral-200">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <p className="mt-5 px-1 text-base leading-snug">
                      <span className="font-bold text-[#01646e]">{short}</span>
                      {sub && (
                        <>
                          <span className="text-[#aaa] mx-1">–</span>
                          <span className="font-normal text-[#888]">{sub}</span>
                        </>
                      )}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Nav arrows — below the carousel, mobile only */}
          {(canPrev || canNext) && (
            <div className="flex justify-start mt-5 pl-1">
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
        </div>
      </div>
    </section>
  );
};

export default SubsidiaryCompanies;