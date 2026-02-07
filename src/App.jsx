import { useState } from "react";
import "./reset.css";
import "./App.css";
import "./stylesheet.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

import Header from "./component/Header";
import Footer from "./component/Footer";

import Characters from "./pages/characters";
import Comics from "./pages/Comics";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Favoris from "./pages/Favoris";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [searchCharacter, setSearchCharacter] = useState("");
  const [searchComic, setSearchComic] = useState("");

  const addFavorites = () => {
    setFavorites(() => {
      const newTab = [...favorites];
      newTab.push(character._id || comics._id);
      localStorage.setItem(favorites);
    });
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/characters"
          element={
            <Characters
              addFavorites={addFavorites}
              search={searchCharacter}
              setSearch={setSearchCharacter}
            />
          }
        />
        <Route
          path="/comics"
          element={
            <Comics
              addFavorites={addFavorites}
              search={searchComic}
              setSearch={setSearchComic}
            />
          }
        />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="/card/:id" element={<Card />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
/* const api = axios.get(
    "https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=YE6wlfKKzZmRvMKj",
  ); */
