import React from "react";
import { useState } from "react";
import "./Header.css";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import hamburgerOpen from "../assets/icons/icon-menu.svg";
import hamburgerClose from "../assets/icons/icon-menu-close.svg";

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <header className="header">
      <div className="container header__container">
        <Logo className="header__logo" />
        <nav className={menu ? "header__nav show-menu" : "header__nav"}>
          <ul className="header__nav-list" role="list">
            <li className="header__nav-items">
              <a href="#" className="header__nav-links">
                Home
              </a>
            </li>
            <li className="header__nav-items">
              <a href="#" className="header__nav-links">
                New
              </a>
            </li>
            <li className="header__nav-items">
              <a href="#" className="header__nav-links">
                Popular
              </a>
            </li>
            <li className="header__nav-items">
              <a href="#" className="header__nav-links">
                Trending
              </a>
            </li>
            <li className="header__nav-items">
              <a href="#" className="header__nav-links">
                Catagories
              </a>
            </li>
          </ul>
        </nav>

        <img
          className={
            menu ? "hamburger-icon hamburger-open-icon-hide" : "hamburger-icon"
          }
          id="hamburger-open-icon"
          src={hamburgerOpen}
          onClick={() => setMenu(!menu)}
          alt=""
        />
        <img
          className={
            menu ? "hamburger-icon" : "hamburger-icon hamburger-close-icon-hide"
          }
          id="hamburger-close-icon"
          src={hamburgerClose}
          onClick={() => setMenu(!menu)}
          alt=""
        />
      </div>
    </header>
  );
}
