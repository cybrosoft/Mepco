"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const ACCENT = "#22C1D0"; // teal underline indicator (matches hero accent)

/* Small down-chevron that flips when its menu is open */
function ChevronDown({ open }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      className={`mt-[1px] transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Animated underline — grows from the left on hover, stays lit when active */
function Underline({ active }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute -bottom-1.5 left-0 h-[2px] w-1/2 origin-left rounded-full transition-transform duration-300 ease-out ${
        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      }`}
      style={{ backgroundColor: ACCENT }}
    />
  );
}

export default function DesktopNav({ isLgUp }) {
  const [whoOpen, setWhoOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [irOpen, setIrOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const isActive = (prefix) =>
    pathname === prefix || pathname?.startsWith(`${prefix}/`);

  const goToProductsCategory = (cat) => {
    if (pathname !== "/products") {
      router.push(`/products#${cat}`);
      setProductsOpen(false);
      return;
    }

    // already on /products: force hash update + notify listeners
    window.history.replaceState(null, "", `#${cat}`);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
    setProductsOpen(false);
  };

  // Top-level trigger (button/link) styling.
  // No hard-coded text colour — the nav INHERITS the header's colour, so it is
  // white on the transparent hero and dark once the header turns white on scroll.
  const trigger =
    "relative inline-flex items-center gap-1.5 py-1 transition-colors cursor-pointer";

  const desktopDropdownBase =
    "absolute left-0 top-[calc(100%+8px)] w-64 bg-white border border-gray-300 rounded-md shadow-lg py-2 z-50";
  const desktopDropdownText = "text-gray-900";

  return (
    <nav className="hidden lg:flex items-center gap-6 text-[15px]">
      {/* Who We are */}
      <div
        className="relative group"
        onMouseEnter={isLgUp ? () => setWhoOpen(true) : undefined}
        onMouseLeave={isLgUp ? () => setWhoOpen(false) : undefined}
      >
        <button
          type="button"
          className={trigger}
          aria-haspopup="true"
          aria-expanded={whoOpen}
          onClick={() => {
            if (!isLgUp) setWhoOpen((v) => !v);
          }}
        >
          <span>Who We are</span>
          <ChevronDown open={whoOpen} />
          <Underline active={isActive("/about-us")} />
        </button>

        {whoOpen && (
          <>
            <div className="absolute left-0 top-full h-2 w-full" />
            <div className={`${desktopDropdownBase} ${desktopDropdownText}`}>
              <Link href="/about-us" className="block px-4 py-2 hover:bg-gray-100">
                About Us
              </Link>
              <Link
                href="/about-us/leadership"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Our Leadership
              </Link>
              <Link
                href="/about-us/subsidiaries"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Our Subsidiaries
              </Link>
            </div>
          </>
        )}
      </div>

      {/* Products */}
      <div
        className="relative group"
        onMouseEnter={isLgUp ? () => setProductsOpen(true) : undefined}
        onMouseLeave={isLgUp ? () => setProductsOpen(false) : undefined}
      >
        <button
          type="button"
          className={trigger}
          aria-haspopup="true"
          aria-expanded={productsOpen}
          onClick={() => {
            if (!isLgUp) setProductsOpen((v) => !v);
          }}
        >
          <span>Products</span>
          <ChevronDown open={productsOpen} />
          <Underline active={isActive("/products")} />
        </button>

        {productsOpen && (
          <>
            <div className="absolute left-0 top-full h-2 w-full" />
            <div className={`${desktopDropdownBase} ${desktopDropdownText}`}>
              <button
                type="button"
                onClick={() => goToProductsCategory("containerboard")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Containerboard
              </button>
              <button
                type="button"
                onClick={() => goToProductsCategory("paperboard")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Paperboard
              </button>
              <Link
                href="/products/rfq"
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Request a Quote
              </Link>
            </div>
          </>
        )}
      </div>

      {/* Sustainability (direct link) */}
      <Link
        href="/sustainability"
        className={`${trigger} group`}
      >
        <span>Sustainability</span>
        <Underline active={isActive("/sustainability")} />
      </Link>

      {/* Investor Relations */}
      <div
        className="relative group"
        onMouseEnter={isLgUp ? () => setIrOpen(true) : undefined}
        onMouseLeave={isLgUp ? () => setIrOpen(false) : undefined}
      >
        <Link
          href="https://ir.mep.co/en/investor-relations/"
          className={trigger}
          target="_blank"
          rel="noreferrer"
          aria-haspopup="true"
          aria-expanded={irOpen}
        >
          <span>Investor Relations</span>
          <ChevronDown open={irOpen} />
          <Underline active={false} />
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

      {/* News & Insights (direct link) */}
      <Link href="/news" className={`${trigger} group`}>
        <span>News &amp; Insights</span>
        <Underline active={isActive("/news")} />
      </Link>

      {/* Contact Us (direct link) */}
      <Link href="/contact-us" className={`${trigger} group`}>
        <span>Contact Us</span>
        <Underline active={isActive("/contact-us")} />
      </Link>
    </nav>
  );
}
