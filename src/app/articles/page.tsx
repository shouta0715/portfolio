import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Error from "@/app/error";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fadeIn";
import { Heading } from "@/components/heading";
import { NotionArticles, NotionLoadings } from "@/components/notion";
import { ZennArticles } from "@/components/zenn";
import { basicMetadata } from "@/libs/meta";

export const metadata: Metadata = {
  ...basicMetadata,
  title: "Articles",
  description: "倉橋 渉太ののZennなどに投稿した記事を紹介します。",
};

export default async function Page() {
  return (
    <Container>
      <FadeIn>
        <Heading>Articles</Heading>
        <p className="mt-8 text-sm leading-7 text-muted-foreground md:text-base md:leading-7">
          投稿した記事やプログラミング学習のメモをまとめています。
        </p>
        <div className="mt-12">
          <Heading as="h2" className="flex items-center gap-x-6">
            Zenn
            <span className="mt-1.5 text-sm font-normal">
              記事一覧は
              <a
                className="inline-flex items-center gap-2 px-2 text-destructive decoration-destructive hover:underline dark:text-destructive dark:decoration-destructive"
                href="https://zenn.dev/shouta0715"
                rel="noopener noreferrer"
                target="_blank"
              >
                こちら
                <ArrowTopRightOnSquareIcon className="inline-block h-4 w-4 text-destructive dark:text-destructive" />
              </a>
            </span>
          </Heading>
          <ErrorBoundary fallback={<Error />}>
            <ZennArticles />
          </ErrorBoundary>
        </div>
        <div className="mt-12">
          <Heading as="h2">Notion</Heading>
          <ErrorBoundary
            fallback={<Error message="Notionの記事を取得できませんでした。" />}
          >
            <Suspense fallback={<NotionLoadings />}>
              <NotionArticles />
            </Suspense>
          </ErrorBoundary>
        </div>
      </FadeIn>
    </Container>
  );
}
