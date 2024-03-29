import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Card } from "@/components/cards";
import { FadeIn } from "@/components/fadeIn";
import { SelectedSkill } from "@/components/skills";

export function SkillsCard() {
  return (
    <Card as={FadeIn} className="flex h-full flex-col gap-y-4 ">
      <div className="flex items-center justify-between text-lg ">
        <Card.Title as="span" className="font-semibold">
          Primary Skills
        </Card.Title>
        <Link
          className="text-xs text-destructive decoration-destructive  hover:underline dark:text-destructive dark:decoration-destructive"
          href={{
            pathname: "/skills",
          }}
        >
          他のスキルはこちら
          <ChevronRightIcon
            className="inline-block
              h-4 w-4 text-destructive dark:text-destructive"
          />
        </Link>
      </div>
      <Card.Description className="grid flex-1 items-center">
        <SelectedSkill
          className="grid grid-cols-4 gap-2 lg:gap-4"
          classNames={{ skill: "h-14 w-14 lg:h-20 lg:w-20" }}
          hasStar={false}
          skills={["Next.js", "React", "Tailwind CSS", "TypeScript"]}
        />
      </Card.Description>
    </Card>
  );
}
