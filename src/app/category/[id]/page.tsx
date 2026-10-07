import SelectedNews from "@/components/SelectedNews";
import { NewsResponse } from "@/types/news";
export interface ParamsProps {
  params: Promise<{ id: string }>;
}
const CategoryPage = async({params}:ParamsProps) => {
    const {id} = await params
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${id}`);
    const data:NewsResponse = await res.json();
    return <div>
        <div className="border-b-2 border-red-600">
            <h2 className="py-4 text-xl font-bold ml-2">{data.title}</h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 mt-5">
            {
                data.data.map((news, index)=> <SelectedNews news={news} key={index}/>)
            }
        </div>
    </div>
}

export default CategoryPage;
