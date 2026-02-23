"use client";

import React, { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import HeaderWhite from "@/components/Header/HeaderWhite";
import BreadcrumbSection from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { PRODUCTS_CTA, PRODUCTS, CATEGORY_META, PRODUCTS_SEO, PRODUCTS_PAGE } from "./data";
import HeroMedia from "@/components/HeroMedia";
import ProductsHeader from "./ProductsHeader";
import ProductsFilters from "./ProductsFilters";
import ProductRowCard from "./ProductRowCard";

import HeaderTranspirant from "@/components/Header/HeaderTranspirant";

export default function ProductsClient() {
  const [category, setCategory] = useState("containerboard");
  const [selectedUse, setSelectedUse] = useState("All");

  // ✅ Prevent overwriting incoming hash on first mount
  const [hashInitialized, setHashInitialized] = useState(false);

  // ✅ Read hash on initial load + on hash changes (deep links)
  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "containerboard" || hash === "paperboard") {
        setCategory(hash);
        setSelectedUse("All");
      }
    };

    applyHash();
    setHashInitialized(true);

    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  // ✅ Keep URL hash in sync when category changes via UI
  // (but only AFTER we’ve read the hash at least once)
  useEffect(() => {
    if (!hashInitialized) return;
    window.history.replaceState(null, "", `#${category}`);
  }, [category, hashInitialized]);

  const categoryProducts = useMemo(
    () => PRODUCTS.filter((p) => p.category === category),
    [category]
  );

  const endUseOptions = useMemo(() => {
    const s = new Set();
    categoryProducts.forEach((p) => p.endUses.forEach((u) => s.add(u)));
    return ["All", ...Array.from(s).sort((a, b) => a.localeCompare(b))];
  }, [categoryProducts]);

  const filtered = useMemo(() => {
    if (selectedUse === "All") return categoryProducts;
    return categoryProducts.filter((p) => p.endUses.includes(selectedUse));
  }, [categoryProducts, selectedUse]);

  const jsonLd = useMemo(() => {
    const url = `${PRODUCTS_SEO.siteUrl}${PRODUCTS_SEO.canonicalPath}`;
    return {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: PRODUCTS_SEO.title,
      description: PRODUCTS_SEO.description,
      url,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: PRODUCTS.map((p, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: `${p.name} - ${p.subtitle}`,
          url: `${url}#${p.id}`,
        })),
      },
    };
  }, []);

  return (
    <main className="w-full bg-white">
      <Head>
        <title>{PRODUCTS_SEO.title}</title>

        <meta name="description" content={PRODUCTS_SEO.description} />
        <meta name="keywords" content={PRODUCTS_SEO.keywords.join(", ")} />

        <meta
          name="robots"
          content={`${PRODUCTS_SEO.robots.index ? "index" : "noindex"},${
            PRODUCTS_SEO.robots.follow ? "follow" : "nofollow"
          }`}
        />

        <link
          rel="canonical"
          href={`${PRODUCTS_SEO.siteUrl}${PRODUCTS_SEO.canonicalPath}`}
        />
        <link
          rel="alternate"
          hrefLang="ar"
          href={`${PRODUCTS_SEO.siteUrl}${PRODUCTS_SEO.alternateArPath}`}
        />
        <link
          rel="alternate"
          hrefLang="en"
          href={`${PRODUCTS_SEO.siteUrl}${PRODUCTS_SEO.canonicalPath}`}
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${PRODUCTS_SEO.siteUrl}${PRODUCTS_SEO.canonicalPath}`}
        />

        {/* Open Graph */}
        <meta property="og:type" content={PRODUCTS_SEO.openGraph.type} />
        <meta
          property="og:site_name"
          content={PRODUCTS_SEO.openGraph.siteName}
        />
        <meta property="og:locale" content={PRODUCTS_SEO.openGraph.locale} />
        {PRODUCTS_SEO.openGraph.alternateLocale?.map((loc) => (
          <meta key={loc} property="og:locale:alternate" content={loc} />
        ))}
        <meta property="og:title" content={PRODUCTS_SEO.title} />
        <meta property="og:description" content={PRODUCTS_SEO.description} />
        <meta
          property="og:url"
          content={`${PRODUCTS_SEO.siteUrl}${PRODUCTS_SEO.canonicalPath}`}
        />
        <meta
          property="og:image"
          content={`${PRODUCTS_SEO.siteUrl}${PRODUCTS_SEO.openGraph.imagePath}`}
        />

        {/* Twitter */}
        <meta name="twitter:card" content={PRODUCTS_SEO.twitter.card} />
        <meta name="twitter:title" content={PRODUCTS_SEO.title} />
        <meta name="twitter:description" content={PRODUCTS_SEO.description} />
        <meta
          name="twitter:image"
          content={`${PRODUCTS_SEO.siteUrl}${PRODUCTS_SEO.twitter.imagePath}`}
        />

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <HeaderTranspirant />
      
      <HeroMedia {...PRODUCTS_PAGE.hero} />

      {/*<BreadcrumbSection
        className="bg-white"
        containerClassName="py-2"
        items={[{ label: "Home", href: "/" }, { label: "Products" }]}
      /> */}

      <ProductsHeader
        category={category}
        setCategory={setCategory}
        setSelectedUse={setSelectedUse}
      />

      <ProductsFilters
        category={category}
        meta={CATEGORY_META}
        endUseOptions={endUseOptions}
        selectedUse={selectedUse}
        setSelectedUse={setSelectedUse}
      />

      {/* Product List (row layout on lg+) */}
      <section className="w-full pb-24">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {filtered.map((p) => (
            <ProductRowCard key={p.id} product={p} />
          ))}

          {/* CTA */}
          <div className="mt-12 rounded-3xl border border-neutral-200 bg-[#F9F8F3] p-8 sm:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-medium text-[#2d2d2d]">
                  {PRODUCTS_CTA.title}
                </h2>
                <p className="mt-3 text-neutral-700 leading-relaxed max-w-2xl">
                  {PRODUCTS_CTA.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={PRODUCTS_CTA.primaryButton.href}
                  className="w-full md:w-auto inline-flex items-center justify-center rounded-full bg-[#01646e] px-7 py-3 text-sm font-medium text-white hover:opacity-90 transition"
                >
                  {PRODUCTS_CTA.primaryButton.label}
                </a>

                <a
                  href={PRODUCTS_CTA.secondaryButton.href}
                  className="w-full md:w-auto inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-7 py-3 text-sm font-medium text-neutral-800 hover:border-[#01646e] hover:text-[#01646e] transition"
                >
                  {PRODUCTS_CTA.secondaryButton.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
