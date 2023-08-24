import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="relative flex items-center justify-between bg-red-800 p-4 text-white">
      <div>
        <NavLink to="/">🍿 Popcorn Archives </NavLink>
      </div>
      <div className="flex items-center space-x-6">
        <NavLink to="/my-list"> My List </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
