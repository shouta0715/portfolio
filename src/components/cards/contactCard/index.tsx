import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { FadeIn, FadeInWithStagger } from "@/components/fadeIn";
import { SocialLinks } from "@/components/socialLinks";

export function ContactCard() {
  return (
    <FadeInWithStagger className="flex-1 rounded-xl border bg-white/20 p-3 dark:bg-gray-800 md:rounded-2xl md:p-6 md:shadow-lg">
      <FadeIn className="flex flex-col gap-y-6">
        <div>
          <p className="mb-3 text-lg font-semibold text-gray-600 dark:text-gray-200">
            Social Links
          </p>
          <SocialLinks
            classNames={{
              wrapper: "gap-8",
            }}
          />
        </div>
        <div>
          <p className="mb-3 font-semibold text-gray-600 dark:text-gray-200">
            Email
          </p>
          <span className="flex items-center gap-x-2 text-sm text-gray-600 dark:text-gray-200">
            <EnvelopeIcon className="h-6 w-6 " />
            kshouta0715@gmail.com
          </span>
        </div>
      </FadeIn>
    </FadeInWithStagger>
  );
}
