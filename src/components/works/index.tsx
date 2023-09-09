import clsx from "clsx";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { Card } from "@/components/cards";
import { FadeIn, FadeInWithStagger } from "@/components/fadeIn";
import { SelectedSkill } from "@/components/skills";
import { Work as TWork } from "@/libs/client";

const myurl = "https://www.kurahashi.me/";

type ClassNames = {
  card?: string;
  cardImage?: string;
  cardTitle?: string;
};

type WorkProps = {
  work: TWork;
  classNames?: ClassNames;
};

function Work({ work, classNames }: WorkProps) {
  const skills = work.skills.map((skill) => skill.name);

  return (
    <Card
      key={work.id}
      as={FadeIn}
      className={clsx("flex flex-col ", classNames?.card)}
    >
      <Card.Image
        alt={work.name}
        className={clsx("mb-4", classNames?.cardImage)}
        height={work.image.height}
        href={work.link === myurl ? "/about" : work.link}
        src={work.image.url}
        width={work.image.width}
      />
      <div className="flex flex-1 flex-col gap-y-4 px-2.5">
        <Card.Title
          as="div"
          className={clsx(
            "text-lg font-semibold md:text-xl lg:text-2xl",
            classNames?.cardTitle
          )}
        >
          {work.name}
        </Card.Title>
        <Card.Description as="div" className="-mx-4 grid flex-1">
          <SelectedSkill
            className="grid grid-cols-3  gap-2 md:grid-cols-4"
            classNames={{ skill: "h-10 w-10 !rounded-md" }}
            skills={skills}
          />
        </Card.Description>
      </div>
    </Card>
  );
}

export function Works({
  works,
  classNames,
  className,
}: {
  works: MicroCMSListResponse<TWork>["contents"];
} & {
  className?: string;
  classNames?: ClassNames;
}) {
  return (
    <FadeInWithStagger
      className={clsx("mt-12 grid grid-cols-1 gap-8 md:grid-cols-2", className)}
    >
      {works.map((work) => (
        <Work key={work.id} classNames={classNames} work={work} />
      ))}
    </FadeInWithStagger>
  );
}
