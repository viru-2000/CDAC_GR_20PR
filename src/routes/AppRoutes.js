import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import Services from "../pages/Services";
import ServiceDetails from "../pages/ServiceDetails";
import Dashboard from "../pages/Dashboard";
import AdminPanel from "../pages/AdminPanel";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";



const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/services/:serviceId",
    element: <ServiceDetails />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminPanel />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={appRoutes} />;
};

export default AppRoutes;
