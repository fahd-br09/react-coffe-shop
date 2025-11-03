import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About BR Coffee</h2>
            <div className="about-story">
              <p className="lead-text">
                Founded with a passion for exceptional coffee, our journey began with a simple mission: 
                to bring the world's finest coffee experiences directly to your cup.
              </p>
              
              <p>
                We source our beans from sustainable farms across the globe, working directly with 
                farmers who share our commitment to quality and environmental responsibility. Every 
                cup tells a story of dedication, craftsmanship, and the pursuit of perfection.
              </p>
              
              <p>
                Our expert baristas are trained in the art of coffee making, ensuring that every 
                espresso shot, every latte, and every pour-over meets our exacting standards. 
                We believe that great coffee is more than just a beverage – it's a moment of 
                joy in your day.
              </p>
            </div>

            <div className="about-values">
              <h3>Our Values</h3>
              <div className="values-grid">
                <div className="value-item">
                  <div className="value-icon">🌱</div>
                  <h4>Sustainability</h4>
                  <p>Committed to ethical sourcing and environmental responsibility</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">⭐</div>
                  <h4>Quality</h4>
                  <p>Never compromising on the quality of our ingredients and service</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">🤝</div>
                  <h4>Community</h4>
                  <p>Building connections one cup at a time in our local community</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-container">
              <img 
                src="https://via.placeholder.com/600x400/8B4513/FFFFFF?text=BR+Coffee+Interior" 
                alt="BR Coffee shop interior"
                className="about-img"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x400/8B4513/FFFFFF?text=BR+Coffee+Shop';
                }}
              />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h4>Visit Our Shop</h4>
                  <p>Experience the perfect blend of comfort and quality</p>
                </div>
              </div>
            </div>
            
            <div className="stats-container">
              <div className="stat-box">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">15+</span>
                <span className="stat-label">Coffee Origins</span>
              </div>
            </div>
          </div>
        </div>

        <div className="team-section">
          <h3>Meet Our Team</h3>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img 
                  src="https://via.placeholder.com/300x300/D2691E/FFFFFF?text=JS" 
                  alt="John Smith" 
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x300/8B4513/FFFFFF?text=John+Smith';
                  }}
                />
              </div>
              <h4>John Smith</h4>
              <p className="member-role">Head Barista</p>
              <p className="member-bio">15 years of coffee expertise and latte art champion</p>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img 
                  src="https://via.placeholder.com/300x300/CD853F/FFFFFF?text=SJ" 
                  alt="Sarah Johnson" 
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x300/8B4513/FFFFFF?text=Sarah+Johnson';
                  }}
                />
              </div>
              <h4>Sarah Johnson</h4>
              <p className="member-role">Coffee Sourcing Expert</p>
              <p className="member-bio">Travels the world to find the perfect beans for our blends</p>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img 
                  src="https://via.placeholder.com/300x300/A0522D/FFFFFF?text=MC" 
                  alt="Mike Chen" 
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x300/8B4513/FFFFFF?text=Mike+Chen';
                  }}
                />
              </div>
              <h4>Mike Chen</h4>
              <p className="member-role">Pastry Chef</p>
              <p className="member-bio">Creates fresh pastries daily using traditional techniques</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;