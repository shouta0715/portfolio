import clsx from "clsx";
import Image from "next/image";
import React, { ComponentPropsWithoutRef } from "react";

export function Logo({
  className,
  ...props
}: Omit<ComponentPropsWithoutRef<typeof Image>, "src">) {
  return (
    <Image
      src="/avatar.webp"
      {...props}
      alt={props.alt || "Shouta's avatar"}
      className={clsx(className)}
    />
  );
}

export function ZennLogo({
  className,
  ...props
}: Omit<ComponentPropsWithoutRef<typeof Image>, "src">) {
  return (
    <Image
      src="/zenn.webp"
      {...props}
      alt={props.alt || "Zenn's logo"}
      className={clsx(className)}
    />
  );
}
