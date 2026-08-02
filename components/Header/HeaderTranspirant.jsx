// components/Header/HeaderTranspirant.jsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import DesktopNav from "./DesktopNav";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileDrawer from "./MobileDrawer";

export default function HeaderTranspirant() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [isLgUp, setIsLgUp] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const set = () => setIsLgUp(mq.matches);
    set();
    mq.addEventListener?.("change", set);
    return () => mq.removeEventListener?.("change", set);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
        scrolled
          ? "bg-white border-gray-900 text-gray-900 hover:bg-[#006D77] hover:border-[#006D77] hover:text-white"
          : "bg-transparent border-white text-white hover:bg-[#006D77] hover:border-[#006D77] hover:text-white",
      ].join(" "),
    [scrolled]
  );

  const burgerClasses = useMemo(
    () =>
      [
        "inline-flex items-center justify-center rounded-full border transition-all duration-200",
        "h-[40px] w-[40px]",
        scrolled
          ? "bg-white border-gray-900 text-gray-900 hover:bg-[#006D77] hover:border-[#006D77] hover:text-white"
          : "bg-transparent border-white text-white hover:bg-[#006D77] hover:border-[#006D77] hover:text-white",
      ].join(" "),
    [scrolled]
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        border-b
        ${scrolled
          ? "bg-white border-gray-200 text-gray-900"
          : "border-transparent text-white"
        }`}
      style={
        scrolled
          ? undefined
          : {
              background:
                "linear-gradient(black, rgba(0,0,0,.9), rgba(0,0,0,.8), rgba(0,0,0,.8), rgba(0,0,0,.75), rgba(0,0,0,.75), rgba(0,0,0,.7), rgba(0,0,0,.6), rgba(0,0,0,.5), rgba(0,0,0,.4), rgba(0,0,0,.3), rgba(0,0,0,.2), rgba(0,0,0,.1), rgba(0,0,0,0))",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }
      }
    >
      <div className="max-w-7xl mx-auto px-5">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-[80px]" : "h-[110px] pt-0 lg:pt-4"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center h-14">

            {/* Below 395px when scrolled — short logo */}
            {scrolled && (
              <img
                src="/mep-logo.svg"
                alt="Logo"
                className="block min-[395px]:hidden w-auto h-[50px] transition-all duration-300"
              />
            )}

            {/* 395px+ or not scrolled — full logo */}
            <Image
              src={scrolled ? "/logo-full.JPG" : "/logo-full.png"}
              alt="Logo"
              width={0}
              height={64}
              sizes="(max-width: 1024px) 140px, 180px"
              className={`w-auto transition-all duration-300
                ${scrolled ? "hidden min-[395px]:block h-[45px] md:h-[50px] lg:h-[52px]" : "block h-[52px] md:h-14"}
              `}
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