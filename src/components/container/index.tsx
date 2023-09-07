import clsx from "clsx";
import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

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
    <Component className={clsx("mx-auto max-w-7xl px-4 lg:px-6", className)}>
      {children}
    </Component>
  );
}
