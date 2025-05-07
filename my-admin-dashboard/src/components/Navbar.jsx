import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">لوحة التحكم</h1>
      <ul className="nav-links">
        <li><a href="/dashboard">الرئيسية</a></li>
        <li><a href="/users">المستخدمين</a></li>
        <li><a href="/settings">الإعدادات</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
