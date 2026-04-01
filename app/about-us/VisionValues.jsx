// app/about-us/VisionValues.jsx
"use client";
import React, { useState } from "react";
import Reveal from "@/components/Reveal";

const VisionValues = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);
  if (!data) return null;
  const { heading, image, items } = data;

  return (
    <section className="w-full bg-white py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* LEFT – image */}
          <Reveal className="lg:w-2/5" threshold={0.1}>
            {image?.src && (
              <img src={image.src} alt={image.alt || "Vision"}
                className="reveal-card hidden lg:block w-full h-[600px] object-cover rounded-2xl shadow-xl sticky top-28" />
            )}
          </Reveal>

          {/* RIGHT – accordion */}
          <Reveal className="lg:w-3/5" threshold={0.1}>
            <h2 className="reveal-up text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-10"
              style={{ transitionDelay: "0ms" }}>
              {heading}
            </h2>
            <div className="space-y-4">
              {items?.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={item.title}
                    className="reveal-card border-b border-neutral-200 pb-3 transition-all duration-300 hover:pl-2 hover:rounded-lg cursor-pointer"
                    style={{ transitionDelay: `${index * 80}ms` }}>
                    <button type="button" onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between text-left" aria-expanded={isOpen}>
                      <span className="text-sm md:text-base font-medium text-[#2d2d2d]">{item.title}</span>
                      <span className={`text-[#01646e] text-3xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} aria-hidden="true">+</span>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="text-[#4a4a4a] leading-relaxed whitespace-pre-line pl-2 pt-3">
                        {item.type === "text" && <p>{item.desc}</p>}
                        {item.type === "list" && <ul className="list-disc pl-5 space-y-2">{item.list?.map((li, i) => <li key={i}>{li}</li>)}</ul>}
                        {item.type === "values" && (<><p>{item.paragraph}</p><ul className="mt-4 space-y-3">{item.values?.map((v, i) => <li key={i}><strong>{v.label}:</strong> {v.text}</li>)}</ul></>)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default VisionValues;
