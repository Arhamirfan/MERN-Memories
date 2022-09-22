import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <h2>Memories</h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={`/about`}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={`/contact`}>
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={`/login`}>
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={`/signup`}>
                  Sign-up
                </NavLink>
              </li>
            </ul>
            <form className="d-flex"></form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
