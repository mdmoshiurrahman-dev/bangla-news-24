import SelectedNews from "./SelectedNews";
import { NewsSection } from "@/types/NewsSection";

export interface NewsProps {
  news: NewsSection
}
const News = ({ news }: NewsProps) => {
  const data = news.articles
  const isLengthLessThenTwo = data.length === 1;
  const isEmpty = data.length === 0;
  return (
    <div className={`${isEmpty ? "hidden" : ""}`}>
      <div className="border-b-2 border-[#C72D31] mt-4">
        <h2 className="my-5 font-bold text-xl">{news.title}</h2>
      </div>
      <div
        className={`grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 mt-4 ${isLengthLessThenTwo?  'grid-cols-3!':''}`}
      >
        {data.map((i) => (
          <SelectedNews news={i} key={i.id} />
        ))}
      </div>
    </div>
  );
};

export default News;
