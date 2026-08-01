// AboutPage.jsx
"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer/index";
import BreadcrumbSection from "@/components/Breadcrumbs";

import AboutIntro from "./AboutIntro";
import VisionValues from "./VisionValues";
import AboutHistoryTimeline from "./AboutHistoryTimeline";
import AboutStrategySafety from "./AboutStrategySafety";

import HeroMedia from "@/components/HeroMedia";
import ContinueReading from "@/components/ContinueReading";
import { aboutPage } from "./data";
import HeaderTranspirant from "@/components/Header/HeaderTranspirant";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <HeaderTranspirant />

      {/*
        ✅ New editorial hero typography.
        `eyebrow` + `headingLines` opt into the bold, tight, accent-colour treatment.
        The `heading` string in aboutPage.hero is intentionally ignored while
        headingLines is present (headingLines takes precedence in HeroMedia).
      */}
      <HeroMedia
        {...aboutPage.hero}
        eyebrow="About MEPCO"
        headingLines={[
          { text: "Powering" },
          { text: "Saudi Arabia's" },
          { text: "Circular Economy", accent: true },
        ]}
      />

      <BreadcrumbSection
        className="bg-[#f9f8f3]"
        containerClassName="py-4"
        items={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      {/* ✅ Pass data to each section */}
      <AboutIntro data={aboutPage.aboutIntro} />
      <VisionValues data={aboutPage.visionValues} />
      <AboutHistoryTimeline data={aboutPage.aboutHistory} />
      <AboutStrategySafety data={aboutPage.strategySafety} />

      <ContinueReading items={aboutPage.continueReadingItems} />

      <Footer />
    </main>
  );
}
