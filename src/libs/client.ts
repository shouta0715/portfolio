import {
  MicroCMSDate,
  MicroCMSImage,
  MicroCMSQueries,
  createClient,
} from "microcms-js-sdk";

if (!process.env.SERVICE_DOMAIN || !process.env.API_KEY) {
  throw new Error("API キーとサービスドメインを環境変数に設定してください。");
}

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN as string,
  apiKey: process.env.API_KEY as string,
});

export type Work = {
  id: string;
  name: string;
  link: string;
  image: MicroCMSImage;
} & MicroCMSDate;

export const getWorks = async (queries?: MicroCMSQueries) => {
  const data = await client.getList<Work>({ endpoint: "works", queries });

  return data;
};
