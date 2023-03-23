import { useEffect, useState } from "react";
import api from "../../utils/api";
import Card, { CardProps } from "../card";

function Main() {
  const [news, setNews] = useState({
    data: [],
    loading: false,
    error: "",
  });
  const getProducts = async () => {
    setNews({
      ...news,
      loading: true,
    });
    try {
      const res = await fetch(api.news);
      const data = await res.json();
      setNews({
        ...news,
        data: data.articles,
        loading: false,
      });
    } catch (error) {
      setNews({
        ...news,
        loading: false,
        error: "Something went wrong",
      });
    }
  };

  useEffect(() => {
    getProducts();
  }, [api.news]);

  console.log(news);

  return (
    <div className="mt-12 px-4">
      <div className="w-full py-3">
        <h2 className="text-gray-800 text-2xl font-bold">
          <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
          Articles
        </h2>
      </div>
      <div className="flex flex-row flex-wrap -mx-3">
        {news.data.length > 0 &&
          news.data.map((item: CardProps) => (
            <Card
              key={item.publishedAt}
              author={item.author}
              description={item.description}
              title={item.title}
              urlToImage={item.urlToImage}
              publishedAt={item.publishedAt}
            />
          ))}
      </div>
    </div>
  );
}

export default Main;
