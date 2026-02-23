"use client";

import React, { useState } from "react";
import { sustainabilityPage } from "./data";

const CommunityInitiatives = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const { title, introParagraphs, items, image, closingParagraph } =
    sustainabilityPage.communityInitiatives;

  return (
    <section className="w-full py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* LEFT – IMAGE FIRST */}
          <div className="lg:w-2/5">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full lg:h-[750px] object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* RIGHT – CONTENT */}
          <div className="lg:w-3/5 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-8">
              {title}
            </h2>

            <div className="space-y-6 text-md mb-10 leading-relaxed text-[#4a4a4a]">
              {introParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={item.title}
                    className="border-b border-neutral-200 pb-3 
                    transition-all duration-300 
                    hover:pl-2 hover:rounded-lg !cursor-pointer"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between text-left cursor-pointer"
                    >
                      <span className="text-sm md:text-base font-medium text-[#2d2d2d]">
                        {item.title}
                      </span>

                      <span
                        className={`text-[#01646e] text-3xl transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="text-xs md:text-sm mt-4 text-[#4a4a4a] leading-relaxed whitespace-pre-line pl-2">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="mt-10 text-md leading-relaxed text-[#4a4a4a]">
              {closingParagraph}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityInitiatives;
