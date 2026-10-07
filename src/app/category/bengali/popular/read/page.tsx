import DisplayMostRead from "@/components/DisplayMostRead";

const MostReadPage =  async() => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
    const data = await res.json();
  const mostReadNewsData = data.data
  return (
    <div className="max-w-200 mx-auto mt-5">
      {[...mostReadNewsData].splice(0,3).map((i) => (
        <DisplayMostRead news={i} key={i.id} />
      ))}
    </div>
  );
};

export default MostReadPage;
