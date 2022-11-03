import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Protected from "./components/Protected";
import CategoryList from "./pages/CategoryList";
import CategoryMenu from "./pages/CategoryMenu";
import Home from "./pages/Home";
import ItemList from "./pages/ItemList";
import Menu from "./pages/Menu";
import store from "./utils/store";
import { Provider } from "react-redux";
import "./assets/app.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "",
    element: <Protected />,
    children: [
      { path: "/menu", element: <Menu /> },
      { path: "/items", element: <ItemList /> },
      {
        path: "/category",
        children: [
          { path: "", element: <CategoryMenu /> },
          {
            path: ":categoryName",
            element: <CategoryList />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
