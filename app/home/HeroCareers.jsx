// app/home/HeroCareers.jsx
"use client";

import Link from "next/link";
import { useReveal } from "@/components/useReveal";

export default function HeroCareers({ data }) {
  if (!data) return null;
  const { heading, description, ctaText, ctaHref, image } = data;

  const ref = useReveal(0.1);

  return (
    <section className="w-full bg-white py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref}>
          <div className="reveal-card flex flex-col lg:flex-row overflow-hidden rounded-3xl min-h-[420px] lg:h-[570px]">

            {/* LEFT — Image */}
            <div className="w-full lg:w-[50%] h-[280px] lg:h-full overflow-hidden">
              <img
                src={image}
                alt="Careers at MEPCO"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* RIGHT — Content */}
            <div className="w-full lg:w-[50%] bg-[#01646e] flex items-center px-10 lg:px-14 py-12 lg:py-0">
              <div>

                {/* Careers label */}
                <span
                  className="reveal-up inline-block text-xs font-semibold tracking-[0.2em] uppercase text-white/50 border border-white/20 rounded-full px-3 py-1 mb-5"
                  style={{ transitionDelay: "100ms" }}
                >
                  Careers
                </span>

                <h2
                  className="reveal-up text-3xl md:text-4xl text-white"
                  style={{ transitionDelay: "200ms" }}
                >
                  {heading}
                </h2>
                <p
                  className="reveal-down mt-5 text-base leading-relaxed text-white/70"
                  style={{ transitionDelay: "320ms" }}
                >
                  {description}
                </p>
                <div className="reveal-fade mt-8" style={{ transitionDelay: "460ms" }}>
                  <Link
                  href={ctaHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-white text-[#01646e] px-7 py-3.5 text-sm font-semibold hover:bg-white/90 transition-all duration-200"
                >
                  {ctaText}
                </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}