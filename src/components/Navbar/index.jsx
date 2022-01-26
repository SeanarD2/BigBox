import React, { useState, useEffect } from "react";

import Logo from "../../assets/image/logo.png";

import "./navbar.css";

function Navbar() {
  const [activePage, setActivePage] = useState("Homepage");

  useEffect(() => {
    document.title = `Celina | ${activePage}`;
  }, [activePage]);

  return (
    <nav className="navbar">
      <div className="container d-flex flex-column flex-md-row justify-content-md-between">
        <img src={Logo} alt="Celina Logo" />
        <div className="menu d-flex justify-content-evenly flex-wrap">
          <span
            className={
              activePage === "Homepage" ? `menu__list--active` : "menu__list"
            }
            onClick={() => setActivePage("Homepage")}
          >
            Home
          </span>
          <span
            className={
              activePage === "Blogs" ? `menu__list--active` : "menu__list"
            }
            onClick={() => setActivePage("Blogs")}
          >
            Blogs
          </span>
          <span
            className={
              activePage === "Web Binar" ? `menu__list--active` : "menu__list"
            }
            onClick={() => setActivePage("Web Binar")}
          >
            Web Binar
          </span>
          <span
            className={
              activePage === "Appoinment" ? `menu__list--active` : "menu__list"
            }
            onClick={() => setActivePage("Appoinment")}
          >
            Buat Janji
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
