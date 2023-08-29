import { useLoaderData, useNavigation } from "react-router-dom";
import { getMovieDetails } from "../services/apiMovies";
import { FaBookmark, FaHeart, FaMinus, FaStar } from "react-icons/fa";
import { useList } from "../context/ListContext";
import LabelDetails from "../components/LabelDetails";
import LoadingScreen from "../components/LoadingScreen";
import BackButton from "../components/BackButton";
import Button from "../components/Button";

function ViewFilmDetails() {
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

      <BackButton />

      <div className="mx-auto flex w-full flex-col space-y-6 px-3 py-10 md:flex-row md:space-x-6 md:space-y-0 md:px-5">
        <div className="">
          <img src={Poster} alt="" className="h-full w-full md:max-w-fit" />
        </div>

        <div className="w-full space-y-4 text-white md:w-2/4 ">
          <div className="flex items-start justify-center md:justify-start">
            <h1 className="text-center text-3xl font-medium tracking-wide md:text-start md:text-5xl ">
              {Title}
            </h1>
          </div>

          <div className="flex justify-center space-x-1 md:justify-start">
            {Genre.split(",").map((genre) => {
              return (
                <p
                  className="rounded-full border border-zinc-500 bg-zinc-500 px-4 py-1 text-[10px] text-white"
                  key={genre}
                >
                  {genre}
                </p>
              );
            })}
          </div>

          <div className="flex justify-center space-x-2 md:justify-start">
            <span> {Year} &bull; </span>
            <span> {Runtime} &bull; </span>
            <div className="flex">
              <FaStar className="mr-1 mt-0.5 text-sm text-yellow-400" />{" "}
              {imdbRating} IMDB Rating
            </div>
          </div>

          <div className="border-y py-3 text-center font-thin italic text-red-50 md:text-start">
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
              <Button
                handleClick={() => handleDeleteFromList(imdbID, listed)}
                color="zinc-700"
              >
                <FaMinus className="my-auto mr-2 text-xs" />
                Remove from {listed}
              </Button>
            </>
          ) : Type === "movie" ? (
            <>
              <Button
                handleClick={() =>
                  handleAddToList(filmDetails, "My Top Movies")
                }
                color="red-800"
              >
                <FaHeart className="my-auto mr-2 text-xs" />
                Add to My Top Movies
              </Button>

              <Button
                handleClick={() =>
                  handleAddToList(filmDetails, "Movies Bucketlist")
                }
                color="zinc-700"
              >
                <FaBookmark className="my-auto mr-2 text-xs" />
                Add to Movie Bucketlist
              </Button>
            </>
          ) : (
            <>
              <Button
                handleClick={() =>
                  handleAddToList(filmDetails, "My Top Series")
                }
                color="red-800"
              >
                <FaHeart className="my-auto mr-2 text-xs" />
                Add to My Top Series
              </Button>

              <Button
                handleClick={() =>
                  handleAddToList(filmDetails, "Series Bucketlist")
                }
                color="zinc-700"
              >
                <FaBookmark className="my-auto mr-2 text-xs" />
                Add to Series Bucketlist
              </Button>
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
