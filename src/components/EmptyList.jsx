import { Link } from "react-router-dom";

function EmptyList() {
  return (
    <div className="mx-auto flex flex-col space-y-3 p-10 text-white">
      <p className="text-center">Nothing on the list yet!</p>
      <button className="mx-auto rounded bg-zinc-700 px-3 py-2 text-sm duration-100 hover:scale-105 hover:bg-red-800">
        <Link to="/search">Search films</Link>
      </button>
    </div>
  );
}

export default EmptyList;
