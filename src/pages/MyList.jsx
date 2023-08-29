import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useList } from "../context/ListContext";
import { Link, useNavigation } from "react-router-dom";
import { useState } from "react";
import LoadingScreen from "../components/LoadingScreen";
import EmptyList from "../components/EmptyList";
import MovieListContainer from "../components/MovieListContainer";

function MyList() {
  const { topMovies, topSeries, moviesBucketlist, seriesBucketlist } =
    useList();
  const [tabIndex, setTabIndex] = useState(0);
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading && <LoadingScreen />}

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="flex cursor-pointer items-center space-x-4 border-b-[1px] border-neutral-400 p-4 text-center text-neutral-500 sm:space-x-5 sm:text-sm ">
          <Tab>
            <Link to="/my-lists/top-movies">My Top Movies</Link>
          </Tab>
          <Tab>
            <Link to="/my-lists/top-series">My Top Series</Link>
          </Tab>
          <Tab>
            <Link to="/my-lists/movies-bucketlist">Movies Bucketlist</Link>
          </Tab>
          <Tab>
            <Link to="/my-lists/series-bucketlist">Series Bucketlist</Link>
          </Tab>
        </TabList>

        <TabPanel>
          {topMovies.length > 0 ? (
            <MovieListContainer type="list" list={topMovies} />
          ) : (
            <EmptyList />
          )}
        </TabPanel>

        <TabPanel>
          {topSeries.length > 0 ? (
            <MovieListContainer type="list" list={topSeries} />
          ) : (
            <EmptyList />
          )}
        </TabPanel>

        <TabPanel>
          {moviesBucketlist.length > 0 ? (
            <MovieListContainer type="list" list={moviesBucketlist} />
          ) : (
            <EmptyList />
          )}
        </TabPanel>

        <TabPanel>
          {seriesBucketlist.length > 0 ? (
            <MovieListContainer type="list" list={seriesBucketlist} />
          ) : (
            <EmptyList />
          )}
        </TabPanel>
      </Tabs>
    </>
  );
}

export default MyList;
