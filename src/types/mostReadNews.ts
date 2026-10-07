export interface MostReadResponse {
  success: boolean;
  count: number;
  cachedAt: string;
  generated: string;
  data: MostReadArticleData[];
}

export interface MostReadArticleData {
  id: string;
  title: string;
  description: string | null;
  link: string;
  imageUrl: string | null;
  imageAlt: string | null;
  category: string;
  type: "article" | string; // Restricted string literal if 'type' has strict enums
  isLive: boolean;
  firstPublished: string; // ISO 8601 Date string
  lastPublished: string | null;
  source: string;
  rank: number;
}
