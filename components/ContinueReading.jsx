// components/ContinueReading.jsx
"use client";
import React from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function ContinueReading({ items = [] }) {
  return (
    <section className="w-full bg-[#f5f5f5] py-16">
      <div className="max-w-7xl mx-auto px-6">
<SectionHeading className="mb-14" color="#111" label="What is Next?">
  Continue Reading
</SectionHeading>

        <Reveal threshold={0.08}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="reveal-card group relative overflow-hidden rounded-2xl h-[450px]"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <h3 className="text-white text-xl md:text-2xl font-medium max-w-[70%]">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-center w-12 h-6 rounded-full border border-white/70 bg-white/10 backdrop-blur-sm transition group-hover:bg-white/20">
                    <img src="/arrow-next.svg" alt="Arrow" className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
