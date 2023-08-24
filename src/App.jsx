import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import SearchResults, { loader as searchLoader } from "./pages/SearchResults";
import MyList from "./pages/MyList";
import AppLayout from "./ui/AppLayout";
import SearchLayout from "./ui/SearchLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
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
            loader: searchLoader,
          },
        ],
      },
      {
        path: "/my-lists",
        element: <MyList />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
