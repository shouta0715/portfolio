import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import React from "react";
import { FadeIn } from "@/components/fadeIn";
import { Heading } from "@/components/heading";
import { ZennArticles } from "@/components/zenn";
import { getZennArticles } from "@/libs/zenn";

export const metadata: Metadata = {
  title: "Articles",
  description: "Zennなどに投稿した記事を紹介します。",
};
export default async function Page() {
  const data = await getZennArticles();

  return (
    <FadeIn>
      <Heading>Articles</Heading>
      <div className="mt-8 leading-7">
        <p>Zennなどに投稿した記事を紹介します。</p>
        <p>
          Zennの記事一覧は
          <a
            className="inline-flex items-center gap-2 px-2 text-teal-600 decoration-teal-500 hover:underline dark:text-teal-400 dark:decoration-teal-400"
            href="https://zenn.dev/shouta0715"
            rel="noopener noreferrer"
            target="_blank"
          >
            こちら
            <ArrowTopRightOnSquareIcon className="inline-block h-4 w-4 text-teal-500 dark:text-teal-400" />
          </a>
          からご確認ください。
        </p>
      </div>
      <div className="mt-12">
        <ZennArticles articles={data.articles} />
      </div>
    </FadeIn>
  );
}
