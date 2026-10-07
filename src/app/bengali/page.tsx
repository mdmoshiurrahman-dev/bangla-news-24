import MainNews from "@/components/MainNews";
import MainNewsTitle from "@/components/MainNewsTitle";
import MostReadTitle from "@/components/MostReadTitle";
import News from "@/components/News";
import { MostReadResponse } from "@/types/mostReadNews";
import {
  SectionArticle,
  SectionsResponse,
} from "@/types/NewsSection";
const RedirectedHome = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections", {
    next: { revalidate: 86400 },
  }); //24 hours
  const data: SectionsResponse = await res.json();
  const newsData = data.data;
  const [mainNews, ...otherNews] = newsData;
  const firstNews:SectionArticle = mainNews.articles[0]
  //---------------------------------------------------------

  //-----------------------------------------------------
  const mostReadDataRes = await fetch(
    "https://news-api-v2.vercel.app/api/news/most-read",
    { next: { revalidate: 86400 } },
  );
  const mostReadDataObj: MostReadResponse = await mostReadDataRes.json();
  const mostReadData = mostReadDataObj.data;

  return (
    <div className="mx-3">
      <div className="grid grid-cols-3 container mx-auto mt-5 gap-5">
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-3">
            <MainNews firstNews={firstNews} />
            <div className="border border-gray-300 rounded-2xl">
              {mainNews?.articles?.slice(0, 4).map((news) => (
                <MainNewsTitle news={news} key={news.id} />
              ))}
            </div>
          </div>
          <div>
            {otherNews.map((i) => (
              <News news={i} key={i.curationId} />
            ))}
          </div>
        </div>

        {/* side  */}
        <div className="col-span-1 border border-gray-300 rounded-xl p-3">
          <h2 className="font-bold text-xl">সর্বাধিক পঠিত</h2>
          <div>
            <ul className="list-decimal list-inside">
              {mostReadData.map((news) => (
                <MostReadTitle news={news} key={news.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedirectedHome;
