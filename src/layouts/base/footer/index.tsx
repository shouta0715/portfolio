import React from "react";
import { Border } from "@/components/border";
import { Container } from "@/components/container";
import { FadeIn, FadeInWithStagger } from "@/components/fadeIn";
import { SocialLinks } from "@/components/socialLinks";
import { NavLinks } from "@/layouts/base/nav";

export default function Footer() {
  return (
    <footer>
      <Container className="mt-10 sm:mt-14 lg:mt-16">
        <Border />
        <FadeInWithStagger className="mt-10 grid grid-cols-3 gap-y-4 text-center md:grid-cols-6">
          <NavLinks />
        </FadeInWithStagger>
        <FadeInWithStagger className="flex flex-col items-center justify-between py-10">
          <SocialLinks
            classNames={{
              wrapper: "gap-8",
            }}
          />
          <FadeIn className="mt-8 text-xs leading-7 text-gray-600 dark:text-gray-200">
            &copy; {new Date().getFullYear()} Shota Kurahashi
          </FadeIn>
        </FadeInWithStagger>
      </Container>
    </footer>
  );
}
