"use client";

import { MotionConfig, useReducedMotion } from "framer-motion";
import React, { ReactNode } from "react";
import { Pattern } from "@/components/pattern";
import Footer from "@/layouts/base/footer";
import { Header } from "@/layouts/base/header";
import { Providers } from "@/layouts/providers";

function BaseLayoutInner({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <div className="flex min-h-screen flex-col">
        <Pattern />
        <div className="flex-1">
          <Header />
          <main className="w-full flex-auto py-8">{children}</main>
          <Footer />
        </div>
      </div>
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
