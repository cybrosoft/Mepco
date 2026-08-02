// components/Header/HeaderGreen.jsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import DesktopNav from "./DesktopNav";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileDrawer from "./MobileDrawer";

export default function HeaderGreen() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const [isLgUp, setIsLgUp] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const set = () => setIsLgUp(mq.matches);
    set();
    mq.addEventListener?.("change", set);
    return () => mq.removeEventListener?.("change", set);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const onKeyDown = (e) => { if (e.key === "Escape") setMobileMenuOpen(false); };
    if (mobileMenuOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen]);

  const pillClasses = useMemo(
    () =>
      [
        "group inline-flex items-center gap-2 rounded-full border transition-all duration-200",
        "h-[40px] px-[16px]",
        "bg-[#01646e] border-white text-white hover:bg-[#006D77] hover:text-white",
      ].join(" "),
    []
  );

  const burgerClasses = useMemo(
    () =>
      [
        "inline-flex items-center justify-center rounded-full border transition-all duration-200",
        "h-[40px] w-[40px]",
        "bg-[#01646e] border-white text-white hover:bg-[#006D77] hover:text-white",
      ].join(" "),
    []
  );

  return (
    <header className="sticky top-0 w-full z-50 bg-[#01646e] border-b border-[#015a63] text-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between h-[80px] lg:h-[85px]">
          {/* Logo */}
          <Link href="/" className="flex items-center h-14">
            <Image
              src="/logo-full.png"
              alt="Logo"
              width={0}
              height={64}
              sizes="(max-width: 1024px) 140px, 180px"
              className="w-auto h-[52px] lg:h-[55px] transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <DesktopNav isLgUp={isLgUp} />

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher
              isLgUp={isLgUp}
              pillClasses={pillClasses}
              langOpen={langOpen}
              setLangOpen={setLangOpen}
            />

            {/* Hamburger */}
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu-drawer"
            >
              <span className={burgerClasses}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
