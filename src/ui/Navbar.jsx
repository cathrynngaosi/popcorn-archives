import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="relative flex bg-red-800 p-4 justify-between items-center text-white">
      <div>
        <NavLink to="/">🍿 Popcorn Archives </NavLink>
      </div>
      <div className="flex space-x-6 items-center">
        <input
          type="text"
          placeholder="Search"
          className="focus:outline-none py-1 px-3 rounded-lg"
        />
        <NavLink to="/my-list"> My List </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
