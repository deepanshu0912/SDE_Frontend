import React, { useEffect, useState } from 'react';
import './AccountPage.css'; // Import the CSS file for styles

const AccountPage = () => {
    const [uploadedProducts, setUploadedProducts] = useState([]); // State to store uploaded products
    const [error, setError] = useState(null); // State to manage errors

    useEffect(() => {
        // Fetch uploaded products when the component mounts
        const fetchUploadedProducts = async () => {
            try {
                const response = await fetch(
                    'http://localhost:8000/api/products/user_products/',{
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Uncomment if you need to pass the JWT token
                    }
                },
                ); // Your API endpoint for products
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const productsData = await response.json();
          
                setUploadedProducts(productsData);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchUploadedProducts();
    }, []); // Runs once on mount

    const handleDeleteProduct = async (productId) => {
        try {
            const response = await fetch(`http://localhost:8000/api/products/${productId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`, // Uncomment if you need to pass the JWT token
                }
            });
            if (!response.ok) {
                throw new Error('Failed to delete product');
            }
            // Update the uploadedProducts state to remove the deleted product
            setUploadedProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
        } catch (err) {
            setError(err.message);
        }
    };

    // Display error message if fetching fails
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="account-page">
            <h1 className="account-title">Account</h1>
            <h2 className="uploaded-products-title">Your Uploaded Products</h2>
            <div className="uploaded-products-grid">
                {uploadedProducts.length > 0 ? (
                    uploadedProducts.map(product => (
                        <div className="uploaded-product-card" key={product.id}>
                            <img src={product.image} alt={product.name} className="uploaded-product-image" />
                            <h3 className="uploaded-product-name">{product.name}</h3>
                            <p className="uploaded-product-price">{product.price}</p>
                            <button onClick={() => handleDeleteProduct(product.id)} className="delete-button">Delete</button>
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
