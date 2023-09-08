"use client";

import { Popover } from "@headlessui/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React from "react";
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
                alt="Logo"
                className="h-12 w-12 rounded-full border border-gray-900/10 object-cover shadow-md shadow-gray-800/5 dark:border-gray-700"
                height={48}
                width={48}
              />
              <span className="font-semibold text-gray-900 dark:text-gray-200">
                Shouta
              </span>
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
                    className="relative z-10 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 ui-not-focus-visible:outline-none dark:hover:bg-gray-800"
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
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
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
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20 dark:bg-slate-900"
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          initial={{ opacity: 0, y: -32 }}
                          static
                        >
                          <FadeInWithStagger
                            className="flex flex-col gap-y-6"
                            slow
                          >
                            <MobileNavLinks />
                          </FadeInWithStagger>
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
