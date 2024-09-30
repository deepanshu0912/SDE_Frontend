import React from 'react';
import './NavigationMenu.css'; // Ensure the CSS file exists

const NavigationMenu = () => {
    return (
        <nav className="navigation-menu">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <div className="featured-products">
                <img src="/images/product1.jpg" alt="Featured Product 1" />
                <img src="/images/product2.jpg" alt="Featured Product 2" />
                <img src="/images/product3.jpg" alt="Featured Product 3" />
            </div>
        </nav>
    );
};

export default NavigationMenu;
