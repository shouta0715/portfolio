import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FadeIn, FadeInWithStagger } from "@/components/fadeIn";
import { SelectedSkill } from "@/components/skills";

export function SkillsCard() {
  return (
    <FadeInWithStagger>
      <FadeIn className="flex flex-1 flex-col gap-y-6 rounded-xl border bg-white/20 p-3 dark:bg-gray-800 md:rounded-2xl md:p-6 md:shadow-lg">
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
