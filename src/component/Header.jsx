import Logo from "../assets/Marvel_Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="headerContent">
          <Link to="/">
            <img src={Logo} alt="Logo Marvel" />
          </Link>
          <nav>
            <Link to="/characters" className="navButton">
              Personnages
            </Link>
            <Link to="/comics" className="navButton">
              Comics
            </Link>
            <Link to="/favoris" className="navButton">
              Favoris
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
