"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeaderOld() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [whoOpen, setWhoOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [irOpen, setIrOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [isLgUp, setIsLgUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const mq = window.matchMedia("(min-width: 1024px)");
    const set = () => setIsLgUp(mq.matches);
    set();
    mq.addEventListener?.("change", set);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mq.removeEventListener?.("change", set);
    };
  }, []);

  // ✅ lock body scroll when mobile menu open
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileMenuOpen]);

  // ✅ ESC to close (JSX-safe: no TS types)
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
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

  const desktopLinkClasses = "transition-colors";
  const desktopDropdownBase =
    "absolute left-0 top-[calc(100%+8px)] w-64 bg-white border rounded-md shadow-lg py-2 z-50";
  const desktopDropdownText = "text-gray-900";

  const MobileChevron = ({ rotated }) => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className={`transition-transform ${rotated ? "rotate-90" : ""}`}
    >
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const SocialIcon = ({ href, label, children }) => (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/30 transition"
    >
      <span className="sr-only">{label}</span>
      {children}
    </Link>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white/95 border-b border-gray-200" : ""} 
        ${scrolled ? "text-gray-900" : "text-white"}`}
      style={
        scrolled
          ? undefined
          : {
              background:
                "linear-gradient(black, rgba(0, 0, 0, .9), rgba(0, 0, 0, .8), rgba(0, 0, 0, .8), rgba(0, 0, 0, .75), rgba(0, 0, 0, .75), rgba(0, 0, 0, .7), rgba(0, 0, 0, .6), rgba(0, 0, 0, .5), rgba(0, 0, 0, .4), rgba(0, 0, 0, .3), rgba(0, 0, 0, .2), rgba(0, 0, 0, .1), rgba(0, 0, 0, 0))",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }
      }
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <Link href="/" className="relative h-14 w-[160px]">
            <Image
              src={scrolled ? "/logo.svg" : "/white-logo.svg"}
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-l font-regular">
            {/* Who We are */}
            <div
              className="relative"
              onMouseEnter={isLgUp ? () => setWhoOpen(true) : undefined}
              onMouseLeave={isLgUp ? () => setWhoOpen(false) : undefined}
            >
              <button
                className={desktopLinkClasses}
                onClick={() => {
                  if (!isLgUp) setWhoOpen((v) => !v);
                }}
              >
                Who We are
              </button>

              {whoOpen && (
                <>
                  <div className="absolute left-0 top-full h-2 w-full" />
                  <div className={`${desktopDropdownBase} ${desktopDropdownText}`}>
                    <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
                      About Us
                    </Link>
                    <Link
                      href="/about/leadership"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Our Leadership
                    </Link>
                    <Link
                      href="/about/subsideries"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Our Subsideries
                    </Link>
                    <Link href="/careers" className="block px-4 py-2 hover:bg-gray-100">
                      Work With Us
                    </Link>
                  </div>
                </>
              )}
            </div>

            {/* Products */}
            <div
              className="relative"
              onMouseEnter={isLgUp ? () => setProductsOpen(true) : undefined}
              onMouseLeave={isLgUp ? () => setProductsOpen(false) : undefined}
            >
              <button
                className={desktopLinkClasses}
                onClick={() => {
                  if (!isLgUp) setProductsOpen((v) => !v);
                }}
              >
                Products
              </button>

              {productsOpen && (
                <>
                  <div className="absolute left-0 top-full h-2 w-full" />
                  <div className={`${desktopDropdownBase} ${desktopDropdownText}`}>
                    <Link
                      href="/products/#containerboard"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Containerboard
                    </Link>
                    <Link
                      href="/products/#paperboard"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Paperboard
                    </Link>
                  </div>
                </>
              )}
            </div>

            <Link href="/sustainability" className={desktopLinkClasses}>
              Sustainability
            </Link>

            {/* Investor Relations */}
            <div
              className="relative"
              onMouseEnter={isLgUp ? () => setIrOpen(true) : undefined}
              onMouseLeave={isLgUp ? () => setIrOpen(false) : undefined}
            >
              <Link
                href="https://ir.mep.co/en/investor-relations/"
                className={desktopLinkClasses}
                target="_blank"
                rel="noreferrer"
              >
                Investor Relations
              </Link>

              {irOpen && (
                <>
                  <div className="absolute left-0 top-full h-2 w-full" />
                  <div className={`${desktopDropdownBase} ${desktopDropdownText}`}>
                    <Link
                      href="https://ir.mep.co/en/investor-relations/fact-sheet/"
                      target="_blank"
                      rel="noreferrer"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Fact Sheet
                    </Link>
                    <Link
                      href="https://ir.mep.co/en/investor-relations/financial-information/"
                      target="_blank"
                      rel="noreferrer"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Financial Information
                    </Link>
                    <Link
                      href="https://ir.mep.co/en/investor-relations/annual-reports/"
                      target="_blank"
                      rel="noreferrer"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Annual Reports
                    </Link>
                    <Link
                      href="https://ir.mep.co/en/investor-relations/share-information/"
                      target="_blank"
                      rel="noreferrer"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Share Information
                    </Link>
                    <Link
                      href="https://ir.mep.co/en/investor-relations/company-announcements/"
                      target="_blank"
                      rel="noreferrer"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Company Announcements
                    </Link>
                    <Link
                      href="https://ir.mep.co/en/investor-relations/dividend-information/"
                      target="_blank"
                      rel="noreferrer"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Dividend Information
                    </Link>
                    <Link
                      href="https://ir.mep.co/en/investor-relations/corporate-governance/"
                      target="_blank"
                      rel="noreferrer"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      IR Calendar
                    </Link>
                    <Link
                      href="https://ir.mep.co/en/investor-relations/analyst-coverage/"
                      target="_blank"
                      rel="noreferrer"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Analyst Coverage
                    </Link>
                    <Link
                      href="https://ir.mep.co/en/investor-relations/corporate-governance/"
                      target="_blank"
                      rel="noreferrer"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Corporate Governance
                    </Link>
                    <Link
                      href="https://ir.mep.co/en/investor-relations/prospectus/"
                      target="_blank"
                      rel="noreferrer"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Prospectus
                    </Link>
                    <Link
                      href="https://ir.mep.co/en/investor-relations/contact-ir/"
                      target="_blank"
                      rel="noreferrer"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Contact IR
                    </Link>
                  </div>
                </>
              )}
            </div>

            <Link href="/news" className={desktopLinkClasses}>
              News & Insights
            </Link>

            <Link href="/contact-us" className={desktopLinkClasses}>
              Contact Us
            </Link>
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Language switcher */}
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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M3.6 12H20.4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
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
      <div
        className={`lg:hidden fixed inset-0 z-[60] ${mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!mobileMenuOpen}
      >
        <button
          className={`absolute inset-0 bg-black/60 transition-opacity duration-200 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu backdrop"
          tabIndex={mobileMenuOpen ? 0 : -1}
        />

        <aside
          id="mobile-menu-drawer"
          className={`absolute right-0 top-0 h-full w-full sm:max-w-[440px] bg-[#1f1f1f] text-white
            transition-transform duration-300 ease-out
            ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between px-5 pt-5">
            <Link href="/" className="relative h-10 w-[140px]" onClick={() => setMobileMenuOpen(false)}>
              <Image src={"/white-logo.svg"} alt="Logo" fill className="object-contain" priority />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:border-white/30 transition"
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="px-5 pt-4">
            <div className="relative">
              <input
                placeholder="Search by keyword..."
                className="w-full h-12 rounded-full bg-[#262626] border border-[#3a3a3a] pl-5 pr-12 text-sm text-white placeholder:text-white/55 outline-none focus:border-[#4fd1c5]"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 21l-4.3-4.3m1.8-5.2a7 7 0 11-14 0 7 7 0 0114 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>
          </div>

          <nav className="px-5 pt-4">
            <ul className="space-y-1 text-[15px]">
              <li className="border-b border-white/10">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between py-4">
                    <span className="font-medium">Who We are</span>
                    <span className="text-white/80 group-open:rotate-90 transition-transform">
                      <MobileChevron rotated />
                    </span>
                  </summary>
                  <div className="pb-4 pl-2 space-y-3 text-white/85">
                    <Link href="/about" className="block" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                    <Link href="/about/leadership" className="block" onClick={() => setMobileMenuOpen(false)}>Our Leadership</Link>
                    <Link href="/about/subsideries" className="block" onClick={() => setMobileMenuOpen(false)}>Our Subsideries</Link>
                    <Link href="/careers" className="block" onClick={() => setMobileMenuOpen(false)}>Work With Us</Link>
                  </div>
                </details>
              </li>

              <li className="border-b border-white/10">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between py-4">
                    <span className="font-medium">Products</span>
                    <span className="text-white/80 group-open:rotate-90 transition-transform">
                      <MobileChevron rotated />
                    </span>
                  </summary>
                  <div className="pb-4 pl-2 space-y-3 text-white/85">
                    <Link href="/products/#containerboard" className="block" onClick={() => setMobileMenuOpen(false)}>Containerboard</Link>
                    <Link href="/products/#paperboard" className="block" onClick={() => setMobileMenuOpen(false)}>Paperboard</Link>
                  </div>
                </details>
              </li>

              <li className="border-b border-white/10">
                <Link href="/sustainability" className="flex items-center justify-between py-4" onClick={() => setMobileMenuOpen(false)}>
                  <span className="font-medium">Sustainability</span>
                  <MobileChevron />
                </Link>
              </li>

              <li className="border-b border-white/10">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between py-4">
                    <span className="font-medium">Investor Relations</span>
                    <span className="text-white/80 group-open:rotate-90 transition-transform">
                      <MobileChevron rotated />
                    </span>
                  </summary>
                  <div className="pb-4 pl-2 space-y-3 text-white/85">
                    <Link href="https://ir.mep.co/en/investor-relations/" target="_blank" rel="noreferrer" className="block">Investor Relations</Link>
                    <Link href="https://ir.mep.co/en/investor-relations/fact-sheet/" target="_blank" rel="noreferrer" className="block">Fact Sheet</Link>
                    <Link href="https://ir.mep.co/en/investor-relations/financial-information/" target="_blank" rel="noreferrer" className="block">Financial Information</Link>
                    <Link href="https://ir.mep.co/en/investor-relations/annual-reports/" target="_blank" rel="noreferrer" className="block">Annual Reports</Link>
                    <Link href="https://ir.mep.co/en/investor-relations/share-information/" target="_blank" rel="noreferrer" className="block">Share Information</Link>
                    <Link href="https://ir.mep.co/en/investor-relations/company-announcements/" target="_blank" rel="noreferrer" className="block">Company Announcements</Link>
                    <Link href="https://ir.mep.co/en/investor-relations/dividend-information/" target="_blank" rel="noreferrer" className="block">Dividend Information</Link>
                    <Link href="https://ir.mep.co/en/investor-relations/corporate-governance/" target="_blank" rel="noreferrer" className="block">IR Calendar</Link>
                    <Link href="https://ir.mep.co/en/investor-relations/analyst-coverage/" target="_blank" rel="noreferrer" className="block">Analyst Coverage</Link>
                    <Link href="https://ir.mep.co/en/investor-relations/corporate-governance/" target="_blank" rel="noreferrer" className="block">Corporate Governance</Link>
                    <Link href="https://ir.mep.co/en/investor-relations/prospectus/" target="_blank" rel="noreferrer" className="block">Prospectus</Link>
                    <Link href="https://ir.mep.co/en/investor-relations/contact-ir/" target="_blank" rel="noreferrer" className="block">Contact IR</Link>
                  </div>
                </details>
              </li>

              <li className="border-b border-white/10">
                <Link href="/news" className="flex items-center justify-between py-4" onClick={() => setMobileMenuOpen(false)}>
                  <span className="font-medium">News & Insights</span>
                  <MobileChevron />
                </Link>
              </li>

              <li className="border-b border-white/10">
                <Link href="/contact-us" className="flex items-center justify-between py-4" onClick={() => setMobileMenuOpen(false)}>
                  <span className="font-medium">Contact Us</span>
                  <MobileChevron />
                </Link>
              </li>
            </ul>
          </nav>

          <div className="absolute bottom-0 left-0 right-0 px-5 pb-6">
            <div className="pt-4 border-t border-white/10 flex items-center gap-3">
              <SocialIcon href="https://www.facebook.com/MepcoPaper" label="Facebook">{/* icon svg */}<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v3H7v3h3v6h3v-6h3l1-3h-4v-3c0-.6.4-1 1-1z" fill="currentColor" /></svg></SocialIcon>
              <SocialIcon href="https://x.com/_mepco_" label="X"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M18.2 2H21l-6.5 7.4L22 22h-6.6l-5.2-7.1L4 22H1.2l7-8L2 2h6.7l4.7 6.4L18.2 2zm-1.2 18h1.6L7.9 4H6.1l10.9 16z" fill="currentColor" /></svg></SocialIcon>
              <SocialIcon href="https://www.youtube.com/channel/UCmi6aOXp5l0ftmCRTC5njQg" label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21.6 7.2a3 3 0 00-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5A3 3 0 002.4 7.2 31.5 31.5 0 002 12c0 1.6.1 3.2.4 4.8a3 3 0 002.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 002.1-2.1c.3-1.6.4-3.2.4-4.8 0-1.6-.1-3.2-.4-4.8z" fill="currentColor" opacity="0.9" /><path d="M10 15.5V8.5l6 3.5-6 3.5z" fill="#1f1f1f" /></svg></SocialIcon>
              <SocialIcon href="https://www.linkedin.com/company/middle-east-paper-co-/" label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6.5 6.8a2 2 0 11.1-4 2 2 0 01-.1 4zM5 21V9h3v12H5zm5 0V9h2.9v1.7h.1c.4-.8 1.5-1.9 3.2-1.9 3.4 0 4 2.2 4 5V21h-3v-6.1c0-1.5 0-3.3-2-3.3s-2.3 1.6-2.3 3.2V21h-2.9z" fill="currentColor" /></svg></SocialIcon>
              <SocialIcon href="https://www.instagram.com/_mepco_/" label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10 2H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3z" fill="currentColor" /><path d="M12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" fill="currentColor" /><path d="M17.5 6.7a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z" fill="currentColor" /></svg></SocialIcon>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
