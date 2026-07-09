// app/about/leadership/data.js
const SITE_URL = "https://mep.co";

export const leadershipPage = {
  seo: {
    siteUrl: SITE_URL,
    canonicalPath: "/about-us/leadership",
    alternateArPath: "/ar/about-us/leadership",
    title: "Our Leadership | MEPCO",
    description:
      "Meet MEPCO's Board of Directors, Group Management Team, and Board Committees driving strategy, governance, and sustainable growth.",
    keywords: [
      "MEPCO", "Leadership", "Board of Directors", "Group Management Team",
      "Board Committees", "Corporate Governance", "Saudi Arabia",
    ],
    robots: { index: true, follow: true },
    openGraph: {
      type: "website", siteName: "MEPCO", locale: "en_US",
      alternateLocale: ["ar_SA"], imagePath: "/mepco-office.jpg",
    },
    twitter: { card: "summary_large_image", imagePath: "/mepco-office.jpg" },
  },

  pageTitle: "Our Leadership",

  tabs: [
    {
      key: "board", label: "Board of Directors", title: "Board of Directors",
      intro: "Our Board provides strategic guidance, oversight, and governance to support MEPCO's long-term growth and sustainability.",
    },
    {
      key: "management", label: "Group Management Team", title: "Group Management Team",
      intro: "Our Group Management Team leads operations and execution across the business, ensuring performance, innovation, and organizational excellence.",
    },
    {
      key: "committees", label: "Board Committees", title: "Board Committees",
      intro: "The Board Committees support governance, oversight, and strategic execution across key areas of the organization.",
    },
  ],

  continueReadingItems: [
    { title: "About Us",        image: "/abt12.png", href: "/about-us" },
    { title: "Our Subsidiaries",image: "/s1.webp",   href: "/about-us/subsidiaries" },
    { title: "Sustainability",  image: "/ss1.jpg",   href: "/sustainability" },
  ],
};

export const boardMembers = [
  { id: 1, name: "Mr. Mussab Sulaiman Al-Muhaidib", role: "Chair / Non – Executive", image: "https://ir.mepco.biz/media/1401/mr-mussab-sulaiman-al-muhaidib.jpg" },
  { id: 2, name: "Mr. Walid Ibrahim Shukri",         role: "Vice Chair / Non – Executive", image: "https://www.mep.co/Website/En/wp-content/uploads/2025/12/2a.jpg" },
  { id: 3, name: "Mr. Robertus Johannes Renders",    role: "Non – Executive", image: "https://ir.mepco.biz/media/1336/rob_jan_renders_pic-removebg-preview.png" },
  { id: 4, name: "Mr. Majed Mosa Al Esmail",         role: "Independent", image: "https://www.mep.co/Website/En/wp-content/uploads/2025/12/eng.majed_.jpg" },
  { id: 5, name: "Mr. Ghazi Abdulrahim Alrawi",      role: "Independent", image: "https://www.mep.co/Website/En/wp-content/uploads/2025/12/Ghazi-Alrawi-1.jpg" },
  { id: 6, name: "Mr. Feras Samir Al Baiyat",        role: "Non – Executive", image: "https://www.mep.co/Website/En/wp-content/uploads/2025/12/Faris-Albaiyat.jpeg" },
  { id: 7, name: "Mr. Farid Habib",                  role: "Non – Executive", image: "https://ir.mepco.biz/media/1398/farid-habib.jpg" },
  { id: 8, name: "Mr. Rakan Mohammed Abunayyan",     role: "Independent", image: "https://www.mep.co/Website/En/wp-content/uploads/2025/12/3a.jpg" },
];

