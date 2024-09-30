// ProductsPage.jsx
import React from 'react';
import './ProductsPage.css'; // Import the CSS file for styles

const ProductsPage = () => {
    // Sample product data (You may replace it with dynamic data)
    const products = [
        { id: 1, name: "Sofa", price: "₹85.00", image: "path/to/sofa.png", category: "Bestseller" },
        { id: 2, name: "Rug", price: "₹25.00", image: "path/to/rug.png", category: "New" },
        { id: 3, name: "Table", price: "₹35.00", image: "path/to/table.png", category: "New" },
        { id: 4, name: "Lamp", price: "₹45.00", image: "path/to/lamp.png", category: "Bestseller" },
        { id: 5, name: "Fur Rug", price: "₹55.00", image: "path/to/fur-rug.png", category: "New" },
        { id: 6, name: "Pendant Light", price: "₹75.00", image: "path/to/pendant-light.png", category: "New" },
    ];

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
                        <p className="product-price">{product.price}</p>
                        <span className="product-category">{product.category}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
