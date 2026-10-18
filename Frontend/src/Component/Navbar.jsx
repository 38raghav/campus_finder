import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg campus-navbar">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="/Logo.png" alt="Campus Logo" className="navbar-logo" />
          <span className="brand-text">Campus Lost & Found</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/Upload_Item">
                Upload Item
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/myposts">
                My Posts
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
          </ul>

          <button className="btn signup-btn" type="submit">
            <NavLink className="nav-link" to="/signup">
              Signup
            </NavLink>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