export const managementTeam = [
  {
    id: 1,
    name: "Eng. Faisal Haddawi",
    role: "Chief Executive Officer (CEO)",
    image: "https://www.mep.co/Website/En/wp-content/uploads/2025/10/112.jpg",
    bio: "Missing Details, Please Add it",
  },
  {
    id: 2,
    name: "Abdulrahman Shaker",
    role: "Chief Financial Officer (CFO)",
    image: "https://www.mep.co/Website/En/wp-content/uploads/2025/10/16.jpg",
    bio: "Mr. Abdulrahman Shaker is the Chief Financial Officer, overseeing Finance, Investor Relations, and Information Technology across MEPCO Group.\n\nHe previously held senior financial leadership roles with Abdul Latif Jameel United Finance (CJSC), Binzager Holding, Fakieh Poultry Group, Jabal Omar Development Co., King Abdullah University of Science & Technology (KAUST), and Savola Group.\n\nMr. Shaker holds a master's degree in Corporate Finance from the University of Toledo and a bachelor's degree in accounting from King Abdulaziz University. He also holds an Executive Certificate in Management and Leadership from the MIT Sloan School of Management.",
  },
  {
    id: 3,
    name: "Omar Sayed",
    role: "General Counsel and Board Secretary",
    image: "https://www.mep.co/Website/En/wp-content/uploads/2025/10/13-150x150.jpg",
    bio: "Mr. Omar Elsayed is the General Counsel and the Board Secretary at MEPCO Group. He is responsible for ensuring corporate governance standards, regulatory compliance, risk oversight, and the effective administration of board activities.\n\nMr. Elsayed brings a strong legal background, having worked previously with Ihqaq Lawful Center, Mohammed Mady Law Firm, and Alsafwa Al Alamia for Advocates and Legal Consultants, where he specialized in corporate legal advisory and regulatory matters.\n\nHe holds a Bachelor of Laws (LL.B.) from Mansoura University and has completed multiple professional certifications in legal compliance, governance, and risk management.",
  },
  {
    id: 4,
    name: "Eng. Bandar Al Enazi",
    role: "Chief Commercial Officer (CCO)",
    image: "https://www.mep.co/Website/En/wp-content/uploads/2025/10/15.jpg",
    bio: "Missing Details, Please Add it",
  },
  {
    id: 5,
    name: "Eng. Hasan Al-Amri",
    role: "Chief Waste Management Officer (CWMO)",
    image: "https://www.mep.co/Website/En/wp-content/uploads/2025/09/6-150x150.jpg",
    bio: "Mr. Hasan Alamri leads the Recycling and Waste Management cluster at MEPCO Group.\n\nEng. Hasan Alamri is an executive leader with over 25 years of experience in developing industrial investments and circular economy infrastructure in the Kingdom. He has led strategic initiatives and structured multi-billion-SAR investments, while building public-private partnerships that supported major national projects and strengthened industrial value chains, alongside his expertise in corporate governance and operational transformation.\n\nHasan Alamri holds a Bachelor's degree in Mechanical Engineering with honors from King Fahd University of Petroleum & Minerals (KFUPM). He also completed a specialized program in Mergers & Acquisitions and Corporate Strategy at INSEAD. He is a registered member of the American Society of Mechanical Engineers (ASME) and the Saudi Council of Engineers.",
  },
  {
    id: 6,
    name: "Eng. Adel Alfar",
    role: "Acting Chief Operating Officer (Acting COO)",
    image: "https://www.mep.co/Website/En/wp-content/uploads/2025/10/11.jpg",
    bio: "Mr. Adel Alfar currently serves as the Acting Chief Operations Officer for MEPCO manufacturing cluster, overseeing operations at both the MEPCO and JUTHOR plants to drive performance and operational excellence.\n\nPrior to joining MEPCO, Mr. Alfar held senior operational roles at Fine Hygienic Holding and National Industries. He served as a Steering Committee Member for tissue machine projects in Egypt and Jordan, bringing valuable cross-border project leadership experience.\n\nHe holds a Bachelor's degree in Chemical Engineering from Jordan University of Science and Technology, complemented by several professional certifications in operations and manufacturing.",
  },
  {
    id: 7,
    name: "Eng. Yasir Taufik",
    role: "Supply Chain Director",
    image: "https://www.mep.co/Website/En/wp-content/uploads/2025/10/yaser.jpg",
    bio: "Missing Details, Please Add it",
  },
  {
    id: 8,
    name: "Salahudheen Haladheen",
    role: "Strategy and Transformation Director",
    image: "https://www.mep.co/Website/En/wp-content/uploads/2025/09/t3-150x150.jpg",
    bio: "Mr. Salahudheen Halaldheen leads corporate strategy and transformation initiatives across MEPCO Group.\n\nHis career includes roles with Saed International for Istiqdam, Abraj Hyper Market, Adl Capital, and KPMG, where he contributed to strategic projects and organizational change.\n\nMr. Halaldheen holds professional qualifications as an Associate Chartered Management Accountant (ACMA) and Chartered Global Management Accountant (CGMA) from the Chartered Institute of Management Accountants (CIMA), UK.",
  },
];

export const boardCommittees = [
  {
    title: "The Audit Committee",
    members: [
      { name: "Dr. Ghazi Abdulrahim Al Rawi",    position: "Independent Member / Chair" },
      { name: "Mr. Walid Ibrahim Shukri",          position: "Non-Executive Member" },
      { name: "Mr. Abdulmohsen Ibrahim Al Rayes",  position: "External Member" },
    ],
  },
  {
    title: "The Nominations and Remunerations Committee",
    members: [
      { name: "Mr. Majed Mosa Al Esmail",          position: "Independent Member / Chair" },
      { name: "Mr. Robertus Johannes Renders",      position: "Non-Executive Member" },
      { name: "Mr. Farid Habib",                    position: "Non-Executive Member" },
      { name: "Ms. Nathalie Potvin",                position: "External Member" },
    ],
  },
  {
    title: "The Strategic and Executive Committee",
    members: [
      { name: "Mr. Farid Habib",                   position: "Non-Executive Member / Chair" },
      { name: "Mr. Feras Samir Al Baiyat",          position: "Non-Executive Member" },
      { name: "Mr. Robertus Johannes Renders",      position: "Non-Executive Member" },
      { name: "Mr. Rakan Mohammed Abunayyan",       position: "Independent Member" },
    ],
  },
  {
    title: "The Risk and Sustainability Committee",
    members: [
      { name: "Mr. Walid Ibrahim Shukri",          position: "Non-Executive Member / Chair" },
      { name: "Mr. Musaab Sulaiman Al Muhaidib",   position: "Non-Executive Member" },
      { name: "Eng. Tarek Abdulaziz Al Rikhaimi",  position: "External Member" },
      { name: "Ms. Nathalie Potvin",                position: "External Member" },
    ],
  },
];
