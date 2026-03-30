import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import Button from './Button';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, 1);
    // Could dispatch toast here
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    toggleWishlist(product);
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-card-link">
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
          <button 
            type="button" 
            className={`wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}`}
            onClick={handleWishlist}
            aria-label="Toggle Wishlist"
          >
            <Heart fill={isInWishlist(product.id) ? "var(--color-danger)" : "transparent"} 
                   color={isInWishlist(product.id) ? "var(--color-danger)" : "var(--color-text-muted)"} />
          </button>
        </div>
        
        <div className="product-content">
          <div className="product-category">{product.category}</div>
          <h3 className="product-title">{product.name}</h3>
          
          <div className="product-rating">
            <Star size={16} fill="#FBBF24" color="#FBBF24" />
            <span className="rating-value">{product.rating}</span>
            <span className="rating-count">({product.reviews})</span>
          </div>
          
          <div className="product-footer">
            <span className="product-price">${product.price.toFixed(2)}</span>
            <Button variant="accent" size="sm" onClick={handleAddToCart}>
              <ShoppingCart size={18} />
              Add
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
