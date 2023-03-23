export type CardProps = {
  title: string;
  description: string;
  urlToImage: string;
  author: string;
  publishedAt: string;
};

function Card({
  title,
  description,
  author,
  urlToImage,
  publishedAt,
}: CardProps) {
  const handleBookmark = () => {
    const data = { title, description, author, urlToImage, publishedAt };
    const getBookmark = JSON.parse(localStorage.getItem("bookmark") || "");
    if (getBookmark?.length < 0) return;
    let newData = [...(getBookmark?.length > 0 && getBookmark), data];
    localStorage.setItem("bookmark", JSON.stringify(newData));
  };

  return (
    <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
      <div className="flex flex-row sm:block hover-img">
        <a href="">
          <img
            className="max-w-full w-full mx-auto"
            src={urlToImage}
            alt={author}
          />
        </a>
        <div className="py-0 sm:py-3 pl-3 sm:pl-0">
          <h3 className="text-lg font-bold leading-tight mb-2">
            <a href="#">{title}</a>
          </h3>
          <p className="hidden md:block text-gray-600 leading-tight mb-1">
            {description}
          </p>
          <a className="text-gray-500" href="#">
            <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
            {author}
          </a>
          <div className="mt-2">
            <button
              className="text-indigo-400 bg-stone-300 p-2"
              onClick={handleBookmark}
            >
              Bookmark
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
