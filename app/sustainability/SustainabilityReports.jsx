// app/sustainability/SustainabilityReports.jsx
"use client";
import React from "react";
import { sustainabilityPage } from "./data";
import Reveal from "@/components/Reveal";

import SectionHeading from "@/components/SectionHeading";

const SustainabilityReports = () => {
  const { title, paragraphs, reports, image } = sustainabilityPage.sustainabilityReports;

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-center">

          {/* LEFT */}
          <Reveal className="lg:w-3/5 flex flex-col justify-center" threshold={0.1}>
            
            <SectionHeading className="pb-10" color="#111" label="Our Progress">
                Sustainability Reports
            </SectionHeading>
            <div className="space-y-4 mb-8 max-w-[680px]">
              {paragraphs.map((p, i) => (
                <p key={i} className="reveal-down text-body text-[#4a4a4a]"
                  style={{ transitionDelay: `${80 + i * 80}ms` }}>{p}</p>
              ))}
            </div>
            <div className="space-y-3">
              {reports.map((r, idx) => (
                <a key={r.title} href={r.href} target="_blank" rel="noreferrer"
                  className="reveal-card flex items-center justify-between p-4 rounded-xl border border-neutral-200 hover:border-[#01646e] hover:bg-[#f9f8f3] transition group"
                  style={{ transitionDelay: `${200 + idx * 80}ms` }}>
                  <div>
                    <p className="text-sm font-medium text-[#2d2d2d] group-hover:text-[#01646e] transition">{r.title}</p>
                    {r.note && <p className="text-xs text-neutral-500 mt-0.5">{r.note}</p>}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <span>{r.size}</span>
                    <svg className="w-4 h-4 text-[#01646e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          {/* RIGHT – image */}
          <Reveal className="lg:w-2/5" threshold={0.1}>
            <img src={image.src} alt={image.alt}
              className="reveal-card hidden lg:block w-full h-[750px] object-cover rounded-2xl shadow-xl" />
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default SustainabilityReports;
