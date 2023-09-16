import { useLoaderData, useParams } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import MovieListContainer from "../components/MovieListContainer";
import { useMovies } from "../hooks/useMovies";

function SearchResults({ params }) {
  const { searchParams } = useParams();
  const { movies, isLoading, error } = useMovies(searchParams);
  const list = movies.filter((movie) => movie.Poster !== "N/A");

  return (
    <div className="bg-zinc-900">
      {isLoading && <LoadingScreen />}
      {!isLoading && !error ? (
        <MovieListContainer list={list} type="search" />
      ) : (
        <h1 className="mt-5 text-center italic text-white">
          No matches found!
        </h1>
      )}
    </div>
  );
}

export default SearchResults;
