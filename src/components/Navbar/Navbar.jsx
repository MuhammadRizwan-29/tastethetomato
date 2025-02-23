import "./Navbar.css";
import { assets } from "./../../assets/assets";
import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState("home");
  return (
    <header className="navbar">
      <img src={assets.logo} alt="logo" className="logo" />
      <div className="navbar_menu">
        <ul>
          <li
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </li>
          <li
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </li>
          <li
            onClick={() => setMenu("mobile-app")}
            className={menu === "mobile-app" ? "active" : ""}
          >
            Mobile App
          </li>
          <li
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "active" : ""}
          >
            Contact Us
          </li>
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
