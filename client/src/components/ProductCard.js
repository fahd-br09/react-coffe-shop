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
    <div className={`product-card ${product.isFlashSale ? 'flash-sale' : ''}`} onClick={handleCardClick}>
      <img 
        src={product.image} 
        alt={product.name}
        className="product-image"
        loading="lazy"
        onError={(e) => {
          console.log(`Failed to load image: ${product.image}`);
          e.target.src = `https://via.placeholder.com/400x300/8B4513/FFFFFF?text=${encodeURIComponent(product.name)}`;
        }}
        onLoad={() => {
          console.log(`Successfully loaded image: ${product.image}`);
        }}
      />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <div className="price-container">
            {product.isFlashSale ? (
              <>
                <span className="flash-sale-badge">⚡ FLASH SALE</span>
                <div className="price-group">
                  <span className="original-price">${product.originalPrice.toFixed(2)}</span>
                  <span className="flash-price">${product.flashSalePrice.toFixed(2)}</span>
                </div>
                <span className="discount-percent">25% OFF</span>
              </>
            ) : (
              <span className="product-price">${product.price.toFixed(2)}</span>
            )}
          </div>
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