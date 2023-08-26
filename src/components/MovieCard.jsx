import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const [selectMovie, setSelectMovie] = useState();

  function handleSelectMovie(id) {
    setSelectMovie(id);
    navigate(`/title/${id}`);
  }

  return (
    <div key={movie.imdbID} onClick={() => handleSelectMovie(movie.imdbID)}>
      <img
        src={movie.Poster}
        alt=""
        className="h-full rounded-lg hover:scale-105"
      />
    </div>
  );
}

export default MovieCard;
