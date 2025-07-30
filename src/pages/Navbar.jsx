import React from "react";
import { GlobalStyles } from "../constants/styles";
import { NavLink } from "react-router-dom";

export default function Navbar({ p1 = "HOME", p2 = "ABOUT", p3 = "CONTACT", p4 = "GALLERY" }) {
  return (
    <nav
      className="navbar navbar-expand-lg m-5 rounded-4 sticky-top "
      style={{ backgroundColor: GlobalStyles.colors.primary200, top: "30px" }}
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand px-4" to="/">
          <i class="bi bi-browser-safari fs-2 "></i>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto fs-6 fw-bold ">
            <li className="nav-item ">
              <NavLink
                className={({ isActive }) =>
                  isActive ? " active nav-link " : " nav-link"
                }
                aria-current="page"
                to="/"
              >
                {p1}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? " active nav-link " : " nav-link"
                }
                to="/about"
              >
                {p2}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? " active nav-link " : " nav-link"
                }
                to="/gallery"
              >
                {p4}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? " active nav-link " : " nav-link"
                }
                to="/contact"
              >
                {p3}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
