import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export default function Navbar() {
  const [Mobile, setMobile] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <h3 className="logo">logo</h3>

          <ul className="nav-links">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/services">
              <li>Services</li>
            </Link>
            <Link to="/skilss">
              <li>Skilss</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
          <button className="mobile-menu-icon">
            {
           
                Mobile? <ImCross/> :  <FaBars /> 
            }
          </button>
        </div>
      </nav>
    </div>
  );
}
