import React from "react";
import "./css/App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Favourites from "./pages/Favourites";
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/NavBar";
const App = () => {
  return ( 
    <MovieProvider>
      <NavBar/>
  <div className="main-content">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/favorites" element={<Favourites/>} />
    </Routes>
  </div>
  </MovieProvider>
  );
};

export default App;

// prop = property
