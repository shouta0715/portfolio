import { Popover } from "@headlessui/react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useRef, useState } from "react";
import { FadeIn } from "@/components/fadeIn";

const navs = [
  {
    name: "Home",
    href: "/",
    segment: null,
  },
  {
    name: "About",
    href: "/about",
    segment: "about",
  },
  {
    name: "Works",
    href: "/works",
    segment: "works",
  },
  {
    name: "Contact",
    href: "/contact",
    segment: "contact",
  },
  {
    name: "Skills",
    href: "/skills",
    segment: "skills",
  },
  {
    name: "Articles",
    href: "/articles",
    segment: "articles",
  },
];

export const NavLinks = ({ footer }: { footer?: boolean }) => {
  const timeoutRef = useRef<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(-1);

  const segment = useSelectedLayoutSegment();

  return (
    <>
      {navs.map((nav, i) => {
        const active = nav.segment === segment;

        return (
          <FadeIn key={nav.name}>
            <Link
              className={clsx(
                "relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm transition-colors delay-150 hover:delay-0  ",
                active
                  ? "font-semibold text-destructive"
                  : "text-muted-foreground hover:text-destructive"
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
        );
      })}
    </>
  );
};

export const MobileNavLinks = () => {
  const segment = useSelectedLayoutSegment();

  return (
    <>
      {navs.map((nav) => {
        const active = nav.segment === segment;

        return (
          <FadeIn key={nav.name}>
            <Popover.Button
              as={Link}
              className={clsx(
                "relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm  transition-colors delay-150 hover:delay-0",
                active
                  ? "font-semibold text-destructive"
                  : "text-muted-foreground hover:text-destructive"
              )}
              href={nav.href}
            >
              <span className="relative z-10">{nav.name}</span>
            </Popover.Button>
          </FadeIn>
        );
      })}
    </>
  );
};
