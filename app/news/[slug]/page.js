// app/news/[slug]/page.js

import React from "react";
import Link from "next/link";

import HeaderGreen from "@/components/Header/HeaderGreen";
import BreadcrumbSection from "@/components/Breadcrumbs";
import Footer from "@/components/Footer/index";

import { getNewsBySlug, getAllNews } from "../data";
import ShareBar from "./ShareBar";

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}

export function generateStaticParams() {
  return getAllNews().map((n) => ({ slug: n.slug }));
}

export default async function SingleNewsPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug ?? "";

  const item = getNewsBySlug(slug);
  const latestNews = getAllNews()
    .filter((n) => n.slug !== slug)
    .slice(0, 3);

  if (!item) {
    return (
      <main className="w-full bg-white">
        <HeaderGreen />

        <section className="max-w-6xl mx-auto px-6 py-16">
          <h1 className="text-2xl font-semibold text-[#2d2d2d]">
            News not found
          </h1>
          <p className="mt-3 text-neutral-700">
            The article you’re looking for doesn’t exist.
          </p>

          <Link
            href="/news"
            className="mt-6 inline-flex items-center rounded-full border border-[#006D77] px-6 py-3 text-sm font-medium text-[#006D77] hover:bg-[#006D77] hover:text-white transition"
          >
            Back to News →
          </Link>
        </section>

        <Footer />
      </main>
    );
  }

  return (
    <main className="w-full bg-white">
      <HeaderGreen />

      {/* Breadcrumbs hidden on mobile */}
      <div className="hidden md:block">
        <BreadcrumbSection
          className="bg-white"
          containerClassName="py-2"
          items={[
            { label: "Home", href: "/" },
            { label: "News", href: "/news" },
            { label: item.title },
          ]}
        />
      </div>

      {/* Grey section */}
      <section className="w-full bg-[#f5f5f5] py-14">
        
        <div className="max-w-6xl mx-auto px-6">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden border border-[#e4e4e4] bg-neutral-100">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[260px] md:h-[540px] object-cover"
            />
          </div>

          {/* Date */}
          <p className="mt-8 text-xs uppercase tracking-wide text-neutral-500">
            {formatDate(item.date)}
          </p>

          {/* Title */}
          <h1 className="mt-3 text-3xl md:text-5xl font-bold text-[#2d2d2d] leading-tight">
            {item.title}
          </h1>

          {/* Content */}
          <div className="prose prose-neutral max-w-none mt-8">
            {item.content.split("\n").map((line, idx) =>
              line.trim() ? <p key={idx}>{line}</p> : <br key={idx} />
            )}
          </div>

          {/* Back + Share */}
          <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-[#e4e4e4] pt-8">
            <Link
              href="/news"
              className="inline-flex items-center rounded-full border border-[#01646e] bg-[#01646e] px-4 py-2 text-md font-medium text-white hover:border-[#014f57] hover:bg-[#014f57] hover:text-white transition"
            >
              ← Back to News
            </Link>

            <ShareBar />
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="w-full py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#2d2d2d] mb-10">
            Latest News
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((n) => (
              <Link
                key={n.slug}
                href={`/news/${n.slug}`}
                className="group rounded-2xl overflow-hidden border border-[#e4e4e4] bg-white hover:shadow-md transition"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={n.image}
                    alt={n.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase text-[#01646e]">
                    {formatDate(n.date)}
                  </p>
                  <h3 className="mt-2 text-lg font-medium text-[#2d2d2d]">
                    {n.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
