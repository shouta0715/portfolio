import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Error from "@/app/error";
import Loading from "@/app/loading";
import { ContactCard } from "@/components/cards/contactCard";
import { SkillsCard } from "@/components/cards/skilslCard";
import { Contribution } from "@/components/contribution";
import { FadeIn, FadeInWithStagger } from "@/components/fadeIn";
import { Heading } from "@/components/heading";
import { Logo } from "@/components/logo";

export const metadata: Metadata = {
  title: "About",
  description: "倉橋渉太の自己紹介です。",
};

const Careers = [
  {
    id: "career-1",
    date: "2021年 4月",
    title: "愛知工業大学 情報科学部 情報科学科 入学",
  },
  {
    id: "career-2",
    date: "2021年 12月",
    title: "プログラミングの勉強を始める",
  },
  {
    id: "career-3",
    date: "2022年 1月",
    title: "Web開発に興味を持ち、ReactやNext.jsを学び始める",
  },
  {
    id: "career-4",
    date: "2023年 6月",
    title: "個人開発でアプリを作成",
    link: {
      name: "作成したWebアプリ",
      url: "https://nerd-plus.com/",
    },
  },
  {
    id: "career-5",
    date: "現在",
    title: "Web開発を学習、実践中",
  },
];

function Career() {
  return (
    <FadeInWithStagger className="grid flex-1 gap-y-8">
      <h2 className="text-lg font-bold text-gray-900 dark:text-gray-200 md:text-xl">
        経歴
      </h2>
      {Careers.map((career) => (
        <FadeIn key={career.id}>
          <time className="relative order-first mb-3 flex items-center pl-3.5 text-sm leading-7 text-gray-400 sm:text-base">
            {career.date}
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-0 flex items-center"
            >
              <span className="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500" />
            </span>
          </time>
          <p className="pl-3.5 font-medium">{career.title}</p>
          {career.link && (
            <a
              className="mt-3 inline-flex items-center gap-x-2 pl-3.5 text-sm hover:underline hover:decoration-teal-600 dark:hover:decoration-teal-400"
              href={career.link.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-teal-600 dark:text-teal-400">
                {career.link.name}
              </span>
              <ArrowTopRightOnSquareIcon className="inline-block h-4 w-4 text-teal-600 dark:text-teal-400" />
            </a>
          )}
        </FadeIn>
      ))}
    </FadeInWithStagger>
  );
}

export default function Page() {
  return (
    <div>
      <FadeIn>
        <Heading>About Me</Heading>
        <div className="mt-12 text-gray-900 dark:text-gray-200">
          <p className="flex items-center text-xl font-semibold sm:text-2xl">
            <Logo
              alt="くらはししょうたのアバター"
              className="mr-2 inline-block rounded-full object-cover"
              height={64}
              width={64}
            />
            <ruby>
              倉 <rp>(</rp>
              <rt>くら</rt>
              <rp>)</rp> 橋 <rp>(</rp>
              <rt>はし</rt>
            </ruby>
            <ruby className="ml-2">
              <rp>)</rp>渉 <rp>(</rp>
              <rt>しょう</rt>
              <rp>)</rp> 太 <rp>(</rp>
              <rt>た</rt>
              <rp>)</rp>
            </ruby>
          </p>
          <p className="mt-8 text-sm leading-7 text-gray-600 dark:text-gray-200 md:text-base">
            Web開発に興味があります。フロントエンドが得意ですが、バックエンドも勉強中です。
            フロントエンドに関しては、ReactとNext.jsを中心に学習しています。
            また、Tailwind CSSを使用した開発も得意です。
            実務経験を積むため、インターンや、アルバイト、フリーランスなどのお仕事を探しています。
          </p>
        </div>
        <FadeIn className="mt-8 flex flex-col gap-8 md:flex-row">
          <Career />
          <div className="flex flex-1 flex-col justify-between gap-y-8">
            <ContactCard />
            <SkillsCard />
          </div>
        </FadeIn>
        <FadeIn className="mt-12 leading-7 text-gray-600 dark:text-gray-200">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-200 md:text-xl">
            GitHub Contribution
          </h2>
          <div className="mt-8">
            <ErrorBoundary
              fallback={
                <Error message="Failed to fetch GitHub contribution data" />
              }
            >
              <Suspense fallback={<Loading />}>
                <Contribution animation={false} />
              </Suspense>
            </ErrorBoundary>
          </div>
        </FadeIn>
        <FadeIn className="mt-12 leading-7 text-gray-600 dark:text-gray-200">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-200 md:text-xl">
            趣味
          </h2>
          <div className="mt-8">
            <p className="text-sm md:text-base">
              趣味は、プログラミングです。休日や暇な時間は
              Webアプリを作成したり、勉強したりしています。楽しいです。
              <br />
              また、ゲームも好きです。特に、スマブラに関してはスマメイトで1800に到達したことがあります。ぜひいろんな方と対戦したいので、スマブラが好きな方はぜひ声をかけてください。
            </p>
          </div>
        </FadeIn>
      </FadeIn>
    </div>
  );
}
