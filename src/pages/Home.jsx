import MarvelBackground from "../assets/marvelbackground.jpg";

const Home = () => {
  return (
    <div className="homepage">
      <img src={MarvelBackground} alt="" className="marvelBackground" />
      <div className="homepageWelcome">Bienvenue </div>
    </div>
  );
};

export default Home;
