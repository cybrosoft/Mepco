import React from "react";

const HomeAbout = ({ data }) => {
  const heading = data?.heading || "Who we are ?";
  const paragraphs = Array.isArray(data?.paragraphs) ? data.paragraphs : [];
  const statsData = Array.isArray(data?.stats) ? data.stats : [];

  return (
    <section className="w-full py-12 lg:py-20 bg-[#F9F8F3]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-8 lg:gap-20">
        {/* Left Column: Heading and Description */}
        <div className="lg:w-2/5 flex flex-col justify-start">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-6">
            {heading}
          </h2>

          {paragraphs.map((text, idx) => (
            <p key={idx} className="text-[#4a4a4a] text-base leading-relaxed">
              {text}
            </p>
          ))}
        </div>

        {/* Right Column: Statistics Grid */}
        <div className="lg:w-3/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            {statsData.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-4xl font-extrabold text-[#01646e] mb-2">
                  {stat.value}
                </span>
                <p className="text-[#4a4a4a] text-sm md:text-base leading-snug italic max-w-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
