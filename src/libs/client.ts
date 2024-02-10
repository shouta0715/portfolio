import {
  MicroCMSDate,
  MicroCMSImage,
  MicroCMSQueries,
  createClient,
} from "microcms-js-sdk";

if (!process.env.SERVICE_DOMAIN || !process.env.API_KEY) {
  throw new Error("API キーとサービスドメインを環境変数に設定してください。");
}

export type SkillNames =
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "Tailwind CSS"
  | "React"
  | "Next.js"
  | "Astro"
  | "Storybook"
  | "Tanstack Query"
  | "Node.js"
  | "Nest.js"
  | "Jest"
  | "Testing Library"
  | "Playwright"
  | "MSW"
  | "Graph QL"
  | "Go"
  | "microCMS"
  | "Supabase"
  | "Firebase"
  | "AWS"
  | "GCP"
  | "Docker"
  | "Prisma"
  | "Vitest"
  | "SQL";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN as string,
  apiKey: process.env.API_KEY as string,
});

export type Skill = {
  id: string;
  name: SkillNames;
  description: string;
  level: number;
} & MicroCMSDate;

export type Tag = {
  id: string;
  name: string;
} & MicroCMSDate;

export type Work = {
  id: string;
  name: string;
  link: string;
  image: MicroCMSImage;
  skills: Skill[];
  github_url: string;
  description: string;
  tags?: Tag[];
} & MicroCMSDate;

export const getWorks = async (queries?: MicroCMSQueries) => {
  const data = await client.getList<Work>({
    endpoint: "works",
    queries,
    customRequestInit: {
      cache: "force-cache",
    },
  });

  return data;
};

export const getSkills = async (queries?: MicroCMSQueries) => {
  const data = await client.getList<Skill>({
    endpoint: "skills",
    queries,
    customRequestInit: {
      cache: "force-cache",
    },
  });

  return data;
};
export const getSkill = async (id: string, queries?: MicroCMSQueries) => {
  const data = await client.get<Skill>({
    endpoint: "skills",
    contentId: id,
    queries,
    customRequestInit: {
      cache: "force-cache",
    },
  });

  return data;
};
