const SITE_URL = "https://mep.co";
export const PRODUCTS_PAGE = {
  hero: {
    backgroundType: "image", // "video" or "image"
    backgroundImageSrc: "/products.jpg",
    backgroundVideoSrc: "/jtr.mp4",

    heading: "Products - Engineered for Strength, Converting Efficiency",
    
    // subtitle: "Engineered for Strength, Converting Efficiency, Moisture Resistance, and Print Excellence.",
    showPlayButton: true,
    playButtonText: "Play the Video",
    youtubeUrl: "https://www.youtube.com/watch?v=mDM8vjk_adY",
  },
}
export const PRODUCTS_SEO = {
  siteUrl: SITE_URL,

  // ✅ page URLs
  canonicalPath: "/products",
  alternateArPath: "/ar/products",

  title: "Products | MEPCO",
  description:
    "Explore MEPCO’s containerboard and paperboard solutions engineered for durability, converting efficiency, moisture resistance, and print excellence.",
  keywords: [
    "MEPCO",
    "Middle East Paper Company",
    "Products",
    "Containerboard",
    "Paperboard",
    "Linerboard",
    "Fluting",
    "Testliner",
    "Kraft Liner",
    "White Top Liner",
    "Coreboard",
    "Plasterboard Liner",
    "Absorbent Kraft",
    "Corrugated Packaging",
    "Packaging Grades",
    "Saudi Arabia",
  ],

  robots: { index: true, follow: true },

  openGraph: {
    type: "website",
    siteName: "MEPCO",
    locale: "en_US",
    alternateLocale: ["ar_SA"],
    imagePath: "/products/og-products.jpg",
  },

  twitter: {
    card: "summary_large_image",
    imagePath: "/products/og-products.jpg",
  },
};
export const PRODUCTS_HEADER = {
  title: "Products",
  description:
    "Explore MEPCO’s containerboard and paperboard portfolio—engineered for strength, converting efficiency, moisture resistance, and print excellence.",
};

export const PRODUCTS_CTA = {
  title: "Need help choosing the right grade?",
  description:
    "Share your application (end use, basis weight, moisture exposure, and printing requirements) and we’ll recommend the best fit.",

  primaryButton: {
    label: "Contact sales →",
    href: "/contact-us",
  },

  secondaryButton: {
    label: "Sustainability",
    href: "/sustainability",
  },
};

