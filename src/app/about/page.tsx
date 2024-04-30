import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Error from "@/app/error";
import { Border } from "@/components/border";
import { ContactCard } from "@/components/cards/contactCard";
import { SkillsCard } from "@/components/cards/skilslCard";
import { Contribution } from "@/components/contribution";
import { FadeIn } from "@/components/fadeIn";
import { Heading } from "@/components/heading";
import { Logo } from "@/components/logo";
import { MoreLink } from "@/components/moreLink";
import { PracticalWorks } from "@/components/practical-work";
import { SkillTile } from "@/components/skill-tile";
import { Works } from "@/components/works";
import { getWorks } from "@/libs/client";

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
      "TypeScriptの他にGo言語やSQLなど、バックエンド技術に関しても学習をし、Web APIの作成などを行えるようになりました。",
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
    <div className="grid flex-1 gap-y-8">
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
    </div>
  );
}

export default async function Page() {
  const { contents } = await getWorks({
    limit: 4,
  });

  return (
    <div>
      <div>
        <FadeIn className="overflow-hidden py-6">
          <div className="relative gap-x-14 md:flex md:items-center">
            <div className="w-full max-w-2xl shrink-0 rounded-xl md:max-w-md lg:max-w-lg dark:bg-gray-900/85">
              <Heading>About</Heading>
              <div className="mt-12 text-primary">
                <p className="flex items-center text-xl font-semibold sm:text-2xl">
                  <Logo
                    alt="くらはししょうたのアバター"
                    className="mr-4 inline-block size-16 rounded-full border border-border bg-background object-cover"
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
                <p className="mt-8 text-sm leading-7 text-muted-foreground md:text-base md:leading-7">
                  Web開発に興味があります。
                  <br />
                  TypeScript、React、 Next.jsを中心に開発を行うことができます。
                  Storybookを使用したコンポーネント開発、アクセシビリティテストの自動化なども構築できます。
                  <br />
                  CI・CDを使用した自動デプロイ、テスト自動化も行うことができます。
                  <br />
                  Go、Node.jsを使用したバックエンド開発も行うことができます。
                  <br />
                  その他にも、インフラ含めたWeb系を中心に幅広い技術を学び、開発を行っています。
                </p>
                <MoreLink href="/works">作品を見る</MoreLink>
              </div>
            </div>

            <SkillTile />
          </div>
        </FadeIn>
        <FadeIn className="mt-12 flex flex-col gap-8 md:flex-row">
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
        <Border className="my-16" />
        <FadeIn>
          <div>
            <Heading as="h2" className="mt-8">
              Business Works
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

          <MoreLink href="/works" />
        </FadeIn>
        <Border className="my-8" />
        <FadeIn className="leading-7 text-muted-foreground">
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
            <p className="mt-8 text-sm leading-7 text-muted-foreground md:text-base md:leading-7">
              趣味は、プログラミングです。休日や暇な時間は
              Webアプリを作成したり、勉強したりしています。楽しいです。
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
