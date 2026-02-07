import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const Comics = () => {
  const [comicsArray, setComicsArray] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/comics");
        setComicsArray(data.results);

        setIsLoading(false);
      } catch (error) {
        console.log(error, "not loaded");
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>En chargement...</p>
  ) : (
    <div className="wrapper">
      <div className="charactersList">
        {comicsArray.map((comics) => {
          return (
            <div className="characterCard">
              <div key={comics._id}>
                <img
                  src={comics.thumbnail.path + "." + comics.thumbnail.extension}
                  alt=""
                  className="charactersImage"
                />
              </div>
              <div key={comics._id} className="charactersName">
                {comics.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comics;
