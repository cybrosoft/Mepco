"use client";

import FooterMenu from "./FooterMenu";
import FooterContact from "./FooterContact";

export default function FooterTop({ menu }) {
  return (
    // ✅ overflow-x-hidden prevents the 50vw slab from creating horizontal scroll/blank space
    <div className="bg-[#e9e6d9] py-16 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* LEFT: footer menu */}
          <div className="lg:col-span-9">
            <FooterMenu menu={menu} />
          </div>

          {/* RIGHT: contact + social (with background slab like reference) */}
          <div
            className="
              lg:col-span-3 relative
              before:content-['']
              before:absolute
              before:inset-y-[-64px]
              before:left-0
              before:w-[50vw]
              before:bg-[#e2decc]
              before:hidden
              lg:before:block
            "
          >
            <div className="relative z-10">
              <FooterContact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
