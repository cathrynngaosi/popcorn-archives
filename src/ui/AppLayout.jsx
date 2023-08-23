import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div className="h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
