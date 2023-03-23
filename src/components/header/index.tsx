import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-black">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2 py-3">
          <div className="flex items-center">
            <NavLink
              to="/"
              className="mx-w-10 text-2xl font-bold capitalize text-white flex items-center"
            >
              Daily News
            </NavLink>
            <NavLink to="/book-mark" className="text-white ml-12">
              Bookmark
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
