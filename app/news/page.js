"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import HeaderGreen from "@/components/Header/HeaderGreen";
import BreadcrumbSection from "@/components/Breadcrumbs";
import Footer from "@/components/Footer/index";
import { getAllNews } from "./data";

const PAGE_SIZE = 9;

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export default function NewsPage() {
  const allNews = useMemo(() => getAllNews(), []);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const hero = allNews[0];
  const shown = allNews.slice(1, 1 + visible);
  const canLoadMore = 1 + visible < allNews.length;

  return (
    <main className="w-full bg-white">
      <HeaderGreen />

      {/* Hero */}
      <section className="w-full bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6 pt-3 pb-10 lg:pb-16">
          {/* ✅ New editorial heading (light-background variant) */}
          <div className="mt-4 flex items-center gap-3">
            <span
              className="h-px w-8 shrink-0 bg-[#01646e]"
              aria-hidden="true"
            />
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.28em] text-[#01646e]">
              Newsroom
            </span>
          </div>

          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.03] tracking-tight text-[#2d2d2d]">
            <span className="block">Latest News</span>
            <span className="block text-[#01646e]">&amp; Insights</span>
          </h1>

          {hero ? (
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <Link
                href={`/news/${hero.slug}`}
                className="block rounded-2xl overflow-hidden border border-[#e4e4e4] bg-white shadow-sm"
              >
                <img
                  src={hero.image}
                  alt={hero.title}
                  className="w-full h-[260px] md:h-[320px] object-cover"
                  loading="lazy"
                />
              </Link>

              <div>
                <p className="text-xs uppercase tracking-wide text-neutral-500">
                  <span className="text-[#01646e]">NEWS</span> - {formatDate(hero.date)}
                </p>

                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#2d2d2d] leading-tight">
                  {hero.title}
                </h2>

                <div className="mt-6">
                  <Link
                    href={`/news/${hero.slug}`}
                    className="inline-flex items-center justify-center rounded-full border border-[#01646e] px-6 py-2.5 text-sm font-medium text-white bg-[#01646e] hover:bg-[#01646e] transition"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* Grid */}
      <section className="w-full pb-24 pt-12 lg:pt-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
            {shown.map((n) => (
              <Link
                key={n.slug}
                href={`/news/${n.slug}`}
                className="group h-full rounded-2xl overflow-hidden border border-[#e4e4e4] bg-white shadow-sm hover:shadow-md transition flex flex-col"
              >
                <div className="h-52 bg-neutral-100">
                  <img
                    src={n.image}
                    alt={n.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <p className="text-xs uppercase tracking-wide text-[#01646e]">
                    {formatDate(n.date)}
                  </p>

                  <h2 className="mt-2 text-xl font-medium text-[#2d2d2d] leading-snug">
                    {n.title}
                  </h2>

                  {/* Push button to bottom */}
                  <div className="mt-auto pt-7">
                    <span className="inline-flex items-center justify-center rounded-full border border-[#01646e] px-5 py-2 text-sm font-medium text-[#01646e] bg-white group-hover:bg-[#01646e] group-hover:text-white transition">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load more */}
          <div className="mt-12 flex items-center justify-center">
            {canLoadMore ? (
              <button
                type="button"
                onClick={() =>
                  setVisible((v) =>
                    Math.min(v + PAGE_SIZE, Math.max(allNews.length - 1, 0))
                  )
                }
                className="inline-flex items-center justify-center rounded-full bg-[#01646e] px-8 py-3 text-sm font-medium text-white hover:opacity-90 transition"
              >
                Load more
              </button>
            ) : (
              <p className="text-sm text-neutral-500">
                You’ve reached the end.
              </p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
