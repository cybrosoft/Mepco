"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

import HeaderWhite from "@/components/Header/HeaderWhite";
import BreadcrumbSection from "@/components/Breadcrumbs";
import ContinueReading from "@/components/ContinueReading";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

import { subsidiariesPage } from "./data";

export default function SubsidiariesPage() {
  const { subsidiaries, continueReadingItems, hero, pageHead } = subsidiariesPage;

  const pathname = usePathname();

  // ✅ Hash scroll support
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = window.location.hash?.replace("#", "");
    if (!hash) return;

    requestAnimationFrame(() => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [pathname]);

  return (
    <main className="w-full bg-white">
      <HeaderWhite />

      <BreadcrumbSection
        className="bg-white"
        containerClassName="pt-4"
        items={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about-us" },
          { label: hero?.heading ?? pageHead?.title ?? "Subsidiaries" },
        ]}
      />
      <section className="w-full pb-2">
              <div className="max-w-7xl mx-auto px-6">
                <SectionHeading className="my-10" color="#111" label="The MEPCO Group">
                Our Subsidiaries
              </SectionHeading>
          <p className="mt-4 text-neutral-700 leading-relaxed">
                    Our Subsidiaries Play a Strategic Role in Strengthening our Integrated Value Chain.
                  </p>
              </div>
            </section>

      {/* Cards */}
      <section className="w-full pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          {subsidiaries?.map((s, idx) => {
            const showVideo = s.mediaType === "video" && !!s.video;
            const isSecond = idx === 1;

            // ✅ Exact pattern:
            // 1) 40 media / 60 content
            // 2) 60 content / 40 media
            // 3) 40 media / 60 content
            const gridCols = isSecond
              ? "lg:grid-cols-[60%_40%]" // content 60 / media 40
              : "lg:grid-cols-[40%_60%]"; // media 40 / content 60

            return (
              <div
                key={s.id}
                id={s.id}
                className="rounded-3xl overflow-hidden border lg:mt-10 lg:mb-20 border-neutral-200 bg-[#f9f8f3] scroll-mt-32"
              >
                <div className={["grid grid-cols-1", gridCols].join(" ")}>
                  {/* LEFT COLUMN */}
                  <div>
                    {isSecond ? (
                      // ✅ Section 2: LEFT = CONTENT (60%)
                      <ContentBlock s={s} />
                    ) : (
                      // ✅ Section 1 & 3: LEFT = MEDIA (40%)
                      <MediaBlock s={s} showVideo={showVideo} />
                    )}
                  </div>

                  {/* RIGHT COLUMN */}
                  <div>
                    {isSecond ? (
                      // ✅ Section 2: RIGHT = MEDIA (40%)
                      <MediaBlock s={s} showVideo={showVideo} />
                    ) : (
                      // ✅ Section 1 & 3: RIGHT = CONTENT (60%)
                      <ContentBlock s={s} />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <div className="lg:-mt-30">
        <ContinueReading items={continueReadingItems} />
      </div>
      
      <Footer />
    </main>
  );
}

/* ========== Blocks ========== */

function MediaBlock({ s, showVideo }) {
  return (
    <div className="h-[260px] sm:h-[320px] lg:h-full min-h-[360px] bg-neutral-200 overflow-hidden">
      {showVideo ? (
        <video
          src={s.video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      ) : (
        <img
          src={s.image}
          alt={s.name}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}

function ContentBlock({ s }) {
  return (
    <div className="p-8 sm:p-12 flex flex-col justify-center h-full">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <div className="h-14 w-28 flex items-center justify-start">
          <img
            src={s.logo}
            alt={`${s.name} logo`}
            className="max-h-14 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      </div>

      <h2 className="mt-6 text-3xl md:text-4xl font-medium text-[#2d2d2d] leading-tight">
        {s.name} <span className="text-[#2d2d2d]/80">– {s.subtitle}</span>
      </h2>

      <p className="mt-5 text-neutral-700 leading-relaxed max-w-xl">
        {s.desc}
      </p>

      <div className="mt-8">
        <a
          href={s.website}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 rounded-full 
                    border border-[#01646e] 
                    bg-[#01646e] 
                    px-6 py-3 text-sm font-medium 
                    text-white 
                    hover:bg-[#01464d] hover:border-[#01464d] 
                    transition-colors duration-300"
        >
          Visit website
          <span aria-hidden="true" className="text-lg leading-none">
            →
          </span>
        </a>

      </div>
    </div>
  );
}
