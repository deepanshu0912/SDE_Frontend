// src/components/NavigationMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {
    return (
        <nav className="navigation">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/upload">Upload</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/account">My Account</Link></li> {/* New Account link */}
            </ul>
        </nav>
    );
};

export default NavigationMenu;
