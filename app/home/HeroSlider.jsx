"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function getSlideDelay(slide, fallback = 5000) {
  // If user explicitly sets delay, use it
  if (typeof slide.delay === "number") return slide.delay;

  // If it's a video segment and both times exist, derive delay from segment length
  if (
    slide.type === "video" &&
    typeof slide.startTime === "number" &&
    typeof slide.endTime === "number" &&
    slide.endTime > slide.startTime
  ) {
    return Math.round((slide.endTime - slide.startTime) * 1000);
  }

  return fallback;
}

function VideoSegment({ slide }) {
  const videoRef = useRef(null);
  const { isActive } = useSwiperSlide();

  const startTime = typeof slide.startTime === "number" ? slide.startTime : 0;
  const hasEnd = typeof slide.endTime === "number" && slide.endTime > startTime;
  const endTime = hasEnd ? slide.endTime : null;

  // default: loop only inside the segment if endTime exists
  const loopSegment =
    typeof slide.loopSegment === "boolean" ? slide.loopSegment : Boolean(endTime);

  const ensurePlayFromStart = async () => {
    const video = videoRef.current;
    if (!video) return;

    // Jump to start
    try {
      // If metadata isn't ready yet, setting currentTime may throw in some browsers.
      // We guard it by waiting for metadata below too.
      video.currentTime = startTime;
    } catch (_) {}

    // Try to play (may be blocked if not muted — you are muted, so should be ok)
    try {
      await video.play();
    } catch (_) {
      // ignore autoplay errors
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoadedMetadata = () => {
      if (isActive) {
        video.currentTime = startTime;
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    };

    const onTimeUpdate = () => {
      if (!endTime) return;
      if (video.currentTime >= endTime) {
        if (loopSegment) {
          video.currentTime = startTime;
          void video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = endTime; // keep it pinned at end frame
        }
      }
    };

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [isActive, startTime, endTime, loopSegment]);

  // When slide becomes active/inactive, play/pause and reset
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      void ensurePlayFromStart();
    } else {
      video.pause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  return (
    <video
      ref={videoRef}
      src={slide.src}
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      muted
      playsInline
      preload="metadata"
    />
  );
}

export default function HeroSlider({ slides = [] }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [initSwiper, setInitSwiper] = useState(false);

  useEffect(() => {
    setInitSwiper(true);
  }, []);

  const slidesWithDelay = useMemo(() => {
    return slides.map((s) => ({
      ...s,
      _computedDelay: getSlideDelay(s, 5000),
    }));
  }, [slides]);

  return (
    <section className="relative h-[80vh] w-full">
      {initSwiper && (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          pagination={{
            clickable: true,
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
          className="w-full h-full"
        >
          {slidesWithDelay.map((slide, idx) => (
            <SwiperSlide
              key={idx}
              // ✅ per-slide timing (video segment delay or explicit delay)
              data-swiper-autoplay={slide._computedDelay}
            >
              <div className="relative w-full h-[80vh]">
                {slide.type === "video" ? (
                  <VideoSegment slide={slide} />
                ) : (
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    fill
                    className="absolute inset-0 object-cover"
                    priority
                  />
                )}

                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4 md:px-0">
                  <h2 className="text-3xl md:text-6xl font-bold text-white max-w-3xl mx-auto">
                    {slide.title}
                  </h2>

                  <Link href={slide.href} className="mt-6">
                    <span
                      className="
                        inline-flex items-center justify-center
                        rounded-full
                        border border-white
                        bg-white
                        px-10 py-4
                        text-sm font-semibold
                        text-[#01646e]
                        transition-colors duration-200
                        hover:bg-[#01646e]
                        hover:border-[#01646e]
                        hover:text-white
                      "
                    >
                      {slide.buttonText}
                    </span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Arrows */}
          <div className="absolute inset-0 flex justify-between items-end pb-[55px] max-w-7xl mx-auto w-full px-6 pt-20 z-10 pointer-events-none">
            <div
              ref={prevRef}
              className="text-white cursor-pointer pointer-events-auto select-none border border-white rounded-[25px] px-3 py-1"
            >
              <Image src="/arrow-prev.svg" alt="Prev" width={20} height={14} />
            </div>
            <div
              ref={nextRef}
              className="text-white cursor-pointer pointer-events-auto select-none border border-white rounded-[25px] px-3 py-1"
            >
              <Image src="/arrow-next.svg" alt="Next" width={20} height={14} />
            </div>
          </div>
        </Swiper>
      )}
    </section>
  );
}
