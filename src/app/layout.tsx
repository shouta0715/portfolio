import "@/style/tailwind.css";
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
      <body className={clsx(inter.className, "dark:bg-gray-900")}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
