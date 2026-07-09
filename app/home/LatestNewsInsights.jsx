// app/home/LatestNewsInsights.jsx
"use client";

import Link from "next/link";
import { getAllNews } from "@/app/news/data";
import { useReveal } from "@/components/useReveal";

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
}

function NewsImageCard({ item, delay = 0 }) {
  return (
    <Link
      href={`/news/${item.slug}`}
      aria-label={item.title}
      className="reveal-card group relative block overflow-hidden rounded-3xl shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black/20"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative h-[380px] w-full sm:h-[430px]">
        <img
          src={item.image} alt={item.title} loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/80">{formatDate(item.date)}</p>
          <h3 className="mt-2 text-xl text-white/70 line-clamp-2">{item.title}</h3>
          <div className="mt-2 flex justify-end">
            <span className="flex h-6 w-14 items-center justify-center rounded-full border border-white/70 bg-black/30 text-white transition" aria-hidden="true">
              <img src="/arrow-next.svg" alt="Arrow" className="w-5 h-5" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function LatestNewsInsights() {
  const all = getAllNews();
  const FEATURED = all.slice(0, 3);

  const headerRef = useReveal(0.1);
  const gridRef   = useReveal(0.08);

  return (
    <section className="w-full bg-[#F9F8F3]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-22">

        {/* Header — title up, button fade */}
        <div ref={headerRef} className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2
            className="reveal-up text-3xl md:text-4xl font-bold text-[#2d2d2d]"
            style={{ transitionDelay: "0ms" }}
          >
            Latest News &amp; Insights
          </h2>
          <Link
            href="/news"
            className="reveal-fade self-start rounded-full border border-[#01646e] bg-[#01646e] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#01555e]"
            style={{ transitionDelay: "220ms" }}
          >
            More News &amp; Insights
          </Link>
        </div>

        {/* Cards — stagger one by one */}
        <div ref={gridRef} className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((item, i) => (
            <NewsImageCard key={item.slug} item={item} delay={i * 150} />
          ))}
        </div>

      </div>
    </section>
  );
}
