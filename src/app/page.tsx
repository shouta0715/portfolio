import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Border } from "@/components/border";
import { FadeIn, FadeInWithStagger } from "@/components/fadeIn";
import { Heading } from "@/components/heading";
import { Logo } from "@/components/logo";
import { SelectedSkill } from "@/components/skills";
import { SocialLinks } from "@/components/socialLinks";

function Contact() {
  return (
    <FadeInWithStagger className=" flex-1  rounded-xl border bg-white/20 p-3 md:rounded-2xl md:p-6 md:shadow-lg">
      <FadeIn className="flex flex-col gap-y-6">
        <div>
          <p className="mb-3 text-lg font-semibold text-gray-600 dark:text-gray-200">
            Social Links
          </p>
          <SocialLinks
            classNames={{
              wrapper: "gap-8",
            }}
          />
        </div>
        <div>
          <p className="mb-3 font-semibold text-gray-600 dark:text-gray-200">
            Email
          </p>
          <span className="flex items-center gap-x-2 text-sm text-gray-600 dark:text-gray-200">
            <EnvelopeIcon className="h-6 w-6 " />
            kshouta0715@gmail.com
          </span>
        </div>
      </FadeIn>
    </FadeInWithStagger>
  );
}

function Skills() {
  return (
    <FadeInWithStagger>
      <FadeIn className="flex flex-1 flex-col gap-y-6 rounded-xl border bg-white/20 p-3 md:rounded-2xl md:p-6 md:shadow-lg">
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
          className=" grid grid-cols-4 gap-2 lg:gap-4 "
          classNames={{ skill: "h-14 w-14 lg:h-20 lg:w-20" }}
          skills={["Next.js", "React", "Tailwind CSS", "TypeScript"]}
        />
      </FadeIn>
    </FadeInWithStagger>
  );
}

export default function Home() {
  return (
    <FadeIn>
      <section>
        <Heading>About</Heading>
        <div className="mt-12 text-gray-900 dark:text-gray-200">
          <p className="flex items-center text-xl font-semibold sm:text-2xl">
            <Logo
              alt="くらはししょうたのアバター"
              className="mr-2 inline-block rounded-full object-cover"
              height={64}
              width={64}
            />
            くらはし しょうた
          </p>
          <p className="mt-8 text-sm leading-7 text-gray-600 md:text-base">
            Web開発に興味があります。フロントエンドが得意ですが、バックエンドも勉強中です。
            フロントエンドに関しては、ReactとNext.jsを中心に学習しています。
            また、Tailwind CSSを使用した開発も得意です。
            実務経験を積むため、インターンや、アルバイト、フリーランスなどのお仕事を探しています。
          </p>
          <div className="mt-8 flex flex-col justify-between gap-16 md:flex-row">
            <Contact />
            <Skills />
          </div>
        </div>
        <Link
          className="mt-8 flex items-center justify-end gap-x-2 text-indigo-600 hover:underline hover:decoration-indigo-600 dark:text-indigo-400 dark:hover:decoration-indigo-400"
          href="/about"
        >
          もっと詳しく
          <ChevronRightIcon className="inline-block h-4 w-4" />
        </Link>
      </section>
      <Border className="my-8" />
      <section>
        <Heading>Works</Heading>
      </section>
    </FadeIn>
  );
}
