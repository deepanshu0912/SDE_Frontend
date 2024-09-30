import React from 'react';
import { useCart } from '../components/CartContext';

const ProductsPage = () => {
    const { addToCart } = useCart();

    const products = [
        { id: 1, name: "Product 1", price: 10.00 },
        { id: 2, name: "Product 2", price: 15.00 },
        // Add more products as needed
    ];

    return (
        <div>
            <h1>Products</h1>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-item">
                        <h2>{product.name}</h2>
                        <p>Price: ${product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
