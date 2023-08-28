import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useList } from "../context/ListContext";
import { Link, NavLink } from "react-router-dom";
import MovieListCard from "../components/MovieListCard";
import { useEffect, useState } from "react";

function MyList() {
  const { topMovies, topSeries, moviesBucketlist, seriesBucketlist } =
    useList();
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="flex cursor-pointer items-center space-x-5 border-b-[1px] border-neutral-400 p-4 text-neutral-500 ">
          <Tab className={tabIndex === 0 && "text-white"}>
            <Link to="/my-lists/top-movies">My Top Movies</Link>
          </Tab>
          <Tab className={tabIndex === 1 && "text-white"}>
            <Link to="/my-lists/top-series">My Top Series</Link>
          </Tab>
          <Tab className={tabIndex === 2 && "text-white"}>
            <Link to="/my-lists/movies-bucketlist">Movies Bucketlist</Link>
          </Tab>
          <Tab className={tabIndex === 3 && "text-white"}>
            <Link to="/my-lists/series-bucketlist">Series Bucketlist</Link>
          </Tab>
        </TabList>

        <div className="flex">
          <TabPanel
            className={
              tabIndex === 0
                ? "grid min-w-full gap-2 gap-y-2 p-4 sm:grid-cols-2 xl:grid-cols-4"
                : "hidden"
            }
          >
            {topMovies.map((film) => {
              return <MovieListCard film={film} key={film.imdbID} />;
            })}
          </TabPanel>

          <TabPanel
            className={
              tabIndex === 1
                ? "grid min-w-full gap-2 gap-y-2 p-4 sm:grid-cols-2 xl:grid-cols-4"
                : "hidden"
            }
          >
            {topSeries.map((film) => {
              return <MovieListCard film={film} key={film.imdbID} />;
            })}
          </TabPanel>
          <TabPanel
            className={
              tabIndex === 2
                ? "grid  gap-2 gap-y-2 p-4 sm:grid-cols-2 xl:grid-cols-4"
                : "hidden"
            }
          >
            {moviesBucketlist.map((film) => {
              return <MovieListCard film={film} key={film.imdbID} />;
            })}
          </TabPanel>
          <TabPanel
            className={
              tabIndex === 3
                ? "grid gap-2 gap-y-2 p-4 sm:grid-cols-2 xl:grid-cols-4"
                : "hidden"
            }
          >
            {seriesBucketlist.map((film) => {
              return <MovieListCard film={film} key={film.imdbID} />;
            })}
          </TabPanel>
        </div>
      </Tabs>
    </>
  );
}

export default MyList;
