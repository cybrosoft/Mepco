"use client";
import React from "react";

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs text-neutral-700">
      {children}
    </span>
  );
}

export default function ProductRowCard({ product }) {
  const p = product;

  return (
    <article
      id={p.id}
      className="rounded-3xl overflow-hidden border border-neutral-200 bg-white shadow-sm"
    >
      {/* Row layout on large screens */}
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr_280px]">
        
        {/* Image */}
        <div className="bg-neutral-100">
          <div className="h-56 lg:h-full min-h-[240px]">
            <img
              src={p.image}
              alt={`${p.name} - ${p.subtitle}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Characteristics */}
        <div className="p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-[#2d2d2d] leading-tight">
                {p.name}
              </h3>
              <p className="mt-1 text-sm text-neutral-600">
                {p.subtitle}
              </p>
            </div>

            <p className="hidden xl:block text-xs uppercase tracking-wide text-neutral-500">
              {p.category === "containerboard"
                ? "Containerboard"
                : "Paperboard"}
            </p>
          </div>

          <p className="mt-4 text-sm text-neutral-700 leading-relaxed">
            {p.usage}
          </p>

          {/* End Uses */}
          <div className="mt-5 flex flex-wrap gap-2">
            {p.endUses.map((u) => (
              <Badge key={u}>{u}</Badge>
            ))}
          </div>

          {/* Basis Weight + Certifications */}
          <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
            
            {/* Basis Weights */}
            <div className="rounded-2xl border border-neutral-200 bg-[#F9F8F3] px-5 py-4">
              <p className="text-xs uppercase tracking-wide text-neutral-600">
                Basis Weights
              </p>
              <p className="text-sm font-medium text-[#2d2d2d] mt-1">
                {p.basisWeights}
              </p>
            </div>

            {/* Certifications (only if available) */}
            {p.certifications?.length ? (
              <div className="rounded-2xl border border-neutral-200 bg-white px-5 py-4">
                <p className="text-xs uppercase tracking-wide text-neutral-600">
                  Certifications
                </p>

                <div className="mt-2 space-y-1.5">
                  {p.certifications.map((c) => (
                    <p
                      key={c}
                      className="text-sm text-[#01646e] leading-relaxed"
                    >
                      {c}
                    </p>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {/* Key Properties */}
          <div className="mt-5">
            <p className="text-xs uppercase tracking-wide text-neutral-600">
              Key properties
            </p>
            <ul className="mt-2 space-y-2 text-neutral-700">
              {p.properties.map((x) => (
                <li key={x} className="flex gap-2">
                  <span
                    className="mt-[7px] h-2 w-2 rounded-full bg-[#01646e]"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed text-sm">
                    {x}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Actions */}
        <div className="p-7 border-t lg:border-t-0 lg:border-l border-neutral-200 flex flex-col justify-between gap-4">
          <div className="space-y-3">
            {p.tdsHref ? (
              <a
                href={p.tdsHref}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center rounded-full border border-[#01646e] px-6 py-3 text-sm font-medium text-[#01646e] hover:bg-[#01646e] hover:text-white transition"
              >
                Technical Data Sheet →
              </a>
            ) : (
              <div className="w-full text-center rounded-full border border-neutral-200 px-6 py-3 text-sm text-neutral-500">
                TDS coming soon
              </div>
            )}

            <a
              href="/products/rfq"
              className="w-full inline-flex items-center justify-center rounded-full bg-[#01646e] px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
            >
              Request a quote →
            </a>
          </div>

          <p className="hidden lg:block text-xs text-neutral-500 leading-relaxed">
            Need guidance? Share your end use and basis weight—our team will
            recommend the best grade.
          </p>
        </div>
      </div>
    </article>
  );
}
