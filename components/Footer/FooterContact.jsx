// components/Footer/FooterContact.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  SocialIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "./SocialIcons";

export default function FooterContact() {
  return (
    <div className="h-full rounded-none bg-transparent pl-0 lg:pl-8">
      <p className="text-[26px] leading-tight font-medium text-[#1a1a1a]">
        For any enquiries,
        get in touch
      </p>

      <Link
        href="/contact-us"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#01646e] px-6 py-4 text-sm font-semibold text-white hover:bg-[#01464d] transition"
      >
        Contact Us
      </Link>

      <div className="mt-8 flex flex-wrap gap-3">
        <SocialIcon href="https://www.facebook.com/MepcoPaper" label="Facebook">
          <FacebookIcon />
        </SocialIcon>

        <SocialIcon href="https://www.instagram.com/_mepco_/" label="Instagram">
          <InstagramIcon />
        </SocialIcon>

        <SocialIcon href="https://www.linkedin.com/company/middle-east-paper-co-/" label="LinkedIn">
          <LinkedInIcon />
        </SocialIcon>

        <SocialIcon href="https://x.com/_mepco_" label="X">
          <XIcon />
        </SocialIcon>

        <SocialIcon href="https://www.youtube.com/channel/UCmi6aOXp5l0ftmCRTC5njQg" label="YouTube">
          <YouTubeIcon />
        </SocialIcon>
      </div>

      {/* Saudi Made badge — desktop only */}
      <div className="mt-6 hidden lg:block">
        <img
          src="/saudi-made.png"
          alt="Saudi Made"
          className="w-auto h-[80px] object-contain"
        />
      </div>

    </div>
  );
}