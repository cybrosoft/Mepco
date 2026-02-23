const SITE_URL = "https://mep.co";

export const sustainabilityPage = {
  hero: {
    backgroundType: "image", // "video" or "image"
    backgroundImageSrc: "/5-1.jpg", // used only if backgroundType Image
    backgroundVideoSrc: "/jtr.mp4", // used only if backgroundType = "video"
    heading: "Sustainability & Corporate Social Responsibility",
    // subtitle: "We’re here to help with inquiries, partnerships, and support.",

    showPlayButton: true, // false/true if you want play or not
    playButtonText: "Play the Video",
    youtubeUrl: "https://www.youtube.com/watch?v=mDM8vjk_adY",
  },

  seo: {
    siteUrl: SITE_URL,

    // ✅ page URLs
    canonicalPath: "/sustainability",
    alternateArPath: "/ar/sustainability",

    title: "Sustainability & Corporate Social Responsibility | MEPCO",
    description:
      "Explore MEPCO’s Sustainability & Corporate Social Responsibility initiatives, including resource efficiency, recycling, responsible operations, and community impact aligned with Saudi Vision 2030.",
    keywords: [
      "MEPCO",
      "Middle East Paper Company",
      "Sustainability",
      "Corporate Social Responsibility",
      "CSR",
      "Saudi Vision 2030",
      "Recycling",
      "Circular Economy",
      "Resource Efficiency",
      "Water Efficiency",
      "Waste Management",
      "Fiber Efficiency",
      "Energy Optimization",
      "Emission Control",
      "Environmental Compliance",
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

  // ✅ Continue Reading items (added)
  continueReadingItems: [
    {
      title: "About Us",
      image:
        "/abt12.png",
      href: "/about-us",
    },

    {
      title: "Our Leadership",
      image:
        "./l1.png",
      href: "/about-us/leadership",
    },
        {
      title: "Our Subsidiaries",
      image:
        "/s1.webp",
      href: "/about-us/subsidiaries",
    },
  ],

  // ✅ SusIntro data (added)
  susIntro: {
    title: "Sustainability",
    paragraphs: [
      "MEPCO integrates sustainability across every stage of its operations — from recycling fibers and water to optimizing energy and minimizing waste. Through its subsidiaries, MEPCO powers the circular economy for Saudi Arabia and contributes to Vision 2030 by reducing waste and supporting local recycling infrastructure.",
      "Through continuous improvement, we strive to minimize waste, reduce emissions, and comply fully with environmental regulations. Our Sustainability Initiatives include:",
    ],
    initiatives: [
      {
        title: "Reducing Freshwater Consumption",
        desc: "Through advanced water treatment and recycling systems.",
      },
      {
        title: "Responsible Waste Management",
        desc: "Effective disposal and treatment of both liquid and solid waste.",
      },
      {
        title: "Enhancing Fiber Efficiency",
        desc: "By improving fiber yield and optimizing material usage.",
      },
      {
        title: "Energy and Fuel Optimization",
        desc: "Reducing oil consumption and improving fuel management.",
      },
      {
        title: "Emission Control & Environmental Safety",
        desc: "Implementing cleaner technologies to minimize air pollution & Actively eliminating potential environmental hazards across operations.",
      },
    ],
    image: {
      src: "/abt6.png",
      alt: "Paper Manufacturing",
    },
  },

  // ✅ Community Initiatives data (added)
  communityInitiatives: {
    title: "Community Initiatives",

    introParagraphs: [
      "MEPCO actively participates in community initiatives to promote environmental awareness and encourage recycling through various programs and partnerships, including:",
    ],

    items: [
      {
        title: "Nabta - Educational Foundation",
        desc: 'Raising students’ awareness of the importance of environmental preservation through qualitative workshops such as "Hikayet Nafaya" (The Tale of Waste).',
      },
      {
        title: "University & Association Partnerships",
        desc: 'Partnerships with associations and educational institutions such as the "Don’t Throw It Away, Endow It" project at King Abdulaziz University.',
      },
      {
        title: "WASCO Company",
        desc: "Implementing practical programs for collecting waste paper from homes, national events, and sporting occasions.",
      },
      {
        title: "Imagine - Interactive Events",
        desc: "Interactive events for children and families to teach children aged 5 to 15 about recycling by innovating cardboard games and fostering creative thinking.",
      },
    ],

    closingParagraph:
      "These efforts aim to provide a green and healthy environment for the future and support the local community in accordance with Saudi Vision 2030.",

    image: {
      src: "/abt3.PNG",
      alt: "Community initiatives",
    },
  },
  // ✅ Sustainability Reports data (added)
  sustainabilityReports: {
    title: "Sustainability Reports",

    paragraphs: [
      "Explore MEPCO’s sustainability publications and annual reporting to understand how we advance resource efficiency, responsible operations, and community impact.",
      "Download the latest reports below:",
    ],

    reports: [
      {
        title: "Annual Report 2024",
        note: "Includes Sustainability section: pages 56–66",
        href: "/reports/sustainability-report-2024.pdf",
        size: "3.13 MB",
      },
      {
        title: "Sustainability Report 2023",
        href: "/reports/sustainability-report-2023.pdf",
        size: "3.13 MB",
      },
      {
        title: "Sustainability Report 2022",
        href: "/reports/sustainability-report-2022.pdf",
        size: "3.13 MB",
      },
      {
        title: "Sustainability Report 2021",
        href: "#",
        size: "3.13 MB",
      },
      {
        title: "Sustainability Report 2020",
        href: "$",
        size: "3.13 MB",
      },
    ],

    image: {
      src: "/abt9.png",
      alt: "Paper Manufacturing",
    },
  },
  // ✅ Awards Section data (added)
  awardsSection: {
    title: "Awards & Recognitions",

    introParagraph:
      "MEPCO’s excellence in sustainability, governance, and leadership has been recognized through multiple regional and international awards.",

    items: [
      {
        title: "Pulp and Paper International Awards (PPI Awards)",
        desc: `
  • Water Efficiency Award – 2013
  • Mill Manager of the Year Award – 2015
        `,
      },
      {
        title: "Great Place to Work Awards",
        desc: `
  • Best Workplaces Award – Saudi Arabia 2017
        `,
      },
      {
        title: "Capital Finance International (CFI)",
        desc: `
  • Best Corporate Governance Leadership Award – Saudi Arabia 2017
        `,
      },
      {
        title: "Corporate Governance Center",
        desc: `
  • CGI Excellence Award – Saudi Arabia 2020
        `,
      },
      {
        title: "King Khalid Awards",
        desc: `
  • Best Product and Service Innovation Award – 2011
  • Sustainability Award – 2015
  • Local Supplier Award – 2016
  • Sustainability Award – 2017
        `,
      },
      {
        title: "CSR Saudi Arabia Awards",
        desc: `
  • Best CSR Integrated Organization Award – 2015
        `,
      },
      {
        title: "Arab Best Awards",
        desc: `
  • Best 100 Arabic CEO Award – 2017
  • Best 100 Arabic CEO Award – 2018
        `,
      },
      {
        title: "Top CEO Awards",
        desc: `
  • Top CEO Award – 2022
        `,
      },
      {
        title: "Middle East Waste & Recycling Awards (MEWAR Awards)",
        desc: `
  • Paper Recycling Company of the Year – 2018
  • Paper Recycling Company of the Year – 2019
  • Personality of the Year – 2019
  • Paper Recycling Company of the Year – 2022
        `,
      },
    ],

    image: {
      src: "/abt15.png",
      alt: "MEPCO Awards",
    },
  },
  // ✅ Certifications Section data (added)
  certificationsSection: {
  title: "Certifications & Accreditations",

  logos: [
    { src: "/certifications/iso-14001.jpg", alt: "ISO 14001" },
    { src: "/certifications/iso-9001.jpg", alt: "ISO 9001" },
    { src: "/certifications/iso-45001.jpg", alt: "ISO 45001" },
    { src: "/certifications/iso-17025.jpg", alt: "ISO 17025" },
    { src: "/certifications/fsc.jpg", alt: "FSC Certified" },
    { src: "/certifications/isega.jpg", alt: "ISEGA Certification" },
    { src: "/certifications/saudi-made.jpg", alt: "Saudi Made" },
  ],
},



};
