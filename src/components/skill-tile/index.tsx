import clsx from "clsx";
import React from "react";
import { FadeInWithStagger } from "@/components/fadeIn";
import { Skill, selectedSkills } from "@/components/skills";

const rotations = [
  "rotate-6",
  "-rotate-12",
  "rotate-6",
  "rotate-12",
  "-rotate-6",
];

export async function SkillTile() {
  const [first, second, third, fourth] = await Promise.all([
    selectedSkills({ skills: ["JavaScript", "TypeScript", "Go"] }),
    selectedSkills({
      skills: ["React", "Tailwind CSS", "Next.js", "Tanstack Query"],
    }),
    selectedSkills({
      skills: ["Vitest", "Storybook", "Playwright", "Testing Library"],
    }),
    selectedSkills({
      skills: ["Nuxt.js", "Node.js", "Prisma", "Docker"],
    }),
  ]);

  return (
    <FadeInWithStagger
      className="flex w-full justify-between gap-12 pt-8 md:p-4"
      speed={0.075}
    >
      <div className="grid h-max gap-8 pt-40 md:pt-56">
        {first.map((skill, i) => (
          <Skill
            key={skill.name}
            className={clsx(
              "h-16 w-16 sm:h-20 sm:w-20",
              rotations[i % rotations.length]
            )}
            hasName={false}
            hasStar={false}
            i={i}
            skill={skill}
          />
        ))}
      </div>
      <div className="grid h-max gap-8 pt-12">
        {second.map((skill, i) => (
          <Skill
            key={skill.name}
            className={clsx(
              "h-16 w-16 sm:h-20 sm:w-20",
              rotations[Math.floor(i * 3) % rotations.length]
            )}
            hasName={false}
            hasStar={false}
            i={i}
            skill={skill}
          />
        ))}
      </div>
      <div className="grid h-max gap-8 pt-24 md:pt-52">
        {third.map((skill, i) => (
          <Skill
            key={skill.name}
            className={clsx(
              "h-16 w-16 sm:h-20 sm:w-20",
              rotations[Math.floor(i) % rotations.length]
            )}
            hasName={false}
            hasStar={false}
            i={i}
            skill={skill}
          />
        ))}
      </div>
      <div className="grid h-max gap-8">
        {fourth.map((skill, i) => (
          <Skill
            key={skill.name}
            className={clsx(
              "h-16 w-16 sm:h-20 sm:w-20",
              rotations[Math.floor(i * 4) % rotations.length]
            )}
            hasName={false}
            hasStar={false}
            i={i}
            skill={skill}
          />
        ))}
      </div>
    </FadeInWithStagger>
  );
}
