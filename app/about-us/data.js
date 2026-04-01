// app/about-us/data.js
const SITE_URL = "https://mep.co";

export const aboutPage = {
  hero: {
    backgroundType: "video", // "video" or "image"
    backgroundImageSrc: "/mepco-office.jpg",
    backgroundVideoSrc: "/abt.mp4",

    heading: "Powering the Circular Economy for Saudi Arabia.",

    showPlayButton: true,
    playButtonText: "Play the Video",
    youtubeUrl: "https://www.youtube.com/watch?v=mDM8vjk_adY",
  },

  seo: {
    siteUrl: SITE_URL,

    canonicalPath: "/about-us",
    alternateArPath: "/ar/about-us",

    title: "About Us | MEPCO",
    description:
      "Learn about MEPCO's journey, integrated operations, subsidiaries, and leadership driving sustainable growth and powering the circular economy in Saudi Arabia.",

    keywords: [
      "MEPCO",
      "Middle East Paper Company",
      "About MEPCO",
      "Paper Manufacturing Saudi Arabia",
      "Circular Economy",
      "Recycling",
      "Integrated Paper Mill",
      "Saudi Vision 2030",
      "Corporate Profile",
      "Sustainable Manufacturing",
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

  // ✅ Continue Reading for About Page
  continueReadingItems: [
    {
      title: "Investor Relations",
      image: "./l1.png",
      href: "https://ir.mep.co/en/investor-relations/",
    },
    {
      title: "Our Subsidiaries",
      image: "/s1.webp",
      href: "/about-us/subsidiaries",
    },
    {
      title: "Sustainability",
      image: "/ss1.jpg",
      href: "/sustainability",
    },
  ],

  // Intro Section Data for About Page
  aboutIntro: {
    heading: "Who we are?",
    paragraphs: [
      "Founded in 2000, MEPCO is one of the Middle East's largest integrated paper manufacturers, managing the complete cycle from waste collection to paper production.",
      "With a workforce of over 1,200 employees, MEPCO produces more than 450,000 tons annually, expanding to 875,000 tons per year after the PM5 expansion.",
      "Through its subsidiaries WASCO, JUTHOR, and Estidama, MEPCO promotes sustainability and supports Saudi Vision 2030.",
    ],
    stats: [
      { value: "#1", label: "Containerboard producer in the region" },
      { value: "450,000", label: "Tons/year installed production capacity" },
      { value: "875,000", label: "Tons/year after PM5 expansion" },
      { value: "100%", label: "Recycled fiber across all grades" },
      { value: "40+", label: "Countries served in packaging and industrial sectors" },
    ],
    image: {
      src: "/abt1.png",
      alt: "Paper Manufacturing",
    },
  },

  // Vision, Mission & Values Section Data for About Page
  visionValues: {
    heading: "Vision, Mission & Values",

    image: {
      src: "/abt12.png",
      alt: "Manufacturing",
    },

    items: [
      {
        title: "Our Vision",
        type: "text",
        desc:
          "To be the leading paper and packaging company in the Middle East and Africa, delivering superior quality at competitive prices.",
      },
      {
        title: "Our Mission",
        type: "list",
        list: [
          "To be the preferred supplier of high-quality paper and packaging products.",
          "To understand our customers' needs to offer a diverse and innovative portfolio.",
          "To enable motivated employees to achieve optimal use of information, resources, technology, and assets.",
          "To operate ethically and responsibly, adding value to our partners' success and enhancing the well-being of our employees, shareholders, and community.",
        ],
      },
      {
        title: "Our Core Values",
        type: "values",
        paragraph:
          "At MEPCO, we believe that industrial progress and environmental responsibility go hand in hand — shaping a sustainable future for generations to come.",
        values: [
          {
            label: "Quality",
            text: "Delivering superior products that exceed customer expectations.",
          },
          {
            label: "Sustainability",
            text:
              "Protecting our environment through responsible production and recycling practices.",
          },
          {
            label: "Commitment",
            text:
              "Serving our partners and communities with integrity, reliability, and innovation.",
          },
        ],
      },
    ],
  },

  // HistoryTimeline
  aboutHistory: {
    heading: "Our History",
    navIcons: {
      prev: "/arrow-prev.svg",
      next: "/arrow-next.svg",
    },
    slides: [
      {
        id: 1,
        year: "2000",
        title: "MEPCO Founded",
        desc: "MEPCO began in 2000 as a Limited Liability Company with a capital of 15 million Saudi Riyals.",
        image: "/history.jpg",
      },
      {
        id: 2,
        year: "2003",
        title: "PM2 Started Production",
        desc: "PM2 started production with design capacity of 120,000 MT.",
        image: "/history.jpg",
      },
      {
        id: 3,
        year: "2004",
        title: "WASCO Founded & PM1 Upgrade",
        desc: "Waste Collection & Recycling Co. Ltd (WASCO) was founded and PM1 was upgraded to reach a capacity of 90,000 MT.",
        image: "/history.jpg",
      },
      {
        id: 4,
        year: "2007",
        title: "New Product Introduced",
        desc: "A new product K-POCHE was introduced to the market.",
        image: "/history.jpg",
      },
      {
        id: 5,
        year: "2011",
        title: "Capital Raised & Conversion",
        desc: "The capital was gradually raised to 360 million Saudi Riyals in 2011, and MEPCO was converted into a closed joint-stock company.",
        image: "/history.jpg",
      },
      {
        id: 6,
        year: "2014",
        title: "Capital Raised to 500M",
        desc: "In 2014, the capital was raised to 500 million Saudi Riyals, bringing the current capital to (50,000,000) fifty million ordinary shares.",
        image: "/history.jpg",
      },
      {
        id: 7,
        year: "Today",
        title: "Vision 2030 Journey",
        desc: "Today, MEPCO continues its pioneering journey to be a leading Saudi model in industrial sustainability and smart manufacturing, contributing to the realization of Saudi Vision 2030.",
        image: "/history.jpg",
      },
    ],
  },

  // Strategy & Safety Section Data for About Page
  strategySafety: {
    image: {
      src: "/abt-intro.png",
      alt: "Strategy and Safety",
    },

    strategyHeading: "Strategy",
    strategyIntro:
      "At MEPCO, we continuously adapt our business model to meet the evolving challenges and opportunities of the global paper and packaging industry. Guided by a deep understanding of international market dynamics, we pursue a forward-looking strategy built on growth, efficiency, and sustainability.",

    strategyPillars: [
      {
        title: "Building Scale Through Consolidation",
        desc: "To remain competitive and cost-efficient, MEPCO aligns with global trends where manufacturers consolidate operations to achieve significant production scale and operational excellence.",
      },
      {
        title: "Expanding into Emerging Markets",
        desc: "MEPCO continues to expand into high-growth regions such as Asia, Africa, and South America, strengthening its global footprint and market reach.",
      },
      {
        title: "Vertical Integration Across the Value Chain",
        desc: "We are advancing both backward and forward integration — securing raw materials through recycling and extending downstream into packaging solutions.",
      },
      {
        title: "Diversification into High-Value Products",
        desc: "MEPCO is actively diversifying into high-margin, innovative paper categories to create new growth opportunities.",
      },
      {
        title: "Driving Innovation Through Technology",
        desc: "We invest in advanced systems and digital solutions to optimize efficiency, reduce costs, and introduce sustainable products.",
      },
    ],

    safetyHeading: "Security & Safety",
    safetyIntro:
      "At MEPCO, security and safety are fundamental priorities across all aspects of our operations. We are committed to maintaining a safe, secure, and sustainable workplace that protects our employees, facilities, and the environment.",

    safetyBlocks: [
      {
        title: "Workplace Safety",
        items: [
          "Occupational safety",
          "Fire prevention and protection",
          "Handling of hazardous materials",
          "Regular field safety patrols and emergency preparedness drills are conducted.",
        ],
      },
      {
        title: "Fire Prevention & Protection",
        items: [
          "Conducting regular fire drills.",
          "Equipping and maintaining fire protection systems in strategic locations.",
          "Monitoring and managing flammable substances.",
          "Providing safety and fire-fighting training for all employees.",
          "Maintaining a trained, fully equipped firefighting team on-site.",
        ],
      },
      {
        title: "Insurance Coverage",
        items: [
          "MEPCO maintains comprehensive insurance coverage for its properties and subsidiaries, aligning with prevailing insurance standards in the Kingdom of Saudi Arabia.",
        ],
      },
    ],
  },
};
