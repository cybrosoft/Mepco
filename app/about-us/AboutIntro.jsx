// AboutIntro.jsx
import React from "react";
import SectionHeading from "@/components/SectionHeading";


const AboutIntro = ({ data }) => {
  if (!data) return null;

  const { heading, label, paragraphs, stats, image } = data;

  return (
    <section className="w-full pt-10 pb-0 lg:pb-24 bg-[#f9f8f3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-center">
          {/* LEFT – 60% */}
          <div className="lg:w-3/5 flex flex-col justify-center">
            {/* E3: editorial label (data.label overrides the default) */}
            <SectionHeading className="mb-8" label={label || "About MEPCO"}>
              {heading}
            </SectionHeading>

            {/* C2: cap prose width for comfortable reading */}
            <div className="space-y-6 text-body text-[#4a4a4a] max-w-[680px]">
              {Array.isArray(paragraphs) &&
                paragraphs.map((p, idx) => <p key={idx}>{p}</p>)}
            </div>

            {/* STATS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 lg:mt-14">
              {Array.isArray(stats) &&
                stats.map((item, idx) => (
                  <div key={idx}>
                    <p className="text-4xl font-semibold text-[#01646e]">
                      {item.value}
                    </p>
                    <p className="text-small text-gray-500 italic">
                      {item.label}
                    </p>
                  </div>
                ))}
            </div>
          </div>

          {/* RIGHT – 40% LARGE IMAGE */}
          <div className="lg:w-2/5">
            {image?.src ? (
              <img
                src={image.src}
                alt={image.alt || "Paper Manufacturing"}
                className="hidden lg:block w-full h-[750px] object-cover rounded-2xl shadow-xl"
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
