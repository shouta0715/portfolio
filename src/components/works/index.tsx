import clsx from "clsx";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { Card } from "@/components/cards";
import { FadeIn, FadeInWithStagger } from "@/components/fadeIn";
import { Work as TWork } from "@/libs/client";

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
  return (
    <Card key={work.id} as={FadeIn} className={classNames?.card}>
      <Card.Image
        alt={work.name}
        className={clsx("mb-4", classNames?.cardImage)}
        height={work.image.height}
        src={work.image.url}
        width={work.image.width}
      />
      <div className="px-2.5">
        <Card.Title
          as="h3"
          className={clsx(
            "text-lg font-semibold md:text-xl lg:text-2xl",
            classNames?.cardTitle
          )}
          href={`/works/${work.id}`}
        >
          {work.name}
        </Card.Title>
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
      className={clsx("mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2", className)}
    >
      {works.map((work) => (
        <Work key={work.id} classNames={classNames} work={work} />
      ))}
    </FadeInWithStagger>
  );
}
