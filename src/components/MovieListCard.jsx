function MovieListCard({ film }) {
  const { Title, Runtime, Year, imdbID, Poster, imdbRating } = film;

  return (
    <div className="flex space-x-2 rounded-xl bg-zinc-800 p-3 text-white">
      <div>
        <img src={Poster} alt="" className="w-12" />
      </div>
      <div className="space-y-1">
        <p className="text-lg">{Title}</p>
        <p className="text-sm">
          {Year} • {Runtime} • {imdbRating} IMDB Rating
        </p>
      </div>
    </div>
  );
}

export default MovieListCard;
