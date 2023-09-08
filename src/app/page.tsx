import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { Border } from "@/components/border";
import { ContactCard } from "@/components/cards/contactCard";
import { SkillsCard } from "@/components/cards/skilslCard";
import { FadeIn } from "@/components/fadeIn";
import { Heading } from "@/components/heading";
import { Logo } from "@/components/logo";

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
          <p className="mt-8 text-sm leading-7 text-gray-600 dark:text-gray-200 md:text-base">
            Web開発に興味があります。フロントエンドが得意ですが、バックエンドも勉強中です。
            フロントエンドに関しては、ReactとNext.jsを中心に学習しています。
            また、Tailwind CSSを使用した開発も得意です。
            実務経験を積むため、インターンや、アルバイト、フリーランスなどのお仕事を探しています。
          </p>
          <div className="mt-8 flex flex-col justify-between gap-16 md:flex-row">
            <ContactCard />
            <SkillsCard />
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
