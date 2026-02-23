import { sustainabilityPage } from "./data";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata(sustainabilityPage);

export default function Layout({ children }) {
  return children;
}
