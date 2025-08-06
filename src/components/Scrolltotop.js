import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollFraction = window.scrollY / scrollTotal;
      const progress = Math.min(Math.max(scrollFraction * 100, 0), 100);
      setScrollProgress(progress);
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        style={{
          ...styles.button,
          background: `conic-gradient(#7b66e8 ${scrollProgress}%, #2e0dbd ${scrollProgress}%)`, // Two-color progress border
        }}
      >
        <FaArrowUp />
      </button>
    )
  );
};

// Button styles with animated two-color border
const styles = {
  button: {
    position: 'fixed',
    bottom: '80px',
    right: '20px',
    width: '50px',
    height: '50px',
    backgroundColor: '#ffffff',
    color: '#fff',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    zIndex: 1000,
    padding: '5px',
    border: '3px', // Creates space for the animated border effect
    transition: 'transform 0.2s ease-in-out',
  },
};

export default ScrollToTopButton;
