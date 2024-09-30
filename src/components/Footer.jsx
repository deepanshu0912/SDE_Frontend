// Footer.jsx
import React from 'react';
import './Footer.css'; // Import the updated styles

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} My Store. All rights reserved.</p>
            <p>
                <a href="/privacy-policy">Privacy Policy</a> | 
                <a href="/terms-of-service"> Terms of Service</a>
            </p>
        </footer>
    );
};

export default Footer;
