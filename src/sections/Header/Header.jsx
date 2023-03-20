import "./Header.css";
import { Link } from 'react-router-dom'
import { NavItem, NavItemDropDown } from '../../components/index';
import logo from "../../assets/images/logo.png";

const Header = (props) => {
  return (
    <div className="navbar navbar-expand-md navbar-dark cyporg-navbar">
      <div className="container">
        <Link to="/" className="navbar-brand" ><img src={logo} alt="" /></Link>

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
              <Link to='/' className="nav-link">Home</Link>
            </NavItem>
            <NavItem>
              <Link to='/browse' className="nav-link">Browse</Link>
            </NavItem>
            <NavItemDropDown>
              <Link to='/details' className="nav-link  dropdown-toggle" aria-expanded="false">Details</Link>

              <ul className="dropdown-menu">
                <li>
                  <Link to='/#' className="dropdown-item">Learn Bootstrap</Link>
                </li>
                <li>
                  <Link to='/#' className="dropdown-item">Where to go next</Link>
                </li>
              </ul>
            </NavItemDropDown>
            <NavItem>
              <Link to='/#' className="nav-link">Streams</Link>

            </NavItem>
            <NavItem>
              <Link to='/#' className="nav-link">Profile</Link>
            </NavItem>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
