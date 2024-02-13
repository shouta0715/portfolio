import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Error from "@/app/error";
import { Border } from "@/components/border";
import { FadeIn } from "@/components/fadeIn";
import { Heading } from "@/components/heading";
import { Logo } from "@/components/logo";
import { MoreLink } from "@/components/moreLink";
import { NotionArticles, NotionLoadings } from "@/components/notion";
import { PracticalWorks } from "@/components/practical-work";
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
        <Heading>Introduction</Heading>
        <div className="mt-12 text-primary">
          <p className="flex items-center text-xl font-semibold sm:text-2xl">
            <Logo
              alt="くらはししょうたのアバター"
              className="mr-4 inline-block size-16 rounded-full border border-border object-cover"
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
            TypeScript, React,
            Next.jsを中心に開発を行うことができます。テストの作成、CI/CDの設定、デプロイの自動化なども行うことができます。
            <br />
            バックエンドに関しては、Go,Node.jsを中心に開発を行うことができます。
            その他にもSQLなども扱うことができます。
          </p>
          <MoreLink href="/about">私についてもっと詳しく</MoreLink>
        </div>
      </FadeIn>

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
            <ZennArticles />
          </ErrorBoundary>

          <ErrorBoundary
            fallback={<Error message="Notionの記事を取得できませんでした。" />}
          >
            <Suspense fallback={<NotionLoadings />}>
              <NotionArticles limit={4} />
            </Suspense>
          </ErrorBoundary>
        </div>
        <MoreLink href="/articles" />
      </FadeIn>
    </div>
  );
}
