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
    <p className="mt-8 text-right">
      <Link
        className={clsx(
          "inline-flex items-center gap-2 text-destructive hover:underline hover:decoration-destructive dark:text-destructive dark:hover:decoration-destructive",
          className
        )}
        href={href}
      >
        もっと詳しく
        <ChevronRightIcon className="inline-block h-4 w-4" />
      </Link>
    </p>
  );
}
