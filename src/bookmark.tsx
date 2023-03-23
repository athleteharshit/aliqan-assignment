import Header from "./components/header";

function Bookmark() {
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
      </div>
    </>
  );
}

export default Bookmark;
