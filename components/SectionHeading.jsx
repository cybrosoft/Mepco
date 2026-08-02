import React from "react";

/*
  Shared section heading used across the site.
  Optional small label (E3) + large heading on the shared type scale (text-h2)
  + short warm-brown accent rule.

  Props:
    - label         optional small uppercase label above the heading (e.g. "About MEPCO")
    - labelColor    label colour (default brand teal "#006D77")
    - as            HTML tag for the heading (default "h2")
    - align         "left" | "center" (default "left")
    - color         heading text colour (default "#2d2d2d")
    - accent        rule colour (default brand brown "#733f0a")
    - className     extra classes on the wrapper (e.g. spacing "mb-8")
    - headingClassName  extra classes on the heading element
*/
export default function SectionHeading({
  children,
  label = "",
  labelColor = "#006D77",
  as: Tag = "h2",
  align = "left",
  color = "#2d2d2d",
  accent = "#733f0a",
  className = "",
  headingClassName = "",
}) {
  const isCenter = align === "center";

  return (
    <div className={`${isCenter ? "text-center" : ""} ${className}`}>
      {label ? (
        <span
          className="text-label block mb-3"
          style={{ color: labelColor }}
        >
          {label}
        </span>
      ) : null}

      <Tag className={`text-h2 ${headingClassName}`} style={{ color }}>
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
