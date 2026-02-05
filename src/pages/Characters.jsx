import axios from "axios";
import { useState, useEffect } from "react";
/* import { useNavigate } from "react-router-dom"; */

/* const navigate = useNavigate(); */

const Characters = () => {
  const [charactersArray, setCharactersArray] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/characters");

        setCharactersArray(data.results);

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
        {charactersArray.map((character) => {
          return (
            <div
              className="characterCard"
              /*  onClick={() => {
                navigate("/card/:id");
              }} */
            >
              <div key={character._id}>
                <img
                  src={
                    character.thumbnail.path +
                    "." +
                    character.thumbnail.extension
                  }
                  alt=""
                  className="charactersImage"
                />
              </div>
              <div key={character._id} className="charactersName">
                {character.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
