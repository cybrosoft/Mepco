"use client";

import React from "react";
import { motion } from "framer-motion";
import { sustainabilityPage } from "./data";

const CertificationsSection = () => {
  const { title, logos } = sustainabilityPage.certificationsSection;

  return (
    <section className="w-full py-12 lg:py-20 bg-[#F9F8F3]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-12">
          {title}
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-10">
          {logos.map((logo, index) => (
            <div
              key={logo.alt}
              className="flex items-center justify-center"
            >
              <motion.img
                src={logo.src}
                alt={logo.alt}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 0.8, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.7 }}
                viewport={{ once: true }}
                className="h-30 md:h-30 object-contain px-4 py-4 grayscale-0 hover:grayscale transition duration-300 bg-white rounded-lg shadow-sm"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CertificationsSection;
