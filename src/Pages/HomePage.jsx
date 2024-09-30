import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate(); // Create a navigate instance

    const handleExploreClick = () => {
        navigate('/products'); // Navigate to the ProductsPage when the button is clicked
    };

    return (
        <div className="home-page">
            <h1 className="headline">Kux: Your Reused Products Selling Website</h1>
            <p className="subheadline">Welcome to Kux, your go-to place for reused products!</p>
            <button className="explore-button" onClick={handleExploreClick}>Explore Now</button>
        </div>
    );
};

export default HomePage;
