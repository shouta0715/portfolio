import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import React from "react";
import { Border } from "@/components/border";
import { FadeIn } from "@/components/fadeIn";
import { Heading } from "@/components/heading";
import { PracticalWorks } from "@/components/practical-work";
import { practicalWorks as PWork } from "@/components/practical-work/work";
import { SkillSet, selectedSkills } from "@/components/skills";
import { StarDescribe, Stars } from "@/components/stars";
import { Works } from "@/components/works";
import { SkillNames, getSkill, getSkills, getWorks } from "@/libs/client";
import { basicMetadata } from "@/libs/meta";

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> {
  const skill = await getSkill(params.slug, {
    fields: ["name", "description"],
  });

  return {
    ...basicMetadata,
    title: `Skills - ${skill.name}`,
    description: skill.description,
  };
}

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
    filters: `skills[contains]${slug}`,
  });

  const skill = await getSkill(slug, {
    fields: ["name", "description", "level"],
  });
  const [{ icon: Icon }] = await selectedSkills({ skills: [skill.name] });

  return { contents, skill, Icon };
};

const getPracticalWorks = async (slug: string) => {
  const skill = await getSkill(slug, {
    fields: ["name", "description", "level"],
  });

  const works = PWork.filter((work) => {
    return work.technologies.some((tech) => tech === skill.name);
  });

  return works;
};

export const fetchCache = "only-cache";
export default async function Page({ params }: { params: { slug: string } }) {
  const [{ contents, skill, Icon }, practicalWorks] = await Promise.all([
    getData(params.slug),
    getPracticalWorks(params.slug),
  ]);

  const hasWorks = contents.length > 0;
  const hasPracticalWorks = practicalWorks.length > 0;

  return (
    <FadeIn>
      <div className="flex flex-col gap-8">
        <Heading className="flex items-center gap-8">
          <Icon className="h-12 w-12 md:h-14 md:w-14" />
          {skill.name}
        </Heading>
        <Stars
          classNames={{ star: "h-6 w-6 md:h-8 md:w-8" }}
          id={skill.name}
          level={skill.level}
        />
        <p className="text-sm leading-7 text-muted-foreground md:text-base md:leading-7">
          {skill.description}
        </p>

        <p>
          GitHub上のソースコードは
          <a
            className="inline-flex items-center gap-2 px-2 text-destructive decoration-destructive hover:underline dark:text-destructive dark:decoration-destructive"
            href={createGitHubUrl(skill.name)}
            rel="noopener noreferrer"
            target="_blank"
          >
            こちら
            <ArrowTopRightOnSquareIcon className="inline-block h-4 w-4 text-destructive dark:text-destructive" />
          </a>
          からご覧いただけます。
        </p>
        {hasPracticalWorks && (
          <div>
            <Heading as="h2" className="mt-8">
              Business Works
            </Heading>
            <PracticalWorks />
          </div>
        )}

        {hasWorks && (
          <div>
            <Heading as="h2" className="mt-16">
              Personal Works
            </Heading>
            <Works
              classNames={{
                card: "h-max",
              }}
              works={contents}
            />
          </div>
        )}
      </div>

      <div className="mt-10 flex flex-col gap-8 sm:mt-14 lg:mt-16">
        <Border />
        <Heading as="h4">その他のスキル一覧</Heading>
        <div>
          <StarDescribe className="items-center" />
        </div>
        <div className="mt-10">
          <SkillSet
            className="-mx-6 grid grid-cols-3 gap-6 md:grid-cols-4 md:gap-10"
            classNames={{ skill: "h-14 w-14 lg:h-20 lg:w-20" }}
          />
          <p className="mt-8">
            その他のライブラリや、コードの詳細は
            <a
              className="inline-flex items-center gap-2 px-2 text-destructive decoration-destructive hover:underline dark:text-destructive dark:decoration-destructive"
              href="https://github.com/shouta0715"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
              <ArrowTopRightOnSquareIcon className="inline-block h-4 w-4 text-destructive dark:text-destructive" />
            </a>
            にてご確認ください。
          </p>
        </div>
      </div>
    </FadeIn>
  );
}
