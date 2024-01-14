import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/home/Home";
import PresentationAcademy from "./components/presentation/PresentationAcademy";
import Formule from "./components/formules/Formule";
import Contact from "./components/contact/Contact";

import App from "./App";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/presentation",
        element: <PresentationAcademy />,
      },
      {
        path: "/formules",
        element: <Formule />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
