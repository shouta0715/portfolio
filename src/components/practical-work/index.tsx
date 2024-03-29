import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import { Card } from "@/components/cards";
import { FadeIn, FadeInWithStagger } from "@/components/fadeIn";
import {
  PracticalWork,
  practicalWorks,
} from "@/components/practical-work/work";
import { SelectedSkill } from "@/components/skills";

export function PracticalWork({ work }: { work: PracticalWork }) {
  return (
    <Card key={work.id} as={FadeIn} className="flex">
      <div className="flex flex-1 flex-col gap-y-4 px-2.5">
        <Card.Title
          as="div"
          className="line-clamp-3 flex justify-between gap-4 text-lg font-semibold md:text-xl lg:text-2xl"
        >
          <span className="text-2xl md:mt-1 md:text-4xl">{work.icon}</span>
          <span className="flex-1">{work.name}</span>
        </Card.Title>
        <div className="flex w-max flex-wrap items-center gap-2 rounded-md bg-sky-50 px-2 text-sm leading-7 text-sky-700">
          <p>{work.contract_type}</p>
          <p>{work.period}</p>
        </div>
        <Card.Description
          as="div"
          className="flex flex-1 flex-col justify-between"
        >
          <div className="grid gap-2">
            <p>{work.title}</p>
            <Accordion collapsible type="single">
              <AccordionItem value={`practical-work-${work.id}-description`}>
                <AccordionTrigger>作品の説明を表示する</AccordionTrigger>
                <AccordionContent>{work.description}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <SelectedSkill
            className="mt-4 flex flex-wrap justify-around"
            classNames={{ skill: "h-10 w-10 !rounded-md" }}
            hasStar={false}
            skills={work.technologies}
          />
        </Card.Description>
      </div>
    </Card>
  );
}

export const PracticalWorks = ({
  works = practicalWorks,
}: {
  works?: PracticalWork[];
}) => {
  return (
    <FadeInWithStagger className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
      {works.map((work) => (
        <PracticalWork key={work.id} work={work} />
      ))}
    </FadeInWithStagger>
  );
};
