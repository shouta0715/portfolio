import { ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  ArrowTopRightOnSquareIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { FadeIn, FadeInWithStagger } from "@/components/fadeIn";
import { Heading } from "@/components/heading";
import { SelectedSkill } from "@/components/skills";
import { SocialLinks } from "@/components/socialLinks";

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

function Contact() {
  return (
    <FadeInWithStagger className="flex flex-col gap-y-6 rounded-xl border bg-white/20 p-3 md:rounded-2xl md:p-6 md:shadow-lg">
      <FadeIn>
        <p className="mb-3 text-lg font-semibold text-gray-600 dark:text-gray-200">
          Social Links
        </p>
        <SocialLinks
          classNames={{
            wrapper: "gap-8",
          }}
        />
      </FadeIn>
      <FadeIn>
        <p className="mb-3 font-semibold text-gray-600 dark:text-gray-200">
          メールアドレス
        </p>
        <span className="flex gap-x-2 text-gray-600 dark:text-gray-200">
          <EnvelopeIcon className="h-6 w-6 " />
          <span>kshouta0715@gmail.com</span>
        </span>
      </FadeIn>
    </FadeInWithStagger>
  );
}

function Skills() {
  return (
    <FadeInWithStagger className="flex flex-col gap-y-6 rounded-xl border bg-white/20 p-3 md:rounded-2xl md:p-6 md:shadow-lg">
      <div>
        <p className="mb-3 flex items-center justify-between text-lg  text-gray-600 dark:text-gray-200">
          <span className="font-semibold">Primary Skills</span>
          <Link
            className="text-xs text-indigo-600 decoration-indigo-600  hover:underline dark:text-indigo-400 dark:decoration-indigo-400"
            href="/skill"
          >
            他のスキルはこちら
            <ChevronRightIcon
              className="inline-block
              h-4 w-4 text-indigo-600 dark:text-indigo-400"
            />
          </Link>
        </p>
        <SelectedSkill
          className="grid grid-cols-4 gap-2 lg:gap-4 "
          classNames={{
            skill: "h-14 w-14 lg:h-20 lg:w-20",
          }}
          skills={["Next.js", "React", "Tailwind CSS", "TypeScript"]}
        />
      </div>
    </FadeInWithStagger>
  );
}

function Career() {
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

export default function Home() {
  return (
    <div className="mt-6 sm:mt-14 md:mt-20">
      <FadeIn>
        <Heading>About</Heading>
        <div className="mt-12 text-gray-900 dark:text-gray-200">
          <p className="text-xl font-medium sm:text-2xl">くらはし しょうた</p>
          <div className="mt-8 flex flex-col gap-8 md:flex-row">
            <Career />
            <div className="flex flex-1 flex-col justify-between gap-y-8 md:gap-y-0">
              <Contact />
              <Skills />
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
