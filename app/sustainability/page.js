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
      <HeroMedia {...sustainabilityPage.hero} />
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
            <section className={`bg-[#ffffff] pb-20 mx-6`}>
        <WhistleblowerCtaSection />
      </section>
      <CertificationsSection />

      
      <ContinueReading items={sustainabilityPage.continueReadingItems} />

      <Footer />
    </main>
  );
}
