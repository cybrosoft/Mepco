"use client";

import React from "react";
import { IconDownload } from "@/components/ui/icons";
import { sustainabilityPage } from "./data";

const SusReports = () => {
  const { title, paragraphs, reports, image } =
    sustainabilityPage.sustainabilityReports;

  return (
    <section className="w-full pb-14 pt-12 lg:py-16 bg-[#F9F8F3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:gap-16 items-center">
          {/* LEFT */}
          <div className="lg:w-3/5 flex flex-col justify-center w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-8">
              {title}
            </h2>

            <div className="space-y-6 text-md leading-relaxed text-[#4a4a4a]">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Rows */}
            <div className="mt-10 space-y-4">
              {reports.map((r) => (
                <a
                  key={r.title}
                  href={r.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <div
                    className="w-full border border-[#aeaeae] rounded-3xl px-4 py-3
                               flex items-center justify-between gap-3
                               transition-all duration-300
                               group-hover:bg-white group-hover:shadow-md sm:group-hover:-translate-y-1"
                  >
                    {/* Left: pdf + text */}
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <span className="inline-flex h-9 w-9 items-center justify-center shrink-0" aria-hidden="true">
                        <img src="/pdf.png" alt="PDF" className="h-6 w-6 object-contain" />
                      </span>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm md:text-base font-medium text-[#2d2d2d] truncate">
                          {r.title}
                        </p>

                        {r.note ? (
                          <p className="mt-1 text-xs md:text-sm text-[#4a4a4a] truncate hidden sm:block">
                            {r.note}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    {/* Right: size + download */}
                    <div className="flex items-center gap-3 shrink-0">
                      {r.size ? (
                        <span className="text-xs md:text-sm text-neutral-600 whitespace-nowrap hidden sm:inline">
                          {r.size}
                        </span>
                      ) : null}

                      <span
                        className="inline-flex h-10 w-10 items-center justify-center
                                   text-[#01646e]
                                   group-hover:bg-[#01646e]
                                   group-hover:text-white
                                   rounded-full transition"
                        aria-hidden="true"
                        title="Download"
                      >
                        <IconDownload />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:w-2/5 w-full">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full hidden lg:block lg:h-[750px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SusReports;
