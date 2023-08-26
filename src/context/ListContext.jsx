import { createContext, useContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const ListContext = createContext();

function ListProvider({ children }) {
  const [topMovies, setTopMovies] = useLocalStorageState([], "topMovies");
  const [topSeries, setTopSeries] = useLocalStorageState([], "topSeries");
  const [moviesBucketlist, setMoviesBucketlist] = useLocalStorageState(
    [],
    "moviesBucketlist",
  );
  const [seriesBucketlist, setSeriesBucketlist] = useLocalStorageState(
    [],
    "seriesBucketlist",
  );

  return (
    <ListContext.Provider
      value={{
        topMovies,
        topSeries,
        moviesBucketlist,
        seriesBucketlist,
        setTopMovies,
        setTopSeries,
        setMoviesBucketlist,
        setSeriesBucketlist,
      }}
    >
      {children}
    </ListContext.Provider>
  );
}

function useList() {
  const context = useContext(ListContext);
  if (context === undefined)
    throw new Error("ListContext was used outside of ListProvider");
  return context;
}

export { ListProvider, useList };
