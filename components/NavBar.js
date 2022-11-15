import React from "react";
import { useTheme } from "../hooks/useTheme";

// *style
import "./NavBar.css";

function NavBar() {
  const { color } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
      <nav className="navbar-left">
        <p className="navbar-logo">BROWNHACK</p>
      </nav>

      <div className="navbar-right">
        <ul>
          {["Home", "About us", "contact"].map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
