export type ArticlesPagination = {
  message: string;
  data?: MainArticle[];
  currentPage?: number;
  totalPages?: number;
};

export type MainArticle = {
  articleId?: number;
  name: string;
  type: "standard" | "video" | "audio" | "gallery" | "quote" | "link";
  description: string;
  imageUrl?: string[];
  mediaUrl?: string;
  imageName?: string;
  quote?: string;
  articleCategories?: ArticleCategory[];
};

type ArticleCategory = {
  title: string;
  link: string;
};
