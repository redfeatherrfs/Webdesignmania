import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import '../../CountdownTimer.css';

const CountdownTimerWithConfetti = () => {
  const targetDate = new Date("2024-12-31T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const remainingTime = calculateTimeLeft();
      setTimeLeft(remainingTime);

      if (remainingTime.total <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    return {
      total: difference,
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Confetti Background */}
      <Confetti
        width={windowDimensions.width}
        height={windowDimensions.height}
        numberOfPieces={200}
        gravity={0.2}
        colors={['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']}
      />

      <div className="container">
        <div className="row" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
          
          {/* Left Column with Countdown Timer */}
          <div className="col-md-7 d-flex justify-content-center align-items-center" style={{ position: 'relative', color: 'white', textAlign: 'center' }}>
            <div style={{ padding: '20px' }}>
              <h1 className="countdown-heading">Black Friday Web Design Mania - Unbeatable Deals Await!</h1>
              <p className="countdown-description">Transform your website with stunning designs at incredible discounts this Black Friday!🎉</p>

              <div className="countdown-timer">
                <div className="countdown-item">
                  <span className="countdown-number">{timeLeft.days}</span>
                  <span className="countdown-label">Days</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-number">{timeLeft.hours}</span>
                  <span className="countdown-label">Hours</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-number">{timeLeft.minutes}</span>
                  <span className="countdown-label">Minutes</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-number">{timeLeft.seconds}</span>
                  <span className="countdown-label">Seconds</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column with Quote Form */}
          <div className="col-md-5" style={{ backgroundImage: `url(${formbg2})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '70px', borderRadius: '5px' }}>
            <div className="lpbanner-form" style={{ color: 'white', textAlign: 'center' }}>
              <h3 className="lpbanner-form-title">Get a Website Quote</h3>
              <p>Get a response from us within 24 hours</p>
              <form method="POST" onSubmit={handleSubmit} id="bannerForm">
                <input type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} className="lpbanner-input" required />
                <input type="tel" placeholder="Enter your number" name="phone" value={formData.phone} onChange={handleChange} className="lpbanner-input" required />
                <input type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} className="lpbanner-input" required />
                <textarea placeholder="Message" name="message" className="lpbanner-input lpbanner-textarea" value={formData.message} onChange={handleChange} required ></textarea>
                <button type="submit" className="btn btn-dark lpbanner-submit-btn" disabled={loading}>
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                      <span role="status">Submitting...</span>
                    </>
                  ) : 'Send Your Query'}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CountdownTimerWithConfetti;
