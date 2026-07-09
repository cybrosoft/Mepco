const SITE_URL = "https://mep.co";

export const contactPage = {
  hero: {
    backgroundType: "image", // "video" or "image"
    backgroundImageSrc: "/mepco-office.jpg", // used only if backgroundType Image
    backgroundVideoSrc: "/jtr.mp4", // used only if backgroundType = "video"
    heading: "Contact Us",
    subtitle: "We’re here to help with inquiries, partnerships, and support.",

    showPlayButton: false, // true if you want play 
    playButtonText: "Play the Video",
    youtubeUrl: "https://www.youtube.com/watch?v=mDM8vjk_adY",
    loop: { enabled: true, start: 68, end: 100 }, // only for background video
  },

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Contact Us" },
  ],
  breadcrumbsProps: {
    className: "bg-[#F9F8F3]",
    containerClassName: "py-4",
  },

  locations: {
    headOffice: {
      title: "MEPCO Head Office",
      addressLines: [
        "Prince Mohammed Bin Abdulaziz St, Al Andalus, Nojoud Center, 1st floor, entrance (A) Unit No (45) Jeddah – Saudi Arabia",
        "P.O Box 9249, Jeddah 23326 Saudi Arabia.",
      ],
      phone: "+966 12 2569600",
      email: "sales@mep.co",
      geoUrl:
        "https://www.google.com/maps/place/MEPCO+Head+Office/@21.5531233,39.163759,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x5663080c36d27fad!8m2!3d21.5531233!4d39.1659477?hl=en&shorturl=1",
      geoButtonLabel: "Open Head Office Location in Maps",
      mapEmbedSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.8399417194773!2d39.16343167600818!3d21.553112969561255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d1652636179b%3A0x5663080c36d27fad!2sMEPCO%20Head%20Office!5e0!3m2!1sen!2ssa!4v1754827117556!5m2!1sen!2ssa",
 
    },

    plant: {
      title: "MEPCO Plant",
      addressLines: [
        "As Surooriyah district, Al-Khumrah, Jeddah – Saudi Arabia",
        "P.O Box 32913 Jeddah 21438, Saudi Arabia",
      ],
      phone: "+966 12 638 0111",
      email: "sales@mep.co",
      geoUrl:
        "https://www.google.com.sa/maps/place/MEPCO+-+%D9%85%D8%A8%D9%83%D9%88%E2%80%AD/@21.3773798,39.2183059,17z/data=!4m5!3m4!1s0x0:0xa50d1f9e7f4b80ca!8m2!3d21.3779701!4d39.2214377?hl=en&shorturl=1",
      geoButtonLabel: "Open Plant Location in Maps",
    },
  },

  seo: {
    siteUrl: SITE_URL,

    // ✅ page URLs
    canonicalPath: "/contact-us",
    alternateArPath: "/ar/contact-us",

    title: "Contact MEPCO",
    description:
      "Reach out to Middle East Paper Company (MEPCO) for inquiries, partnerships, and support.",
    keywords: [
      "MEPCO",
      "Middle East Paper Company",
      "Contact MEPCO",
      "Jeddah",
      "Saudi Arabia",
      "Paper Recycling",
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
};
