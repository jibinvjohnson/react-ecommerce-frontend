import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/products.json';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import './HomePage.css';

const HomePage = () => {
  const featuredProducts = productsData.slice(0, 4);
  const trendingProducts = productsData.slice(4, 8);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Discover Premium Tech & Lifestyle Gear.</h1>
            <p>Curated products for the modern lifestyle. Shop the best in electronics, fashion, and home goods with same-day delivery.</p>
            <div className="hero-actions">
              <Link to="/products">
                <Button size="lg" variant="accent">Shop Now</Button>
              </Link>
              <Link to="/products?category=Electronics">
                <Button size="lg" variant="outline">Explore Tech</Button>
              </Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=1200" 
              alt="Workspace showcasing tech" 
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Shop by Category</h2>
          </div>
          <div className="categories-grid">
            {['Electronics', 'Fashion', 'Home Goods'].map((category, index) => (
              <Link to={`/products?category=${category}`} key={index} className="category-card">
                <div className="category-overlay"></div>
                <img 
                  src={
                    category === 'Electronics' 
                      ? 'https://images.unsplash.com/photo-1550009158-9effb6628340?auto=format&fit=crop&q=80&w=600'
                      : category === 'Fashion'
                      ? 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=600'
                      : 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=600'
                  } 
                  alt={category} 
                />
                <h3>{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="products-section container">
        <div className="section-header">
          <h2>Featured Products</h2>
          <Link to="/products" className="view-all-link">View All</Link>
        </div>
        <div className="product-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="promo-banner container">
        <div className="promo-content">
          <h2>Summer Sale Is Live!</h2>
          <p>Get up to 40% off on premium audio gear and accessories.</p>
          <Link to="/products?category=Electronics">
            <Button variant="primary">Shop Sale</Button>
          </Link>
        </div>
      </section>

      {/* Trending Products */}
      <section className="products-section container" style={{ marginBottom: '4rem' }}>
        <div className="section-header">
          <h2>Trending Now</h2>
        </div>
        <div className="product-grid">
          {trendingProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
