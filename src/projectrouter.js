import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Register from "./components/Register";
import Services from "./components/Services";
import Dashboard from "./components/DashbBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path: "register", 
        element: <Register />,
      },
      {
        path: "services", 
        element: <Services />,
      },
      {
        path: "dashboard", 
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
