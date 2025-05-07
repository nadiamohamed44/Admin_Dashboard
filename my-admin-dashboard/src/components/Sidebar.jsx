import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Admin Panel</h2>
      <ul className="sidebar-menu">
        <li>
          <Link to="/admin">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/users">Users</Link>
        </li>
        <li>
          <Link to="/admin/packages">Packages</Link>
        </li>
        <li>
          <Link to="/admin/bookings">Bookings</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
