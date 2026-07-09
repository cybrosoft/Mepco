// app/layout.js
import "./globals.css";
import { nexa } from "@/lib/fonts";
import StickyRFQButton from "@/components/StickyRFQButton";

export const metadata = {
  metadataBase: new URL("https://mep.co"),
  title: {
    default: "MEPCO",
    template: "%s | MEPCO",
  },
  description:
    "Middle East Paper Company (MEPCO) – Powering the circular economy in Saudi Arabia.",
  keywords: [
    "MEPCO",
    "Middle East Paper Company",
    "Saudi Arabia paper",
    "recycling company KSA",
    "circular economy Saudi Arabia",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    siteName: "MEPCO",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_SA"],
    url: "https://mep.co",
    title: "MEPCO",
    description:
      "Middle East Paper Company (MEPCO) – Powering the circular economy in Saudi Arabia.",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "MEPCO" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEPCO",
    description:
      "Middle East Paper Company (MEPCO) – Powering the circular economy in Saudi Arabia.",
    images: ["/og-default.jpg"],
  },
  alternates: {
    canonical: "/",
    languages: { en: "/", ar: "/ar", "x-default": "/" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nexa.variable}>
      <body
        className="antialiased"
        style={{ fontFamily: "var(--font-nexa), sans-serif" }}
      >
        {children}
        <StickyRFQButton />
      </body>
    </html>
  );
}