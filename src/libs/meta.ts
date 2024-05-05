import { Metadata } from "next";

export const basicMetadata: Metadata = {
  metadataBase: new URL("https://www.kurahashi.me/"),
  generator: "倉橋 渉太",
  applicationName: "Shouta's Portfolio",
  referrer: "no-referrer",
  authors: [
    {
      name: "倉橋 渉太",
      url: "https://www.kurahashi.me/",
    },
  ],
  creator: "倉橋 渉太",
  publisher: "倉橋 渉太",
  keywords: [
    "倉橋 渉太",
    "Shouta Kurahashi",
    "Shouta",
    "Kurahashi",
    "Portfolio",
    "ポートフォリオ",
  ],
  title: {
    default: "Shouta's Portfolio",
    template: "%s - Shouta's Portfolio",
  },

  description: "倉橋 渉太のポートフォリオです。",
  openGraph: {
    title: "Shouta's Portfolio",
    description: "倉橋 渉太のポートフォリオです。",
    siteName: "Shouta's Portfolio",
    url: "https://www.kurahashi.me/",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Shouta's Portfolio",
    description: "倉橋 渉太のポートフォリオです。",
    creator: "@shoutapu0715",
  },
};
