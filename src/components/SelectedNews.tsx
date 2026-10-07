import { SectionArticle } from "@/types/NewsSection";
import Image from "next/image";
import Link from "next/link";

export interface SelectedNewsProps {
  news: SectionArticle;
}

const SelectedNews = ({ news }: SelectedNewsProps) => {
  const newsData = news;
  return (
    <Link href={`/article/${news.id}`}>
      {newsData.imageUrl && (
        <div className="bg-white border border-gray-300 rounded-xl hover:border-[#C72D31] transition duration-200 hover:shadow-xl hover:text-[#C72D31] cursor-pointer flex flex-col justify-between h-full">
          <div>
            <Image
              className="rounded-t-xl"
              src={newsData.imageUrl}
              height="400"
              width="300"
              alt={newsData.imageAlt || 'news'}
            ></Image>
          </div>
          <div className="p-3 rounded-b-xl">
            <p className="text-[12px] text-[#C72D31] font-semibold">
              {newsData.category}
            </p>
            <p className="font-semibold py-2">{newsData.title}</p>
            <p className="text-gray-600 text-[14px]">
              {`${newsData.description ? `${newsData.description?.slice(0, 60) + "..."}` : ``}`}
            </p>
          </div>
        </div>
      )}
    </Link>
  );
};
export default SelectedNews;
