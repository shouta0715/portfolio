/* eslint-disable react/no-array-index-key */
import clsx from "clsx";
import React from "react";
import { FadeIn } from "@/components/fadeIn";
import { Stars } from "@/components/stars";

const rotations = [
  "rotate-2",
  "-rotate-2",
  "rotate-2",
  "rotate-2",
  "-rotate-2",
];

export function SkillLoader({
  length = 12,
  id,
}: {
  length?: number;
  id: string;
}) {
  const skills = Array.from({ length }).map((_, i) => {
    return (
      <FadeIn
        key={`${id}-${i}-loader`}
        aria-busy="true"
        aria-label="loading"
        className="flex flex-col items-center"
      >
        <div
          aria-label="loading"
          className={clsx(
            "relative block aspect-[9/10] h-14 w-14 flex-none animate-pulse overflow-hidden rounded-xl bg-white/50 opacity-90 shadow-lg ring ring-gray-100 transition-all duration-300  hover:scale-105 hover:ring-gray-300 dark:bg-gray-600 sm:rounded-2xl md:h-20 md:w-20",
            rotations[i % rotations.length]
          )}
        >
          <div aria-hidden="true" className="h-full w-full object-cover p-2" />
        </div>

        <div className="mt-2 text-center">
          <Stars className="mt-1 justify-center" id={id} level={0} />
        </div>
      </FadeIn>
    );
  });

  return (
    <div className="-mx-6 grid grid-cols-3 gap-6 md:grid-cols-4 md:gap-10">
      {skills}
      <div
        aria-busy="true"
        className="col-span-3 mx-auto rounded-md bg-white/10 px-3 py-1.5 text-sm font-semibold text-gray-900 opacity-50 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:text-white dark:hover:hover:bg-white/20 md:col-span-4"
      >
        ロード中...
      </div>
    </div>
  );
}
