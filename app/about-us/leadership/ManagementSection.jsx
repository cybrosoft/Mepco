// app/about-us/leadership/ManagementSection.jsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { useReveal } from "@/components/useReveal";

function MemberModal({ members, activeIndex, onClose, onSelect }) {
  const member = members[activeIndex];
  const stripRef = useRef(null);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    const check = () => setHasMore(el.scrollWidth > el.clientWidth && el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
    check();
    el.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => { el.removeEventListener("scroll", check); window.removeEventListener("resize", check); };
  }, [members]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  if (!member) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-stretch md:items-center justify-center bg-black/60 backdrop-blur-sm p-0 md:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#f9f8f3] flex flex-col md:rounded-2xl shadow-2xl md:h-[680px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-5 left-5 z-10 w-9 h-9 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition text-lg" aria-label="Close">✕</button>

        <div className="flex flex-col md:flex-row flex-1 overflow-hidden md:rounded-t-2xl">
          <div className="md:w-[320px] flex-none flex flex-col items-center justify-center px-10 pt-16 pb-8 md:py-16 bg-[#f2f0ea]">
            <div className="relative">
              <div className="w-36 h-36 rounded-full overflow-hidden bg-neutral-300 ring-4 ring-white shadow-lg">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute -inset-3 rounded-full border border-dashed border-[#C8A35A]/60 pointer-events-none" />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-[#1f1f1f] text-center leading-snug">{member.name}</h2>
            <p className="mt-2 text-sm text-[#01646e] font-medium text-center leading-snug">{member.role}</p>
          </div>

          <div className="flex-1 overflow-y-auto px-8 md:px-12 py-10 md:py-16">
            {member.bio
              ? member.bio.split("\n\n").map((para, i) => (
                  <p key={i} className="text-[#3a3a3a] leading-relaxed text-base mb-5 last:mb-0">{para}</p>
                ))
              : <p className="text-neutral-400 italic">Bio coming soon.</p>
            }
          </div>
        </div>

        <div className="flex-none border-t border-neutral-200 bg-white px-6 py-5 md:rounded-b-2xl relative">
          {hasMore && (
            <div className="absolute right-0 top-0 bottom-0 w-14 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none flex items-center justify-end pr-2 md:hidden z-10">
              <svg className="w-4 h-4 text-[#01646e] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          )}
          <div ref={stripRef} className="overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-8 min-w-max">
              {members.map((m, i) => {
                const isActive = i === activeIndex;
                return (
                  <button key={m.id} onClick={() => onSelect(i)} aria-label={m.name} className="flex-none group">
                    <div className={`rounded-full p-[3px] border transition-all duration-200 ${isActive ? "border-2 border-solid border-[#01646e]" : "border border-dashed border-[#C8A35A]/60 group-hover:border-[#C8A35A]"}`}>
                      <div className={`w-11 h-11 rounded-full overflow-hidden transition-all duration-200 ${isActive ? "opacity-100" : "opacity-50 group-hover:opacity-90"}`}>
                        <img src={m.image} alt={m.name} className="w-full h-full object-cover object-top" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ManagementSection({ members }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const gridRef = useReveal(0.08);

  return (
    <>
      <div ref={gridRef} className="rounded-3xl bg-white border border-neutral-200 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {members.map((member, idx) => (
            <div
              key={member.id}
              onClick={() => setActiveIndex(idx)}
              className={[
                "reveal-card p-6 md:p-10 flex items-center gap-8 cursor-pointer",
                "hover:bg-neutral-50 transition-colors duration-200 group",
                idx % 2 === 0 ? "md:border-r border-neutral-200" : "",
                idx < members.length - 2 ? "border-b border-neutral-200" : "",
              ].join(" ")}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="relative flex-none">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-neutral-200">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="absolute -inset-2 rounded-full border border-dashed border-[#C8A35A]/70 pointer-events-none" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-l md:text-2xl font-medium text-[#1f1f1f] leading-snug">{member.name}</h3>
                <p className="mt-3 text-sm text-neutral-600">{member.role}</p>
              </div>
              <span className="flex-none text-[#01646e] text-4xl font-light leading-none shrink-0 pb-1 group-hover:text-[#014f57] transition-colors duration-200">+</span>
            </div>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <MemberModal
          members={members}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onSelect={setActiveIndex}
        />
      )}
    </>
  );
}
