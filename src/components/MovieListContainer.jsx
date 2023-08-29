import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";

function MovieListContainer({ list, type }) {
  const styles =
    type === "list"
      ? "grid min-w-full grid-cols-4 gap-4 gap-y-2 p-4 md:grid-cols-8"
      : "mt-5 grid grid-cols-2 items-center gap-4 md:grid-cols-6";

  return (
    <div className={styles}>
      {list.map((film) => {
        return <MovieCard movie={film} key={film.imdbID} />;
      })}
    </div>
  );
}

export default MovieListContainer;
