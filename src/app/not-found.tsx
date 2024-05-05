import React from "react";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fadeIn";
import { SkillTile } from "@/components/skill-tile";

export default function NotFound() {
  return (
    <FadeIn>
      <div className="relative max-w-full gap-x-14 overflow-hidden md:flex md:items-center">
        <Container className="mx-0 w-full max-w-2xl shrink-0 rounded-xl md:max-w-md lg:max-w-lg  dark:bg-gray-900/85">
          <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
            <p className="text-base font-semibold leading-8 text-destructive">
              404
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              お探しのページが見つかりませんでした。
            </p>
            <div className="mt-10">
              <a
                className="text-sm font-semibold leading-7 text-primary hover:underline underline-offset-4"
                href="/"
              >
                ホームに戻る
              </a>
            </div>
          </div>
        </Container>

        <div className="p-6 md:p-0">
          <SkillTile />
        </div>
      </div>
    </FadeIn>
  );
}
