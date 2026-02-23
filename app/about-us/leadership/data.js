// app/about/leadership/data.js

const SITE_URL = "https://mep.co";

export const leadershipPage = {
  seo: {
    siteUrl: SITE_URL,

    canonicalPath: "/about-us/leadership",
    alternateArPath: "/ar/about-us/leadership",

    title: "Our Leadership | MEPCO",
    description:
      "Meet MEPCO’s Board of Directors, Group Management Team, and Board Committees driving strategy, governance, and sustainable growth.",
    keywords: [
      "MEPCO",
      "Leadership",
      "Board of Directors",
      "Group Management Team",
      "Board Committees",
      "Corporate Governance",
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

  pageTitle: "Our Leadership",

  tabs: [
    {
      key: "board",
      label: "Board of Directors",
      title: "Board of Directors",
      intro:
        "Our Board provides strategic guidance, oversight, and governance to support MEPCO’s long-term growth and sustainability.",
    },
    {
      key: "management",
      label: "Group Management Team",
      title: "Group Management Team",
      intro:
        "Our Group Management Team leads operations and execution across the business, ensuring performance, innovation, and organizational excellence.",
    },
    {
      key: "committees",
      label: "Board Committees",
      title: "Board Committees",
      intro:
        "The Board Committees support governance, oversight, and strategic execution across key areas of the organization.",
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

export const boardMembers = [
  {
    id: 1,
    name: "Mr. Mussab Sulaiman Al-Muhaidib",
    role: "Chair / Non – Executive",
    image: "https://ir.mepco.biz/media/1401/mr-mussab-sulaiman-al-muhaidib.jpg",
  },
  {
    id: 2,
    name: "Mr. Walid Ibrahim Shukri",
    role: "Vice Chair / Non – Executive",
    image: "https://www.mep.co/Website/En/wp-content/uploads/2025/12/2a.jpg",
  },
  {
    id: 3,
    name: "Mr. Robertus Johannes Renders",
    role: "Non – Executive",
    image:
      "https://ir.mepco.biz/media/1336/rob_jan_renders_pic-removebg-preview.png",
  },
  {
    id: 4,
    name: "Mr. Majed Mosa Al Esmail",
    role: "Independent",
    image:
      "https://www.mep.co/Website/En/wp-content/uploads/2025/12/eng.majed_.jpg",
  },
  {
    id: 5,
    name: "Mr. Ghazi Abdulrahim Alrawi",
    role: "Independent",
    image:
      "https://www.mep.co/Website/En/wp-content/uploads/2025/12/Ghazi-Alrawi-1.jpg",
  },
  {
    id: 6,
    name: "Mr. Feras Samir Al Baiyat",
    role: "Non – Executive",
    image:
      "https://www.mep.co/Website/En/wp-content/uploads/2025/12/Faris-Albaiyat.jpeg",
  },
  {
    id: 7,
    name: "Mr. Farid Habib",
    role: "Non – Executive",
    image: "https://ir.mepco.biz/media/1398/farid-habib.jpg",
  },
  {
    id: 8,
    name: "Mr. Rakan Mohammed Abunayyan",
    role: "Independent",
    image: "https://www.mep.co/Website/En/wp-content/uploads/2025/12/3a.jpg",
  },
];

export const managementTeam = [
  {
    id: 1,
    name: "Eng. Faisal Haddawi",
    role: "Chief Executive Officer (CEO)",
    image: "https://www.mep.co/Website/En/wp-content/uploads/2025/10/112.jpg",
  },
  {
    id: 2,
    name: "Abdulrahman Shaker",
    role: "Chief Financial Officer (CFO)",
    image: "https://www.mep.co/Website/En/wp-content/uploads/2025/10/16.jpg",
  },
  {
    id: 3,
    name: "Omar Sayed",
    role: "General Counsel and Board Secretary",
    image:
      "https://www.mep.co/Website/En/wp-content/uploads/2025/10/13-150x150.jpg",
  },
  {
    id: 4,
    name: "Eng. Bandar Al Enazi",
    role: "Chief Commercial Officer (CCO)",
    image: "https://www.mep.co/Website/En/wp-content/uploads/2025/10/15.jpg",
  },
  {
    id: 5,
    name: "Eng. Hasan Al-Amri",
    role: "Chief Waste Management Officer (CWMO)",
    image:
      "https://www.mep.co/Website/En/wp-content/uploads/2025/09/6-150x150.jpg",
  },
  {
    id: 6,
    name: "Eng. Adel Alfar",
    role: "Acting Chief Operating Officer (Acting COO)",
    image: "https://www.mep.co/Website/En/wp-content/uploads/2025/10/11.jpg",
  },
  {
    id: 7,
    name: "Eng. Yasir Taufik",
    role: "Supply Chain Director",
    image: "https://www.mep.co/Website/En/wp-content/uploads/2025/10/yaser.jpg",
  },
  {
    id: 8,
    name: "Salahudheen Haladheen",
    role: "Strategy and Transformation Director",
    image:
      "https://www.mep.co/Website/En/wp-content/uploads/2025/09/t3-150x150.jpg",
  },
];

export const boardCommittees = [
  {
    title: "The Audit Committee",
    members: [
      { name: "Dr. Ghazi Abdulrahim Al Rawi", position: "Independent Member / Chair" },
      { name: "Mr. Walid Ibrahim Shukri", position: "Non-Executive Member" },
      { name: "Mr. Abdulmohsen Ibrahim Al Rayes", position: "External Member" },
    ],
  },
  {
    title: "The Nominations and Remunerations Committee",
    members: [
      { name: "Mr. Majed Mosa Al Esmail", position: "Independent Member / Chair" },
      { name: "Mr. Robertus Johannes Renders", position: "Non-Executive Member" },
      { name: "Mr. Farid Habib", position: "Non-Executive Member" },
      { name: "Ms. Nathalie Potvin", position: "External Member" },
    ],
  },
  {
    title: "The Strategic and Executive Committee",
    members: [
      { name: "Mr. Farid Habib", position: "Non-Executive Member / Chair" },
      { name: "Mr. Feras Samir Al Baiyat", position: "Non-Executive Member" },
      { name: "Mr. Robertus Johannes Renders", position: "Non-Executive Member" },
      { name: "Mr. Rakan Mohammed Abunayyan", position: "Independent Member" },
    ],
  },
  {
    title: "The Risk and Sustainability Committee",
    members: [
      { name: "Mr. Walid Ibrahim Shukri", position: "Non-Executive Member / Chair" },
      { name: "Mr. Musaab Sulaiman Al Muhaidib", position: "Non-Executive Member" },
      { name: "Eng. Tarek Abdulaziz Al Rikhaimi", position: "External Member" },
      { name: "Ms. Nathalie Potvin", position: "External Member" },
    ],
  },
];
