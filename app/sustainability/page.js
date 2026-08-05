"use client";

import { motion } from "framer-motion";
import HeaderTranspirant from "@/components/Header/HeaderTranspirant";
import Footer from "@/components/Footer/index";
import BreadcrumbSection from "@/components/Breadcrumbs";
import HeroMedia from "@/components/HeroMedia";
import SusIntro from "./SusIntro";
import CommunityInitiatives from "./CommunityInitiatives";
import SustainabilityReports from "./SustainabilityReports";
import AwardsSection from "./AwardsSection";
import CertificationsSection from "./CertificationsSection";
import ContinueReading from "@/components/ContinueReading";
import WhistleblowerCtaSection from "@/components/WhistleblowerCtaSection";
import { sustainabilityPage } from "./data";


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <HeaderTranspirant />

      {/* ✅ New editorial hero typography */}
      <HeroMedia
        {...sustainabilityPage.hero}
        eyebrow="Sustainability"
        headingLines={[
          { text: "Building " },
          { text: "Tomorrow " },
          { text: "Responsibly", accent: true },
        ]}
      />

      <BreadcrumbSection
        className="bg-[#F9F8F3]"
        containerClassName="py-4"
        items={[
          { label: "Home", href: "/" },
          { label: "Sustainability" },
        ]}
      />

      <SusIntro />
      <CommunityInitiatives />
      <SustainabilityReports />
      <AwardsSection />
      
      <CertificationsSection />
      <section className={`bg-[#ffffff] pt-2 lg:pt-10 mx-6`}>
        <WhistleblowerCtaSection />
      </section>
      
      <ContinueReading items={sustainabilityPage.continueReadingItems} />

      <Footer />
    </main>
  );
}