export const PRODUCTS = [
  // ===================== CONTAINERBOARD =====================
  {
    id: "mepflute",
    name: "MEPFLUTE",
    subtitle: "High Performance Fluting",
    category: "containerboard",
    usage: "Corrugating Medium Layer of a Carton Box",
    endUses: [
      "Beverages",
      "Consumer Durables",
      "Detergents",
      "Industrial Goods",
      "Processed Food",
    ],
    basisWeights: "From 112 to 200 g/m²",
    properties: [
      "High speed forming and bonding on corrugators",
      "Reliable impact protection “cushioning” and stacking strength",
    ],
    certifications: [
      "FSC Recycled Certified (FSC-C124131)",
      "ISEGA certified (direct food contact certificate)",
    ],
    image: "/products/MEPFLUTE.jpg",
    tdsHref: "/tds/MEPFLUTE.pdf",
  },
  {
    id: "mepliner",
    name: "MEPLINER",
    subtitle: "TESTLINER-2",
    category: "containerboard",
    usage: "Outer and inner layers of a carton box",
    endUses: [
      "Beverages",
      "Consumer Durables",
      "Detergents",
      "Industrial Goods",
      "Processed Food",
    ],
    basisWeights: "From 112 to 200 g/m²",
    properties: [
      "Smooth surface for excellent appearance, high quality printing, and water resisting properties",
      "Rougher bottom surface making it easier to bond with the corrugating medium",
      "Reliable compression and stacking strength",
    ],
    certifications: [
      "FSC Recycled Certified",
      "ISEGA certified (direct food contact certificate)",
    ],
    image: "/products/MEPLINER.jpg",
    tdsHref: "/tds/MEPLINER.pdf",
  },
  {
    id: "mepdual",
    name: "MEPDUAL",
    subtitle: "DUAL USE",
    category: "containerboard",
    usage:
      "Mixture of fluting & testliner (corrugating medium + outer/inner layers)",
    endUses: [
      "Beverages",
      "Consumer Durables",
      "Detergents",
      "Industrial Goods",
      "Processed Food",
    ],
    basisWeights: "From 90 to 160 g/m²",
    properties: [
      "Smooth surface provides excellent appearance with high printable quality",
      "Rougher bottom surface making it easier to bond with the corrugating medium",
      "Reliable compression and stacking strength",
    ],
    certifications: [
      "FSC Recycled Certified",
      "ISEGA certified (direct food contact certificate)",
    ],
    image: "/products/MEPDUAL.jpg",
    tdsHref: "/tds/MEPDUAL.pdf",
  },
  {
    id: "mepchem",
    name: "MEPCHEM",
    subtitle: "SEMI-CHEMICAL FLUTING",
    category: "containerboard",
    usage: "Corrugating Medium Layer of a Carton Box",
    endUses: ["Frozen Food", "Fresh Food"],
    basisWeights: "From 112 to 160 g/m²",
    properties: [
      "High moisture resistance for boxes exposed to changing temperature and humidity conditions",
      "High speed forming and bonding on corrugators",
      "Reliable impact protection “cushioning” and stacking strength",
    ],
    certifications: [
      "FSC Recycled Certified",
      "ISEGA certified (direct food contact certificate)",
    ],
    image: "/products/MEPCHEM.jpg",
    tdsHref: "/tds/MEPCHEM.pdf",
  },
  {
    id: "mepkraft",
    name: "MEPKRAFT",
    subtitle: "KRAFT LINER BOARD",
    category: "containerboard",
    usage: "Outer and inner layers of a carton box",
    endUses: [
      "Frozen Food",
      "Fresh Food",
      "Beverages",
      "Consumer Durables",
      "Detergents",
      "Industrial Goods",
    ],
    basisWeights: "From 110 to 200 g/m²",
    properties: [
      "Golden shade and smooth surface providing excellent appearance, high quality printing, and water resisting properties",
      "Rougher bottom surface making it easier and faster to bond with the corrugating medium",
      "Reliable compression & bursting strength with high moisture resistance in changing conditions",
    ],
    certifications: [
      "FSC Recycled Certified",
      "ISEGA certified (direct food contact certificate)",
    ],
    image: "/products/MEPKRAFT.jpeg",
    tdsHref: "/tds/MEPKRAFT.pdf",
  },
  {
    id: "mepwhite",
    name: "MEPWHITE",
    subtitle: "WHITE TOP LINER",
    category: "containerboard",
    usage: "Outer and inner layers of a carton box",
    endUses: [
      "Beverages",
      "Consumer Durables",
      "Detergents",
      "Industrial Goods",
      "Processed Food",
    ],
    basisWeights: "From 125 to 200 g/m²",
    properties: [
      "Elevated brightness and whiteness for high graphic printing",
      "Remarkable box display",
    ],
    certifications: [],
    image: "/products/MEPWHITE.jpg",
    tdsHref: "/tds/MEPWHITE.pdf",
  },

  // ===================== PAPERBOARD =====================
  {
    id: "mepcore",
    name: "MEPCORE",
    subtitle: "COREBOARD",
    category: "paperboard",
    usage:
      "Multi-ply board wound and laminated with adhesive forming a paper tube or core",
    endUses: ["Film", "Tape & Label", "Textiles", "Paper"],
    basisWeights: "From 200 to 550 g/m²",
    properties: [
      "High ply-bond, stiffness, and ring crush properties for stronger paper tubes",
      "High tensile strength securing high speed run-ability on the machine",
    ],
    certifications: ["FSC Recycled Certified"],
    image: "/products/MEPCORE.jpg",
    tdsHref: "/tds/MEPCORE.pdf",
  },
  {
    id: "mepgypsum",
    name: "MEPGYPSUM",
    subtitle: "PLASTERBOARD LINER",
    category: "paperboard",
    usage:
      "Layers of linerboard bonded to a gypsum plaster core forming a wallboard",
    endUses: ["Interior wall lining systems"],
    basisWeights: "From 160 to 220 g/m²",
    properties: [
      "High tensile strength securing high flexural strength in the final board",
      "Proper sizing ensures a flat smooth board surface",
    ],
    certifications: [],
    image: "/products/MEPGYPSUM.jpg",
    tdsHref: "/tds/MEPGYPSUM.pdf",
  },
  {
    id: "meplaminate",
    name: "MEPLAMINATE",
    subtitle: "ABSORBENT KRAFT",
    category: "paperboard",
    usage:
      "Base paper for impregnation with phenolic resins in decorative laminates",
    endUses: ["Laminated furniture and shelves", "Laminated counters and floors"],
    basisWeights: "From 140 to 160 g/m²",
    properties: [
      "Consistent, even, and fast resin penetration",
      "Uniform fiber orientation providing product stability and flat finishing surfaces",
    ],
    certifications: [],
    image: "/products/MEPLAMINATE.jpg",
    tdsHref: "/tds/MEPLAMINATE.pdf",
  },
];

export const CATEGORY_META = {
  containerboard: {
    label: "Containerboard",
    desc: "High-performance liner and fluting grades engineered for corrugated packaging strength, converting efficiency, and print performance.",
  },
  paperboard: {
    label: "Paperboard",
    desc: "Specialty paperboard solutions designed for cores, wallboard liners, and laminate base papers where strength and consistency matter.",
  },
};

// ===== Home page products (derived from PRODUCTS) =====

// Pick which products to show on the home page (order matters)
export const HOME_PRODUCT_IDS = [
  "mepflute",
  "mepliner",
  "mepdual",
  "mepchem",
  "mepkraft",
  "mepwhite",
  "mepcore",
  "mepgypsum",
  "meplaminate",
];

// Home cards need only these fields
export const HOME_PRODUCTS = HOME_PRODUCT_IDS.map((id) => {
  const p = PRODUCTS.find((x) => x.id === id);

  if (!p) return null;

  return {
    id: p.id,
    name: p.name,
    desc: `${p.subtitle}, for ${p.usage}`,
    image: p.image,
    href: `/products#${p.id}`,
  };
}).filter(Boolean);
