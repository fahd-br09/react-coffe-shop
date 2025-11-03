import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import AboutSection from '../components/AboutSection';
import FeedbackSection from '../components/FeedbackSection';
import { productsAPI } from '../services/api';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await productsAPI.getAll();
      setProducts(response.data);
    } catch (err) {
      setError('Failed to fetch products');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container">
        <div className="loading-state">
          <div className="coffee-loader">
            <div className="coffee-cup-loader"></div>
          </div>
          <h2>Brewing your experience...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="error-state">
          <h2>Oops! Something went wrong</h2>
          <p>{error}</p>
          <button onClick={fetchProducts} className="btn btn-primary">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="home-page">
        {/* Hero Section */}
        <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Welcome to <span className="brand-highlight">BR Coffee</span>
            </h1>
            <p className="hero-subtitle">
              Discover our amazing selection of premium coffee, artisan teas, and freshly baked pastries
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">100+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat">
                <span className="stat-number">8</span>
                <span className="stat-label">Premium Products</span>
              </div>
              <div className="stat">
                <span className="stat-number">4.7★</span>
                <span className="stat-label">Average Rating</span>
              </div>
            </div>
            <button 
              className="cta-button"
              onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Menu
            </button>
          </div>
          <div className="hero-image">
            <div className="floating-coffee-cup">
              <div className="cup-animation">
                <div className="cup-body-hero">
                  <div className="coffee-liquid-hero"></div>
                </div>
                <div className="cup-handle-hero"></div>
                <div className="steam-hero steam-hero-1"></div>
                <div className="steam-hero steam-hero-2"></div>
                <div className="steam-hero steam-hero-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Our Coffee Shop?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">☕</div>
              <h3>Premium Quality</h3>
              <p>Sourced from the finest coffee beans around the world</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Quick and reliable delivery to your doorstep</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💝</div>
              <h3>Fresh Daily</h3>
              <p>All our pastries and coffee are made fresh every day</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section">
        <div className="container">
          <h2 className="section-title">Our Menu</h2>
          <p className="section-subtitle">Handcrafted with love, served with passion</p>
          
          <div className="products-grid">
            {products.map((product, index) => (
              <div 
                key={product._id} 
                className="product-card-wrapper"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      </div>

      {/* About Section */}
      <AboutSection />

      {/* Feedback Section */}
      <FeedbackSection />

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Coffee Journey?</h2>
            <p>Join thousands of satisfied customers who trust us for their daily coffee fix</p>
            <button 
              className="cta-button secondary"
              onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
            >
              Order Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;