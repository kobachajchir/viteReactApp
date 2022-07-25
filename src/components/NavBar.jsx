import "./css/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          RADAL
        </a>
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
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Productos
              </a>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Baterias
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Equipos de Radio &raquo;
                  </a>
                  <ul className="dropdown-menu dropdown-submenu dropdown-submenu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        Submenu item 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Submenu item 2
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Ticketeras
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Tacografos
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
