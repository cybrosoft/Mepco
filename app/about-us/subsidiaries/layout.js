import { subsidiariesPage } from "./data";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata(subsidiariesPage);

export default function Layout({ children }) {
  return children;
}
