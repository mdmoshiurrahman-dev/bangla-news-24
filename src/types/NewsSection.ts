export interface SectionsResponse {
  success: boolean;
  count: number;
  cachedAt: string;
  data: NewsSection[];
}
export interface NewsSection {
  title: string;
  curationId: string;
  curationType: string;
  link: string | null;
  count: number;
  articles: SectionArticle[];
}
export interface SectionArticle {
  id: string;
  title: string;
  description: string | null;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string | null;
  lastPublished: string | null;
  source: string;
}
