import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import React from "react";
import { FadeIn } from "@/components/fadeIn";
import { Heading } from "@/components/heading";
import { SkillSet } from "@/components/skills";
import { StarDescribe } from "@/components/stars";

export const metadata: Metadata = {
  title: "Skills",
  description: "フロントエンドのスキルを中心に学習をしています。",
};

// export const fetchCache = "only-cache";
export default async function Page() {
  return (
    <FadeIn>
      <Heading>Skills</Heading>
      <div className="mt-12 flex flex-col gap-y-12">
        <div className="leading-7 text-muted-foreground">
          <StarDescribe className="mb-4" />
          <p>
            他のスキルは
            <a
              className="inline-flex items-center gap-2 px-2 text-destructive decoration-destructive hover:underline dark:text-destructive dark:decoration-destructive"
              href="https://github.com/shouta0715"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
              <ArrowTopRightOnSquareIcon className="inline-block h-4 w-4 text-destructive dark:text-destructive" />
            </a>
            をご確認ください。
          </p>
        </div>
        <SkillSet
          className="-mx-6 grid grid-cols-3 gap-6 md:grid-cols-4 md:gap-10"
          classNames={{ skill: "h-16 w-16 lg:h-20 lg:w-20" }}
        />
      </div>
    </FadeIn>
  );
}
