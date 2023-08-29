import { useLoaderData, useNavigation } from "react-router-dom";
import { getMovies } from "../services/apiMovies";
import LoadingScreen from "../components/LoadingScreen";
import MovieListContainer from "../components/MovieListContainer";

function SearchResults() {
  const results = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const list = results.filter((movie) => movie.Poster !== "N/A");

  return (
    <div className="bg-zinc-900">
      {isLoading && <LoadingScreen />}
      {results.length > 0 ? (
        <MovieListContainer list={list} type="search" />
      ) : (
        <h1 className="mt-5 text-center italic text-white">
          No matches found!
        </h1>
      )}
    </div>
  );
}

export async function loader({ params }) {
  const movies = await getMovies(params.searchParams);
  return movies;
}

export default SearchResults;
