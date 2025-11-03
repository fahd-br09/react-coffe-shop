import React, { useState, useEffect } from 'react';
import './FlashSale.css';

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset to 24 hours when timer reaches 0
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flash-sale-banner">
      <div className="flash-sale-content">
        <div className="flash-sale-text">
          <span className="flash-icon">⚡</span>
          <h3>FLASH SALE - Coffee Only!</h3>
          <p>Get 25% OFF on all coffee items</p>
        </div>
        
        <div className="countdown-timer">
          <div className="timer-label">Ends in:</div>
          <div className="timer-display">
            <div className="time-unit">
              <span className="time-number">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="time-label">Hours</span>
            </div>
            <span className="time-separator">:</span>
            <div className="time-unit">
              <span className="time-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="time-label">Minutes</span>
            </div>
            <span className="time-separator">:</span>
            <div className="time-unit">
              <span className="time-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="time-label">Seconds</span>
            </div>
          </div>
        </div>
        
        <div className="flash-sale-cta">
          <button 
            className="flash-sale-btn"
            onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
          >
            Shop Coffee Now!
          </button>
        </div>
      </div>
      
      <div className="flash-sale-decoration">
        <div className="coffee-bean bean-1">☕</div>
        <div className="coffee-bean bean-2">☕</div>
        <div className="coffee-bean bean-3">☕</div>
      </div>
    </div>
  );
};

export default FlashSale;