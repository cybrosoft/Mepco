"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  SocialIcon,
  XIcon,
  YouTubeIcon,
} from "./SocialIcons";

function Chevron({ rotated }) {
  return (
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
}

export default function MobileDrawer({ open, onClose }) {
  return (
    <div
      className={`lg:hidden fixed inset-0 z-[60] ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <button
        className={`absolute inset-0 bg-black/60 transition-opacity duration-200 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-label="Close menu backdrop"
        tabIndex={open ? 0 : -1}
      />

      {/* Panel */}
      <aside
        id="mobile-menu-drawer"
        className={`absolute right-0 top-0 h-full w-full sm:max-w-[440px] bg-[#1f1f1f] text-white
          transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}
          flex flex-col`}   // ✅ key: column layout
        role="dialog"
        aria-modal="true"
      >
        {/* Header row */}
        <div className="flex items-center justify-between px-4 pt-5 shrink-0">
          <Link href="/" onClick={onClose} className="flex items-center">
            <Image
              src="/mep-white-logo.png"
              alt="Logo"
              width={0}
              height={40}
              sizes="(max-width: 768px) 140px, 160px"
              className="h-10 w-auto"
              priority
            />
          </Link>

          <button
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:border-white/30 transition"
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* ✅ Scrollable content area (menu) */}
        <div className="flex-1 overflow-y-auto px-5 pt-4 pb-28">
          {/* pb-28 leaves space so last items don't hide behind social bar */}

          <nav>
            <ul className="space-y-1 text-[17px]">
              <li className="border-b border-white/10">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between py-4">
                    <span className="font-medium">Who We are</span>
                    <span className="text-white/80 group-open:rotate-90 transition-transform">
                      <Chevron />
                    </span>
                  </summary>
                  <div className="pb-4 pl-2 space-y-6 text-white/85">
                    <Link href="/about-us" className="block" onClick={onClose}>About Us</Link>
                    <Link href="/about-us/leadership" className="block" onClick={onClose}>Our Leadership</Link>
                    <Link href="/about-us/subsidiaries" className="block" onClick={onClose}>Our Subsidiaries</Link>
                  </div>
                </details>
              </li>

              <li className="border-b border-white/10">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between py-4">
                    <span className="font-medium">Products</span>
                    <span className="text-white/80 group-open:rotate-90 transition-transform">
                      <Chevron />
                    </span>
                  </summary>
                  <div className="pb-4 pl-2 space-y-6 text-white/85">
                    <Link href="/products/#containerboard" className="block" onClick={onClose}>Containerboard</Link>
                    <Link href="/products/#paperboard" className="block" onClick={onClose}>Paperboard</Link>
                  </div>
                </details>
              </li>

              <li className="border-b border-white/10">
                <Link
                  href="/sustainability"
                  className="flex items-center justify-between py-4"
                  onClick={onClose}
                >
                  <span className="font-medium">Sustainability</span>
                  <Chevron />
                </Link>
              </li>

              <li className="border-b border-white/10">
                <details className="group">
                  <summary className="flex cursor-pointer items-center justify-between py-4">
                    <span className="font-medium">Investor Relations</span>
                    <span className="text-white/80 group-open:rotate-90 transition-transform">
                      <Chevron />
                    </span>
                  </summary>

                  {/* ✅ IMPORTANT: you had space-y-36 (huge). Use normal spacing */}
                  <div className="pb-4 pl-2 space-y-6 text-white/85">
                    <Link href="https://ir.mep.co/en/investor-relations/" target="_blank" rel="noreferrer" className="block">
                      Investor Relations
                    </Link>
                    <Link href="https://ir.mep.co/en/investor-relations/fact-sheet/" target="_blank" rel="noreferrer" className="block">
                      Fact Sheet
                    </Link>
                    <Link href="https://ir.mep.co/en/investor-relations/financial-information/" target="_blank" rel="noreferrer" className="block">
                      Financial Information
                    </Link>
                    <Link href="https://ir.mep.co/en/investor-relations/annual-reports/" target="_blank" rel="noreferrer" className="block">
                      Annual Reports
                    </Link>
                    <Link href="https://ir.mep.co/en/investor-relations/share-information/" target="_blank" rel="noreferrer" className="block">
                      Share Information
                    </Link>
                    <Link href="https://ir.mep.co/en/investor-relations/company-announcements/" target="_blank" rel="noreferrer" className="block">
                      Company Announcements
                    </Link>
                    <Link href="https://ir.mep.co/en/investor-relations/dividend-information/" target="_blank" rel="noreferrer" className="block">
                      Dividend Information
                    </Link>
                    <Link href="https://ir.mep.co/en/investor-relations/corporate-governance/" target="_blank" rel="noreferrer" className="block">
                      IR Calendar
                    </Link>
                    <Link href="https://ir.mep.co/en/investor-relations/analyst-coverage/" target="_blank" rel="noreferrer" className="block">
                      Analyst Coverage
                    </Link>
                    <Link href="https://ir.mep.co/en/investor-relations/corporate-governance/" target="_blank" rel="noreferrer" className="block">
                      Corporate Governance
                    </Link>
                    <Link href="https://ir.mep.co/en/investor-relations/prospectus/" target="_blank" rel="noreferrer" className="block">
                      Prospectus
                    </Link>
                    <Link href="https://ir.mep.co/en/investor-relations/contact-ir/" target="_blank" rel="noreferrer" className="block">
                      Contact IR
                    </Link>
                  </div>
                </details>
              </li>

              <li className="border-b border-white/10">
                <Link href="/news" className="flex items-center justify-between py-4" onClick={onClose}>
                  <span className="font-medium">News & Insights</span>
                  <Chevron />
                </Link>
              </li>

              <li className="border-b border-white/10">
                <Link href="/contact-us" className="flex items-center justify-between py-4" onClick={onClose}>
                  <span className="font-medium">Contact Us</span>
                  <Chevron />
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* ✅ Bottom social (fixed inside drawer) */}
        <div className="shrink-0 mt-auto px-5 pb-6 pt-4 border-t border-white/10 bg-[#1f1f1f]">
          <div className="flex items-center gap-3">
            <SocialIcon href="https://www.facebook.com/MepcoPaper" label="Facebook">
              <FacebookIcon />
            </SocialIcon>

            <SocialIcon href="https://x.com/_mepco_" label="X">
              <XIcon />
            </SocialIcon>

            <SocialIcon
              href="https://www.youtube.com/channel/UCmi6aOXp5l0ftmCRTC5njQg"
              label="YouTube"
            >
              <YouTubeIcon />
            </SocialIcon>

            <SocialIcon
              href="https://www.linkedin.com/company/middle-east-paper-co-/"
              label="LinkedIn"
            >
              <LinkedInIcon />
            </SocialIcon>

            <SocialIcon href="https://www.instagram.com/_mepco_/" label="Instagram">
              <InstagramIcon />
            </SocialIcon>
          </div>
        </div>
      </aside>
    </div>
  );
}
