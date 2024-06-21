import React from 'react';
import '../assets/css/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="/">ShMarketer 🎯</a>
            </div>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/login">Log In</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
