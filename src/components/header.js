import { render } from "@testing-library/react";
import React from "react";
import logo from "../images/logo.svg";

import { NavLink } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
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
                INDIA
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/global"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                GLOBAL
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/tech"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                TECH
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/sports"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                SPORTS
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Rewards
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="menu-right">
          <a href="/">Sign Up</a>
          <a href="/" className="active">
            Sign In
          </a>
        </div>
      </header>
    );
  }
}
