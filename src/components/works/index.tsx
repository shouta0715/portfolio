import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { MicroCMSListResponse } from "microcms-js-sdk";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import { Achievement } from "@/components/achievement";
import { Card } from "@/components/cards";
import { FadeIn } from "@/components/fadeIn";
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
      className={clsx("flex flex-col", classNames?.card)}
    >
      <Card.Image
        alt={work.name}
        className={clsx("mb-4", classNames?.cardImage)}
        height={work.image.height}
        href={work.link === myurl ? "/about" : work.link}
        priority
        src={work.image.url}
        width={work.image.width}
      />
      <div className="flex flex-col gap-y-2 px-2.5">
        <Card.Title
          as="div"
          className={clsx(
            "flex items-center justify-between text-lg font-semibold md:text-xl lg:text-2xl",
            classNames?.cardTitle
          )}
        >
          <span>{work.name}</span>
          <a
            className="flex items-center gap-2 text-sm text-destructive decoration-destructive hover:underline dark:text-destructive dark:decoration-destructive"
            href={work.github_url}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHubへ
            <ArrowTopRightOnSquareIcon className="inline-block h-4 w-4 text-destructive dark:text-destructive" />
          </a>
        </Card.Title>
        {work.tags && work.tags?.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {work.tags?.map((tag) => (
              <Achievement key={tag.id}>{tag.name}</Achievement>
            ))}
          </div>
        ) : (
          <div aria-hidden="true" className="h-7" />
        )}

        <Card.Description as="div" className="flex-1">
          <Accordion collapsible type="single">
            <AccordionItem value={`${work.id}description`}>
              <AccordionTrigger>作品の説明を表示する</AccordionTrigger>
              <AccordionContent className="">
                {work.description}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value={work.id}>
              <AccordionTrigger className={clsx(work.description ? "" : "")}>
                使用したスキルを表示する
              </AccordionTrigger>
              <AccordionContent className="-mx-4 py-4">
                <SelectedSkill
                  className="grid grid-cols-3  gap-2 md:grid-cols-4"
                  classNames={{ skill: "h-10 w-10 !rounded-md" }}
                  hasStar={false}
                  skills={skills}
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card.Description>
      </div>
    </Card>
  );
}

export async function Works({
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
    <div
      className={clsx("mt-12 grid grid-cols-1 gap-8 md:grid-cols-2", className)}
    >
      {works.map((work) => (
        <Work key={work.id} classNames={classNames} work={work} />
      ))}
    </div>
  );
}
