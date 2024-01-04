import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Card } from "@/components/cards";
import { FadeIn } from "@/components/fadeIn";
import { SocialLinks } from "@/components/socialLinks";

export function ContactCard() {
  return (
    <FadeIn className="max-w-xl flex-1">
      <Card className="flex  flex-col gap-y-6">
        <div>
          <Card.Title as="p" className="mb-3 text-lg font-semibold ">
            Contact And SNS
          </Card.Title>
          <SocialLinks
            classNames={{
              wrapper: "gap-8",
            }}
          />
        </div>
        <div>
          <Card.Title className="mb-3 font-semibold">Email</Card.Title>
          <span className="flex items-center gap-2 text-sm text-gray-600 md:text-base dark:text-gray-200">
            <EnvelopeIcon className="h-6 w-6 md:h-8 md:w-8" />
            kshouta0715@gmail.com
          </span>
        </div>
      </Card>
    </FadeIn>
  );
}
