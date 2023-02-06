import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <h3 className="logo">logo</h3>

        <ul className="nav-links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>Home</li>
          </Link>
          <Link to="/services">
            <li>Home</li>
          </Link>
          <Link to="/skilss">
            <li>Home</li>
          </Link>
          <Link to="/contact">
            <li>Home</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
