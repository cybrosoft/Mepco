// app/home/HeroSlider.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const YOUTUBE_URL = "https://www.youtube.com/watch?v=mDM8vjk_adY";

function getYouTubeEmbed(url) {
  const match = url.match(/(?:v=|youtu\.be\/)([^&?/]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0` : null;
}

function getSlideDelay(slide, fallback = 5000) {
  if (typeof slide.delay === "number") return slide.delay;
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
  const loopSegment =
    typeof slide.loopSegment === "boolean" ? slide.loopSegment : Boolean(endTime);

  const ensurePlayFromStart = async () => {
    const video = videoRef.current;
    if (!video) return;
    try { video.currentTime = startTime; } catch (_) {}
    try { await video.play(); } catch (_) {}
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onLoadedMetadata = () => {
      if (isActive) { video.currentTime = startTime; void video.play().catch(() => {}); }
      else { video.pause(); }
    };
    const onTimeUpdate = () => {
      if (!endTime) return;
      if (video.currentTime >= endTime) {
        if (loopSegment) { video.currentTime = startTime; void video.play().catch(() => {}); }
        else { video.pause(); video.currentTime = endTime; }
      }
    };
    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("timeupdate", onTimeUpdate);
    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [isActive, startTime, endTime, loopSegment]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isActive) { void ensurePlayFromStart(); } else { video.pause(); }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  return (
    <video
      ref={videoRef}
      src={slide.src}
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay muted playsInline preload="metadata"
    />
  );
}

/**
 * SlideContent is extracted as its own component.
 * The parent passes key={activeIndex} so React fully unmounts+remounts it
 * on every slide change — this restarts the CSS keyframe animations from scratch.
 */
function SlideContent({ slide, slideIndex, onWatchClick }) {
  return (
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4 md:px-0">
      {/* Title — slides UP from below */}
      <h2 className="hero-animate-title text-3xl md:text-6xl font-bold text-white max-w-3xl mx-auto drop-shadow-lg">
        {slide.title}
      </h2>

      {/* Buttons row */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
        {/* Primary CTA — slides up slightly after title */}
        <Link href={slide.href} className="hero-animate-btn">
          <span className="inline-flex items-center justify-center rounded-full border border-white bg-white px-10 py-4 text-sm font-semibold text-[#01646e] transition-colors duration-200 hover:bg-[#01646e] hover:border-[#01646e] hover:text-white">
            {slide.buttonText}
          </span>
        </Link>

        {/* Watch Our Story — only on first slide, fades in last */}
        {slideIndex === 0 && (
          <button
            onClick={onWatchClick}
            className="hero-animate-watch inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/10 backdrop-blur-sm px-7 py-4 text-sm font-semibold text-white hover:bg-white/20 transition-all duration-200"
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-[#01646e] text-xs font-bold">▶</span>
            Watch Our Story
          </button>
        )}
      </div>
    </div>
  );
}

/* ── Video Modal ── */
function VideoModal({ open, onClose, embedUrl }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={embedUrl}
          className="w-full h-full"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="MEPCO Video"
        />
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition text-lg"
          aria-label="Close"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default function HeroSlider({ slides = [] }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [initSwiper, setInitSwiper] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Tracks which slide is currently active — changes on every transition
  const [activeIndex, setActiveIndex] = useState(0);

  const embedUrl = getYouTubeEmbed(YOUTUBE_URL);

  useEffect(() => { setInitSwiper(true); }, []);

  const slidesWithDelay = useMemo(() => (
    slides.map((s) => ({ ...s, _computedDelay: getSlideDelay(s, 5000) }))
  ), [slides]);

  return (
    <>
      <section className="relative h-[80vh] w-full">
        {initSwiper && (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            slidesPerView={1}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              if (swiper.params.navigation) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            // ← this is the key: update activeIndex on every slide change
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            pagination={{
              clickable: true,
              bulletClass: "custom-bullet",
              bulletActiveClass: "custom-bullet-active",
            }}
            className="w-full h-full"
          >
            {slidesWithDelay.map((slide, idx) => (
              <SwiperSlide key={idx} data-swiper-autoplay={slide._computedDelay}>
                <div className="relative w-full h-[80vh]">
                  {slide.type === "video"
                    ? <VideoSegment slide={slide} />
                    : <Image src={slide.src} alt={slide.title} fill className="absolute inset-0 object-cover" priority />
                  }
                  {/*
                    key={activeIndex} — when activeIndex changes, React destroys
                    and recreates SlideContent, which restarts all CSS animations.
                    This works for every slide, every time.
                  */}
                  {activeIndex === idx && (
                    <SlideContent
                      key={activeIndex}
                      slide={slide}
                      slideIndex={idx}
                      onWatchClick={() => setModalOpen(true)}
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}

            {/* Arrows */}
            <div className="absolute inset-0 flex justify-between items-end pb-[55px] max-w-7xl mx-auto w-full px-6 pt-20 z-10 pointer-events-none">
              <div ref={prevRef} className="text-white cursor-pointer pointer-events-auto select-none border border-white rounded-[25px] px-3 py-1">
                <Image src="/arrow-prev.svg" alt="Prev" width={20} height={14} />
              </div>
              <div ref={nextRef} className="text-white cursor-pointer pointer-events-auto select-none border border-white rounded-[25px] px-3 py-1">
                <Image src="/arrow-next.svg" alt="Next" width={20} height={14} />
              </div>
            </div>
          </Swiper>
        )}
      </section>

      <VideoModal open={modalOpen} onClose={() => setModalOpen(false)} embedUrl={embedUrl} />
    </>
  );
}
