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
        "group relative rounded-xl border bg-white p-4 md:rounded-2xl md:p-6 md:shadow-sm dark:bg-gray-800",
        className
      )}
    >
      {children}
    </Component>
  );
}

Card.Title = function CardTitle<T extends React.ElementType = "h2">({
  as,

  children,
  className,
}: Omit<React.ComponentPropsWithoutRef<T>, "as" | "href"> & {
  as?: T;

  className?: string;
}) {
  const Component = as ?? "h2";

  return (
    <Component className={clsx("text-primary", className)}>
      {children}
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
  const Component = as ?? "div";

  return (
    <Component
      className={clsx(
        "mt-2 text-sm leading-7 text-muted-foreground",
        className
      )}
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
  href,
  ...props
}: {
  className?: string;
  src: string | StaticImport;
  href?: string;
} & Omit<React.ComponentPropsWithoutRef<typeof Image>, "src" | "href">) {
  const Inner = (
    <>
      <div
        className={clsx(
          "absolute bottom-8 left-0 top-0 h-56  w-full rounded-2xl border border-indigo-300 transition duration-300 ",
          href ? "group-hover/image:scale-95" : "group-hover:scale-95"
        )}
      />
      <div className="absolute inset-0 " style={{ clipPath: `url(#${src})` }}>
        <Image
          className={clsx(
            "absolute inset-0 aspect-[3/2] h-56 w-full rounded-2xl object-cover transition-transform duration-300",
            className,
            href ? "group-hover/image:scale-105" : "group-hover:scale-105"
          )}
          {...props}
          src={src}
        />
      </div>
    </>
  );

  return (
    <>
      <ImageClipPaths id={src} />
      {href ? (
        <Link
          className="group/image relative block h-64 overflow-hidden rounded-2xl"
          href={href}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          target={href.startsWith("http") ? "_blank" : undefined}
        >
          {Inner}
        </Link>
      ) : (
        <div className="group relative h-64 overflow-hidden rounded-2xl">
          {Inner}
        </div>
      )}
    </>
  );
};
