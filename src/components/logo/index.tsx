import clsx from "clsx";
import Image from "next/image";
import React, { ComponentPropsWithoutRef } from "react";

export function Logo({
  className,
  ...props
}: Omit<ComponentPropsWithoutRef<typeof Image>, "src">) {
  return <Image src="/avatar.webp" {...props} className={clsx(className)} />;
}

export function ZennLogo({
  className,
  ...props
}: Omit<ComponentPropsWithoutRef<typeof Image>, "src">) {
  return <Image src="/zenn.webp" {...props} className={clsx(className)} />;
}
