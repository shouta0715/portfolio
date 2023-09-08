import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { FadeIn, FadeInWithStagger } from "@/components/fadeIn";

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
    title: "Webアプリを作成し、公開する",
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

export function Career() {
  return (
    <FadeInWithStagger className="grid flex-1 gap-y-8">
      {Careers.map((career) => (
        <FadeIn key={career.id}>
          <time className="relative order-first mb-3 flex items-center pl-3.5 text-sm leading-6 text-gray-400 sm:text-base">
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
              className="mt-3 inline-flex items-center gap-x-2 pl-3.5 text-sm hover:underline hover:decoration-teal-500 dark:hover:decoration-teal-400"
              href={career.link.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-teal-500 dark:text-teal-400">
                {career.link.name}
              </span>
              <ArrowTopRightOnSquareIcon className="inline-block h-4 w-4 text-teal-500 dark:text-teal-400" />
            </a>
          )}
        </FadeIn>
      ))}
    </FadeInWithStagger>
  );
}
