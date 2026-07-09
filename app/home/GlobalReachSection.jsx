// app/home/GlobalReachSection.jsx
"use client";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function GlobalReachSection({ data }) {
  const MARKERS = data?.markers || [];
  const mapImage = data?.mapImage || "/map.jpg";

  return (
    <section className="w-full bg-[#01646e]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <Reveal threshold={0.1}>
          <div className="max-w-lg">
            <h2 className="reveal-up text-white text-3xl md:text-4xl font-bold mb-6"
              style={{ transitionDelay: "0ms" }}>{data?.heading}</h2>
            <p className="reveal-down mt-3 text-base leading-relaxed text-white/70"
              style={{ transitionDelay: "100ms" }}>{data?.description}</p>
          </div>
        </Reveal>

        <Reveal className="relative mt-10 w-full" threshold={0.08}>
          <div className="reveal-card relative w-full aspect-[16/7]">
            <Image src={mapImage} alt="Global Reach Map" fill priority className="object-contain" />
            {MARKERS.map((m, i) => (
              <div key={i} className="absolute" style={{ top: `${m.top}%`, left: `${m.left}%` }}>
                <span className="relative block h-3 w-3 -translate-x-1/2 -translate-y-1/2">
                  <span className="absolute inset-0 rounded-full bg-[#22c55e]/40 animate-ping" />
                  <span className="absolute inset-0 rounded-full bg-[#22c55e]/60 blur-[2px]" />
                  <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
