// components/Footer/FooterBottom.jsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function FooterBottom() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-8 md:pb-0">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          {/* Left — MEPCO logo + Saudi Made side by side on small screens */}
          <div className="flex items-center gap-4">
            {/* MEPCO logo — large screens only */}
            <div className="relative h-24 w-60 hidden lg:block">
              <Image
                src="/logo-full.JPG"
                alt="MEPCO Full Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Saudi Made — small/tablet only, hidden on lg+ */}
            <div className="relative h-24 w-24 lg:hidden">
              <Image
                src="/certifications/saudi-made.JPG"
                alt="Saudi Made"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Legal links */}
          <div className="-mt-[35px] z-10 relative md:mt-0 md:z-auto flex flex-wrap items-center lg:justify-center gap-x-6 gap-y-3 text-sm text-black/70">
            <Link href="/terms-of-use" className="hover:underline underline-offset-4">
              Terms of Use
            </Link>
            <Link href="/privacy-notice" className="hover:underline underline-offset-4">
              Privacy Notice
            </Link>
            <Link href="/disclaimer" className="hover:underline underline-offset-4">
              Disclaimer
            </Link>
          </div>

          {/* Right copyright */}
          <div className="text-sm text-black/60 md:text-right">
            All rights reserved to MEPCO © 2017 - 2026
          </div>

        </div>
      </div>
    </div>
  );
}