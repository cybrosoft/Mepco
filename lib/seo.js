export function buildPageMetadata(pageData) {
  const seo = pageData?.seo || {};
  const siteUrl = seo.siteUrl || "https://mep.co";

  const canonical = seo.canonicalPath || "/";
  const ar = seo.alternateArPath || undefined;
  const en = seo.alternateEnPath || canonical;

  return {
    metadataBase: new URL(siteUrl),

    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    robots: seo.robots || { index: true, follow: true },

    alternates: {
      canonical,
      languages: {
        en,
        ...(ar ? { ar } : {}),
        "x-default": en,
      },
    },

    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonical,
      siteName: seo.openGraph?.siteName || "MEPCO",
      type: seo.openGraph?.type || "website",
      locale: seo.openGraph?.locale || "en_US",
      alternateLocale: seo.openGraph?.alternateLocale || ["ar_SA"],
      images: seo.openGraph?.imagePath
        ? [
            {
              url: seo.openGraph.imagePath,
              width: 1200,
              height: 630,
              alt: seo.openGraph?.imageAlt || seo.title || "MEPCO",
            },
          ]
        : [],
    },

    twitter: {
      card: seo.twitter?.card || "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: seo.twitter?.imagePath ? [seo.twitter.imagePath] : [],
    },
  };
}
