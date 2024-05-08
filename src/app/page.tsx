import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Error from "@/app/error";
import { Border } from "@/components/border";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fadeIn";
import { Heading } from "@/components/heading";
import { Logo } from "@/components/logo";
import { MoreLink } from "@/components/moreLink";
import { NotionArticles, NotionLoadings } from "@/components/notion";
import { PracticalWorks } from "@/components/practical-work";
import { SkillTile } from "@/components/skill-tile";
import { Works } from "@/components/works";
import { ZennArticles } from "@/components/zenn";
import { getWorks } from "@/libs/client";

export default async function Home() {
  const { contents } = await getWorks({
    limit: 4,
  });

  return (
    <div>
      <FadeIn>
        <Container className="relative gap-x-14 overflow-hidden md:flex md:items-center">
          <div className="mx-0 w-full max-w-2xl shrink-0 rounded-xl md:max-w-md lg:max-w-lg  ">
            <Heading>Introduction</Heading>
            <div className="mt-12 text-primary">
              <div className="flex items-center text-lg font-semibold sm:text-xl">
                <Logo
                  alt="くらはししょうたのアバター"
                  className="mr-4 inline-block size-16 rounded-full border border-border bg-background object-cover"
                  height={64}
                  width={64}
                />
                <div>
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
                  <p className="text-xs mt-1 text-muted-foreground font-normal">
                    フロントエンドエンジニア
                  </p>
                </div>
              </div>
              <p className="mt-8 text-sm leading-8 text-muted-foreground md:text-base md:leading-8">
                綺麗なUI・UX・アクセシビリティが好きなフロントエンドエンジニアです。
                <br />
                TypeScript、React、 Next.jsを中心に開発を行うことができます。
                フロントエンドの技術が得意です。
                <br />
                サーバーサイド・インフラなどWeb全般の技術にも興味があります。
              </p>
              <MoreLink href="/about">私についてもっと詳しく</MoreLink>
            </div>
          </div>

          <div className="p-6 md:p-0">
            <SkillTile />
          </div>
        </Container>
      </FadeIn>

      <Container>
        <FadeIn className="mt-8">
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
        <Border className="my-16" />
        <FadeIn>
          <Heading>Articles</Heading>
          <div className="grid gap-8">
            <ErrorBoundary fallback={<Error />}>
              <ZennArticles short />
            </ErrorBoundary>

            <ErrorBoundary
              fallback={
                <Error message="Notionの記事を取得できませんでした。" />
              }
            >
              <Suspense fallback={<NotionLoadings />}>
                <NotionArticles limit={4} />
              </Suspense>
            </ErrorBoundary>
          </div>
          <MoreLink href="/articles" />
        </FadeIn>
      </Container>
    </div>
  );
}
