// AboutIntro.jsx
import React from "react";

const AboutIntro = ({ data }) => {
  if (!data) return null;

  const { heading, paragraphs, stats, image } = data;

  return (
    <section className="w-full pb-0 lg:pb-16 bg-[#f9f8f3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* LEFT – 60% */}
          <div className="lg:w-3/5 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-8 tracking-tight">
              {heading}
            </h2>

            <div className="space-y-6 text-md leading-relaxed text-[#4a4a4a]">
              {Array.isArray(paragraphs) &&
                paragraphs.map((p, idx) => <p key={idx}>{p}</p>)}
            </div>

            {/* STATS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-7 lg:mt-12">
              {Array.isArray(stats) &&
                stats.map((item, idx) => (
                  <div key={idx}>
                    <p className="text-4xl font-semibold text-[#01646e]">
                      {item.value}
                    </p>
                    <p className="text-sm text-gray-500 italic">{item.label}</p>
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
