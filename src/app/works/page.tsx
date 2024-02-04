import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import React from "react";
import { FadeIn } from "@/components/fadeIn";
import { Heading } from "@/components/heading";
import { PracticalWorks } from "@/components/practical-work";
import { Works } from "@/components/works";
import { getWorks } from "@/libs/client";

export const metadata: Metadata = {
  title: "Works",
  description: "これまでに作成した作品を紹介します。",
};

export default async function Page() {
  const { contents } = await getWorks({
    fields: ["id", "name", "link", "image", "skills", "github_url", "tags"],
  });

  return (
    <FadeIn>
      <Heading>Works</Heading>
      <div className="mt-8 text-sm  leading-7 text-muted-foreground md:text-base md:leading-7">
        <p>
          これまでに作成した作品を紹介します。主にフロントエンドのスキルを中心に、以下の作品を作成しました。
        </p>
        <p>
          詳細は各作品のページまたは、
          <a
            className="inline-flex items-center gap-2 px-2 text-destructive decoration-destructive hover:underline dark:text-destructive dark:decoration-destructive"
            href="https://github.com/shouta0715"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
            <ArrowTopRightOnSquareIcon className="inline-block h-4 w-4 text-destructive dark:text-destructive" />
          </a>
          にてご確認ください。
        </p>
      </div>
      <div className="mt-12">
        <div>
          <Heading as="h2" className="mt-8">
            Company Works
          </Heading>
          <PracticalWorks />
        </div>
        <div>
          <Heading as="h2" className="mt-16">
            Personal Works
          </Heading>
          <Works
            classNames={{
              card: "h-max",
            }}
            works={contents}
          />
        </div>
      </div>
    </FadeIn>
  );
}
