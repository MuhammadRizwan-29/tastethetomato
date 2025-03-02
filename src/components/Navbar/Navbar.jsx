import "./Navbar.css";
import { assets } from "./../../assets/assets";
import { useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
  const [menu, setMenu] = useState("home");
  return (
    <header className="navbar">
      <img src={assets.logo} alt="logo" className="logo" />
      <div className="navbar_menu">
        <ul>
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </Link>
          <a
            href="#food-display"
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </a>
          <a
            href="#app-download"
            onClick={() => setMenu("mobile-app")}
            className={menu === "mobile-app" ? "active" : ""}
          >
            Mobile App
          </a>
          <a
            href="#footer"
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "active" : ""}
          >
            Contact Us
          </a>
        </ul>
      </div>
      <div className="navbar_right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar_search_icon">
          <img src={assets.basket_icon} alt="cart" />
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </header>
  );
}
