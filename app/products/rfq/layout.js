// app/products/rfq/layout.js
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  seo: {
    siteUrl: "https://mep.co",
    canonicalPath: "/products/rfq",
    alternateArPath: "/ar/products/rfq",
    title: "Request a Quote | MEPCO",
    description:
      "Submit a quote request for MEPCO's containerboard and paperboard products. Select your grade, specify quantity and delivery requirements.",
    keywords: [
      "MEPCO", "Request a Quote", "RFQ", "Containerboard", "Paperboard",
      "Paper Quote", "Saudi Arabia", "Packaging",
    ],
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      siteName: "MEPCO",
      locale: "en_US",
      alternateLocale: ["ar_SA"],
      imagePath: "/og-default.jpg",
    },
    twitter: {
      card: "summary_large_image",
      imagePath: "/og-default.jpg",
    },
  },
});

export default function Layout({ children }) {
  return children;
}
