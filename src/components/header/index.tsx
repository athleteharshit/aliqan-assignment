function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-black">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2 py-3">
          <div className="flex justify-between">
            <div className="mx-w-10 text-2xl font-bold capitalize text-white flex items-center">
              Daily News
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
