import { SectionArticle } from "@/types/NewsSection";
import Image from "next/image";
import Link from "next/link";

export interface MainNewsProps {
  firstNews:SectionArticle
  
}

const MainNews = ({ firstNews }: MainNewsProps) => {
  const fullDateBangla = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
   <Link href={`http://localhost:3000/article/${firstNews.id}`}>
    <div className="bg-[#FFFFFF] rounded-xl  cursor-pointer hover:text-[#C72D31] border border-gray-300">
      <div className="flex justify-center bg-[#AFA79F] rounded-t-xl overflow-hidden">
        <Image
          src={firstNews.imageUrl}
          height="600"
          width="400"
          alt={firstNews.imageAlt}
          className=" hover:scale-105 transition duration-400"
        />
      </div>
      <div className="p-5">
        <p className="text-[12px] text-[#C72D31]">{firstNews.category}</p>
        <h2 className="font-bold text-xl my-1">{firstNews.title}</h2>
        <p className="text-gray-600 text-[14px] my-1">
          {firstNews.description}
        </p>
        <p className="text-[12px] text-gray-500">{fullDateBangla}</p>
      </div>
    </div>
   </Link>
  );
};

export default MainNews;
