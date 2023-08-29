import MovieCard from "./MovieCard";

function MovieListContainer({ list, type }) {
  const styles =
    type === "list"
      ? "grid min-w-full grid-cols-3 gap-4 gap-y-2 p-4 md:grid-cols-5 lg:grid-cols-7"
      : "mt-5 grid grid-cols-3 items-center gap-4 md:grid-cols-4 lg:grid-cols-6";

  return (
    <div className={styles}>
      {list.map((film) => {
        return <MovieCard movie={film} key={film.imdbID} />;
      })}
    </div>
  );
}

export default MovieListContainer;
