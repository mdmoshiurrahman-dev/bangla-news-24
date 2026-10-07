export interface ICategory {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}
export interface ICategoryRes {
  success: boolean;
  count: number;
  cachedAt: string;
  data: ICategory[];
}
// : true, : 9, cachedAt: '2026-10-06T04:19:49.975Z', data: Array(9)}
