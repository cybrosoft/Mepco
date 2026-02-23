// app/about-us/subsidiaries/data.js

const SITE_URL = "https://mep.co";

export const subsidiariesPage = {
  hero: {
    backgroundType: "image", // "video" or "image"
    backgroundImageSrc: "/sub.png",
    backgroundVideoSrc: "/jtr.mp4",
    heading: "Our Subsidiaries",
    subtitle:
      "Our Subsidiaries Play a Strategic Role in Strengthening our Integrated Value Chain.",
    showPlayButton: false,
    playButtonText: "Play the Video",
    youtubeUrl: "https://www.youtube.com/watch?v=mDM8vjk_adY",
  },

  seo: {
    siteUrl: SITE_URL,
    canonicalPath: "/about-us/subsidiaries",
    alternateArPath: "/ar/about-us/subsidiaries",

    title: "Subsidiaries",
    description:
      "Discover MEPCO’s subsidiaries supporting Saudi Arabia’s circular economy—waste management, recycling, and tissue manufacturing—driving sustainable growth nationwide.",
    keywords: [
      "MEPCO",
      "Middle East Paper Company",
      "Subsidiaries",
      "WASCO",
      "JUTHOR",
      "Estidama",
      "Waste Management",
      "Recycling",
      "Circular Economy",
      "Tissue Manufacturing",
      "Saudi Arabia",
    ],

    robots: { index: true, follow: true },

    openGraph: {
      type: "website",
      siteName: "MEPCO",
      locale: "en_US",
      alternateLocale: ["ar_SA"],
      imagePath: "/mepco-office.jpg",
    },

    twitter: {
      card: "summary_large_image",
      imagePath: "/mepco-office.jpg",
    },
  },

  pageHead: {
    title: "Our Subsidiaries",
    intro:
      "MEPCO’s subsidiaries form a fully integrated ecosystem that strengthens our value chain and advances Saudi Arabia’s circular economy. From waste collection and recycling to tissue manufacturing and environmental solutions, each company contributes to sustainable growth, operational excellence, and long-term value creation.",
  },

  // ✅ Subsidiaries (supports mediaType: "image" | "video")
  subsidiaries: [
    {
      id: "wasco",
      name: "WASCO",
      subtitle: "Waste Management & Recycling",
      desc: "WASCO is the largest waste collection and sorting company in Saudi Arabia, processing 500,000 tons of recyclable materials annually through 18 collection centers nationwide. It supports MEPCO’s circular economy model by providing a stable raw material supply chain.",
      website: "https://wasco-sa.com",
      logo: "/wasco.png",

      mediaType: "video", // change to "video" if you want
      image: "/wasco-1.webp",
      video: "/wasco.mp4", // optional
    },
    {
      id: "juthor",
      name: "JUTHOR",
      subtitle: "Tissue Manufacturing Company",
      desc: "Juthor plays a leading role in Saudi Arabia’s tissue sector with a full range of hygienic paper products, including facial tissue, toilet paper, kitchen towels, and napkins. The new TM6 line expands capacity from 60,000 to 120,000 tons per year for long-term sustainable growth.",
      website: "https://juthor.com.sa",
      logo: "/juthor.png",

      mediaType: "video",
      image: "/juthor.jpg",
      video: "/juthor.mp4", // optional
    },
    {
      id: "estidama",
      name: "Estidama",
      subtitle: "Environmental & Waste Management Solutions",
      desc: "Estidama provides innovative waste management solutions across Jeddah, serving both commercial and non-profit sectors. With 40 dedicated carriers and 4 intake centers, Estidama enhances MEPCO’s recycling ecosystem at the city level and supports long-term environmental health.",
      website: "https://estidama.co",
      logo: "/estidama.png",

      mediaType: "video",
      image: "/estidama.jpg",
      video: "/estidama.mp4", // optional
    },
  ],

  continueReadingItems: [
    {
      title: "About Us",
      image:
        "/abt12.png",
      href: "/about-us",
    },
    {
      title: "Our Subsidiaries",
      image:
        "/s1.webp",
      href: "/about-us/subsidiaries",
    },
    {
      title: "Sustainability",
      image:
        "/ss1.jpg",
      href: "/sustainability",
    },
  ],
};
