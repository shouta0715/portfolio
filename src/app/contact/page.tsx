import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import { FadeIn } from "@/components/fadeIn";
import { Heading } from "@/components/heading";
import { SocialLinks } from "@/components/socialLinks";

export const metadata: Metadata = {
  title: "contact",
};

export default function Page() {
  return (
    <FadeIn>
      <Heading>Contact</Heading>
      <div className="mt-8 leading-7">
        <p>ご連絡は下記のメールアドレスまたは、TwitterのDMにてお願いします。</p>
      </div>
      <div className="mt-12 flex flex-col gap-y-6">
        <div>
          <p className="mb-3 text-lg font-semibold ">Social Links</p>
          <SocialLinks
            classNames={{
              wrapper: "gap-8",
            }}
          />
        </div>
        <div>
          <p className="mb-3 font-semibold">Email</p>
          <span className="flex items-center gap-x-2 text-sm text-gray-600 dark:text-gray-200">
            <EnvelopeIcon className="h-6 w-6" />
            kshouta0715@gmail.com
          </span>
        </div>
      </div>
    </FadeIn>
  );
}
