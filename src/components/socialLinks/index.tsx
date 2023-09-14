import clsx from "clsx";
import React from "react";
import { FadeIn } from "@/components/fadeIn";
import GitHubIcon from "@/icons/github.svg";
import TwitterIcon from "@/icons/twitter.svg";
import ZennIcon from "@/icons/zenn.svg";

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
}: {
  className?: string;
  classNames?: {
    wrapper?: string;
    link?: string;
  };
}) {
  return (
    <div className={clsx("flex gap-4", classNames?.wrapper)}>
      {links.map((link) => (
        <FadeIn
          key={link.name}
          className={clsx(
            "group rounded-full bg-white p-2 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-800/20  dark:bg-gray-700 dark:hover:ring-gray-700",
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
            <link.icon className={clsx("h-6 w-6 ", link.className)} />
          </a>
        </FadeIn>
      ))}
    </div>
  );
}
