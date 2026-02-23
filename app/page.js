// app/page.js (server component)
import HomeClient from "./home/HomeClient";
import { homeSEO } from "./home/data";

export const metadata = {
  title: homeSEO.title,
  description: homeSEO.description,
  keywords: homeSEO.keywords,
  alternates: { canonical: homeSEO.canonical },
  openGraph: {
    title: homeSEO.title,
    description: homeSEO.description,
    url: "https://mep.co",
    siteName: "MEPCO",
    images: [{ url: homeSEO.ogImage, width: 1200, height: 630, alt: "MEPCO" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: homeSEO.title,
    description: homeSEO.description,
    images: [homeSEO.ogImage],
  },
};

export default function HomePage() {
  return <HomeClient />;
}
