"use client";

import Link from "next/link";

export function SocialIcon({ href, label, children }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/30 transition"
    >
      <span className="sr-only">{label}</span>
      {children}
    </Link>
  );
}

export const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v3H7v3h3v6h3v-6h3l1-3h-4v-3c0-.6.4-1 1-1z"
      fill="currentColor"
    />
  </svg>
);

export const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M18.2 2H21l-6.5 7.4L22 22h-6.6l-5.2-7.1L4 22H1.2l7-8L2 2h6.7l4.7 6.4L18.2 2zm-1.2 18h1.6L7.9 4H6.1l10.9 16z"
      fill="currentColor"
    />
  </svg>
);

export const YouTubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M21.6 7.2a3 3 0 00-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5A3 3 0 002.4 7.2 31.5 31.5 0 002 12c0 1.6.1 3.2.4 4.8a3 3 0 002.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 002.1-2.1c.3-1.6.4-3.2.4-4.8 0-1.6-.1-3.2-.4-4.8z"
      fill="currentColor"
      opacity="0.9"
    />
    <path d="M10 15.5V8.5l6 3.5-6 3.5z" fill="#1f1f1f" />
  </svg>
);

export const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M6.5 6.8a2 2 0 11.1-4 2 2 0 01-.1 4zM5 21V9h3v12H5zm5 0V9h2.9v1.7h.1c.4-.8 1.5-1.9 3.2-1.9 3.4 0 4 2.2 4 5V21h-3v-6.1c0-1.5 0-3.3-2-3.3s-2.3 1.6-2.3 3.2V21h-2.9z"
      fill="currentColor"
    />
  </svg>
);

export const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10 2H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3z"
      fill="currentColor"
    />
    <path
      d="M12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"
      fill="currentColor"
    />
    <path d="M17.5 6.7a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z" fill="currentColor" />
  </svg>
);
