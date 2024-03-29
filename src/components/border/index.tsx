"use client";

import clsx from "clsx";
import { motion, useReducedMotion } from "framer-motion";
import React from "react";

const viewport = { once: true, margin: "0px 0px -100px" };

type BorderProps = {
  className?: string;
  slow?: boolean;
  speed?: number;
} & React.ComponentPropsWithoutRef<typeof motion.div>;

export function Border({
  className,
  slow = false,
  speed,
  ...props
}: BorderProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate="visible"
      className={clsx("h-px rounded-md bg-border", className)}
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
