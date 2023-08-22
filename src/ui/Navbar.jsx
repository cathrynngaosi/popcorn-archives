function Navbar() {
  return (
    <div className="flex bg-lightRed p-4 justify-between items-center text-white">
      <div>
        <h1>🍿 Popcorn Archives</h1>
      </div>
      <div className="flex space-x-6 items-center">
        <input
          type="text"
          placeholder="Search"
          className="focus:outline-none py-1 px-3 rounded-lg"
        />
        <h1>My List</h1>
      </div>
    </div>
  );
}

export default Navbar;
