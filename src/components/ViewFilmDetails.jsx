import { useLoaderData, useNavigate } from "react-router-dom";
import { getMovieDetails } from "../services/apiMovies";
import { FaBookmark, FaHeart, FaStar } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

function ViewFilmDetails() {
  const [topMovies, setTopMovies] = useLocalStorageState([], "topMovies");
  const [topSeries, setTopSeries] = useLocalStorageState([], "topSeries");
  const [moviesBucketlist, setMoviesBucketlist] = useLocalStorageState(
    [],
    "moviesBucketlist",
  );
  const [seriesBucketlist, setSeriesBucketlist] = useLocalStorageState(
    [],
    "seriesBucketlist",
  );

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
    imdbID,
  } = useLoaderData();

  function moveBack() {
    navigate(-1);
  }

  function handleAddTopMovies(movie) {
    setTopMovies((topMovies) => [...topMovies, movie]);
  }

  function handleAddMoviesBucketlist(movie) {
    console.log(movie);
    setMoviesBucketlist((topMovies) => [...topMovies, movie]);
  }

  function handleAddTopSeries(series) {
    setTopSeries((topMovies) => [...topMovies, series]);
  }

  function handleAddSeriesBucketlist(series) {
    setSeriesBucketlist((topMovies) => [...topMovies, series]);
  }

  return (
    <div className="bg-zinc-900 p-10">
      <div>
        <h1
          className="flex cursor-pointer items-center text-white duration-100 hover:text-red-500"
          onClick={moveBack}
        >
          <BiArrowBack className="mr-2" /> Back to Search Results
        </h1>
      </div>

      <div className="mx-auto flex w-full flex-col space-y-6 px-3 py-10 md:flex-row md:space-x-6 md:space-y-0 md:px-5">
        <div className="">
          <img src={Poster} alt="" className="h-full w-full md:max-w-fit" />
        </div>

        <div className="w-full space-y-4 text-white md:w-2/4 ">
          <div className="flex items-start justify-between">
            <h1 className="text-5xl font-medium tracking-wide ">{Title}</h1>
          </div>

          <div className="flex md:space-x-1">
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

          <div className="border-y py-3 font-thin italic text-red-50">
            {Plot}
          </div>

          <div className="mt-0 space-y-3 pb-4">
            <div className="space-x-1">
              <span className="font-light text-gray-300">Release Date: </span>
              <span className="font-medium text-stone-50">{Released} </span>
            </div>

            {Type === "movie" ? (
              <>
                <div className="space-x-1">
                  <s30n className="font-light text-gray-100">
                    Directed by:{" "}
                  </s30n>
                  <span className="font-medium text-stone-50">{Writer} </span>
                </div>
                <div className="space-x-1">
                  <span className="font-light text-gray-300">Written by: </span>
                  <span className="font-medium text-stone-50">{Writer} </span>
                </div>
              </>
            ) : (
              <>
                <div className="space-x-1">
                  <span className="font-light text-gray-300">Created by: </span>
                  <span className="font-medium text-stone-50">{Writer} </span>
                </div>
              </>
            )}
            <div className="space-x-1">
              <span className="font-light text-gray-300">Cast: </span>
              <span className="font-medium text-stone-50">{Actors} </span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          {Type === "movie" ? (
            <>
              <button
                className="flex w-full rounded bg-red-800 px-6 py-3 text-sm font-medium uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none"
                type="button"
                onClick={() =>
                  handleAddTopMovies({
                    Title,
                    imdbID,
                    Year,
                    Runtime,
                    imdbRating,
                  })
                }
              >
                <span className="mx-auto flex items-center text-center">
                  <FaHeart className="mb-px mr-2 text-xs" />
                  Add to My Top Movies
                </span>
              </button>
              <button
                className="flex w-full rounded bg-zinc-700 px-6 py-3 text-sm font-medium uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none"
                type="button"
                onClick={() =>
                  handleAddMoviesBucketlist({
                    Title,
                    imdbID,
                    Year,
                    Runtime,
                    imdbRating,
                  })
                }
              >
                <span className="mx-auto flex items-center text-center">
                  <FaBookmark className="mb-px mr-2 text-xs" />
                  Add to Movie Bucketlist
                </span>
              </button>
            </>
          ) : (
            <>
              <button
                className="flex w-full rounded bg-red-800 px-6 py-3 text-sm font-medium uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none"
                type="button"
                onClick={() =>
                  handleAddTopSeries({
                    Title,
                    imdbID,
                    Year,
                    Runtime,
                    imdbRating,
                  })
                }
              >
                <span className="mx-auto flex items-center text-center">
                  <FaHeart className="mb-px mr-2 text-xs" />
                  Add to My Top Series
                </span>
              </button>
              <button
                className="flex w-full rounded bg-zinc-700 px-6 py-3 text-sm font-medium uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none"
                type="button"
                onClick={() =>
                  handleAddSeriesBucketlist({
                    Title,
                    imdbID,
                    Year,
                    Runtime,
                    imdbRating,
                  })
                }
              >
                <span className="mx-auto flex items-center text-center">
                  <FaBookmark className="mb-px mr-2 text-xs" />
                  Add to Series Bucketlist
                </span>
              </button>
            </>
          )}
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
