import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fadeIn";
import { Heading } from "@/components/heading";
import { SocialLinks } from "@/components/socialLinks";
import { basicMetadata } from "@/libs/meta";

export const metadata: Metadata = {
  ...basicMetadata,
  title: "Contact",
  description: "倉橋 渉太の連絡先の情報です。",
};

export default function Page() {
  return (
    <Container>
      <FadeIn>
        <Heading>Contact</Heading>
        <div className="mt-8 text-sm  leading-7 text-muted-foreground md:text-base md:leading-7">
          <p>
            ご連絡は下記のメールアドレスまたは、TwitterのDMにてお願いします。
          </p>
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
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <EnvelopeIcon className="h-6 w-6" />
              kshouta0715@gmail.com
            </span>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
}
