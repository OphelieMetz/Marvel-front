import axios from "axios";
import { useState, useEffect } from "react";

const Card = () => {
  const [cardArray, setCardArray] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/card/:id");

        setCardArray(data.results);

        setIsLoading(false);
      } catch (error) {
        console.log(error, "not loaded");
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div className="wrapper">
      <p>En chargement...</p>
    </div>
  ) : (
    <div className="wrapper">
      <div className="charactersList">
        {cardArray.map((card) => {
          return (
            <div>
              <div key={card._id}>{card.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/*   const card = axios.get(
    "https://lereacteur-marvel-api.herokuapp.com/character/:characterId?apiKey=YE6wlfKKzZmRvMKj",
  ); */

export default Card;
