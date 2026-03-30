import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star, ChevronLeft, Minus, Plus } from 'lucide-react';
import productsData from '../data/products.json';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import Button from '../components/Button';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find(p => p.id === parseInt(id));
  
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container not-found">
        <h2>Product not found</h2>
        <Link to="/products">
          <Button variant="primary">Back to Shop</Button>
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="container product-detail-page">
      <div className="breadcrumb">
        <Link to="/products" className="back-link">
          <ChevronLeft size={16} />
          Back to Shop
        </Link>
      </div>

      <div className="product-layout">
        {/* Image Gallery (Placeholder for single image) */}
        <div className="product-gallery">
          <div className="main-image">
            <img src={product.image} alt={product.name} />
          </div>
        </div>

        {/* Product Info */}
        <div className="product-info-section">
          <div className="product-meta">
            <span className="category-tag">{product.category}</span>
            <div className="stock-status">
              {product.inStock ? (
                <span className="in-stock">In Stock</span>
              ) : (
                <span className="out-of-stock">Out of Stock</span>
              )}
            </div>
          </div>
          
          <h1 className="product-title-large">{product.name}</h1>
          
          <div className="product-reviews-summary">
            <div className="stars">
              <Star fill="#FBBF24" color="#FBBF24" size={20} />
              <Star fill="#FBBF24" color="#FBBF24" size={20} />
              <Star fill="#FBBF24" color="#FBBF24" size={20} />
              <Star fill="#FBBF24" color="#FBBF24" size={20} />
              <Star fill={product.rating >= 4.5 ? "#FBBF24" : "transparent"} color="#FBBF24" size={20} />
            </div>
            <span className="rating-score">{product.rating}</span>
            <span className="review-count">({product.reviews} reviews)</span>
          </div>

          <div className="product-price-large">
            ${product.price.toFixed(2)}
          </div>

          <p className="product-description">
            {product.description}
          </p>

          <div className="product-features">
            <h3>Key Features</h3>
            <ul>
              {product.features?.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="purchase-actions">
            <div className="quantity-selector">
              <button 
                className="qty-btn" 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                <Minus size={16} />
              </button>
              <span className="qty-value">{quantity}</span>
              <button 
                className="qty-btn" 
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus size={16} />
              </button>
            </div>

            <Button 
              variant="accent" 
              size="lg" 
              className="add-to-cart-btn"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <ShoppingCart size={20} />
              Add to Cart
            </Button>

            <button 
              className={`wishlist-action-btn ${isInWishlist(product.id) ? 'active' : ''}`}
              onClick={() => toggleWishlist(product)}
              aria-label="Wishlist"
            >
              <Heart 
                size={24} 
                fill={isInWishlist(product.id) ? "var(--color-danger)" : "transparent"} 
                color={isInWishlist(product.id) ? "var(--color-danger)" : "var(--color-text-main)"} 
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
