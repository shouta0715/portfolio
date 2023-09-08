import clsx from "clsx";
import React from "react";

type HeadingProps<T extends "h1" | "h2" | "h3" | "h4" | "h5" | "h6"> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

const headingSizes = {
  h1: "text-3xl font-bold md:text-4xl lg:text-5xl",
  h2: "text-2xl font-bold md:text-3xl lg:text-4xl",
  h3: "text-xl  md:text-2xl lg:text-3xl",
  h4: "text-lg  md:text-xl lg:text-2xl",
  h5: "text-sm  md:text-lg lg:text-xl",
  h6: "text-xs  md:text-base lg:text-lg",
} as const;

export function Heading<T extends "h1" | "h2" | "h3" | "h4" | "h5" | "h6">({
  as,
  className,
  children,
  ...props
}: HeadingProps<T>) {
  const Component = as ?? "h1";

  return (
    <Component
      className={clsx(
        "text-gray-900 dark:text-gray-200",
        className,
        headingSizes[Component]
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
