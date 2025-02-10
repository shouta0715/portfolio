import { Metadata } from "next";

export const basicMetadata: Metadata = {
  metadataBase: new URL("https://www.kurahashi.me/"),
  generator: "Kurahashi Shouta",
  applicationName: "Kurahashi Shoutaのポートフォリオ",
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
    "倉橋",
    "渉太",
    "Shouta Kurahashi",
    "Shouta",
    "Kurahashi",
  ],
  title: {
    default: "Kurahashi Shoutaのポートフォリオ",
    template: "%s - Kurahashi Shoutaのポートフォリオ",
  },

  description: "Kurahashi Shoutaのポートフォリオです。",
  openGraph: {
    title: "Kurahashi Shoutaのポートフォリオ",
    description: "Kurahashi Shoutaのポートフォリオです。",
    siteName: "Kurahashi Shoutaのポートフォリオ",
    url: "https://www.kurahashi.me/",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kurahashi Shoutaのポートフォリオ",
    description: "Kurahashi Shoutaのポートフォリオです。",
    creator: "@shoutapu0715",
  },
};
