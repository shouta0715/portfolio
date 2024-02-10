"use client";

import { Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { Suspense } from "react";
import { Container } from "@/components/container";
import { FadeInWithStagger } from "@/components/fadeIn";
import { Logo } from "@/components/logo";
import { ToggleTheme } from "@/components/theme";
import { MobileNavLinks, NavLinks } from "@/layouts/base/nav";

export function Header() {
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
            <Link
              aria-label="Home"
              className="flex items-center gap-x-4"
              href="/"
            >
              <Logo
                alt="Shouta's avatar"
                className="h-12 w-12 rounded-full border  border-border object-cover"
                height={48}
                width={48}
              />
              <span className="font-semibold text-primary">Shouta</span>
            </Link>
            <FadeInWithStagger className="hidden md:flex md:gap-10">
              <NavLinks />
            </FadeInWithStagger>
          </div>
          <div className="flex items-center gap-6">
            <ToggleTheme />
            <Popover className="md:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    aria-label="ナビゲーションを開く"
                    className="relative z-10 inline-flex items-center rounded-lg stroke-primary p-2  hover:bg-muted"
                  >
                    {open ? (
                      <XMarkIcon className="h-6 w-6" />
                    ) : (
                      <Bars3Icon className="h-6 w-6" />
                    )}
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          animate={{ opacity: 1 }}
                          as={motion.div}
                          className="fixed inset-0 z-0 bg-muted/60 backdrop-blur"
                          exit={{ opacity: 0 }}
                          initial={{ opacity: 0 }}
                          static
                        />
                        <Popover.Panel
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          as={motion.div}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-background px-6 pb-6 pt-32 shadow-2xl shadow-primary/20 "
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          initial={{ opacity: 0, y: -32 }}
                          static
                        >
                          <Suspense>
                            <FadeInWithStagger className="flex flex-col gap-y-6">
                              <MobileNavLinks />
                            </FadeInWithStagger>
                          </Suspense>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
          </div>
        </Container>
      </nav>
    </header>
  );
}
