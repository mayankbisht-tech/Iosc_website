import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="navbar-logo">IoSC</h1>
      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/Team" className={({ isActive }) => (isActive ? "active" : "")}>Team</NavLink>
        <NavLink to="/Projects" className={({ isActive }) => (isActive ? "active" : "")}>Projects</NavLink>
        <NavLink to="/Blogs" className={({ isActive }) => (isActive ? "active" : "")}>Blogs</NavLink>
        <NavLink to="/Events" className={({ isActive }) => (isActive ? "active" : "")}>Events</NavLink>
        <NavLink to="/Alumini" className={({ isActive }) => (isActive ? "active" : "")}>Alumini</NavLink>
        <NavLink to="/Contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
