import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ListProvider } from "../src/context/ListContext";
import Landing from "./pages/Landing";
import SearchResults from "./pages/SearchResults";
import MyList from "./pages/MyList";
import AppLayout from "./ui/AppLayout";
import SearchLayout from "./ui/SearchLayout";
import ViewFilmDetails, {
  loader as movieDetailsLoader,
} from "./pages/ViewFilmDetails";
import PageNotFound from "./pages/PageNotFound";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Landing />,
        errorElement: <PageNotFound />,
      },
      {
        element: <SearchLayout />,
        children: [
          {
            path: "/search",
          },
          {
            path: "/search/:searchParams",
            element: <SearchResults />,
          },
        ],
      },
      {
        path: "/title/:imdbID",
        element: <ViewFilmDetails />,
        loader: movieDetailsLoader,
      },
      {
        path: "/my-lists/:listName",
        element: <MyList />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ListProvider>
        <RouterProvider router={router} />
      </ListProvider>
    </>
  );
}

export default App;
