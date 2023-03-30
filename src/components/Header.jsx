import React from "react";
import "./Header.css";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <Logo className="header__logo" />
        <nav className="header__nav">
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
        <div className="hamburger">
          <div className="hamburger__lines" id="hamburger__line1"></div>
          <div className="hamburger__lines" id="hamburger__line2"></div>
          <div className="hamburger__lines" id="hamburger__line3"></div>
        </div>
      </div>
    </header>
  );
}
