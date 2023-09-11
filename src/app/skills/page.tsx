import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import React from "react";
import { FadeIn } from "@/components/fadeIn";
import { Heading } from "@/components/heading";
import { SkillSet } from "@/components/skills";

export default async function Page() {
  return (
    <FadeIn>
      <Heading>Skills</Heading>
      <div className="mt-12 flex flex-col gap-y-12">
        <div className="leading-7 text-gray-600 dark:text-gray-200">
          <p>
            フロントエンドのスキルを中心に、以下のスキルを習得、学習しています。以下のスキル以外にも、様々なスキルを習得しています。
          </p>
          <p>
            その他のライブラリや、コードの詳細は
            <a
              className="inline-flex items-center gap-2 px-2 text-teal-600 decoration-teal-500 hover:underline dark:text-teal-400 dark:decoration-teal-400"
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
        <SkillSet
          className="-mx-6 grid grid-cols-3 gap-6 md:grid-cols-4 md:gap-10"
          classNames={{ skill: "h-14 w-14 lg:h-20 lg:w-20" }}
        />
      </div>
    </FadeIn>
  );
}
