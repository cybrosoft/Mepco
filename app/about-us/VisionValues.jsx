"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

const VisionValues = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(2); // open first item by default

  if (!data) return null;

  const { heading, image, items } = data;

  return (
    <section className="w-full bg-white pt-2 lg:pt-4 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-stretch">
          
          {/* LEFT: Image */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-2xl lg:h-[750px] bg-neutral-200">
              {image?.src && (
                <img
                  src={image.src}
                  alt={image.alt || "Manufacturing"}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <SectionHeading className="mb-8">{heading}</SectionHeading>

            <div className="space-y-4">
              {items?.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={item.title}
                    className="border-b border-neutral-200 pb-3 transition-all duration-300 hover:pl-2 hover:rounded-lg cursor-pointer"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm md:text-base font-medium text-[#2d2d2d]">
                        {item.title}
                      </span>

                      <span
                        className={`text-[#01646e] text-3xl transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="text-[#4a4a4a] leading-relaxed whitespace-pre-line pl-2 pt-3">
                        
                        {item.type === "text" && <p>{item.desc}</p>}

                        {item.type === "list" && (
                          <ul className="list-disc pl-5 space-y-2">
                            {item.list.map((li, i) => (
                              <li key={i}>{li}</li>
                            ))}
                          </ul>
                        )}

                        {item.type === "values" && (
                          <>
                            <p>{item.paragraph}</p>

                            <ul className="mt-4 space-y-3">
                              {item.values.map((v, i) => (
                                <li key={i}>
                                  <strong>{v.label}:</strong> {v.text}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionValues;
