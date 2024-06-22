// src/components/Navbar.js
import React from "react";
import Cart from "./cart";
import '../assets/css/Navbar.css'; // Assuming you have some CSS for Navbar

function Navbar({ cartItems }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">ShMarketer 🎯</a>
      </div>
      <ul className="navbar-links">
        <li><Cart cartItems={cartItems} /></li>
        <li><a href="/">Home</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/register">Register</a></li>
        <li><a href="/login">Log In</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
