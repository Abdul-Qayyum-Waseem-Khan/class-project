import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="nav-bar">
      <div className="logo">
        <img src="./images/vite.svg" alt="vite logo" />
      </div>
      <nav className={showMenu ? "mobile-menu" : "web-menu"}>
        <ul>
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/todoapp">
              TodoApp
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <div className="ham-menu">
        <button onClick={handleMenu}>
          <IoMenu />
        </button>
      </div>
    </header>
  );
}
