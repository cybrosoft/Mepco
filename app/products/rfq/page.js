"use client";

import HeaderWhite from "@/components/Header/HeaderWhite";
import Footer from "@/components/Footer";
import BreadcrumbSection from "@/components/Breadcrumbs";
import { RFQ_PAGE } from "./data";

import HeroMedia from "@/components/HeroMedia";
import RfqShell from "./RfqShell";

export default function RfqPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
          <HeaderWhite />

      <BreadcrumbSection
        className="bg-[#f9f8f3]"
        containerClassName="py-4"
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "RFQ" },
        ]}
      />
        <section className="w-full pb-2 bg-[#f9f8f3]">
              <div className="max-w-7xl mx-auto px-6">
                <h1 className="text-4xl md:text-4xl font-bold text-[#2d2d2d]">
                  Request a Quote
          </h1>
          <p className="mt-4 text-neutral-700 leading-relaxed">
                    Select products and share requirements to receive a tailored quote.
                  </p>
              </div>
            </section>
      <section className="bg-[#f9f8f3]">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <RfqShell />
        </div>
      </section>

      <Footer />
    </main>
  );
}