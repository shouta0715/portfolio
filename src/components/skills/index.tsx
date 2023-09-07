import clsx from "clsx";
import React from "react";
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

export const Skills = [
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

export function SkillSlider() {
  return (
    <div className="mt-16 h-96 w-full overflow-hidden sm:mt-20">
      <div className="relative -my-4 flex py-4 sm:gap-8">
        {Array.from({ length: 2 }).map((_, index) => {
          return (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={`slider-${index}`}
              className={clsx(
                "absolute flex  justify-around gap-5 px-5 md:gap-8 md:px-8",
                index === 0
                  ? "animate-infinite-scroll-x-start"
                  : "animate-infinite-scroll-x-end"
              )}
            >
              {Skills.map((skill, i) => (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${skill.name}-${i}`}
                  className={clsx(
                    "relative aspect-[9/10] w-32 flex-none overflow-hidden rounded-xl bg-white/50 shadow-lg ring ring-gray-100 dark:bg-zinc-600 sm:rounded-2xl md:w-44",
                    rotations[i % rotations.length]
                  )}
                >
                  <skill.icon className="absolute inset-0 h-full w-full object-cover p-4" />
                  <span>
                    <div className="absolute inset-0 flex items-end justify-center  ">
                      <p className=" text-sm font-bold text-gray-600 dark:text-white md:text-xl">
                        {skill.name}
                      </p>
                    </div>
                  </span>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
