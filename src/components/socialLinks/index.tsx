import clsx from "clsx";
import React, { CSSProperties } from "react";
import { FadeIn, FadeInWithStagger } from "@/components/fadeIn";

export function ZennIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      style={{ enableBackground: "new 0 0 88.3 88.3" } as CSSProperties}
      version="1.1"
      viewBox="0 0 88.3 88.3"
      x="0px"
      xmlns="http://www.w3.org/2000/svg"
      y="0px"
      {...props}
    >
      <g fill="#3EA8FF">
        <path
          d="M3.9,83.3h17c0.9,0,1.7-0.5,2.2-1.2L69.9,5.2c0.6-1-0.1-2.2-1.3-2.2H52.5c-0.8,0-1.5,0.4-1.9,1.1L3.1,81.9
		C2.8,82.5,3.2,83.3,3.9,83.3z"
        />
        <path
          d="M62.5,82.1l22.1-35.5c0.7-1.1-0.1-2.5-1.4-2.5h-16c-0.6,0-1.2,0.3-1.5,0.8L43,81.2c-0.6,0.9,0.1,2.1,1.2,2.1
		h16.3C61.3,83.3,62.1,82.9,62.5,82.1z"
        />
      </g>
    </svg>
  );
}

export function TwitterIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z" />
    </svg>
  );
}

export function GitHubIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        clipRule="evenodd"
        d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
        fillRule="evenodd"
      />
    </svg>
  );
}

const links = [
  {
    name: "GitHub",
    href: "https://github.com/shouta0715",
    icon: GitHubIcon,
    className:
      "fill-gray-500 transition group-hover:fill-gray-600 dark:fill-gray-400 dark:group-hover:fill-gray-300",
  },
  {
    name: "X (Twitter)",
    href: "https://twitter.com/shoutapu0715",
    icon: TwitterIcon,
    className: "fill-blue-500",
  },
  {
    name: "Zenn",
    href: "https://zenn.dev/shouta0715",
    icon: ZennIcon,
  },
];

export function SocialLinks({
  className,
  classNames,
  stagger = false,
}: {
  className?: string;
  stagger?: boolean;
  classNames?: {
    wrapper?: string;
    link?: string;
  };
}) {
  const Wrapper = stagger ? FadeInWithStagger : "div";
  const Inner = stagger ? FadeIn : "div";

  return (
    <Wrapper className={clsx("flex gap-4", classNames?.wrapper)}>
      {links.map((link) => (
        <Inner
          key={link.name}
          className={clsx(
            "group rounded-lg bg-white p-2 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-800/20  dark:bg-gray-700 dark:hover:ring-gray-700",
            classNames?.link,
            className
          )}
        >
          <a
            aria-label={link.name}
            href={link.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            <link.icon
              className={clsx("h-6 w-6 md:h-8 md:w-8", link.className)}
            />
          </a>
        </Inner>
      ))}
    </Wrapper>
  );
}
