import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Card = () => {
  const [cardArray, setCardArray] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/card/${id}`);

        setCardArray(data);

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
      <div className="card">
        <div className="cardLeftColumn">
          <img
            src={cardArray.thumbnail.path + "." + cardArray.thumbnail.extension}
            alt=""
            className="cardImage"
          />
        </div>
        <div className="cardRightColumn">
          {cardArray.comics.map((comic) => {
            return <div>{comic}</div>;

            /* <Link to={`/comics/${comics._id}`}></Link>; */
          })}
        </div>
      </div>
    </div>
  );
};

/*   const card = axios.get(
    "https://lereacteur-marvel-api.herokuapp.com/character/:characterId?apiKey=YE6wlfKKzZmRvMKj",
  ); */

export default Card;
