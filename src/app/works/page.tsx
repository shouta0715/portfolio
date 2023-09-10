import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import React from "react";
import { FadeIn } from "@/components/fadeIn";
import { Heading } from "@/components/heading";
import { Works } from "@/components/works";
import { getWorks } from "@/libs/client";

export const metadata: Metadata = {
  title: "works",
};

export default async function Page() {
  const { contents } = await getWorks({
    fields: ["id", "name", "link", "image", "skills", "github_url"],
  });

  return (
    <FadeIn>
      <Heading>Works</Heading>
      <div className="mt-8 leading-7">
        <p>
          これまでに作成した作品を紹介します。主にフロントエンドのスキルを中心に、以下の作品を作成しました。
        </p>
        <p>
          詳細は各作品のページまたは、
          <a
            className="inline-flex items-center gap-x-2 px-2 text-teal-600 decoration-teal-500 hover:underline dark:text-teal-400 dark:decoration-teal-400"
            href="https://github.com/shouta0715"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
            <ArrowTopRightOnSquareIcon className="inline-block h-4 w-4 text-teal-500 dark:text-teal-400" />
          </a>
          にてご確認ください。
        </p>
      </div>
      <div className="mt-12">
        <Works works={contents} />
      </div>
    </FadeIn>
  );
}
