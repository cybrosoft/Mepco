// app/home/data.js
import { HOME_PRODUCTS } from "@/app/products/data";

export const homeSEO = {
  title: "MEPCO",
  description:
    "Middle East Paper Company (MEPCO) – Powering the circular economy in Saudi Arabia.",
  keywords: [
    "MEPCO",
    "Middle East Paper Company",
    "Saudi Arabia paper",
    "recycling company KSA",
    "circular economy Saudi Arabia",
  ],
  canonical: "/",
  ogImage: "/og-default.jpg",
};

export const homeData = {
  globalReach: {
    heading: "Trusted Worldwide",
    description:
      "MEPCO’s products are now serving customers in 40+ countries, supporting packaging, trade, and industry with reliable, sustainable solutions made on Saudi soil.",
    mapImage: "/map5.png",
    markers: [
      { top: 36, left: 23 }, // USA
      { top: 52, left: 31 }, // South America
      { top: 36, left: 49 }, // Europe
      { top: 46, left: 53 }, // Middle East
      { top: 56, left: 55 }, // Africa
      { top: 36, left: 69 }, // Asia
    ],
  },

  hero: {
    slides: [
      {
        type: "video",
        src: "/aa1.mp4",
        title: "MEPCO Powering the Circular Economy for Saudi Arabia.",
        buttonText: "Know About Us",
        href: "/about-us",

        // ✅ play only a segment of the video
        startTime: 1, // seconds
        endTime: 8,   // seconds

        // ✅ loop inside the segment (50s -> 60s)
        loopSegment: true,

        // (optional) if omitted, your component auto-sets delay to (end-start)*1000 = 10000ms
        delay: 6500,
      },
      {
        type: "image",
        src: "/hero2.jpg",
        title: "#1 Containerboard Producer in the Middle East Region",
        buttonText: "Our Products",
        href: "/products",

        // optional per-slide duration for images
        delay: 5000,
      },
      {
        type: "video",
        src: "/shipping.mp4",
        title: "40+ Countries Served in Packaging and Industrial Sectors",
        buttonText: "Contact Sales",
        href: "/contact-us",

        // ✅ play only a segment of the video
        // startTime: 67,
        // endTime: 71,
        // loopSegment: true,
        // delay auto = 10000ms
      },
      {
        type: "image",
        src: "/5-2.jpg",
        title: "Explore MEPCO’s Sustainability Publications and Annual Reporting",
        buttonText: "Explore Sustainability",
        href: "/sustainability",

        // optional per-slide duration
        delay: 5000,
      },
    ],
  },

  about: {
    heading: "Who we are ?",
    paragraphs: [
      "MEPCO is the largest integrated paper manufacture in Middle East, managing the complete cycle from waste collection to paper production.",
      "Through its integrated operations and specialized subsidiaries, the company ensures operational excellence and sustainable growth. Manufacturing all grades from 100% recycled fiber, MEPCO combines performance, reliability, and environmental responsibility across regional and global markets.",
    ],
    stats: [
      { value: "450K", label: "Tons/Year Paper Production Capacity" },
      { value: "23.08%", label: "Stake Supported by PIF" },
      { value: "875K", label: "Tons/year after PM5 expansion" },
      { value: "300+", label: "Trucks in our Fleet" },
      { value: "19", label: "Recycling Centers in Mena" },
    ],
  },

  products: {
    heading: "Our Products",
    cta: {
      text: "View All Products",
      href: "/products",
    },
    items: HOME_PRODUCTS,
  },

  subsidiaries: {
    heading: "Subsidiary Companies",
    description:
      "Our subsidiary companies play a critical role in strengthening industrial capabilities, driving innovation, and supporting sustainable growth across diverse sectors.",
    cta: {
      text: "View All Subsidiaries",
      href: "/about-us/subsidiaries",
    },
    items: [
      {
        id: 1,
        name: "JUTHOR – Tissue Manufacturing Company",
        image: "/sub-juthor.png",
        href: "/about-us/subsidiaries#juthor",
      },
      {
        id: 2,
        name: "Estidama – Environmental & Waste Management Solutions",
        image: "/sub-estidama.png",
        href: "/about-us/subsidiaries#estidama",
      },
      {
        id: 3,
        name: "WASCO – Waste Management & Recycling",
        image: "/sub-wasco.png",
        href: "/about-us/subsidiaries#wasco",
      },
    ],
  },
};
