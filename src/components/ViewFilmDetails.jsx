import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import { getMovieDetails } from "../services/apiMovies";
import { FaBookmark, FaCheck, FaHeart, FaMinus, FaStar } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { useList } from "../context/ListContext";
import LabelDetails from "./LabelDetails";
import LoadingScreen from "./LoadingScreen";

function ViewFilmDetails() {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const {
    topMovies,
    setTopMovies,
    topSeries,
    setTopSeries,
    moviesBucketlist,
    setMoviesBucketlist,
    seriesBucketlist,
    setSeriesBucketlist,
  } = useList();

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

  const filmDetails = { Title, Poster, imdbID, Year, Runtime, imdbRating };

  const listed =
    Type === "movie"
      ? topMovies.find((movie) => movie.imdbID === imdbID) !== undefined
        ? "My Top Movies"
        : moviesBucketlist.find((movie) => movie.imdbID === imdbID) !==
            undefined && "Movies Bucketlist"
      : topSeries.find((series) => series.imdbID === imdbID) !== undefined
      ? "My Top Series"
      : seriesBucketlist.find((series) => series.imdbID === imdbID) !==
          undefined && "Series Bucketlist";

  function moveBack() {
    navigate(-1);
  }

  function handleAddToList(film, type) {
    switch (type) {
      case "My Top Movies":
        setTopMovies((topMovies) => [...topMovies, film]);
        break;

      case "Movies Bucketlist":
        setMoviesBucketlist((movieBucketlist) => [...movieBucketlist, film]);
        break;

      case "My Top Series":
        setTopSeries((topSeries) => [...topSeries, film]);
        break;

      case "Series Bucketlist":
        setSeriesBucketlist((seriesBucketlist) => [...seriesBucketlist, film]);
        break;
    }
  }

  function handleDeleteFromList(id, type) {
    switch (type) {
      case "My Top Movies":
        setTopMovies((topMovies) =>
          topMovies.filter((movie) => movie.imdbID !== imdbID),
        );
        break;

      case "Movies Bucketlist":
        setMoviesBucketlist((movieBucketlist) =>
          movieBucketlist.filter((movie) => movie.imdbID !== imdbID),
        );
        break;

      case "My Top Series":
        setTopSeries((topSeries) =>
          topSeries.filter((series) => series.imdbID !== imdbID),
        );
        break;

      case "Series Bucketlist":
        setSeriesBucketlist((seriesBucketlist) =>
          seriesBucketlist.filter((series) => series.imdbID !== imdbID),
        );
        break;
    }
  }

  return (
    <div className="bg-zinc-900 p-10">
      {isLoading && <LoadingScreen />}

      <div>
        <h1
          className="flex cursor-pointer items-center text-white duration-100 hover:text-red-500"
          onClick={moveBack}
        >
          <BiArrowBack className="mr-2" /> Back
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
            <LabelDetails label="Release Date" value={Released} />

            {Type === "movie" ? (
              <>
                <LabelDetails label="Directed by" value={Director} />
                <LabelDetails label="Written by" value={Writer} />
              </>
            ) : (
              <LabelDetails label="Created by" value={Writer} />
            )}
            <LabelDetails label="Cast" value={Actors} />
          </div>
        </div>

        <div className="space-y-2">
          {listed !== false ? (
            <>
              <div className="flex w-full cursor-default items-center space-x-2 rounded bg-white px-6 py-3 text-sm font-medium uppercase text-black">
                <span className="mx-auto flex items-center text-center">
                  <FaCheck className="mb-px mr-2 text-xs" />
                  <h1>Added to {listed}</h1>
                </span>
              </div>

              <button
                className="flex w-full cursor-pointer items-center space-x-2 rounded bg-zinc-700 px-6 py-3 text-sm font-medium uppercase text-white"
                onClick={() => handleDeleteFromList(imdbID, listed)}
              >
                <FaMinus />
                <h1>Remove from list</h1>
              </button>
            </>
          ) : Type === "movie" ? (
            <>
              <button
                className="flex w-full rounded bg-red-800 px-6 py-3 text-sm font-medium uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none"
                type="button"
                onClick={() => handleAddToList(filmDetails, "My Top Movies")}
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
                  handleAddToList(filmDetails, "Movies Bucketlist")
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
                onClick={() => handleAddToList(filmDetails, "My Top Series")}
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
                  handleAddToList(filmDetails, "Series Bucketlist")
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
