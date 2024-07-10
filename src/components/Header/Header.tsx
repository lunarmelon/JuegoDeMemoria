import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/constants";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="bg-black opacity-90 px-2 shadow-md pt-1 pb-1 flex justify-between">
      <div className="flex">
        <img src={logo} alt="Logo" className="w-16 h-16 ml-2 mt-1" />
        <p className="text-4xl font-bold mt-4 mr-72 ml-2 text-white">
          <Link to={ROUTES.HOME}>Crianza positiva</Link>
        </p>
      </div>
      <div className="flex justify-between items-center mb-1">
        <nav className="mb-3 mt-3 ml-3 mr-3">
          <ul className="flex">
            <li className="header-button">
              <Link to={ROUTES.HOME}>¿Qué es crianza positiva?</Link>
            </li>
            <li className="header-button">
              <Link to={ROUTES.GAME}>Actividad de recreación</Link>
            </li>
            <li className="header-button">
              <Link to={ROUTES.INFO}>Más información</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
