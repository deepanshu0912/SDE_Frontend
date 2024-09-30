import React from 'react';
import ReactDOM from 'react-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CartProvider } from './components/CartContext'; // Import CartProvider
import App from './App';

const stripePromise = loadStripe('your-publishable-key-here');

ReactDOM.render(
    <React.StrictMode>
        <CartProvider>
            <Elements stripe={stripePromise}>
                <App />
            </Elements>
        </CartProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
