import { useState } from "react";
import "./App.css";
import { Router, Route, Routes, Link } from "react-router-dom";
import "./reset.css";
import Header from "./component/Header";

function App() {
  const api = axios.get(
    "https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=YE6wlfKKzZmRvMKj",
  );

  return (
    <Router>
      <Header />
      <Routes>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;
