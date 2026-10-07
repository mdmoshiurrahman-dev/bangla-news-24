import { SectionArticle } from "@/types/NewsSection";
import Link from "next/link";

export interface MainNewsTitleProps {
  news: SectionArticle
}

const MainNewsTitle = ({ news }: MainNewsTitleProps) => {
  return (
    <Link href={`/article/${news.id}`}>
      <div className="px-2 py-3  border-b border-gray-300 hover:bg-gray-100 cursor-pointer ">
        <p className="text-[12px] text-[#C72D31] font-semibold">
          {news.category}
        </p>
        <p>{news.title}</p>
      </div>
    </Link>
  );
};

export default MainNewsTitle;
