// components/CertificationsStrip.jsx
"use client";

import { useRef } from "react";

const CERTS = [
  { label: "FSC® Recycled Certified",   logo: "/certs/fsc.png"   },
  { label: "ISO 9001",                  logo: "/certs/iso9001.png" },
  { label: "ISO 14001",                 logo: "/certs/iso14001.png" },
  { label: "ISO 45001",                 logo: "/certs/iso45001.png" },
  { label: "PIF Partner",               logo: "/certs/pif.png"   },
  { label: "Saudi Vision 2030",         logo: "/certs/vision2030.png" },
  { label: "SFDA Certified",            logo: "/certs/sfda.png"  },
  { label: "SASO Compliant",            logo: "/certs/saso.png"  },
];

// Duplicate for seamless infinite scroll
const ITEMS = [...CERTS, ...CERTS];

export default function CertificationsStrip() {
  return (
    <div className="w-full bg-[#f9f8f3] border-y border-neutral-200 py-6 overflow-hidden">
      <p className="text-center text-xs uppercase tracking-widest text-[#888] mb-5 font-medium">
        Certifications &amp; Recognitions
      </p>

      <div className="relative flex overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#f9f8f3] to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#f9f8f3] to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex animate-marquee gap-12 items-center whitespace-nowrap">
          {ITEMS.map((cert, i) => (
            <div
              key={i}
              className="flex items-center gap-3 shrink-0 px-2"
            >
              {/* Logo — fallback to text pill if image fails */}
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src={cert.logo}
                  alt={cert.label}
                  className="max-h-10 max-w-[80px] w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </div>
              <span className="text-sm font-medium text-[#555] select-none">
                {cert.label}
              </span>
              {/* Separator dot */}
              <span className="w-1 h-1 rounded-full bg-[#ccc] ml-2" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
