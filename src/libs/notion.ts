type EmojiIcon = {
  type: "emoji";
  emoji: string;
};

type RichText = {
  text: {
    content: string;
    link?: {
      url: string;
    };
  };
  type: string;
};

type RichTextProperty = {
  id: string;
  type: "rich_text";
  rich_text: RichText[];
};

type TitleProperty = {
  id: string;
  type: "title";
  title: {
    href: string;
  }[];
};

export type NotionPage = {
  object: "page";
  id: string;
  created_time: string;
  last_edited_time: string;
  icon: EmojiIcon;
  properties: {
    name: RichTextProperty;
    title: TitleProperty;
  };
  url: string;
};

type NotionListResponse = {
  results: NotionPage[] | null;
  next_cursor: null;
  has_more: boolean;
  request_id: string;
};

const { NOTION_API_KEY, NOTION_DATABASE_ID } = process.env;

export async function getNotionArticles(): Promise<NotionListResponse> {
  if (!NOTION_DATABASE_ID || !NOTION_API_KEY) {
    throw new Error("NOTION_DATABASE_ID is not set");
  }

  // await new Promise((resolve) => setTimeout(resolve, 1000000));

  return fetch(
    `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${NOTION_API_KEY}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sorts: [
          {
            direction: "ascending",
            timestamp: "created_time",
          },
        ],
      }),
      next: {
        revalidate: 300,
      },
    }
  ).then((res) => res.json());
}
