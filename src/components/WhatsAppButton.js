// src/components/WhatsAppButton.jsx
import React from 'react';
import '../WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/447380107663"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsAppButton;
