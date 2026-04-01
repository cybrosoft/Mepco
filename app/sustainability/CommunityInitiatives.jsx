// app/sustainability/CommunityInitiatives.jsx
"use client";
import React, { useState } from "react";
import { sustainabilityPage } from "./data";
import Reveal from "@/components/Reveal";

const CommunityInitiatives = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { title, introParagraphs, items, closingParagraph, image } = sustainabilityPage.communityInitiatives;

  return (
    <section className="w-full py-12 lg:py-20 bg-[#f9f8f3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* LEFT – image */}
          <Reveal className="lg:w-2/5" threshold={0.1}>
            <img src={image.src} alt={image.alt}
              className="reveal-card w-full hidden lg:block h-[750px] object-cover rounded-2xl shadow-xl" />
          </Reveal>

          {/* RIGHT */}
          <Reveal className="lg:w-3/5 flex flex-col justify-center" threshold={0.1}>
            <h2 className="reveal-up text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-8" style={{ transitionDelay: "0ms" }}>{title}</h2>
            <div className="space-y-4 mb-8 text-md leading-relaxed text-[#4a4a4a]">
              {introParagraphs?.map((p, i) => (
                <p key={i} className="reveal-down" style={{ transitionDelay: `${80 + i * 80}ms` }}>{p}</p>
              ))}
            </div>
            <div className="space-y-4">
              {items.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={item.title}
                    className="reveal-card border-b border-neutral-200 pb-3 transition-all duration-300 hover:pl-2 hover:rounded-lg cursor-pointer"
                    style={{ transitionDelay: `${200 + index * 80}ms` }}>
                    <button type="button" onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between text-left cursor-pointer">
                      <span className="text-sm md:text-base font-medium text-[#2d2d2d]">{item.title}</span>
                      <span className={`text-[#01646e] text-3xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} aria-hidden="true">+</span>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="text-xs md:text-sm mt-4 text-[#4a4a4a] leading-relaxed whitespace-pre-line pl-2">{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="reveal-down mt-10 text-md leading-relaxed text-[#4a4a4a]"
              style={{ transitionDelay: "500ms" }}>{closingParagraph}</p>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default CommunityInitiatives;
