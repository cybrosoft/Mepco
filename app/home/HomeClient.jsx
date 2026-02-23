"use client";

import HeaderTranspirant from "@/components/Header/HeaderTranspirant";
import HeroSlider from "@/app/home/HeroSlider";
import HomeAbout from "@/app/home/HomeAbout";
import HomeProducts from "@/app/home/HomeProducts";
import SubsidiaryCompanies from "@/app/home/SubsidiaryCompanies";
import GlobalReachSection from "@/app/home/GlobalReachSection";
import LatestNewsInsights from "@/app/home/LatestNewsInsights";
import Footer from "@/components/Footer/index";

import { homeData } from "@/app/home/data";

export default function HomeClient() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <HeaderTranspirant />
      <HeroSlider slides={homeData.hero.slides} />
      <HomeAbout data={homeData.about} />
      
      
      <SubsidiaryCompanies
        heading={homeData.subsidiaries.heading}
        description={homeData.subsidiaries.description}
        ctaText={homeData.subsidiaries.cta.text}
        ctaHref={homeData.subsidiaries.cta.href}
        subsidiaries={homeData.subsidiaries.items}
      />
      <GlobalReachSection data={homeData.globalReach} />
      {/*<HomeProducts
        heading={homeData.products.heading}
        ctaText={homeData.products.cta.text}
        ctaHref={homeData.products.cta.href}
        products={homeData.products.items}
      /> */}
      <LatestNewsInsights />
      <Footer />
    </main>
  );
}
