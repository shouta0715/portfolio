import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { FadeIn, FadeInWithStagger } from "@/components/fadeIn";
import { AstroIcon } from "@/components/icons/skills/AstroIcon";
import { AWSIcon } from "@/components/icons/skills/AWSIcon";
import { CSSIcon } from "@/components/icons/skills/CSSIcon";
import { DatabaseIcon } from "@/components/icons/skills/DatabaseIcon";
import { DockerIcon } from "@/components/icons/skills/DockerIcon";
import { FirebaseIcon } from "@/components/icons/skills/FirebaseIcon";
import { GoIcon } from "@/components/icons/skills/GoIcon";
import { GraphQLIcon } from "@/components/icons/skills/GraphQLIcon";
import { HTMLIcon } from "@/components/icons/skills/HTMLIcon";
import { JestIcon } from "@/components/icons/skills/JestIcon";
import { JsIcon } from "@/components/icons/skills/JsIcon";
import { MicroCMSIcon } from "@/components/icons/skills/MicroCMSIcon";
import { MSWIcon } from "@/components/icons/skills/MSWIcon";
import { NestIcon } from "@/components/icons/skills/NestIcon";
import { NextIcon } from "@/components/icons/skills/NextIcon";
import { NodeIcon } from "@/components/icons/skills/NodeIcon";
import { PlaywrightIcon } from "@/components/icons/skills/PlaywrightIcon";
import { PrismaIcon } from "@/components/icons/skills/PrismaIcon";
import { ReactIcon } from "@/components/icons/skills/ReactIcon";
import { ReactQueryIcon } from "@/components/icons/skills/ReactQueryIcon";
import { StoryBookIcon } from "@/components/icons/skills/StoryBookIcon";
import { SupabaseIcon } from "@/components/icons/skills/SupabaseIcon";
import { TailwindIcon } from "@/components/icons/skills/TailwindIcon";
import { TestingLibraryIcon } from "@/components/icons/skills/TestingLibraryIcon";
import { TsIcon } from "@/components/icons/skills/TsIcon";
import { VitestIcon } from "@/components/icons/skills/VitestIcon";
import { Stars } from "@/components/stars";
import { SkillNames, getSkills } from "@/libs/client";

type SkillData = {
  name: SkillNames;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  level?: number;
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
    name: "Prisma",
    icon: PrismaIcon,
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
    name: "Tanstack Query",
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
  {
    name: "microCMS",
    icon: MicroCMSIcon,
  },
  {
    name: "Supabase",
    icon: SupabaseIcon,
  },
  {
    name: "AWS",
    icon: AWSIcon,
  },
  {
    name: "Firebase",
    icon: FirebaseIcon,
  },
  {
    name: "Docker",
    icon: DockerIcon,
  },
  {
    name: "Vitest",
    icon: VitestIcon,
  },
  {
    name: "SQL",
    icon: DatabaseIcon,
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
  const { contents } = await getSkills({
    limit: 50,
    fields: ["id", "name", "level"],
  });

  const filtered = Skills.filter((skill) => skills.includes(skill.name));

  const result: ViewSkill[] = filtered.map((skill) => {
    const find = contents.find((s) => {
      return s.name === skill.name;
    });

    return { ...skill, id: find?.id ?? "", level: find?.level };
  });

  return result;
}

function Skill({
  skill,
  i,
  className,
  hasStar = true,
}: {
  skill: ViewSkill;
  i: number;
  className?: string;
  hasStar?: boolean;
}) {
  return (
    <FadeIn className="flex flex-col items-center">
      <Link
        aria-label={skill.name}
        className={clsx(
          "relative block aspect-[9/10] flex-none overflow-hidden rounded-xl bg-white/50 shadow-lg ring ring-gray-100 transition-all duration-300 hover:scale-105 hover:ring-gray-300  sm:rounded-2xl dark:bg-gray-600",
          rotations[i % rotations.length],
          className
        )}
        href={{
          pathname: `/skills/${skill.id}`,
        }}
      >
        <skill.icon
          aria-hidden="true"
          className="h-full w-full object-cover p-2"
        />
      </Link>

      <div className="mt-2 text-center">
        <p className="text-xs font-semibold">{skill.name}</p>
        {hasStar && (
          <Stars
            className="mt-1 justify-center"
            id={skill.name}
            level={skill.level ?? 0}
          />
        )}
      </div>
    </FadeIn>
  );
}

export async function SelectedSkill({
  skills,
  className,
  classNames,
  hasStar = true,
}: {
  skills: SkillNames[];
  className?: string;
  classNames?: {
    skill?: string;
  };
  hasStar?: boolean;
}) {
  const selected = await selectedSkills({ skills });

  return (
    <FadeInWithStagger className={className} speed={0.05}>
      {selected.map((skill, i) => (
        <Skill
          key={skill.name}
          className={classNames?.skill}
          hasStar={hasStar}
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
  hasStar = true,
}: {
  className?: string;
  classNames?: {
    skill?: string;
  };
  hasStar?: boolean;
}) {
  const allSkills = await selectedSkills({
    skills: Skills.map((skill) => skill.name),
  });

  return (
    <div className={className}>
      {allSkills.map((skill, i) => (
        <Skill
          key={skill.name}
          className={classNames?.skill}
          hasStar={hasStar}
          i={i}
          skill={skill}
        />
      ))}
    </div>
  );
}
