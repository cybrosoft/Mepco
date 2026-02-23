"use client";

import React from "react";

export default function ShareBar() {
  const getUrl = () =>
    typeof window !== "undefined" ? window.location.href : "";

  const url = getUrl();

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = url;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
  };

  const baseBtn =
    "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-[#01646e] text-[#01646e] bg-white transition hover:bg-[#01646e] hover:text-white hover:border-[#01646e]";

  const iconClass = "w-4 h-4 stroke-current";

  return (
    <div className="flex items-center gap-3 flex-wrap">

      {/* Copy */}
      <button type="button" onClick={onCopy} className={baseBtn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          stroke="currentColor"
          className={iconClass}
        >
          <rect x="9" y="9" width="13" height="13" rx="2" />
          <path d="M5 15V5a2 2 0 012-2h10" />
        </svg>
        Copy link
      </button>

      {/* X */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noreferrer"
        className={baseBtn}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path d="M18.244 2H21l-6.543 7.475L22 22h-6.828l-5.35-6.62L3.9 22H1l7.024-8.02L2 2h6.828l4.823 6.02L18.244 2z" />
        </svg>
        X.com
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`}
        target="_blank"
        rel="noreferrer"
        className={baseBtn}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-4 h-4"
        >
          <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5V12H17l-.4 3h-2.7v7A10 10 0 0022 12z" />
        </svg>
        Facebook
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
          url
        )}`}
        target="_blank"
        rel="noreferrer"
        className={baseBtn}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-4 h-4"
        >
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.49 6 1.1 6 0 4.88 0 3.5S1.1 1 2.49 1C3.88 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8 8h3.6v2.2h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6v9.7h-4v-8.6c0-2.1 0-4.7-2.9-4.7-2.9 0-3.3 2.3-3.3 4.6V24H8V8z" />
        </svg>
        LinkedIn
      </a>

    </div>
  );
}
