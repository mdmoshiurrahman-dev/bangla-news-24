export interface DisplayArticleProps {
    news: BodyBlock
}

import { BodyBlock } from "@/types/ArticleResponse";
import Image from "next/image";

const DisplayArticle = ({ news }:DisplayArticleProps) => {
  return (
    <div>
      {" "}
      {news.type === "image" ? (
        <div className="w-full">
          <div    className={`flex justify-center flex-col w-full  overflow-hidden`}
          >
            <Image
              src={news.url}
              height={news.height}
              width={news.width}
              alt={news.altText || "news"}
              className="object-cover rounded-xl transition-transform duration-300 hover:scale-[1.02]"
            />
            <p className="text-gray-500 text-sm my-1">{`${news.caption??''} (${news.copyrightHolder})`}</p>
          </div>
          
        </div>
      ) : news.type !== "subheading" ? (
        <article className="">
          <p className="my-5 leading-relaxed">{news.text}</p>
        </article>
      ) : (
        <h3 className="text-[20px] font-bold py-5">{news.text}</h3>
      )}
    </div>
  );
};

export default DisplayArticle;
