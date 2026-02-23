// Import global CSS
import "./globals.css";

// Import custom Nexa font
import { nexa } from "@/lib/fonts";

/*
|--------------------------------------------------------------------------
| Global Metadata (Applies to Entire Website)
|--------------------------------------------------------------------------
|
| This is the base SEO configuration for https://mep.co
| Individual pages (like contact-us) can override title/description.
|
*/

export const metadata = {
  // Base URL for all relative SEO URLs (important for canonical + OG)
  metadataBase: new URL("https://mep.co"),

  /*
  |--------------------------------------------------------------------------
  | Title Configuration
  |--------------------------------------------------------------------------
  |
  | default  → Used if a page doesn't define its own title
  | template → Adds "| MEPCO" automatically to all page titles
  |
  | Example:
  | If page title = "Contact MEPCO"
  | Final output = "Contact MEPCO | MEPCO"
  |
  */
  title: {
    default: "MEPCO",
    template: "%s | MEPCO",
  },

  // Default description (used if page doesn’t override)
  description:
    "Middle East Paper Company (MEPCO) – Powering the circular economy in Saudi Arabia.",

  /*
  |--------------------------------------------------------------------------
  | SEO Keywords (Optional but helpful)
  |--------------------------------------------------------------------------
  */
  keywords: [
    "MEPCO",
    "Middle East Paper Company",
    "Saudi Arabia paper",
    "recycling company KSA",
    "circular economy Saudi Arabia",
  ],

  /*
  |--------------------------------------------------------------------------
  | Robots Rules (Google crawling instructions)
  |--------------------------------------------------------------------------
  |
  | index  → Allow indexing
  | follow → Allow link crawling
  |
  */
  robots: {
    index: true,
    follow: true,
  },

  /*
  |--------------------------------------------------------------------------
  | Open Graph (Facebook, LinkedIn, WhatsApp preview)
  |--------------------------------------------------------------------------
  */
  openGraph: {
    siteName: "MEPCO",
    type: "website",

    // Default language (English)
    locale: "en_US",

    // Arabic alternative
    alternateLocale: ["ar_SA"],

    url: "https://mep.co",

    title: "MEPCO",

    description:
      "Middle East Paper Company (MEPCO) – Powering the circular economy in Saudi Arabia.",

    // Default sharing image (create in public folder: 1200x630px)
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "MEPCO",
      },
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | Twitter Card SEO
  |--------------------------------------------------------------------------
  */
  twitter: {
    card: "summary_large_image",
    title: "MEPCO",
    description:
      "Middle East Paper Company (MEPCO) – Powering the circular economy in Saudi Arabia.",
    images: ["/og-default.jpg"],
  },

  /*
  |--------------------------------------------------------------------------
  | Canonical + Multilingual Alternate URLs
  |--------------------------------------------------------------------------
  |
  | canonical → main English version
  | ar        → Arabic version
  | x-default → fallback for search engines
  |
  */
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ar: "/ar",
      "x-default": "/",
    },
  },
};

/*
|--------------------------------------------------------------------------
| Root Layout Component
|--------------------------------------------------------------------------
|
| Wraps entire application
| Controls <html> and <body>
|
*/

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nexa.variable}>
      {/* 
        lang="en" → Default site language
        className={nexa.variable} → Injects font CSS variable
      */}

      <body
        className="antialiased"
        style={{ fontFamily: "var(--font-nexa), sans-serif" }}
      >
        {/* All pages render here */}
        {children}
      </body>
    </html>
  );
}
