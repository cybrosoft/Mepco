// app/products/layout.js
import { PRODUCTS_SEO } from "./data";
import { buildPageMetadata } from "@/lib/seo";

// PRODUCTS_SEO is the seo object itself — wrap it so buildPageMetadata finds .seo
export const metadata = buildPageMetadata({ seo: PRODUCTS_SEO });

export default function Layout({ children }) {
  return children;
}
