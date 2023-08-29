import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="relative flex items-center justify-between bg-red-800 p-4 text-white">
      <div>
        <NavLink to="/">🍿 Popcorn Archives </NavLink>
      </div>
      <div className="mr-3 flex items-center space-x-4">
        <NavLink to="/search"> Search </NavLink>
        <NavLink to="/my-lists/top-movies"> My List </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
