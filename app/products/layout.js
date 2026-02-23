import { PRODUCTS_SEO } from "./data";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata(PRODUCTS_SEO);

export default function Layout({ children }) {
  return children;
}
