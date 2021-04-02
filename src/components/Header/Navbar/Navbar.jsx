import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { menuApi } from "../../../api";

const Navbar = () => {
  const [menu, setMenu] = useState([]);

  const getMenu = async () => {
    const response = await fetch(menuApi);
    const responseJSON = await response.json();
    setMenu(responseJSON);
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <nav className="navbar">
      <input type="checkbox" id="nav" className="navbar__hidden" />
      <label htmlFor="nav" className="navbar__open">
        <i></i>
        <i></i>
        <i></i>
      </label>
      <div className="navbar__container">
        <ul id="menu" className="navbar__menu">
          {menu.map((api) => (
            <li key={api.title}>
              <a
                className="navbar__link"
                href={api.url}
                alt={api.title}
                target={api.target}
              >
                {api.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
