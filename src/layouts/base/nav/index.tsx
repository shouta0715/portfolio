import { Popover } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FadeIn } from "@/components/fadeIn";

const navs = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Works",
    href: "/works",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Skills",
    href: "/skills",
  },
];

export const NavLinks = () => {
  const pathname = usePathname();
  const active = navs.findIndex((nav) => nav.href === pathname);

  return (
    <>
      {navs.map((nav, i) => (
        <FadeIn key={nav.name}>
          <Link
            className={clsx(
              " -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors",
              active === i
                ? "font-semibold text-indigo-600 dark:text-indigo-400"
                : "hover:bg-gray-100 hover:text-indigo-600 dark:text-gray-200 hover:dark:bg-white/5 dark:hover:text-indigo-400"
            )}
            href={nav.href}
          >
            <span className="z-10">{nav.name}</span>
          </Link>
        </FadeIn>
      ))}
    </>
  );
};

export const MobileNavLinks = () => {
  const pathname = usePathname();
  const active = navs.findIndex((nav) => nav.href === pathname);

  return (
    <>
      {navs.map((nav, i) => (
        <FadeIn key={nav.name}>
          <Popover.Button
            as={Link}
            className={clsx(
              "-mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors",
              active === i
                ? "font-semibold text-indigo-600 dark:text-indigo-400"
                : "hover:bg-gray-100 hover:text-indigo-600 dark:text-gray-200 hover:dark:bg-white/5 dark:hover:text-indigo-400"
            )}
            href={nav.href}
          >
            <span className="z-10">{nav.name}</span>
          </Popover.Button>
        </FadeIn>
      ))}
    </>
  );
};
