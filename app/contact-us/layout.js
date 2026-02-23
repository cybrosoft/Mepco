import { contactPage } from "./data";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata(contactPage);

export default function Layout({ children }) {
  return children;
}
