// src/Pages/AccountPage/AccountPage.jsx
import React from 'react';
import './AccountPage.css'; // Import the CSS file for styles

const AccountPage = () => {
    // Sample user data (Replace with actual user data)
    const user = {
        username: "vishalpharate0",
        firstName: "Mickey",
        lastName: "",
        email: "vishalpharate@gmail.com",
    };

    // Sample products uploaded by the user (Replace with actual product data)
    const uploadedProducts = [
        { id: 1, name: "Sofa", image: "path/to/sofa.png", price: "₹85.00" },
        { id: 2, name: "Rug", image: "path/to/rug.png", price: "₹25.00" },
        { id: 3, name: "Table", image: "path/to/table.png", price: "₹35.00" },
    ];

    return (
        <div className="account-page">
            <h1 className="account-title">Account</h1>
            <div className="user-info">
                <div className="profile-pic">
                    <img src="path/to/profile-pic.png" alt="Profile" />
                </div>
                <div className="user-details">
                    <h2>{user.username}</h2>
                    <p>{user.firstName} {user.lastName}</p>
                    <p>{user.email}</p>
                </div>
            </div>

            <h2 className="uploaded-products-title">Your Uploaded Products</h2>
            <div className="uploaded-products-grid">
                {uploadedProducts.length > 0 ? (
                    uploadedProducts.map(product => (
                        <div className="uploaded-product-card" key={product.id}>
                            <img src={product.image} alt={product.name} className="uploaded-product-image" />
                            <h3 className="uploaded-product-name">{product.name}</h3>
                            <p className="uploaded-product-price">{product.price}</p>
                        </div>
                    ))
                ) : (
                    <p>No products uploaded yet.</p>
                )}
            </div>
        </div>
    );
};

export default AccountPage; // Ensure this line is present and correctly placed
