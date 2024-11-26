import { createBrowserRouter } from "react-router-dom";
import BookMark from "./pages/bookmark";
import Error from "./pages/error";
import Home from "./pages/home";
import Movies from "./pages/movies";
import TvSeries from "./pages/tv-series";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: "/movies",
    element: <Movies />,
    errorElement: <Error />
  }, {
    path: "/tv-series",
    element: <TvSeries />,
    errorElement: <Error />
  }, {
    path: "/bookmark",
    element: <BookMark />,
    errorElement: <Error />
  }

])
