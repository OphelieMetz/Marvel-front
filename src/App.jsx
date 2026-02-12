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

  const addFavorites = (id) => {
    const newTab = [...favorites];
    newTab.push(id);
    Cookies.set(favorites, favorites, { expires: 7 });
    setFavorites(newTab);
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
              searchCharacter={searchCharacter}
              setSearchCharacter={setSearchCharacter}
            />
          }
        />
        <Route
          path="/comics"
          element={
            <Comics
              addFavorites={addFavorites}
              searchComic={searchComic}
              setSearchComic={setSearchComic}
            />
          }
        />
        <Route
          path="/favoris"
          element={
            <Favoris
              addFavorites={addFavorites}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />
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
