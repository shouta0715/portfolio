import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Error from "@/app/error";
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
    title:
      "個人開発でアプリを作成し、メディア芸術データベース活用コンテストでコンテストで最優秀賞を受賞しました。",
    link: {
      name: "作成したWebアプリ",
      url: "https://nerd-plus.com/",
    },
  },
  {
    id: "career-5",
    date: "2023年 10月",
    title:
      "TypeScriptの他にGo言語やSQLなど、など、バックエンド技術に関しても学習をし、Web APIの作成などを行えるようになりました。",
  },
  {
    id: "career-6",
    date: "2023年 11月",
    title:
      "業務委託として、Next.jsを用いたWebアプリケーション開発に携わりました。",
  },
  {
    id: "career-7",
    date: "現在",
    title:
      "個人開発でWebアプリの作成を行ったり、研究室での活動の一環として様々なWebアプリ開発を行いながら、更に技術を向上させるため、勉強や実務経験を積んでいます。",
  },
];

function Career() {
  return (
    <FadeInWithStagger className="grid flex-1 gap-y-8">
      <h2 className="text-lg font-bold text-primary md:text-xl">経歴</h2>
      {Careers.map((career) => (
        <FadeIn key={career.id}>
          <time className="relative order-first mb-3 flex items-center pl-3.5 text-xs leading-7 text-muted-foreground">
            {career.date}
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-0 flex items-center"
            >
              <span className="h-4 w-0.5 rounded-full bg-muted-foreground" />
            </span>
          </time>
          <p className="pl-3.5 leading-7">{career.title}</p>
          {career.link && (
            <a
              className="mt-3 inline-flex items-center gap-x-2 pl-3.5 text-sm text-destructive hover:underline"
              href={career.link.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-destructive">{career.link.name}</span>
              <ArrowTopRightOnSquareIcon className="inline-block h-4 w-4 text-destructive" />
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
        <Heading>About me</Heading>
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
          <p className="mt-8 text-sm leading-7 text-muted-foreground">
            Web開発に興味があります。フロントエンドが得意ですが、バックエンドも勉強中です。
            フロントエンドに関しては、ReactとNext.jsを中心に学習しています。
            また、Tailwind CSSを使用した開発も得意です。
            実務経験を積むため、インターンや、アルバイト、フリーランスなどのお仕事を探しています。
          </p>
        </div>
        <FadeIn className="mt-8 flex flex-col gap-8 md:flex-row">
          <div className="flex-1">
            <Career />
          </div>
          <div className="flex-1">
            <div className="top-8 flex flex-col gap-y-8 md:sticky">
              <div>
                <ContactCard />
              </div>
              <div>
                <SkillsCard />
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn className="mt-12 leading-7 text-muted-foreground">
          <h2 className="text-lg font-bold  text-primary md:text-xl">
            GitHub Contribution
          </h2>
          <div className="mt-8">
            <ErrorBoundary
              fallback={
                <Error message="Failed to fetch GitHub contribution data" />
              }
            >
              <Suspense
                fallback={<div>Loading GitHub contribution data...</div>}
              >
                <Contribution animation={false} />
              </Suspense>
            </ErrorBoundary>
          </div>
        </FadeIn>
        <FadeIn className="mt-12 leading-7 text-muted-foreground">
          <h2 className="text-lg font-bold  text-primary md:text-xl">趣味</h2>
          <div className="mt-8">
            <p className="text-sm">
              趣味は、プログラミングです。休日や暇な時間は
              Webアプリを作成したり、勉強したりしています。楽しいです。
            </p>
          </div>
        </FadeIn>
      </FadeIn>
    </div>
  );
}
