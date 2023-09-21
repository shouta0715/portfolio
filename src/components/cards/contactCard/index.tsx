import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Card } from "@/components/cards";
import { SocialLinks } from "@/components/socialLinks";

export function ContactCard() {
  return (
    <div className="flex-1">
      <Card className="flex flex-col gap-y-6">
        <div>
          <Card.Title as="p" className="mb-3 text-lg font-semibold ">
            Social Links
          </Card.Title>
          <SocialLinks
            classNames={{
              wrapper: "gap-8",
            }}
          />
        </div>
        <div>
          <Card.Title className="mb-3 font-semibold">Email</Card.Title>
          <span className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-200">
            <EnvelopeIcon className="h-6 w-6" />
            kshouta0715@gmail.com
          </span>
        </div>
      </Card>
    </div>
  );
}
