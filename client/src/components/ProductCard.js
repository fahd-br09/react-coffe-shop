import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleCardClick = () => {
    navigate(`/product/${product._id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push('★');
    }
    if (hasHalfStar) {
      stars.push('☆');
    }
    return stars.join('');
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      <img 
        src={product.image} 
        alt={product.name}
        className="product-image"
        onError={(e) => {
          e.target.src = `https://via.placeholder.com/400x300/8B4513/FFFFFF?text=${encodeURIComponent(product.name)}`;
        }}
      />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <div className="product-rating">
            <span>{renderStars(product.rating)}</span>
            <span>({product.rating})</span>
          </div>
        </div>
        <button 
          className="btn btn-primary" 
          onClick={handleAddToCart}
          style={{ marginTop: '1rem', width: '100%' }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;