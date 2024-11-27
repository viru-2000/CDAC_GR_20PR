// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <AppRoutes /> {/* Main route rendering */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
