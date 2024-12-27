import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-text">
      <a href="/" className="navbar-title">AEON</a>
      <a href="/" className="navbar-title">Showcase</a>
      <a href="/" className="navbar-title">Docs</a>
      <a href="/" className="navbar-title">Blog</a>
      <a href="/" className="navbar-title">Analystic</a>
      <a href="/" className="navbar-title">Templates</a>
      <a href="/" className="navbar-title">Enterprise</a>
      </div>
      <div className="navbar-search">
      <input 
        type="text" 
        placeholder="Search..." 
        className="navbar-search" 
      />
      </div>
    </nav>
  );
}

export default Navbar;
