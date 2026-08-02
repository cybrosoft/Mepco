"use client";
import React from "react";

function Pill({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "px-5 py-2 rounded-full text-sm font-medium transition border",
        active
          ? "bg-[#01646e] text-white border-[#01646e]"
          : "bg-white text-neutral-700 border-neutral-200 hover:border-[#01646e] hover:text-[#01646e]",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export default function ProductsFilters({
  category,
  meta,
  endUseOptions,
  selectedUse,
  setSelectedUse,
}) {
  return (
    <section className="w-full pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl border border-neutral-200 bg-[#F9F8F3] p-7 sm:p-9">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2d2d2d]">
            {meta[category].label}
          </h2>
          <p className="mt-3 text-neutral-700 leading-relaxed max-w-4xl">
            {meta[category].desc}
          </p>


        </div>
      </div>
    </section>
  );
}
