import React from "react";

/*
  Shared section heading used across the About Us page (and reusable elsewhere).
  Renders a large bold heading followed by a short warm-brown accent rule.

  Props:
    - as            HTML tag for the heading (default "h2")
    - align         "left" | "center" (default "left")
    - color         heading text colour (default "#2d2d2d")
    - accent        rule colour (default brand brown "#8a6240")
    - className     extra classes on the wrapper (e.g. spacing "mb-8")
    - headingClassName  extra classes on the heading element
*/
export default function SectionHeading({
  children,
  as: Tag = "h2",
  align = "left",
  color = "#2d2d2d",
  accent = "#8a6240",
  className = "",
  headingClassName = "",
}) {
  const isCenter = align === "center";

  return (
    <div className={`${isCenter ? "text-center" : ""} ${className}`}>
      <Tag
        className={`text-4xl md:text-5xl font-bold leading-tight tracking-tight ${headingClassName}`}
        style={{ color }}
      >
        {children}
      </Tag>

      <span
        aria-hidden="true"
        className={`mt-5 block h-[3px] w-14 rounded-full ${
          isCenter ? "mx-auto" : ""
        }`}
        style={{ backgroundColor: accent }}
      />
    </div>
  );
}
