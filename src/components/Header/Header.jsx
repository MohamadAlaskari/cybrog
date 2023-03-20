import "./Header.css";
import NavItem, { NavItemDropDown } from "../NavItem/NavItem";
import logo from "../../assets/images/logo.png";

const Header = (props) => {
  return (
    <div className="navbar navbar-expand-md navbar-dark cyporg-navbar">
      <div className="container">
        <a href="#home" className="navbar-brand" role="button">
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
          <ul className="navbar-nav ms-auto">
            <NavItem>
              <a href="#home" className="nav-link" role="button">
                Home
              </a>
            </NavItem>
            <NavItem>
              <a href="#browse" className="nav-link" role="button">
                Browse
              </a>
            </NavItem>
            <NavItemDropDown>
              <a
                href="#dropdown"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"

              >Details</a>

              <ul className="dropdown-menu">
                <li>
                  <a href="#learn" className="dropdown-item">Learn Bootstrap+</a>
                </li>
                <li>
                  <a href="#next" className="dropdown-item">Where to go next</a>
                </li>
              </ul>
            </NavItemDropDown>
            <NavItem>
              <a href="#faq" className="nav-link">Streams</a>
            </NavItem>
            <NavItem>
              <a href="./index-ar.html" className="nav-link">Profile</a>
            </NavItem>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
