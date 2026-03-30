import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3>NOVA</h3>
          <p>Your one-stop destination for premium products, delivered with care.</p>
        </div>
        
        <div className="footer-section">
          <h4>Shop</h4>
          <ul>
            <li><Link to="/products?category=Electronics">Electronics</Link></li>
            <li><Link to="/products?category=Fashion">Fashion</Link></li>
            <li><Link to="/products?category=Home">Home & Living</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/shipping">Shipping Policy</Link></li>
            <li><Link to="/returns">Returns</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Subscribe</h4>
          <p>Get 10% off your first order</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button type="button">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NOVA E-Commerce. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
