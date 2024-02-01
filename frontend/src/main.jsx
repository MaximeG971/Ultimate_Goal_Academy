import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PresentationPage from "./pages/PresentationPage";
import FormulePage from "./pages/FormulePage";
import ContactPage from "./pages/ContactPage";
import Admin from "./components/admin/Admin";
import Dashboard from "./components/dashboard/Dashboard";

import App from "./App";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/presentation",
        element: <PresentationPage />,
      },
      {
        path: "/formules",
        element: <FormulePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
