import React from 'react';
import { useCart } from '../components/CartContext';

const CartPage = () => {
    const { cartItems, removeFromCart, updateQuantity, calculateTotal } = useCart();

    return (
        <div>
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <h2>{item.name}</h2>
                            <p>Price: ${item.price}</p>
                            <input
                                type="number"
                                value={item.quantity}
                                min="1"
                                onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                            />
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    ))}
                    <h2>Total: ${calculateTotal()}</h2>
                </div>
            )}
        </div>
    );
};

export default CartPage;
