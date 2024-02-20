import { HeartIcon } from "@heroicons/react/24/solid";
import React, { Suspense } from "react";
import { FadeIn, FadeInWithStagger } from "@/components/fadeIn";
import { Logo, ZennLogo } from "@/components/logo";
import {
  Article as TArticle,
  getZennArticle,
  getZennArticles,
  zennurl,
} from "@/libs/zenn";

function ArticleLink({ path, title }: { path: string; title: string }) {
  return (
    <a
      className="absolute inset-0 z-0 -m-4 opacity-0 transition group-hover:bg-white/20 group-hover:opacity-100 sm:rounded-2xl dark:group-hover:bg-gray-900/10"
      href={`${zennurl}/${path}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span className="sr-only">{title}の記事を見る</span>
    </a>
  );
}

function ArticleInner({ title }: { title: string }) {
  return (
    <div className="flex h-48 flex-col justify-between rounded-lg bg-white p-4 shadow-lg md:rounded-xl">
      <p className="text-lg font-bold text-gray-900">{title}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo
            alt="しょうたのアバター"
            className="h-8 w-8 rounded-full object-cover"
            height={32}
            width={32}
          />
          <p className="text-xs font-medium text-gray-900">shouta</p>
        </div>
        <div>
          <ZennLogo
            alt="Zennのロゴ"
            className="object-cover"
            height={16}
            width={64}
          />
        </div>
      </div>
    </div>
  );
}

async function ArticleLike({ slug }: { slug: string }) {
  const article = await getZennArticle(slug);

  return (
    <>
      <HeartIcon className="size-4 fill-pink-500" />
      {article.liked_count}
    </>
  );
}

function ArticleFooter({ title, slug }: { title: string; slug: string }) {
  return (
    <div className="-mx-4 mt-4 h-full flex-1 border-t bg-background p-2">
      <div>
        <p className="flex items-center text-sm font-light  text-muted-foreground">
          zenn.dev
          <span className="ml-2 flex items-center gap-1">
            <Suspense fallback={null}>
              <ArticleLike slug={slug} />
            </Suspense>
          </span>
        </p>
        <p className="font-light">{title}</p>
      </div>
    </div>
  );
}

function Article({ article }: { article: TArticle }) {
  return (
    <div className="relative flex flex-col">
      <ArticleLink path={article.path} title={article.title} />
      <div className="flex-1">
        <ArticleInner title={article.title} />
      </div>
      <div className="flex-1">
        <ArticleFooter slug={article.slug} title={article.title} />
      </div>
    </div>
  );
}

export async function ZennArticles() {
  const { articles } = await getZennArticles();

  return (
    <FadeInWithStagger className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {articles.map((article) => (
        <FadeIn
          key={article.id}
          className="group grid overflow-hidden rounded-xl border bg-gradient-to-br from-[#6ccaff] to-[#b398ff] p-4 pb-0 md:rounded-2xl md:shadow-sm dark:border-gray-900"
        >
          <Article article={article} />
        </FadeIn>
      ))}
    </FadeInWithStagger>
  );
}
