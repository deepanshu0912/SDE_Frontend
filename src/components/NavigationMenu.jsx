import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {
    // Check if the user is authenticated by verifying the presence of the JWT token in local storage
    const isAuthenticated = false;

    return (
        <nav className="navigation">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                {/* Conditionally render "Upload" and "My Account" links based on authentication */}
                {isAuthenticated && (
                    <>
                        <li><Link to="/upload">Upload</Link></li>
                        <li><Link to="/account">My Account</Link></li>
                    </>
                )}
                {/* <li><Link to="/cart">Cart</Link></li> */}
                {!isAuthenticated ? (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </>
                ) : (
                    <li><Link to="/logout" onClick={() => {
                        localStorage.removeItem('token'); // Remove token on logout
                    }}>Logout</Link></li>
                )}
            </ul>
        </nav>
    );
};

export default NavigationMenu;
