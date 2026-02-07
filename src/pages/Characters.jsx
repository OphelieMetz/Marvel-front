import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Characters = ({ searchCharacter, setSearchCharacter }) => {
  const [charactersArray, setCharactersArray] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/characters?name=${searchCharacter}`,
        );

        setCharactersArray(data.results);

        setIsLoading(false);
      } catch (error) {
        console.log(error, "not loaded");
      }
    };
    fetchData();
  }, [searchCharacter]);

  return isLoading ? (
    <div className="wrapper">
      <p>En chargement...</p>
    </div>
  ) : (
    <div className="wrapper">
      <input
        className="search"
        type="search"
        placeholder="Rechercher un personnage"
        value={searchCharacter}
        onChange={(event) => {
          setSearchCharacter(event.target.value);
        }}
      />

      <div className="charactersList">
        {charactersArray.map((character) => {
          return (
            <Link className="characterCard" to={`/card/${character._id}`}>
              <div key={character._id}>
                <i
                  class={"fa-regular fa-star"}
                  /* class={"test" ? "fa-regular fa-star" : "fa-solid fa-star"} */
                  /*   onClick={() => {
                    addFavorites();
                  }} */
                ></i>

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
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
