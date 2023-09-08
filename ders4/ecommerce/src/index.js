import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import { BagProvider } from "./contexts/BagContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BagProvider>
    <RouterProvider router={router} />
  </BagProvider>
);
