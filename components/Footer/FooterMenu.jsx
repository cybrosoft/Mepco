"use client";

import Link from "next/link";

function Chevron({ open }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function isExternal(href) {
  return href?.startsWith("http");
}

export default function FooterMenu({ menu }) {
  return (
    <>
      {/* ✅ MOBILE ACCORDION (matches attachment) */}
      <div className="lg:hidden">
        <div className="border border-[#01646e]">
          {menu.map((col) => (
            <details
              key={col.title}
              className="group border-b border-[#01646e] last:border-b-0"
            >
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 select-none">
                <span className="text-[12px] font-semibold tracking-[0.22em] text-[#01646e] uppercase">
                  {col.title}
                </span>

                {/* rotate icon when open */}
                <span className="text-[#01646e]">
                  <Chevron open={false} />
                </span>
              </summary>

              {/* Use group-open to rotate the chevron */}
              <style jsx>{`
                details[open] summary svg {
                  transform: rotate(180deg);
                }
              `}</style>

              <div className="px-5 pb-5">
                <ul className="space-y-4">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-[15px] text-[#1a1a1a] hover:underline underline-offset-4"
                        target={isExternal(l.href) ? "_blank" : undefined}
                        rel={isExternal(l.href) ? "noreferrer" : undefined}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* ✅ DESKTOP GRID (your existing style) */}
      <div className="hidden lg:grid grid-cols-2 gap-x-10 gap-y-10 lg:grid-cols-4">
        {menu.map((col) => (
          <div key={col.title}>
            <h3 className="text-[16px] font-semibold text-[#01646e] uppercase">
              {col.title}
            </h3>

            <ul className="mt-4 space-y-2">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-[#1a1a1a] hover:underline underline-offset-4"
                    target={isExternal(l.href) ? "_blank" : undefined}
                    rel={isExternal(l.href) ? "noreferrer" : undefined}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
