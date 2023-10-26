/* eslint-disable camelcase */
import { FadeIn } from "@/components/fadeIn";
import { NotionIcon } from "@/components/icons/NotionIcon";
import { NotionPage, getNotionArticles } from "@/libs/notion";

function parseTime(time: string) {
  return new Date(time).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function Loading() {
  return (
    <div
      aria-busy
      aria-label="Loading..."
      className="flex h-full  gap-x-6 rounded-xl px-6 py-3 ring-1 ring-gray-200 dark:bg-gray-800 md:shadow-sm"
    >
      <div className="grid h-16 w-16 animate-pulse place-items-center rounded-xl">
        <div className="h-12 w-12 rounded-md dark:bg-gray-700" />
      </div>
      <div className="flex flex-1 flex-col pt-1">
        <div className="flex w-full flex-1 flex-col justify-between gap-2">
          <div className="h-4 w-full animate-pulse rounded-md dark:bg-gray-700" />
          <div className="h-3 w-32 animate-pulse rounded-md dark:bg-gray-700" />
        </div>
      </div>
    </div>
  );
}

export function NotionLoadings() {
  return (
    <FadeIn className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
      {Array.from({ length: 6 }).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={`loading-${index}`}>
          <Loading />
        </div>
      ))}
    </FadeIn>
  );
}

async function Article({ properties, icon, last_edited_time }: NotionPage) {
  const name = properties.name.rich_text[0].text.content;
  const url = properties.title.title[0].href;

  return (
    <a
      className="flex h-full gap-x-6 rounded-xl px-6 py-3 ring-1 ring-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-800/10 md:shadow-sm"
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="grid h-16 w-16 place-items-center rounded-xl">
        <span className="text-5xl">{icon.emoji}</span>
      </div>
      <div className="line-clamp-3 flex flex-col pt-1">
        <div className="flex flex-1 flex-col justify-between gap-2">
          <p className="text-lg font-bold text-gray-900 dark:text-gray-200">
            {name}
          </p>
          <time
            className="flex items-start gap-2 text-sm font-light text-gray-600 dark:text-gray-200"
            dateTime={last_edited_time}
          >
            <NotionIcon height={16} width={16} />
            <span className="-mt-0.5">{parseTime(last_edited_time)}</span>
          </time>
        </div>
      </div>
    </a>
  );
}

export async function NotionArticles() {
  const { results } = await getNotionArticles();

  return (
    <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
      {results?.map((article) => (
        <div key={article.id}>
          <Article {...article} />
        </div>
      ))}
    </div>
  );
}
