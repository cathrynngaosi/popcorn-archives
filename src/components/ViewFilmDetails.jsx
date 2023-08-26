import { useLoaderData, useNavigate } from "react-router-dom";
import { getMovieDetails } from "../services/apiMovies";
import { FaBookmark, FaHeart, FaStar } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";

function ViewFilmDetails() {
  const navigate = useNavigate();
  const {
    Title,
    Plot,
    Poster,
    Director,
    Year,
    Runtime,
    Type,
    Released,
    Genre,
    Writer,
    Actors,
    imdbRating,
  } = useLoaderData();

  return (
    <div className="m-20 mx-auto flex w-3/4 rounded-lg border-2 border-red-100">
      <div className="w-1/3">
        <img
          src={Poster}
          alt=""
          className="w-full rounded-bl-lg rounded-tl-lg"
        />
      </div>
      <div className="w-2/3 space-y-4 bg-gray-50 p-5">
        <div className="flex items-start justify-between">
          <h1 className="text-4xl font-medium tracking-wide text-black">
            {Title}
          </h1>
        </div>

        <div className="flex space-x-1">
          {Genre.split(",").map((genre) => {
            return (
              <p
                className="rounded-full border border-zinc-500 bg-zinc-500 px-4 py-1 text-[10px] text-slate-950 text-white"
                key={genre}
              >
                {genre}
              </p>
            );
          })}
        </div>

        <div className="flex space-x-2 text-sm">
          <span> {Year} &bull; </span>
          <span> {Runtime} &bull; </span>
          <div className="flex">
            <FaStar className="mr-1 mt-0.5 text-sm text-yellow-400" />{" "}
            {imdbRating} IMDB Rating
          </div>
        </div>

        <div className="border-y py-3 font-thin italic text-red-950">
          {Plot}
        </div>

        <div className="mt-0 space-y-3 border-b pb-4">
          <div className="space-x-1">
            <span className="text-gray-700">Release Date: </span>
            <span className="font-medium text-red-950">{Released} </span>
          </div>

          {Type === "movie" ? (
            <>
              <div className="space-x-1">
                <span className="text-gray-700">Directed by: </span>
                <span className="font-medium text-red-950">{Writer} </span>
              </div>
              <div className="space-x-1">
                <span className="text-gray-700">Written by: </span>
                <span className="font-medium text-red-950">{Writer} </span>
              </div>
            </>
          ) : (
            <>
              <div className="space-x-1">
                <span className="text-gray-700">Created by: </span>
                <span className="font-medium text-red-950">{Writer} </span>
              </div>
            </>
          )}
          <div className="space-x-1">
            <span className="text-gray-700">Cast: </span>
            <span className="font-medium text-red-950">{Actors} </span>
          </div>
        </div>

        <div className="flex">
          <button
            className="mb-1 mr-1 flex items-center rounded bg-red-800 px-6 py-3 text-sm font-medium uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none"
            type="button"
          >
            <FaHeart className="mb-px mr-2 text-xs" />
            Add to My Top {Type === "movie" ? "Movies" : "Series"}
          </button>
          <button
            className="mb-1 mr-1 flex items-center rounded bg-zinc-800 px-6 py-3 text-sm font-medium uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none"
            type="button"
          >
            <FaBookmark className="mb-px mr-2 text-xs" />
            Add to {Type === "movie" ? "Movies" : "Series"} Bucketlist
          </button>
        </div>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const movieDetails = await getMovieDetails(params.imdbID);
  return movieDetails;
}

export default ViewFilmDetails;
