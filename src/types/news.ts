export interface NewsResponse {
  success: boolean;
  count: number;
  cachedAt: string;
  slug: string;
  topicId: string;
  title: string;
  page: number;
  pageCount: number;
  data: NewsArticles[];
}

export interface NewsArticles {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: string;
  source: string;
}
