"use client";
import React from "react";
import CategorySwitch from "./CategorySwitch";
import { PRODUCTS_HEADER } from "./data";

function Pill({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "px-5 py-2 rounded-full text-sm font-medium transition border",
        active
          ? "bg-[#006D77] text-white border-[#006D77]"
          : "bg-white text-neutral-700 border-neutral-200 hover:border-[#006D77] hover:text-[#006D77]",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export default function ProductsHeader({ category, setCategory, setSelectedUse }) {
  return (
    <section className="w-full pt-6 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/*<h1 className="text-5xl md:text-5xl font-medium text-[#2d2d2d] mt-4">
          {PRODUCTS_HEADER.title}
        </h1>

        <p className="mt-5 text-neutral-700 leading-relaxed max-w-3xl">
          {PRODUCTS_HEADER.description}
        </p>*/}

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <CategorySwitch
            value={category}
            onChange={(next) => {
              setCategory(next);
              setSelectedUse("All");
            }}
          />
        </div>
      </div>
    </section>
  );
}
