import { aboutPage } from "./data";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata(aboutPage);

export default function Layout({ children }) {
  return children;
}
