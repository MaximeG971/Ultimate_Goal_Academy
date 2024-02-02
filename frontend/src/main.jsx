import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PresentationPage from "./pages/PresentationPage";
import FormulePage from "./pages/FormulePage";
import ContactPage from "./pages/ContactPage";
import Admin from "./components/admin/Admin";
import Dashboard from "./components/dashboard/Dashboard";
import DashboardCoach from "./components/dashboard/DashboardCoach";
import DashboardFormule from "./components/dashboard/DashboardFormule";

import App from "./App";
import AuthProvider from "./context/Auth";

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
  {
    path: "/admin/dashboard/coach",
    element: <DashboardCoach />,
  },
  {
    path: "/admin/dashboard/formule",
    element: <DashboardFormule />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
