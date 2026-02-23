"use client";

import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";
import { FOOTER_MENU } from "./footerData";

export default function Footer() {
  return (
    <footer className="w-full">
      <FooterTop menu={FOOTER_MENU} />
      <FooterBottom />
    </footer>
  );
}
