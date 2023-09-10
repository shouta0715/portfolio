import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { FadeIn, FadeInWithStagger } from "@/components/fadeIn";
import { AstroIcon } from "@/components/icons/skills/AstroIcon";
import { CSSIcon } from "@/components/icons/skills/CSSIcon";
import { GoIcon } from "@/components/icons/skills/GoIcon";
import { GraphQLIcon } from "@/components/icons/skills/GraphQLIcon";
import { HTMLIcon } from "@/components/icons/skills/HTMLIcon";
import { JestIcon } from "@/components/icons/skills/JestIcon";
import { JsIcon } from "@/components/icons/skills/JsIcon";
import { MSWIcon } from "@/components/icons/skills/MSWIcon";
import { NestIcon } from "@/components/icons/skills/NestIcon";
import { NextIcon } from "@/components/icons/skills/NextIcon";
import { NodeIcon } from "@/components/icons/skills/NodeIcon";
import { PlaywrightIcon } from "@/components/icons/skills/PlaywrightIcon";
import { ReactIcon } from "@/components/icons/skills/ReactIcon";
import { ReactQueryIcon } from "@/components/icons/skills/ReactQueryIcon";
import { StoryBookIcon } from "@/components/icons/skills/StoryBookIcon";
import { TailwindIcon } from "@/components/icons/skills/TailwindIcon";
import { TestingLibraryIcon } from "@/components/icons/skills/TestingLibraryIcon";
import { TsIcon } from "@/components/icons/skills/TsIcon";
import { SkillNames, getSkills } from "@/libs/client";

type SkillData = {
  name: SkillNames;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

type ViewSkill = { id: string } & SkillData;

export const Skills: SkillData[] = [
  {
    name: "HTML",
    icon: HTMLIcon,
  },
  {
    name: "CSS",
    icon: CSSIcon,
  },
  {
    name: "JavaScript",
    icon: JsIcon,
  },
  {
    name: "TypeScript",
    icon: TsIcon,
  },
  {
    name: "Tailwind CSS",
    icon: TailwindIcon,
  },
  {
    name: "React",
    icon: ReactIcon,
  },
  {
    name: "Next.js",
    icon: NextIcon,
  },
  {
    name: "Astro",
    icon: AstroIcon,
  },
  {
    name: "Storybook",
    icon: StoryBookIcon,
  },
  {
    name: "Tanstack/Query",
    icon: ReactQueryIcon,
  },
  {
    name: "Node.js",
    icon: NodeIcon,
  },
  {
    name: "Nest.js",
    icon: NestIcon,
  },
  {
    name: "Jest",
    icon: JestIcon,
  },
  {
    name: "Testing Library",
    icon: TestingLibraryIcon,
  },
  {
    name: "Playwright",
    icon: PlaywrightIcon,
  },
  {
    name: "MSW",
    icon: MSWIcon,
  },
  {
    name: "Graph QL",
    icon: GraphQLIcon,
  },
  {
    name: "Go",
    icon: GoIcon,
  },
];

const rotations = [
  "rotate-2",
  "-rotate-2",
  "rotate-2",
  "rotate-2",
  "-rotate-2",
];

export async function selectedSkills({ skills }: { skills: SkillNames[] }) {
  const { contents } = await getSkills({ limit: 100, fields: ["id", "name"] });

  const filtered = Skills.filter((skill) => skills.includes(skill.name));

  const result: ViewSkill[] = filtered.map((skill) => {
    const find = contents.find((s) => {
      return s.name === skill.name;
    });

    return { ...skill, id: find?.id ?? "" };
  });

  return result;
}

function Skill({
  skill,
  i,
  className,
}: {
  skill: ViewSkill;
  i: number;
  className?: string;
}) {
  return (
    <FadeIn className="flex flex-col items-center">
      <Link
        aria-label={skill.name}
        className={clsx(
          "relative block aspect-[9/10] flex-none overflow-hidden rounded-xl bg-white/50 shadow-lg ring ring-gray-100 transition-all duration-300 hover:scale-105 hover:ring-gray-300  dark:bg-gray-600 sm:rounded-2xl",
          rotations[i % rotations.length],
          className
        )}
        href={`/skills/${skill.id}`}
      >
        <skill.icon
          aria-hidden="true"
          className="h-full w-full object-cover p-2"
        />
      </Link>
      <p className="mt-2 text-center">
        <span className="text-xs font-semibold">{skill.name}</span>
      </p>
    </FadeIn>
  );
}

export async function SelectedSkill({
  skills,
  className,
  classNames,
}: {
  skills: SkillNames[];
  className?: string;
  classNames?: {
    skill?: string;
  };
}) {
  const selected = await selectedSkills({ skills });

  return (
    <FadeInWithStagger className={className}>
      {selected.map((skill, i) => (
        <Skill
          key={skill.name}
          className={classNames?.skill}
          i={i}
          skill={skill}
        />
      ))}
    </FadeInWithStagger>
  );
}

export async function SkillSet({
  className,
  classNames,
}: {
  className?: string;
  classNames?: {
    skill?: string;
  };
}) {
  const allSkills = await selectedSkills({
    skills: Skills.map((skill) => skill.name),
  });

  return (
    <FadeInWithStagger className={className}>
      {allSkills.map((skill, i) => (
        <Skill
          key={skill.name}
          className={classNames?.skill}
          i={i}
          skill={skill}
        />
      ))}
    </FadeInWithStagger>
  );
}
