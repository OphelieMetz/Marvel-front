import axios from "axios";
import { useState, useEffect } from "react";

const Comics = () => {
  const [comicsArray, setComicsArray] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=YE6wlfKKzZmRvMKj",
        );
        setComicsArray(response.data);
        console.log(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error, "not loaded");
      }
    };
    fetchData();
  }, []);

  return isLoading ? <p>En chargement...</p> : <div></div>;
};

export default Comics;
