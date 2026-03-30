import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Search, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import './Navbar.css';

const Navbar = () => {
  const { getCartCount } = useCart();
  const { wishlist } = useWishlist();

  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" className="brand">
          <span className="brand-logo">NOVA</span>
        </Link>
        
        <div className="nav-search">
          <input type="text" placeholder="Search products..." />
          <button type="button" aria-label="Search">
            <Search size={20} />
          </button>
        </div>

        <nav className="nav-links">
          <Link to="/products" className="nav-link">Shop</Link>
          <div className="nav-icons">
            <Link to="/login" className="icon-btn" aria-label="User Account">
              <User size={24} />
            </Link>
            <Link to="/products" className="icon-btn" aria-label="Wishlist">
              <Heart size={24} />
              {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
            </Link>
            <Link to="/cart" className="icon-btn" aria-label="Shopping Cart">
              <ShoppingCart size={24} />
              {getCartCount() > 0 && <span className="badge cart-badge">{getCartCount()}</span>}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
