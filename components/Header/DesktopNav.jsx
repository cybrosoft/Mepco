// components/Header/DesktopNav.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function DesktopNav({ isLgUp }) {
  const [whoOpen, setWhoOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [irOpen, setIrOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const goToProductsCategory = (cat) => {
    if (pathname !== "/products") {
      router.push(`/products#${cat}`);
      setProductsOpen(false);
      return;
    }
    window.history.replaceState(null, "", `#${cat}`);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
    setProductsOpen(false);
  };

  const desktopLinkClasses = "transition-colors";
  const desktopDropdownBase =
    "absolute left-0 top-[calc(100%+8px)] w-64 bg-white border border-gray-300 rounded-md shadow-lg py-2 z-50";
  const desktopDropdownText = "text-gray-900";

  return (
    <nav className="hidden lg:flex items-center gap-6 text-l font-regular">

      {/* Who We are */}
      <div
        className="relative"
        onMouseEnter={isLgUp ? () => setWhoOpen(true) : undefined}
        onMouseLeave={isLgUp ? () => setWhoOpen(false) : undefined}
      >
        <button
          className={desktopLinkClasses}
          onClick={() => { if (!isLgUp) setWhoOpen((v) => !v); }}
        >
          Who We are
        </button>

        {whoOpen && (
          <>
            <div className="absolute left-0 top-full h-2 w-full" />
            <div className={`${desktopDropdownBase} ${desktopDropdownText}`}>
              <Link href="/about-us" className="block px-4 py-2 hover:bg-gray-100">
                About Us
              </Link>
              <Link href="/about-us/leadership" className="block px-4 py-2 hover:bg-gray-100">
                Our Leadership
              </Link>
              <Link href="/about-us/subsidiaries" className="block px-4 py-2 hover:bg-gray-100">
                Our Subsidiaries
              </Link>
              {/* News & Insights — only visible inside dropdown below 1220px */}
              <Link href="/news" className="block px-4 py-2 hover:bg-gray-100 min-[1220px]:hidden">
                News & Insights
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
          onClick={() => { if (!isLgUp) setProductsOpen((v) => !v); }}
        >
          Products
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
              <Link href="/products/rfq" className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                Request a Quote
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
              <Link href="https://ir.mep.co/en/investor-relations/fact-sheet/" target="_blank" rel="noreferrer" className="block px-4 py-2 hover:bg-gray-100">Fact Sheet</Link>
              <Link href="https://ir.mep.co/en/investor-relations/financial-information/" target="_blank" rel="noreferrer" className="block px-4 py-2 hover:bg-gray-100">Financial Information</Link>
              <Link href="https://ir.mep.co/en/investor-relations/annual-reports/" target="_blank" rel="noreferrer" className="block px-4 py-2 hover:bg-gray-100">Annual Reports</Link>
              <Link href="https://ir.mep.co/en/investor-relations/share-information/" target="_blank" rel="noreferrer" className="block px-4 py-2 hover:bg-gray-100">Share Information</Link>
              <Link href="https://ir.mep.co/en/investor-relations/company-announcements/" target="_blank" rel="noreferrer" className="block px-4 py-2 hover:bg-gray-100">Company Announcements</Link>
              <Link href="https://ir.mep.co/en/investor-relations/dividend-information/" target="_blank" rel="noreferrer" className="block px-4 py-2 hover:bg-gray-100">Dividend Information</Link>
              <Link href="https://ir.mep.co/en/investor-relations/corporate-governance/" target="_blank" rel="noreferrer" className="block px-4 py-2 hover:bg-gray-100">IR Calendar</Link>
              <Link href="https://ir.mep.co/en/investor-relations/analyst-coverage/" target="_blank" rel="noreferrer" className="block px-4 py-2 hover:bg-gray-100">Analyst Coverage</Link>
              <Link href="https://ir.mep.co/en/investor-relations/corporate-governance/" target="_blank" rel="noreferrer" className="block px-4 py-2 hover:bg-gray-100">Corporate Governance</Link>
              <Link href="https://ir.mep.co/en/investor-relations/prospectus/" target="_blank" rel="noreferrer" className="block px-4 py-2 hover:bg-gray-100">Prospectus</Link>
              <Link href="https://ir.mep.co/en/investor-relations/contact-ir/" target="_blank" rel="noreferrer" className="block px-4 py-2 hover:bg-gray-100">Contact IR</Link>
            </div>
          </>
        )}
      </div>

      {/* News & Insights — standalone only at 1220px+ */}
      <Link href="/news" className={`${desktopLinkClasses} hidden min-[1220px]:block`}>
        News & Insights
      </Link>

      <Link href="/contact-us" className={desktopLinkClasses}>
        Contact Us
      </Link>

    </nav>
  );
}