import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import './CheckoutButton.css';

const CheckoutButton = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: card,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      // Implement your backend call here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className="card-element" />
      <button type="submit" disabled={!stripe} className="pay-button">
        Pay Now
      </button>
    </form>
  );
};

export default CheckoutButton;
