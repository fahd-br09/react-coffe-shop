import React, { useState } from 'react';
import './FeedbackSection.css';

const FeedbackSection = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    rating: 5,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the feedback to your backend
    console.log('Feedback submitted:', feedback);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFeedback({
        name: '',
        email: '',
        rating: 5,
        message: ''
      });
    }, 3000);
  };

  const testimonials = [
    {
      id: 1,
      name: "Emily Rodriguez",
      rating: 5,
      message: "Absolutely love this coffee shop! The espresso is perfect and the pastries are always fresh. The staff is incredibly friendly too!",
      avatar: "https://miro.medium.com/1*hATEYt0u5wpq4VqRjsXfhQ.png"
    },
    {
      id: 2,
      name: "David Thompson",
      rating: 5,
      message: "Best coffee in town! I'm a regular customer and they never disappoint. The latte art is amazing and the atmosphere is perfect for work.",
      avatar: "https://m.media-amazon.com/images/M/MV5BYTIxNTQ1NTgtZjFlNC00NDhiLTg0NjItNzQ2ZTFlOGQ5OGJmXkEyXkFqcGc@._V1_.jpg"
    },
    {
      id: 3,
      name: "Lisa Chen",
      rating: 4,
      message: "Great variety of teas and coffee. The green tea is exceptional and the blueberry muffins are to die for. Highly recommend!",
      avatar: "https://www.utphysicians.com/wp-content/uploads/2019/11/Chen-Lisa-web.jpg"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section id="feedback" className="feedback-section">
      <div className="container">
        <h2 className="section-title">Customer Feedback</h2>
        <p className="section-subtitle">We love hearing from our customers!</p>

        <div className="feedback-content">
          {/* Customer Testimonials */}
          <div className="testimonials">
            <h3>What Our Customers Say</h3>
            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-header">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="customer-avatar"
                    />
                    <div className="customer-info">
                      <h4>{testimonial.name}</h4>
                      <div className="rating">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <p className="testimonial-message">"{testimonial.message}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Feedback Form */}
          <div className="feedback-form-container">
            <h3>Share Your Experience</h3>
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✅</div>
                <h4>Thank You!</h4>
                <p>Your feedback has been submitted successfully. We appreciate your input!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="feedback-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={feedback.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={feedback.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="rating">Rating</label>
                  <div className="rating-input">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className={`star-btn ${star <= feedback.rating ? 'active' : ''}`}
                        onClick={() => setFeedback({ ...feedback, rating: star })}
                      >
                        ⭐
                      </button>
                    ))}
                    <span className="rating-text">({feedback.rating}/5)</span>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Feedback</label>
                  <textarea
                    id="message"
                    name="message"
                    value={feedback.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="form-input"
                    placeholder="Tell us about your experience..."
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Submit Feedback
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;