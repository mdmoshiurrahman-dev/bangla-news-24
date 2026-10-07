import { NewsArticles } from "@/types/news";
import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
const MarqueeTextComponent = async () => {
  const headlines = process.env.LATEST_HEADLINES_APT;
  if (!headlines) {
    throw new Error("API is not found");
  }
  const response = await fetch(headlines,{next:{revalidate:86400}});
  const data = await response.json();
  const headLinesData = data.data as NewsArticles[];
  const cropToTen = headLinesData.slice(0, 10);
  return (
    <div className="bg-[#C72D31]">
      <div className="container mx-auto flex  items-center">
        <div className="bg-[#8b1519] text-white px-2 py-1">
          <p className="">সর্বশেষ</p>
        </div>
        <div className="overflow-x-hidden  text-white  py-1">
          <MarqueeText direction="right" duration={20}>
            {cropToTen.map((h, index) => (
              <Link
                href={`/article/${h.id}`}
                key={index}
                className="hover:underline"
              >
                <span>
                  <span className="mx-2">•</span>
                  <span>{h.title}</span>
                </span>
              </Link>
            ))}
          </MarqueeText>
        </div>
      </div>
    </div>
  );
};

export default MarqueeTextComponent;
