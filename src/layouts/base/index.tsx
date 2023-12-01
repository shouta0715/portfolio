"use client";

import { MotionConfig, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";
import React, { ReactNode } from "react";
import { Container } from "@/components/container";
import { Pattern } from "@/components/pattern";
import Footer from "@/layouts/base/footer";
import { Header } from "@/layouts/base/header";
import { Providers } from "@/layouts/providers";

const DynamicGlobe = dynamic(
  () => import("@/components/globe").then((mod) => mod.Globe),
  {
    ssr: false,
  }
);

function BaseLayoutInner({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <Pattern>
        <div className="flex min-h-screen flex-col">
          <div className="flex-1 bg-white/10">
            <Header />
            <Container as="main" className="w-full flex-auto py-8">
              {children}
            </Container>
            <Footer />
          </div>
          <DynamicGlobe />
        </div>
      </Pattern>
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
