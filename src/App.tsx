import React from "react";
import { RouterProvider } from "react-router-dom";
import { MovieProvider } from "./components/context/movie-context";
import { router } from "./routes";
const App = () => {
  return <MovieProvider>
    <RouterProvider router={router} />;
  </MovieProvider>

}
export default App
