import clsx from "clsx";
import Image from "next/image";
import React, { ComponentPropsWithoutRef } from "react";

export function Logo({
  className,
  ...props
}: Omit<ComponentPropsWithoutRef<typeof Image>, "src">) {
  return (
    <Image
      src="/avatar.png"
      {...props}
      className={clsx(
        "border border-zinc-900/10 shadow-md shadow-zinc-800/5 dark:border-zinc-700",
        className
      )}
    />
  );
}
