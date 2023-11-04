import { Popover } from "@headlessui/react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
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
    href: "/skills?page=1",
  },
  {
    name: "Articles",
    href: "/articles",
  },
];

export const NavLinks = ({ footer }: { footer?: boolean }) => {
  const timeoutRef = useRef<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(-1);
  const pathname = usePathname();
  const active = navs.findIndex((nav) => nav.href === pathname);

  return (
    <>
      {navs.map((nav, i) => (
        <FadeIn key={nav.name}>
          <Link
            className={clsx(
              "relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors delay-150 hover:delay-0  ",
              active === i
                ? "font-semibold text-indigo-600 dark:text-indigo-400"
                : "hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400"
            )}
            href={nav.href}
            onMouseEnter={() => {
              if (timeoutRef.current) {
                window.clearTimeout(timeoutRef.current);
              }
              setHoveredIndex(i);
            }}
            onMouseLeave={() => {
              timeoutRef.current = window.setTimeout(() => {
                setHoveredIndex(null);
              }, 200);
            }}
          >
            <AnimatePresence>
              {hoveredIndex === i && (
                <motion.span
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  className="absolute inset-0 rounded-lg bg-gray-50 dark:bg-white/10"
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15 },
                  }}
                  initial={{ opacity: 0 }}
                  layoutId={footer ? "footer-nav" : "nav"}
                />
              )}
            </AnimatePresence>
            <span className="relative z-10">{nav.name}</span>
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
              "relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors delay-150 hover:delay-0",
              active === i
                ? "font-semibold text-indigo-600 dark:text-indigo-400 "
                : "hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400"
            )}
            href={nav.href}
          >
            <span className="relative z-10">{nav.name}</span>
          </Popover.Button>
        </FadeIn>
      ))}
    </>
  );
};
