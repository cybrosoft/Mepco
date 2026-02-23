"use client";

import Link from "next/link";
import { getAllNews } from "@/app/news/data";

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

export default function LatestNewsInsights() {
  const all = getAllNews();
  const FEATURED = all.slice(0, 3);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d]">
            Latest News &amp; Insights
          </h2>

          <Link
            href="/news"
            className="self-start rounded-full border border-[#01646e] bg-[#01646e] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#01555e]"
          >
            More News &amp; Insights
          </Link>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((item) => (
            <NewsImageCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsImageCard({ item }) {
  return (
    <Link
      href={`/news/${item.slug}`}
      aria-label={item.title}
      className="group relative block overflow-hidden rounded-3xl shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black/20"
    >
      <div className="relative h-[380px] w-full sm:h-[520px]">
        {/* Image */}
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />

        {/* Bottom black → transparent gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-6">
          {/* Date */}
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/80">
            {formatDate(item.date)}
          </p>

          {/* Title (max 2 lines always) */}
          <h3 className="mt-2 text-[24px] text-white/80 line-clamp-2">
            {item.title}
          </h3>

          {/* Arrow button */}
          <div className="mt-5 flex justify-end">
            <span
              className="flex h-6 w-14 items-center justify-center rounded-full border border-white/70 bg-black/30 text-white transition"
              aria-hidden="true"
            >
              <img
                    src="/arrow-next.svg"
                    alt="Arrow"
                    className="w-5 h-5"
                  />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
