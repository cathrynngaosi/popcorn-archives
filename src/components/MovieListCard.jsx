import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";

function MovieListCard({ list }) {
  const navigate = useNavigate();
  const [selectMovie, setSelectMovie] = useState();

  function handleSelectMovie(id) {
    setSelectMovie(id);
    navigate(`/title/${id}`);
  }

  return (
    <div className="grid min-w-full grid-cols-4 gap-4 gap-y-2 p-4 md:grid-cols-8">
      {list.map((film) => {
        return <MovieCard movie={film} key={film.imdbID} />;
      })}
    </div>
  );
}

export default MovieListCard;
