import Card, { CardProps } from "./components/card";
import Header from "./components/header";
import { useState, useEffect } from "react";

function Bookmark() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getBookmark = JSON.parse(localStorage.getItem("bookmark") || "");
    if (getBookmark?.length <= 0) return;
    setNews(getBookmark);
  }, []);

  return (
    <>
      <Header />
      <div className="mt-12 px-4">
        <div className="w-full py-3">
          <h2 className="text-gray-800 text-2xl font-bold">
            <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
            Bookmark
          </h2>
        </div>
        <div className="flex flex-row flex-wrap -mx-3">
          {news?.length > 0 &&
            news?.map((item: CardProps) => {
              if (!item) return null;
              return (
                <Card
                  key={item.publishedAt}
                  author={item.author}
                  description={item.description}
                  title={item.title}
                  urlToImage={item.urlToImage}
                  publishedAt={item.publishedAt}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Bookmark;
