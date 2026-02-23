"use client";

import Link from "next/link";

export default function LanguageSwitcher({
  isLgUp,
  pillClasses,
  langOpen,
  setLangOpen,
}) {
  return (
    <div
      className="relative"
      onMouseEnter={isLgUp ? () => setLangOpen(true) : undefined}
      onMouseLeave={isLgUp ? () => setLangOpen(false) : undefined}
    >
      <button
        onClick={() => setLangOpen((v) => !v)}
        className={pillClasses}
        aria-haspopup="true"
        aria-expanded={langOpen}
      >
        {/* Globe */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path d="M3.6 12H20.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path
            d="M12 3C9.6 5.7 8.25 8.75 8.25 12C8.25 15.25 9.6 18.3 12 21"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M12 3C14.4 5.7 15.75 8.75 15.75 12C15.75 15.25 14.4 18.3 12 21"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>

        <span className="text-sm font-medium leading-none">EN</span>

        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M7 10L12 15L17 10"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {langOpen && (
        <>
          <div className="absolute left-0 top-full h-2 w-full" />
          <div className="absolute right-0 top-[calc(100%+8px)] w-[160px] rounded-2xl bg-white shadow-lg border py-3 z-50">
            <Link
              href="/"
              className="block px-5 py-2 text-sm text-gray-900 hover:bg-gray-100"
              onClick={() => setLangOpen(false)}
            >
              English
            </Link>
            <Link
              href="/ar"
              className="block px-5 py-2 text-sm text-gray-900 hover:bg-gray-100"
              onClick={() => setLangOpen(false)}
            >
              العربية
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
