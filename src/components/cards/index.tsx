import clsx from "clsx";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import React, { ComponentPropsWithoutRef, ElementType } from "react";

export function Card<T extends ElementType = "div">({
  as,
  className,
  children,
}: Omit<ComponentPropsWithoutRef<T>, "as" | "className"> & {
  as?: T;
  className?: string;
}) {
  const Component = as || "div";

  return (
    <Component
      className={clsx(
        "group relative rounded-xl border bg-white/20 p-3 dark:bg-gray-800 md:rounded-2xl md:p-6 md:shadow-lg",
        className
      )}
    >
      {children}
    </Component>
  );
}

Card.Link = function CardLink({
  children,
  href,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof Link>, "href" | "children"> & {
  href: string;
  children: React.ReactNode;
}) {
  const isExternal = href.toString().startsWith("http");
  const Component = isExternal ? "a" : Link;

  return (
    <>
      <div className="absolute inset-0 z-0 opacity-0 transition group-hover:bg-gray-200/20 group-hover:opacity-100 dark:group-hover:bg-gray-900/20  sm:rounded-2xl" />
      <Component
        rel={isExternal ? "noopener noreferrer" : undefined}
        target={isExternal ? "_blank" : undefined}
        {...props}
        href={href}
      >
        <span className="absolute inset-0 z-20  sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Component>
    </>
  );
};

Card.Title = function CardTitle<T extends React.ElementType = "h2">({
  as,
  href,
  children,
  className,
}: Omit<React.ComponentPropsWithoutRef<T>, "as" | "href"> & {
  as?: T;
  href?: string;
  className?: string;
}) {
  const Component = as ?? "h2";

  return (
    <Component className={clsx("text-gray-900 dark:text-gray-200", className)}>
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  );
};

Card.Description = function CardDescription<T extends React.ElementType = "p">({
  children,
  className,
  as,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, "as" | "href"> & {
  as?: T;
  className?: string;
}) {
  const Component = as ?? "p";

  return (
    <Component
      className={clsx("mt-2 text-gray-600 dark:text-gray-300", className)}
      {...props}
    >
      {children}
    </Component>
  );
};

function ImageClipPaths({ id }: { id: string | StaticImport }) {
  return (
    <svg aria-hidden="true" height={0} width={0}>
      <defs>
        <clipPath clipPathUnits="objectBoundingBox" id={`${id}`}>
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
      </defs>
    </svg>
  );
}

Card.Image = function CardImage({
  className,
  src,
  ...props
}: {
  className?: string;
  src: string | StaticImport;
} & Omit<React.ComponentPropsWithoutRef<typeof Image>, "src">) {
  return (
    <>
      <ImageClipPaths id={src} />
      <div className="group relative h-64 overflow-hidden rounded-2xl">
        <div
          className={clsx(
            "absolute bottom-8 left-0 top-0 h-56  w-full rounded-2xl border border-indigo-300 transition duration-300 group-hover:scale-95"
          )}
        />
        <div className="absolute inset-0 " style={{ clipPath: `url(#${src})` }}>
          <Image
            className={clsx(
              "absolute inset-0 aspect-[3/2] h-56 w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105",
              className
            )}
            {...props}
            src={src}
          />
        </div>
      </div>
    </>
  );
};
