import { render } from "@testing-library/react";
import React from "react";
import logo from "../images/logo.svg";

import { NavLink } from "react-router-dom";

export default function LoginHeader() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo}></img>
        </div>

        <div className="mainmenu">
          <ul className="list-unstyled">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                HOME
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                My History
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="menu-right">
          <NavLink
            to="/signup"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Sign Up
          </NavLink>
        </div>
      </header>
    </>
  );
}
