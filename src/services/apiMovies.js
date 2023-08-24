const OMDB_API_KEY = "3e7f2dde";

export async function getMovieDetails(query) {
  console.log(query);
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${query}`,
  );
  const data = await res.json();
  console.log(data);
  return data.Search;
}
