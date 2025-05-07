import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo"> ADMIN</h1>
      <ul className="nav-links">
        <li><a href="/dashboard">HOME</a></li>
        <li><a href="/users">USERS</a></li>
        <li><a href="/settings">SETTINGS</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
