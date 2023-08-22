import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import SearchResults from "./pages/SearchResults";
import MyList from "./pages/MyList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/search/:searchParams",
    element: <SearchResults />,
  },
  {
    path: "/my-list",
    element: <MyList />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
