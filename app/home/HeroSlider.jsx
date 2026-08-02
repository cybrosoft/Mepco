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
const ACCENT = "#22C1D0"; // teal accent (matches other page heroes)

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

/* Renders the title with an optional teal accent keyword (slide.accent),
   or as explicit lines (slide.titleLines: [{ text, accent }]). */
function renderTitle(slide) {
  if (Array.isArray(slide.titleLines) && slide.titleLines.length) {
    return slide.titleLines.map((l, i) => (
      <span key={i} className="block" style={l.accent ? { color: ACCENT } : undefined}>
        {l.text}
      </span>
    ));
  }
  if (slide.accent && typeof slide.title === "string" && slide.title.includes(slide.accent)) {
    const [before, after] = slide.title.split(slide.accent);
    return (
      <>
        {before}
        <span style={{ color: ACCENT }}>{slide.accent}</span>
        {after}
      </>
    );
  }
  return slide.title;
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
 * SlideContent — centered (horizontally + vertically), with the editorial
 * eyebrow + big bold title (teal accent keyword) kept.
 * Parent passes key={activeIndex} so the CSS animations restart per slide.
 */
function SlideContent({ slide, slideIndex, onWatchClick }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Even overlay for centered text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content — centered */}
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Title */}
          <h2 className="hero-animate-title text-hero text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.6)]">
            {renderTitle(slide)}
          </h2>

          {/* Optional subtitle */}
          {slide.subtitle ? (
            <p className="hero-animate-btn mt-4 text-hero-sub text-white/75 mx-auto max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
              {slide.subtitle}
            </p>
          ) : null}

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href={slide.href} className="hero-animate-btn">
              <span className="inline-flex items-center justify-center rounded-full bg-white px-9 py-3.5 text-sm font-semibold text-[#01646e] transition-all duration-300 hover:bg-[#01646e] hover:text-white">
                {slide.buttonText}
              </span>
            </Link>

            {slideIndex === 0 && (
              <button
                onClick={onWatchClick}
                className="hero-animate-watch inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/10 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-all duration-300"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-[#01646e] text-xs font-bold">▶</span>
                Watch Our Story
              </button>
            )}
          </div>
        </div>
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

            {/* Arrows — bottom-right pair */}
            <div className="absolute inset-x-0 bottom-0 z-10 pb-8 pointer-events-none">
              <div className="max-w-7xl mx-auto w-full px-6 flex justify-end items-center gap-3">
                <div ref={prevRef} className="text-white cursor-pointer pointer-events-auto select-none border border-white rounded-[25px] px-3 py-1">
                  <Image src="/arrow-prev.svg" alt="Prev" width={20} height={14} />
                </div>
                <div ref={nextRef} className="text-white cursor-pointer pointer-events-auto select-none border border-white rounded-[25px] px-3 py-1">
                  <Image src="/arrow-next.svg" alt="Next" width={20} height={14} />
                </div>
              </div>
            </div>
          </Swiper>
        )}
      </section>

      <VideoModal open={modalOpen} onClose={() => setModalOpen(false)} embedUrl={embedUrl} />
    </>
  );
}
