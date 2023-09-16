const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export async function getMovies(query) {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query}`,
  );
  const data = await res.json();

  if (data.Response === "False") return [];

  return data.Search;
}

export async function getMovieDetails(imdbID) {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${imdbID}`,
  );
  const data = await res.json();

  if (data.Response === "False") return [];

  return data;
}
