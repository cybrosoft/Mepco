import { leadershipPage } from "./data";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata(leadershipPage);

export default function Layout({ children }) {
  return children;
}
