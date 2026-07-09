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
      "MEPCO's products are now serving customers in 40+ countries, supporting packaging, trade, and industry with reliable, sustainable solutions made on Saudi soil.",
    mapImage: "/map-a1.png",
  },

  hero: {
    slides: [
      
      {
        type: "video",
        src: "/shipping.mp4",
        title: "40+ Countries Served in Packaging and Industrial Sectors",
        buttonText: "Request a Quote",
        href: "/products/rfq",
      },
      {
        type: "image",
        src: "/5-2.jpg",
        title: "Explore MEPCO's Sustainability Publications and Annual Reporting",
        buttonText: "Explore Sustainability",
        href: "/sustainability",
        delay: 3000,
      },
      {
        type: "video",
        src: "/aa1.mp4",
        title: "MEPCO Powering the Circular Economy for Saudi Arabia.",
        buttonText: "Know About Us",
        href: "/about-us",
        startTime: 1,
        endTime: 8,
        loopSegment: true,
        delay: 6500,
      },
      {
        type: "image",
        src: "/hero2.jpg",
        title: "#1 Containerboard Producer in the Middle East Region",
        buttonText: "Our Products",
        href: "/products",
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

  // ✅ Careers section
  careers: {
    subheading: "Join Our Team",
    heading: "Build Your Future with MEPCO",
    description:
      "Be part of a pioneering team driving Saudi Arabia's circular economy. At MEPCO, we invest in our people — offering growth, purpose, and the chance to make a lasting impact on industry and the environment.",
    stats: [
      { value: "1,200+", label: "Employees Worldwide" },
      { value: "30+", label: "Years of Industry Leadership" },
      { value: "40+", label: "Countries We Serve" },
    ],
    ctaText: "Explore Opportunities",
    ctaHref: "https://careers.mep.co/",
    image: "/careers.jpg",
  },
};
