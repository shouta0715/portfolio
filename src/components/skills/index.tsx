import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { FadeIn, FadeInWithStagger } from "@/components/fadeIn";
import { AstroIcon } from "@/components/icons/skills/AstroIcon";
import { CSSIcon } from "@/components/icons/skills/CSSIcon";
import { GitHubIcon } from "@/components/icons/skills/GitHubIcon";
import { GitIcon } from "@/components/icons/skills/GitIcon";
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

type SkillNames =
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "Tailwind CSS"
  | "React"
  | "Next.js"
  | "Astro"
  | "Storybook"
  | "Tanstack/Query"
  | "Node.js"
  | "Nest.js"
  | "Jest"
  | "Testing Library"
  | "Playwright"
  | "MSW"
  | "Graph QL"
  | "Git"
  | "GitHub";

type Skill = {
  name: SkillNames;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const Skills: Skill[] = [
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
    name: "Git",
    icon: GitIcon,
  },
  {
    name: "GitHub",
    icon: GitHubIcon,
  },
];

const rotations = [
  "rotate-2",
  "-rotate-2",
  "rotate-2",
  "rotate-2",
  "-rotate-2",
];

export function selectedSkills({ skills }: { skills: SkillNames[] }) {
  return Skills.filter((skill) => skills.includes(skill.name));
}

function Skill({
  skill,
  i,
  className,
}: {
  skill: Skill;
  i: number;
  className?: string;
}) {
  return (
    <FadeIn className="flex flex-col items-center">
      <Link
        aria-label={skill.name}
        className={clsx(
          "relative block aspect-[9/10] flex-none overflow-hidden rounded-xl bg-white/50 shadow-lg ring ring-gray-100 transition-all duration-300 hover:scale-105 hover:ring-gray-300  dark:bg-zinc-600 sm:rounded-2xl",
          rotations[i % rotations.length],
          className
        )}
        href={`/skills/${skill.name.toLowerCase()}`}
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

export function SelectedSkill({
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
  return (
    <FadeInWithStagger className={className}>
      {selectedSkills({ skills }).map((skill, i) => (
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

export function SkillSet({
  className,
  classNames,
}: {
  className?: string;
  classNames?: {
    skill?: string;
  };
}) {
  return (
    <FadeInWithStagger className={className}>
      {Skills.map((skill, i) => (
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
