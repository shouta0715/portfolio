import "@/style/tailwind.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { BaseLayout } from "@/layouts/base";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Shouta's Portfolio",
    template: "%s - Shouta's Portfolio",
  },

  description: "Shouta's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={clsx(
          inter.className,
          "flex h-full flex-col dark:bg-gray-900"
        )}
      >
        <GoogleAnalytics gaId={process.env.GA_ID as string} />
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
