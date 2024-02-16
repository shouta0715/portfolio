export type Article = {
  id: number;
  post_type: string;
  title: string;
  slug: string;
  comments_count: number;
  liked_count: number;
  body_letters_count: number;
  article_type: string;
  emoji: string;
  is_suspending_private: boolean;
  published_at: string;
  body_updated_at: string;
  source_repo_updated_at: string;
  pinned: boolean;
  path: string;
  user: {
    id: number;
    username: string;
    name: string;
    avatar_small_url: string;
  };
};

export type ZennArticles = {
  articles: Article[];
};

export const zennurl = "https://zenn.dev";

export const getZennArticles = async (): Promise<ZennArticles> => {
  const url = `${zennurl}/api/articles?username=shouta0715&order=latest`;

  const res = await fetch(url);

  const json = (await res.json()) as ZennArticles;

  return json;
};

export const getZennArticle = async (slug: string): Promise<Article> => {
  const url = `${zennurl}/api/articles/${slug}`;

  const res = await fetch(url, {
    next: {
      revalidate: 3600,
    },
  });

  const { article } = (await res.json()) as { article: Article };

  return article;
};
