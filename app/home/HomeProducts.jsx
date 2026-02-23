"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

const HomeProducts = ({
  heading = "Our Products",
  ctaText = "View All Products",
  ctaHref = "/products",
  products = [],
}) => {
  const slides = useMemo(() => products.slice(0, 9), [products]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
  });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    update();
    emblaApi.on("select", update);
    emblaApi.on("reInit", update);
  }, [emblaApi, update]);

  const containerLeftOffset =
    "calc((100vw - min(80rem, 100vw)) / 2 + 1.5rem)";
  const sliderViewportWidth = `calc(100vw - (${containerLeftOffset}))`;

  return (
    <section className="w-full bg-white py-12 lg:py-20 lg:pb-16 overflow-hidden">
      {/* ===== Header ===== */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-start pb-8 lg:justify-between gap-0 lg:gap-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-6 lg:mb-6">

            {heading}
          </h2>

          <Link
            href={ctaHref}
            className="hidden lg:block self-start whitespace-nowrap border border-[#006D77] bg-[#006D77] text-white hover:bg-[#005a63] px-8 py-3 rounded-full text-md font-semibold transition items-center"
          >
            {ctaText}
          </Link>
        </div>

        {(canPrev || canNext) && (
          <div className="flex justify-start lg:justify-end mt-6 -mb-28 pr-2 pl-2 lg:pr-2 relative z-30">
            <div className="inline-flex items-center rounded-full border border-white/90 bg-black/50 backdrop-blur-[2px] px-5 py-2 shadow-sm">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                disabled={!canPrev}
                aria-label="Previous"
                className="disabled:opacity-40 p-4 -m-4"
              >
                <img
                  src="/arrow-prev.svg"
                  alt=""
                  className="h-5 w-5 opacity-100 pointer-events-none"
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
                  src="/arrow-next.svg"
                  alt=""
                  className="h-5 w-5 opacity-100 pointer-events-none"
                />
              </button>
            </div>
          </div>
        )}
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
              {slides.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="flex-none w-[78vw] sm:w-[48vw] md:w-[34vw] lg:w-[300px]"
                >
                  {/* ✅ FORCED border (guaranteed) */}
                  <div
                    className="relative overflow-hidden rounded-2xl
                               h-[420px] sm:h-[440px] md:h-[440px] lg:h-[440px]
                               bg-neutral-200"
                    style={{
                      border: "1px solid #d4d4d4", // change width/color here
                      boxSizing: "border-box",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="mt-5 text-lg sm:text-xl font-semibold text-[#111]">
                    {item.name}
                  </h3>

                  {/* ✅ 2-line clamp, no .._ */}
                  <p
                    className="mt-2 text-sm leading-relaxed text-[#666] overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ CTA after slider only on < md */}
      <div className="mx-auto max-w-7xl px-6 mt-7 md:hidden">
        <Link
          href={ctaHref}
          className="inline-flex lg:hidden items-center justify-center whitespace-nowrap border border-[#006D77] bg-[#006D77] text-white hover:bg-[#005a63] px-8 py-3 rounded-full text-md font-semibold transition"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
};

export default HomeProducts;
