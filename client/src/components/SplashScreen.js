import React, { useState, useEffect } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const steps = [
      { delay: 500, step: 1 },   // Show logo
      { delay: 1500, step: 2 },  // Show text
      { delay: 2500, step: 3 },  // Show loading
      { delay: 4000, step: 4 }   // Fade out
    ];

    steps.forEach(({ delay, step }) => {
      setTimeout(() => {
        setCurrentStep(step);
      }, delay);
    });

    // Complete splash screen
    setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 4500);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`splash-screen ${currentStep >= 4 ? 'fade-out' : ''}`}>
      <div className="splash-content">
        <div className={`coffee-logo ${currentStep >= 1 ? 'animate-in' : ''}`}>
          <div className="coffee-cup">
            <div className="cup-body">
              <div className="coffee-liquid"></div>
              <div className="steam steam-1"></div>
              <div className="steam steam-2"></div>
              <div className="steam steam-3"></div>
            </div>
            <div className="cup-handle"></div>
          </div>
        </div>
        
        <div className={`splash-text ${currentStep >= 2 ? 'animate-in' : ''}`}>
          <h1 className="brand-name">Coffee Shop</h1>
          <p className="tagline">Brewing Excellence Since Today</p>
        </div>

        <div className={`loading-container ${currentStep >= 3 ? 'animate-in' : ''}`}>
          <div className="coffee-beans">
            <div className="bean bean-1"></div>
            <div className="bean bean-2"></div>
            <div className="bean bean-3"></div>
          </div>
          <p className="loading-text">Preparing your experience...</p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;