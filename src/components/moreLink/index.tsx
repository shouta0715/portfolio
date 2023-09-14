import { ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

export function MoreLink({
  href,
  className,
}: {
  className?: string;
  href: string;
}) {
  return (
    <Link
      className={clsx(
        "mt-8 flex items-center justify-end gap-2 text-indigo-600 hover:underline hover:decoration-indigo-600 dark:text-indigo-400 dark:hover:decoration-indigo-400",
        className
      )}
      href={href}
    >
      もっと詳しく
      <ChevronRightIcon className="inline-block h-4 w-4" />
    </Link>
  );
}
