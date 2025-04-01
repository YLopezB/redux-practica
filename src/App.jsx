import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import Tienda from "./pages/Tienda";
import NotFound from "./pages/NotFound";
import StandardLayout from "./layouts/StandardLayout";
import "./App.css";

const router = createBrowserRouter([
  {
    element: <StandardLayout />,
    children: [
      {
        path: "/store",
        element: <Tienda />,
      },
      {
        path: "/",
        element: <Tienda />,
      },
    ],
  },
  { path: "/*", element: <NotFound /> },
]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
