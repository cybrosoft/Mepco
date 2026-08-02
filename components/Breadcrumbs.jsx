import React from "react";

/* Breadcrumb colour tokens */
const TEXT_COLOR = "#2d2d2d"; // Home + intermediate (clickable) crumbs
const ACTIVE_COLOR = "#733f0a"; // current page (last crumb) — warm brown
const SEP_COLOR = "#c0bdb5"; // chevron separator — soft warm grey

function HomeIcon({ className = "" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 10.5 12 3l9 7.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.25 9v9.75c0 .41.34.75.75.75h3.75V15c0-.41.34-.75.75-.75h3c.41 0 .75.34.75.75v4.5H18c.41 0 .75-.34.75-.75V9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const Breadcrumbs = ({
  items = [],
  className = "",
  containerClassName = "",
}) => {
  const safeItems = Array.isArray(items) ? items.slice(0, 5) : [];

  return (
    <section className={`w-full ${className}`}>
      <div className={`max-w-7xl mx-auto px-6 ${containerClassName}`}>
        <nav aria-label="Breadcrumb" className="py-3">
          <ol className="flex items-center flex-wrap text-sm">
            {safeItems.map((item, idx) => {
              const isLast = idx === safeItems.length - 1;
              const isFirst = idx === 0;

              return (
                <li key={`${item.label}-${idx}`} className="flex items-center">
                  {item.href && !isLast ? (
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-1.5 font-medium hover:underline underline-offset-4 transition-colors"
                      style={{ color: TEXT_COLOR }}
                    >
                      {isFirst && <HomeIcon />}
                      <span>{item.label}</span>
                    </a>
                  ) : (
                    <span
                      className={`inline-flex items-center gap-1.5 ${
                        isLast ? "font-semibold" : "font-medium"
                      }`}
                      style={{ color: isLast ? ACTIVE_COLOR : TEXT_COLOR }}
                      aria-current={isLast ? "page" : undefined}
                    >
                      {isFirst && <HomeIcon />}
                      <span>{item.label}</span>
                    </span>
                  )}

                  {!isLast && (
                    <span
                      className="mx-2.5 flex items-center"
                      style={{ color: SEP_COLOR }}
                      aria-hidden="true"
                    >
                      <ChevronIcon />
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default Breadcrumbs;
