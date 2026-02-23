import localFont from "next/font/local";

export const nexa = localFont({
  src: [
    // Normal
    { path: "../public/fonts/nexa/Nexa-Thin.woff2", weight: "100", style: "normal" },
    { path: "../public/fonts/nexa/Nexa-Light.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/nexa/Nexa-Book.woff2", weight: "350", style: "normal" },
    { path: "../public/fonts/nexa/Nexa-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/nexa/Nexa-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/nexa/Nexa-XBold.woff2", weight: "800", style: "normal" },
    { path: "../public/fonts/nexa/Nexa-Black.woff2", weight: "900", style: "normal" },
    { path: "../public/fonts/nexa/Nexa-Heavy.woff2", weight: "950", style: "normal" },

    // Italic (real italic files)
    { path: "../public/fonts/nexa/Nexa-ThinItalic.woff2", weight: "100", style: "italic" },
    { path: "../public/fonts/nexa/Nexa-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "../public/fonts/nexa/Nexa-BookItalic.woff2", weight: "350", style: "italic" },
    { path: "../public/fonts/nexa/Nexa-Italic.woff2", weight: "400", style: "italic" }, // your file is Nexa-Italic.woff2
    { path: "../public/fonts/nexa/Nexa-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "../public/fonts/nexa/Nexa-XBoldItalic.woff2", weight: "800", style: "italic" },
    { path: "../public/fonts/nexa/Nexa-BlackItalic.woff2", weight: "900", style: "italic" },
    { path: "../public/fonts/nexa/Nexa-HeavyItalic.woff2", weight: "950", style: "italic" },
  ],
  variable: "--font-nexa",
  display: "swap",
});
