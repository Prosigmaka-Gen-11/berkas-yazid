import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import View from "./pages/View";
import Insert from "./pages/Insert";
import Edit from "./pages/Edit";
import DetailPage from "./pages/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pokemon",
    children: [
      { path: "", element: <View /> },
      { path: ":pokemonId", element: <DetailPage /> },
      { path: ":pokemonId/edit", element: <Edit /> },
    ],
  },
  {
    path: "/insert",
    element: <Insert />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
