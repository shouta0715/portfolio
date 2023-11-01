import { StarIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import React from "react";
import { FadeIn, FadeInWithStagger } from "@/components/fadeIn";

function Star({ active, className }: { active: boolean; className?: string }) {
  return (
    <FadeIn
      className="inline-block"
      transition={{
        type: "spring",
        stiffness: 175,
      }}
      variants={{
        hidden: {
          opacity: 0,
          scale: 0,
        },
        visible: {
          opacity: 1,
          scale: 1,
        },
      }}
    >
      <StarIcon
        className={clsx(
          active ? "text-yellow-400" : "text-gray-300 dark:text-gray-400",
          className || "h-3 w-3 lg:h-3.5 lg:w-3.5"
        )}
      />
    </FadeIn>
  );
}

export function Stars({
  level,
  id,
  className,
  classNames,
}: {
  level: number;
  id: string;
  className?: string;
  classNames?: {
    star?: string;
  };
}) {
  return (
    <FadeInWithStagger className={clsx("flex items-center gap-1", className)}>
      {Array.from({ length: 4 }, (_, i) => (
        <Star
          key={`${id}-${i}`}
          active={i < level}
          className={classNames?.star}
        />
      ))}
    </FadeInWithStagger>
  );
}

const describe = [
  "興味あり",
  "さわったことあり",
  "楽しめる",
  "理解してきた",
  "実務経験あり",
] as const;

export function StarDescribe({ className }: { className?: string }) {
  return (
    <div className={clsx("grid grid-cols-2 gap-y-4 md:grid-cols-3", className)}>
      {describe.map((desc, i) => (
        <div className="flex gap-x-4 gap-y-2 md:flex-col">
          <Stars
            key={desc}
            classNames={{
              star: "h-4 w-4 lg:h-4 lg:w-4",
            }}
            id={desc}
            level={i}
          />
          <p className="text-sm text-gray-600 dark:text-gray-200">{desc}</p>
        </div>
      ))}
    </div>
  );
}
