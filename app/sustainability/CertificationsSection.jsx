"use client";
import React from "react";
import { sustainabilityPage } from "./data";
import Reveal from "@/components/Reveal";

import SectionHeading from "@/components/SectionHeading";

const CertificationsSection = () => {
  const { title, logos } = sustainabilityPage.certificationsSection;

  return (
    <section className="w-full py-12 lg:py-20 bg-[#F9F8F3]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <Reveal>
          <SectionHeading
            align="center"
            color="#111"
            label="Verified Standards"
            className="mb-12"
          >
            {title}
          </SectionHeading>
        </Reveal>

        <Reveal className="flex flex-wrap items-center justify-center gap-10" threshold={0.08}>
          {logos.map((logo, index) => (
            <div key={logo.alt}
              className="reveal-card flex items-center justify-center"
              style={{ transitionDelay: `${index * 80}ms` }}>
              <img src={logo.src} alt={logo.alt}
                className="h-30 md:h-30 object-contain px-4 py-4 grayscale-0 hover:grayscale transition duration-300 bg-white rounded-lg shadow-sm" />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default CertificationsSection;