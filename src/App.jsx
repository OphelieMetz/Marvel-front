import { useState } from "react";
import "./reset.css";
import "./App.css";
import "./stylesheet.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

import Header from "./component/Header";
import Footer from "./component/Footer";

import Characters from "./pages/characters";
import Comics from "./pages/Comics";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Favoris from "./pages/Favoris";

function App() {
  /* const api = axios.get(
    "https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=YE6wlfKKzZmRvMKj",
  ); */

  return (
    <Router>
      <Header />

      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </Router>
  );
}

export default App;
