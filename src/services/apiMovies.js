const OMDB_API_KEY = "3e7f2dde";

export async function getMovies(query) {
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query}`,
  );
  const data = await res.json();

  if (data.Response === "False") return [];

  return data.Search;
}

export async function getMovieDetails(imdbID) {
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${imdbID}`,
  );
  const data = await res.json();

  if (data.Response === "False") return [];

  return data;
}
