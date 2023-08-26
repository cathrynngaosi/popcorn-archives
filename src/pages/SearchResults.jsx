import { useLoaderData } from "react-router-dom";
import { getMovies } from "../services/apiMovies";
import MovieCard from "../components/MovieCard";

function SearchResults() {
  const results = useLoaderData();

  return (
    <div className="mt-5 grid cursor-pointer grid-cols-2 items-center gap-4 md:grid-cols-6">
      {results &&
        results.map((movie) => <MovieCard movie={movie} key={movie.imdbID} />)}
    </div>
  );
}

export async function loader({ params }) {
  const movies = await getMovies(params.searchParams);
  return movies;
}

export default SearchResults;
