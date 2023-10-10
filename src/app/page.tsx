import { Border } from "@/components/border";
import { ContactCard } from "@/components/cards/contactCard";
import { SkillsCard } from "@/components/cards/skilslCard";
import { Contribution } from "@/components/contribution";
import { FadeIn } from "@/components/fadeIn";
import { Heading } from "@/components/heading";
import { Logo } from "@/components/logo";
import { MoreLink } from "@/components/moreLink";
import { Works } from "@/components/works";
import { ZennArticles } from "@/components/zenn";
import { getWorks } from "@/libs/client";
import { getZennArticles } from "@/libs/zenn";

export default async function Home() {
  const { contents } = await getWorks({
    fields: ["id", "name", "link", "image", "skills", "github_url", "tags"],
  });
  const { articles } = await getZennArticles();

  return (
    <div>
      <FadeIn>
        <Heading>About</Heading>
        <div className="mt-12 text-gray-900 dark:text-gray-200">
          <p className="flex items-center text-xl font-semibold sm:text-2xl">
            <Logo
              alt="くらはししょうたのアバター"
              className="mr-2 inline-block rounded-full object-cover"
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
          <p className="mt-8 text-sm leading-7 text-gray-600 dark:text-gray-200 md:text-base">
            Web開発に興味があります。フロントエンドが得意ですが、バックエンドも勉強中です。
            フロントエンドに関しては、ReactとNext.jsを中心に学習しています。
            また、Tailwind CSSを使用した開発も得意です。
            実務経験を積むため、インターンや、アルバイト、フリーランスなどのお仕事を探しています。
          </p>
          <div className="mt-8 grid gap-y-8">
            <div className="flex flex-col justify-between gap-8 md:flex-row">
              <ContactCard />
              <SkillsCard />
            </div>

            <div className="overflow-hidden">
              <p className="mb-3 text-lg font-semibold">GitHub Contribution</p>
              <Contribution />
            </div>
          </div>
        </div>
        <MoreLink href="/about" />
      </FadeIn>
      <Border className="my-8" />
      <FadeIn>
        <Heading>Works</Heading>
        <Works works={contents} />
        <MoreLink href="/works" />
      </FadeIn>
      <Border className="my-8" />
      <FadeIn>
        <Heading>Articles</Heading>
        <ZennArticles articles={articles} />
        <MoreLink href="/articles" />
      </FadeIn>
    </div>
  );
}
