import { useFetcher, useLoaderData, useNavigation } from "react-router-dom";
import { getMovies } from "../services/apiMovies";
import MovieCard from "../components/MovieCard";
import LoadingScreen from "../components/LoadingScreen";

function SearchResults() {
  const results = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className="mt-5 grid grid-cols-2 items-center gap-4 md:grid-cols-6">
        {results &&
          results
            .filter((movie) => movie.Poster !== "N/A")
            .map((movie) => <MovieCard movie={movie} key={movie.imdbID} />)}
      </div>
    </>
  );
}

export async function loader({ params }) {
  const movies = await getMovies(params.searchParams);
  return movies;
}

export default SearchResults;
