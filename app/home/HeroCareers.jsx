// app/home/HeroCareers.jsx
"use client";

import Link from "next/link";
import { useReveal } from "@/components/useReveal";
import SectionHeading from "@/components/SectionHeading";

export default function HeroCareers({ data }) {
  if (!data) return null;
  const { subheading, heading, description, ctaText, ctaHref, image } = data;

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

                {/* Section title — colours tuned for the teal background */}
                <div className="reveal-up" style={{ transitionDelay: "100ms" }}>
                  <SectionHeading className="pb-8"
                    color="#ffffff"
                    labelColor="rgba(255,255,255,0.7)"
                    accent="rgba(255,255,255,0.85)"
                    label={subheading || "Careers"}
                  >
                    {heading}
                  </SectionHeading>
                </div>

                <p
                  className="reveal-down mt-5 text-body text-white/70"
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
