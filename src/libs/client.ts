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
  | "Tanstack/Query"
  | "Node.js"
  | "Nest.js"
  | "Jest"
  | "Testing Library"
  | "Playwright"
  | "MSW"
  | "Graph QL"
  | "Git"
  | "GitHub";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN as string,
  apiKey: process.env.API_KEY as string,
});

export type Skill = {
  id: string;
  name: SkillNames;
} & MicroCMSDate;

export type Work = {
  id: string;
  name: string;
  link: string;
  image: MicroCMSImage;
  skills: Skill[];
} & MicroCMSDate;

export const getWorks = async (queries?: MicroCMSQueries) => {
  const data = await client.getList<Work>({ endpoint: "works", queries });

  return data;
};

export const getSkills = async (queries?: MicroCMSQueries) => {
  const data = await client.getList<Skill>({ endpoint: "skills", queries });

  return data;
};
