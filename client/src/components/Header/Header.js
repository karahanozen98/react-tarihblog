import React from "react";
import { NavbarComponents } from "./NavbarComponents.js";
import "./Header.css";

function Header() {
  return (
    <nav className="Header">
      <h1>Blog</h1>
      <div className="Table">
        <ul>{NavbarComponents}</ul>
      </div>
    </nav>
  );
}
export default Header;
