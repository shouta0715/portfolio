import React from "react";
import { FadeIn, FadeInWithStagger } from "@/components/fadeIn";
import { Logo, ZennLogo } from "@/components/logo";
import { Article as TArticle, zennurl } from "@/libs/zenn";

function ArticleLink({ path, title }: { path: string; title: string }) {
  return (
    <a
      className="absolute inset-0 z-0 -m-4 opacity-0 transition group-hover:bg-white/20 group-hover:opacity-100 dark:group-hover:bg-gray-900/10 sm:rounded-2xl"
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

function ArticleFooter({ title }: { title: string }) {
  return (
    <div className="-m-4 border-t bg-white p-2 dark:bg-gray-900">
      <div>
        <p className="text-sm font-light  text-gray-600 dark:text-gray-400">
          zenn.dev
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
      <div>
        <ArticleInner title={article.title} />
      </div>
      <div className="mt-8">
        <ArticleFooter title={article.title} />
      </div>
    </div>
  );
}

export function ZennArticles({ articles }: { articles: TArticle[] }) {
  return (
    <FadeInWithStagger className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
      {articles.map((article) => (
        <FadeIn
          key={article.id}
          className="group overflow-hidden rounded-xl border bg-gradient-to-br from-[#6ccaff] to-[#b398ff] p-4 dark:border-gray-900 md:rounded-2xl md:shadow-sm"
        >
          <Article article={article} />
        </FadeIn>
      ))}
    </FadeInWithStagger>
  );
}
