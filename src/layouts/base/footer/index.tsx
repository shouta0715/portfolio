import React from "react";
import { Border } from "@/components/border";
import { Container } from "@/components/container";
import { FadeIn, FadeInWithStagger } from "@/components/fadeIn";
import { SocialLinks } from "@/components/socialLinks";

export default function Footer() {
  return (
    <footer>
      <Container className="mt-20 sm:mt-24 lg:mt-28">
        <Border />
        <FadeInWithStagger className="flex flex-col items-center justify-between py-10">
          <SocialLinks
            classNames={{
              wrapper: "gap-8",
            }}
          />
          <FadeIn className="mt-8 text-xs leading-5 text-gray-600 dark:text-gray-200">
            &copy; {new Date().getFullYear()} Shota Kurahashi
          </FadeIn>
        </FadeInWithStagger>
      </Container>
    </footer>
  );
}
