import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./css/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to={"/home"} className="navbar-brand">
          RADAL
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to={"/category"}
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Productos
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <Link to={"/category/baterias"} className="dropdown-item">
                    Baterias
                  </Link>
                </li>
                <li>
                  <Link to={"/category/radios"} className="dropdown-item">
                    Equipos de Radio
                  </Link>
                  <ul className="dropdown-menu dropdown-submenu dropdown-submenu-dark">
                    <li>
                      <Link
                        to={"/category/radios/motorola"}
                        className="dropdown-item"
                      >
                        Motorola
                      </Link>
                      <Link
                        to={"/category/radios/yedro"}
                        className="dropdown-item"
                      >
                        Yedro
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/category/radios/multilink"}
                        className="dropdown-item"
                      >
                        MultiLink
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={"/category/fulmar"} className="dropdown-item">
                    Ful-Mar
                  </Link>
                  <ul className="dropdown-menu dropdown-submenu dropdown-submenu-dark">
                    <li>
                      <Link
                        to={"/category/fulmar/relojesTaximetros"}
                        className="dropdown-item"
                      >
                        Relojes Taximetros
                      </Link>
                      <Link
                        to={"/category/fulmar/tacografos"}
                        className="dropdown-item"
                      >
                        Tacografos
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <CartWidget items="4" />
      </div>
    </nav>
  );
};

export default NavBar;
