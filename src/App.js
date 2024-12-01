import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Services from "./components/Services";
import Dashboard from "./components/DashbBoard";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
        <Outlet />
      <Footer />
    </div>
  );
};

export default App;
