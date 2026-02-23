import { contactPageAr } from "./data";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata(contactPageAr);

export default function Layout({ children }) {
  return children;
}
