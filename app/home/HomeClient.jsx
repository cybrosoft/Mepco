// app/home/HomeClient.jsx
"use client";

import HeaderTranspirant from "@/components/Header/HeaderTranspirant";
import HeroSlider from "@/app/home/HeroSlider";
import HomeAbout from "@/app/home/HomeAbout";
import SubsidiaryCompanies from "@/app/home/SubsidiaryCompanies";
import GlobalReachSection from "@/app/home/GlobalReachSection";
import LatestNewsInsights from "@/app/home/LatestNewsInsights";
import HeroCareers from "@/app/home/HeroCareers";
import Footer from "@/components/Footer/index";
import FadeIn from "@/components/FadeIn";
import StickyRFQButton from "@/components/StickyRFQButton";

import { homeData } from "@/app/home/data";

export default function HomeClient() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <HeaderWhite />

      {/* Hero */}
      <HeroSlider slides={homeData.hero.slides} />

      {/* About + animated stats */}
      <HomeAbout data={homeData.about} />

      {/* Subsidiaries with hover video */}
      <FadeIn y={40} threshold={0.08}>
        <SubsidiaryCompanies
          heading={homeData.subsidiaries.heading}
          description={homeData.subsidiaries.description}
          ctaText={homeData.subsidiaries.cta.text}
          ctaHref={homeData.subsidiaries.cta.href}
          subsidiaries={homeData.subsidiaries.items}
        />
      </FadeIn>

      {/* Global Reach */}
      <FadeIn y={40} threshold={0.08}>
        <GlobalReachSection data={homeData.globalReach} />
      </FadeIn>

      {/* Latest News */}
      <FadeIn y={40} threshold={0.08}>
        <LatestNewsInsights />
      </FadeIn>

      {/* Careers */}
      <HeroCareers data={homeData.careers} />

      <Footer />

      {/* Sticky RFQ */}
      <StickyRFQButton />
    </main>
  );
}
