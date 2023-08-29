import { Link, useNavigate } from "react-router-dom";
import Navbar from "../ui/Navbar";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <>
      <div className="mx-auto h-screen bg-zinc-900">
        <Navbar />
        <div className="space-y-4 p-20 text-center">
          <h1 className="text-5xl tracking-wide text-white">Page Not Found!</h1>
          <button className="rounded bg-gray-600 px-4 py-2 text-white hover:bg-red-700">
            <Link to="/"> Go to Homepage </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
