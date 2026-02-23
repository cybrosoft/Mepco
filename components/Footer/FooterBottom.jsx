"use client";

import Image from "next/image";
import Link from "next/link";

export default function FooterBottom() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-8 md:pb-0">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Left logo */}
          <div className="relative h-24 w-24">
            <Image
              src="/certifications/saudi-made.jpg"
              alt="Saudi Made"
              fill
              className="object-contain"
            />
          </div>


          {/* Legal links (kept as-is + sample links) */}
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
