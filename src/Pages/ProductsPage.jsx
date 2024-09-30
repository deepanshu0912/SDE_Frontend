import React, { useEffect, useState } from 'react';
import './ProductsPage.css'; // Import the CSS file for styles

const ProductsPage = () => {
    const [products, setProducts] = useState([]); // State to store products
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState(null); // State to manage error state

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/products'); // Your API endpoint
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                console.log(data);
                setProducts(data); // Set the fetched data to the products state
            } catch (err) {
                setError(err.message); // Set the error message if fetching fails
            } finally {
                setLoading(false); // Set loading to false after fetching is complete
            }
        };

        fetchProducts(); // Call the fetch function
    }, []); // Empty dependency array means this effect runs once on mount

    // Display loading message if data is being fetched
    if (loading) {
        return <div>Loading products...</div>;
    }

    // Display error message if fetching fails
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="products-page">
            <h1 className="products-title">All Products</h1>
            <p className="products-description">
                This is your category description. It's a great place to tell customers what this category is about, connect with your audience, and draw attention to your products.
            </p>
            <div className="products-grid">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h2 className="product-name">{product.name}</h2>
                        <p className="product-price">₹{product.price}</p> {/* Assuming price is a number */}
                        <p className="product-price">{product.phone_number}</p>
                        <span className="product-category">{product.category}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
