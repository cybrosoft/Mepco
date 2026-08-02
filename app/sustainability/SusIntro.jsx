// app/sustainability/SusIntro.jsx
"use client";
import React, { useState } from "react";
import { sustainabilityPage } from "./data";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const SusIntro = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { title, paragraphs, initiatives, image } = sustainabilityPage.susIntro;

  return (
    <section className="w-full pt-6 pb-0 lg:pb-24 bg-[#F9F8F3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">

          {/* LEFT */}
          <Reveal className="lg:w-3/5 flex flex-col justify-center" threshold={0.1}>
            {/* E3: editorial label */}
            <SectionHeading className="py-10" color="#111" label="Our Commitment">
              Sustainability
            </SectionHeading>
            <div className="space-y-6 mb-10 text-body text-[#4a4a4a] max-w-[680px]">
              {paragraphs.map((p, i) => (
                <p key={i} className="reveal-down" style={{ transitionDelay: `${120 + i * 80}ms` }}>{p}</p>
              ))}
            </div>
            <div className="space-y-4">
              {initiatives.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={item.title}
                    className="reveal-card border-b border-neutral-200 pb-3 transition-all duration-300 hover:pl-2 hover:rounded-lg cursor-pointer"
                    style={{ transitionDelay: `${240 + index * 80}ms` }}>
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
          </Reveal>

          {/* RIGHT – image */}
          <Reveal className="lg:w-2/5" threshold={0.1}>
            <img src={image.src} alt={image.alt}
              className="reveal-card w-full hidden lg:block h-[850px] object-cover rounded-2xl shadow-xl" />
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default SusIntro;
