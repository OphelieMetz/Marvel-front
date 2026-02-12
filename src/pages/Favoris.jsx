import axios from "axios";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

const Favoris = ({ addFavorites, favorites, setFavorites }) => {
  const favoritesArray = Cookies.get(favorites);

  return <div>{favorites}</div>;
};

export default Favoris;
