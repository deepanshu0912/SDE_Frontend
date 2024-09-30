import React from 'react';
import './Header.css';

const Header = () => {
    // Check if the user is authenticated by verifying the presence of the JWT token in local storage
    const isAuthenticated = !!localStorage.getItem('token');

    return (
        <header className="header">
            <div className="logo">Kux</div>
            <nav className="navigation">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Products</a></li>
                    {/* Conditionally render "Upload" and "My Account" links based on authentication */}
                    {isAuthenticated && (
                        <>
                            <li><a href="/upload">Upload</a></li>
                            <li><a href="/account">My Account</a></li>
                            <li>
                                <a href="/logout" onClick={() => {
                                    localStorage.removeItem('token'); // Remove token on logout
                                    window.location.reload(); // Reload the page to reflect changes
                                }}>
                                    Logout
                                </a>
                            </li>
                        </>
                    )}
                    {/* Show Login and Register links only if user is not authenticated */}
                    {!isAuthenticated && (
                        <>
                            <li><a href="/login">Login</a></li>
                            <li><a href="/register">Register</a></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
