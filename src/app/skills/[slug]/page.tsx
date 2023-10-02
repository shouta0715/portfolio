import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Border } from "@/components/border";
import { FadeIn } from "@/components/fadeIn";
import { Heading } from "@/components/heading";
import { SkillSet, selectedSkills } from "@/components/skills";
import { Works } from "@/components/works";
import { SkillNames, getSkill, getSkills, getWorks } from "@/libs/client";

export async function generateStaticParams() {
  const { contents } = await getSkills({ fields: "id" });

  const paths = contents.map((skill) => {
    return {
      slug: skill.id,
    };
  });

  return paths;
}

const gitHubLanguages: SkillNames[] = [
  "Astro",
  "Go",
  "CSS",
  "TypeScript",
  "HTML",
  "JavaScript",
];

const createGitHubUrl = (name: SkillNames) => {
  const isGitHubLanguage = gitHubLanguages.includes(name);
  const base = "https://github.com/shouta0715?tab=repositories";

  if (!isGitHubLanguage) return base;

  const query = `language=${name.toLowerCase()}`;

  return `${base}&${query}`;
};

const getData = async (slug: string) => {
  const { contents } = await getWorks({
    fields: ["id", "name", "link", "image", "skills", "github_url", "tags"],
    filters: `skills[contains]${slug}`,
  });

  const skill = await getSkill(slug, {
    fields: ["name", "description"],
  });
  const [{ icon: Icon }] = await selectedSkills({ skills: [skill.name] });

  return { contents, skill, Icon };
};

export default async function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { contents, skill, Icon } = await getData(params.slug);
  const hasWorks = contents.length > 0;

  return (
    <FadeIn>
      <div className="flex flex-col gap-8">
        <Heading className="flex items-center gap-8">
          <Icon className="h-12 w-12 md:h-14 md:w-14" />
          {skill.name}
        </Heading>
        <p className="leading-7 text-gray-600 md:text-lg">
          {skill.description}
        </p>
        <p>
          GitHub上のソースコードは
          <a
            className="inline-flex items-center gap-2 px-2 text-teal-600 decoration-teal-500 hover:underline dark:text-teal-400 dark:decoration-teal-400"
            href={createGitHubUrl(skill.name)}
            rel="noopener noreferrer"
            target="_blank"
          >
            こちら
            <ArrowTopRightOnSquareIcon className="inline-block h-4 w-4 text-teal-600 dark:text-teal-400" />
          </a>
          からご覧いただけます。
        </p>
        <div>
          {hasWorks ? (
            <Works works={contents} />
          ) : (
            <p>公開している作品はありません。</p>
          )}
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-8 sm:mt-14 lg:mt-16">
        <Border />
        <Heading as="h4">その他のスキル一覧</Heading>
        <div>
          <SkillSet
            className="-mx-6 grid grid-cols-3 gap-6 md:grid-cols-4 md:gap-10"
            classNames={{ skill: "h-14 w-14 lg:h-20 lg:w-20" }}
          />
          <p className="mt-8">
            その他のライブラリや、コードの詳細は
            <a
              className="inline-flex items-center gap-2 px-2 text-teal-600 decoration-teal-500 hover:underline dark:text-teal-400 dark:decoration-teal-400"
              href="https://github.com/shouta0715"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
              <ArrowTopRightOnSquareIcon className="inline-block h-4 w-4 text-teal-500 dark:text-teal-400" />
            </a>
            にてご確認ください。
          </p>
        </div>
      </div>
    </FadeIn>
  );
}
