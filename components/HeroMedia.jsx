"use client";

import React, { useRef, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function getYouTubeEmbedUrl(url) {
  if (!url) return "";
  // Supports youtu.be/<id> and youtube.com/watch?v=<id> and embed/<id>
  const id =
    url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/)?.[1] ||
    url.match(/[?&]v=([a-zA-Z0-9_-]+)/)?.[1] ||
    url.match(/embed\/([a-zA-Z0-9_-]+)/)?.[1];

  return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : url;
}

export default function HeroMedia({
  // content
  heading = "",
  subtitle = "",

  // background media
  backgroundType = "video", // "video" | "image"
  backgroundVideoSrc = "",
  backgroundImageSrc = "",

  // overlay
  overlayClassName = "bg-black/30",

  // sizing / spacing
  minHeightClassName = "min-h-[55vh]",
  topPaddingClassName = "pt-[80px]",
  contentPaddingBottomClassName = "pb-[50px]",

  // loop segment (for background video)
  loop = { enabled: true, start: 68, end: 100 },

  // play button + modal video
  showPlayButton = true,
  playButtonText = "Play the Video",
  youtubeUrl = "",

  // optional custom class
  className = "",
}) {
  const videoRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const embedUrl = useMemo(() => getYouTubeEmbedUrl(youtubeUrl), [youtubeUrl]);

  // Background loop control (only if backgroundType is video)
  useEffect(() => {
    if (backgroundType !== "video") return;

    const video = videoRef.current;
    if (!video) return;

    const startTime = Number(loop?.start ?? 0);
    const endTime = Number(loop?.end ?? 0);
    const enabled = Boolean(loop?.enabled);

    if (!enabled || !endTime || endTime <= startTime) return;

    const handleLoaded = () => {
      try {
        video.currentTime = startTime;
      } catch {}
    };

    const handleTimeUpdate = () => {
      if (video.currentTime >= endTime) {
        video.currentTime = startTime;
        video.play().catch(() => {});
      }
    };

    video.addEventListener("loadedmetadata", handleLoaded);
    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoaded);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [backgroundType, loop]);

  return (
    <>
      <section
        className={`relative ${minHeightClassName} ${topPaddingClassName} overflow-hidden flex items-end ${className}`}
      >
        {/* Background */}
        {backgroundType === "video" ? (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src={backgroundVideoSrc}
            autoPlay
            muted
            playsInline
          />
        ) : (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImageSrc})` }}
          />
        )}

        {/* Overlay */}
        <div className={`absolute inset-0 ${overlayClassName}`} />

        {/* Content */}
        <div className={`relative mx-auto w-full max-w-7xl px-6 ${contentPaddingBottomClassName}`}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            {/* Play Button */}
            {showPlayButton && embedUrl ? (
              <motion.button
                onClick={() => setIsOpen(true)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="inline-flex items-center gap-3 rounded-full bg-black/40 px-5 py-2 text-white backdrop-blur-sm border border-white/20 hover:bg-[#006D77] transition-all duration-300"
                type="button"
              >
                <span className="flex items-center justify-center rounded-full">▶</span>
                <span className="text-sm tracking-wide">{playButtonText}</span>
              </motion.button>
            ) : null}



            {/* Heading */}
            {heading ? (
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.7 }}
                className="mt-4 text-4xl md:text-5xl font-medium text-white leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]"
              >
                {heading}
              </motion.h1>
            ) : null}

            {/* Subtitle */}
            {subtitle ? (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.7 }}
                className="mt-2 text-white/90 text-base md:text-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]"
              >
                {subtitle}
              </motion.p>
            ) : null}


          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && embedUrl ? (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl aspect-video"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-10 right-0 text-white text-2xl"
                type="button"
              >
                ✕
              </button>

              <iframe
                className="w-full h-full rounded-lg"
                src={embedUrl}
                title="YouTube video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
