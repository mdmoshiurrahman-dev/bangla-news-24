import DisplayArticle from "@/components/DisplayArticle";
import { ArticleResponse } from "@/types/ArticleResponse";
const ArticlePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const res = await fetch(`https://news-api-v2.vercel.app/api/article/${slug}`);
  const data:ArticleResponse = await res.json();
  const newsData = data?.data?.body
  if(!newsData){
    return <div className="flex justify-center items-center mt-30 w-full">
      <p className="text-red-500">Not found</p>
    </div>
  }
  const dateObj = new Date(data.data.firstPublished);
  const formatter = new Intl.DateTimeFormat("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  const banglaDateTime = formatter.format(dateObj);
  return (
    <div className="max-w-3xl mx-auto mt-6">
      <div className="border-b border-gray-400">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
          {data.data.title}
        </h2>
      </div>
      <p className="py-2 text-gray-600 text-sm">{`${banglaDateTime}  ${data.data.wordCount} শব্দ`}</p>
      <div className="pt-3 border-t border-gray-400">
        {newsData.map((news, index) => (
          <DisplayArticle news={news} key={index} />
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        {data.data.tags.map((tag, index) => (
          <p className="bg-[#F5F5F5] px-3 py-1 rounded-xl" key={index}>
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ArticlePage;
