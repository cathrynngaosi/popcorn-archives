import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar";

function AppLayout() {
  return (
    <div className="bg-zinc-900 p-10 ">
      <SearchBar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
