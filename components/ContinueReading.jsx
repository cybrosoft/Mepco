"use client";

import React from "react";
import Link from "next/link";

const ContinueReading = ({ items = [] }) => {
  return (
    <section className="w-full py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-8">
          Continue Reading
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group relative overflow-hidden rounded-2xl h-[450px]"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <h3 className="text-white text-xl md:text-2xl font-medium max-w-[70%]">
                  {item.title}
                </h3>

                {/* Arrow Button */}
                <div className="flex items-center justify-center w-12 h-6 rounded-full border border-white/70 bg-white/10 backdrop-blur-sm transition group-hover:bg-white/20">
                  <img
                    src="/arrow-next.svg"
                    alt="Arrow"
                    className="w-5 h-5"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContinueReading;
