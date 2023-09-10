"use client";

import clsx from "clsx";
import { m, useReducedMotion } from "framer-motion";
import React from "react";

const viewport = { once: true, margin: "0px 0px -200px" };

type BorderProps = {
  className?: string;
  slow?: boolean;
  speed?: number;
} & React.ComponentPropsWithoutRef<typeof m.div>;

export function Border({
  className,
  slow = false,
  speed,
  ...props
}: BorderProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      animate="visible"
      className={clsx(
        "h-px rounded-md bg-gray-300 dark:border-gray-700",
        className
      )}
      initial="hidden"
      transition={{
        duration: speed ?? (slow ? 2 : 1),
      }}
      variants={{
        hidden: {
          width: shouldReduceMotion ? "100%" : 0,
        },
        visible: {
          width: "100%",
        },
      }}
      viewport={viewport}
      {...props}
    />
  );
}
