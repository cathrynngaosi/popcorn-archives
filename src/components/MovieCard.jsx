function MovieCard({ movie }) {
  return (
    <div className="">
      <img
        src={movie.Poster}
        alt=""
        className="h-full rounded-lg hover:scale-105"
      />
    </div>
  );
}

export default MovieCard;
