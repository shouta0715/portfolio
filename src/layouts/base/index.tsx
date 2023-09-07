"use client";

import { MotionConfig, useReducedMotion } from "framer-motion";
import React, { ReactNode } from "react";
import { Header } from "@/layouts/base/header";
import { Providers } from "@/layouts/providers";

function BaseLayoutInner({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <Header />
      <main className="w-full flex-auto">{children}</main>
    </MotionConfig>
  );
}

export function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <BaseLayoutInner>{children}</BaseLayoutInner>
    </Providers>
  );
}
