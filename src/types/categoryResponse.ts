export interface CategoryResponse {
  success: boolean;
  count: number;
  cachedAt: string;
  data: Category[];
}

export interface Category {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

