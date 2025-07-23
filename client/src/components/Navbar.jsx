import './Navbar.css';
import { Link } from 'react-router-dom';
import Login from "../admin/Login";

const Navbar = () => {


  return (
    <>
      <header>
        <div className="top-panel">
          <div className="Paradise">
            <h1>Hotel Paradise</h1>
          </div>
          <div className="sign">
            <Link to="/admin/login">
              <h3>Hello, Sign in</h3>
            </Link>
          </div>
        </div>
      </header>

      <div className="nav-panel">
        <div className="nav-options">
          <Link to="/">Home</Link>
          <Link to="/rooms">Rooms</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="Book-Now">
          <Link to="/booking">Book Now</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;