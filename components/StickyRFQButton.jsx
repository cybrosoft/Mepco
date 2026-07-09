// components/StickyRFQButton.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HIDDEN_PATHS = ["/products", "/products/rfq"];

export default function StickyRFQButton() {
  const pathname = usePathname();

  if (HIDDEN_PATHS.includes(pathname)) return null;

  return (
    <div className="fixed right-5 bottom-8 z-[100]">
      <Link
        href="/products/rfq"
        className="
          group flex items-center gap-2
          rounded-full
          bg-[#01646e] text-white
          shadow-lg shadow-[#01646e]/30
          px-5 py-3
          text-sm font-semibold
          hover:bg-[#014f57] transition-all duration-200
          border border-[#01646e]/50
        "
      >
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span>Request a Quote</span>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
        </span>
      </Link>
    </div>
  );
}