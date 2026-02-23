"use client";
import React from "react";

export default function CategorySwitch({ value, onChange }) {
  const items = [
    { key: "containerboard", label: "Containerboard" },
    { key: "paperboard", label: "Paperboard" },
  ];

  return (
    <div className="inline-flex rounded-full border border-neutral-200 bg-white p-1 shadow-sm">
      {items.map((it) => {
        const active = value === it.key;
        return (
          <button
            key={it.key}
            type="button"
            onClick={() => onChange(it.key)}
            className={[
              "relative px-6 py-3 rounded-full text-sm font-medium transition",
              active
                ? "bg-[#01646e] text-white"
                : "text-neutral-700 hover:text-[#01646e]",
            ].join(" ")}
            aria-pressed={active}
          >
            {it.label}
          </button>
        );
      })}
    </div>
  );
}
