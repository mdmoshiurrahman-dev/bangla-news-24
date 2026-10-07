import { MostReadArticleData } from "@/types/mostReadNews";
import Link from "next/link";

export interface MostReadTitleProps {
  news: MostReadArticleData;
}

const MostReadTitle = ({ news }: MostReadTitleProps) => {
  return (
    <Link href={`/article/${news.id}`}>
      <li className="m-2 hover:text-[#C72D31] marker:text-[#C72D31] marker:text-[18px] marker:font-semibold cursor-pointer">
        {news.title}
      </li>
    </Link>
  );
};

export default MostReadTitle;
