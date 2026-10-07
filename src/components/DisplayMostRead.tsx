import { ArticleResponse } from "@/types/ArticleResponse";
import DisplayArticle from "./DisplayArticle";

export interface DisplayMostReadProps {
  news: {
    category: string;
    id: string;
    isLive: boolean;
    link: string;
    rank: number;
    source: string;
    title: string;
    type: "article" | string;
  };
}
const DisplayMostRead = async ({ news }: DisplayMostReadProps) => {
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${news.id}`,
  );
  const data:ArticleResponse = await res.json();
  const newsData = data.data?.body;

  return (
    <div>
      {newsData
        ? newsData.map((i, index) => <DisplayArticle news={i} key={index} />)
        : ""}
    </div>
  );
};

export default DisplayMostRead;
