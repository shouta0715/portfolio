import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/libs/cn";

type ContainerProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children?: ReactNode;
};

export function Container<T extends ElementType = "div">({
  as,
  className,
  children,
}: ContainerProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ContainerProps<T>>) {
  const Component = as ?? "div";

  return (
    <Component className={cn("mx-auto max-w-7xl  px-6 lg:px-12", className)}>
      {children}
    </Component>
  );
}
