"use client";

import React from "react";

export default function BoardSection({ members }) {
  return (
    <div className="rounded-3xl bg-white border border-neutral-200 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {members.map((member, idx) => (
          <div
            key={member.id}
            className={[
              "p-6 md:p-10 flex items-center gap-8",
              idx % 2 === 0 ? "md:border-r border-neutral-200" : "",
              idx < members.length - 2 ? "border-b border-neutral-200" : "",
            ].join(" ")}
          >
            {/* Avatar */}
            <div className="relative flex-none">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-neutral-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Dotted ring */}
              <div className="absolute -inset-2 rounded-full border border-dashed border-[#C8A35A]/70 pointer-events-none" />
            </div>

            {/* Text */}
            <div className="min-w-0">
              <h3 className="text-l md:text-2xl font-medium text-[#1f1f1f] leading-snug">
                {member.name}
              </h3>
              <p className="mt-3 text-sm text-neutral-600">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
