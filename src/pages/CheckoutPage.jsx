import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);

  const subtotal = getCartTotal();
  const shipping = subtotal > 100 || cart.length === 0 ? 0 : 15.00;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    // Simulate API call and clear cart
    setTimeout(() => {
      clearCart();
    }, 500);
  };

  if (cart.length === 0 && !isSuccess) {
    return (
      <div className="container" style={{ padding: '6rem 1rem', textAlign: 'center' }}>
        <h2>Your cart is empty</h2>
        <p style={{ marginBottom: '2rem', color: 'var(--color-text-muted)' }}>You must add items to your cart before checking out.</p>
        <Link to="/products"><Button variant="primary">Return to Shop</Button></Link>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="container success-container">
        <CheckCircle size={80} color="var(--color-success)" className="success-icon" />
        <h1>Order Confirmed!</h1>
        <p className="success-msg">Thank you for your purchase. We've sent a confirmation email with your order details.</p>
        <div className="order-number">Order # {Math.floor(Math.random() * 900000) + 100000}</div>
        <Link to="/">
          <Button variant="accent" size="lg">Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container checkout-page">
      <h1 className="page-title">Checkout</h1>
      
      <div className="checkout-layout">
        <div className="checkout-form-section">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="form-section">
              <h2>Contact Information</h2>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" required placeholder="you@example.com" />
              </div>
            </div>

            <div className="form-section">
              <h2>Shipping Address</h2>
              <div className="form-row">
                <div className="form-group half">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" required />
                </div>
                <div className="form-group half">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" required placeholder="123 Main St" />
              </div>
              <div className="form-row">
                <div className="form-group half">
                  <label htmlFor="city">City</label>
                  <input type="text" id="city" required />
                </div>
                <div className="form-group half">
                  <label htmlFor="zipCode">ZIP Code</label>
                  <input type="text" id="zipCode" required />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2>Payment Method</h2>
              <div className="payment-methods">
                <label className="payment-radio selected">
                  <input type="radio" name="payment" defaultChecked />
                  <span>Credit Card</span>
                </label>
                <label className="payment-radio">
                  <input type="radio" name="payment" />
                  <span>PayPal</span>
                </label>
              </div>
              
              <div className="credit-card-details">
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input type="text" id="cardNumber" placeholder="0000 0000 0000 0000" required />
                </div>
                <div className="form-row">
                  <div className="form-group half">
                    <label htmlFor="expDate">Expiration Date</label>
                    <input type="text" id="expDate" placeholder="MM/YY" required />
                  </div>
                  <div className="form-group half">
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" placeholder="123" required />
                  </div>
                </div>
              </div>
            </div>

            <Button type="submit" variant="primary" size="lg" fullWidth className="place-order-btn">
              Place Order (${total.toFixed(2)})
            </Button>
          </form>
        </div>
        
        <div className="checkout-summary-section">
          <div className="summary-card">
            <h3>In Your Cart</h3>
            
            <div className="checkout-items">
              {cart.map((item) => (
                <div key={item.id} className="checkout-item">
                  <div className="ci-image">
                    <img src={item.image} alt={item.name} />
                    <span className="ci-badge">{item.quantity}</span>
                  </div>
                  <div className="ci-info">
                    <span className="ci-name">{item.name}</span>
                    <span className="ci-price">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="summary-totals">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="summary-row">
                <span>Taxes</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="summary-total checkout-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
