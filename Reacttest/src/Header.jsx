import React from "react";
import "./App.css";
import { Link } from "react-router-dom";


function Header() {
  return (
    <header className="header">
      {/* Logo Section */}
      <img
        src="https://static.zara.net/photos///contents/cm/assets/logos/default-light_0.svg?ts=1690441518876"
        alt="Zara Logo"
        className="logo"
      />
      
      {/* Navigation Links */}
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="woman">WOMAN</a></li>
          <li><a href="man">MAN</a></li>
          <li><a href="kids">KIDS</a></li>
          <li><a href="beauty">BEAUTY</a></li>
        </ul>
      </nav>
      
      {/* Header Actions */}
      <div className="header-actions">
      <Link to="/login"><button>LOG IN</button></Link>
        <button>HELP</button>
        <button>SHOPPING BAG (0)</button>
      </div>
    </header>
  );
}

export default Header;
