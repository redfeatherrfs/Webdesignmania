import React, { useEffect } from 'react'; // Import useEffect
import '../logos.css'; // Ensure the path is correct
import logo1 from '../images/react.png';
import logo2 from '../images/nop.png';
import logo3 from '../images/woo.png';
import logo4 from '../images/wordpress.png';
import logo5 from '../images/shopify.png';
import logo6 from '../images/vue.png';
import logo7 from '../images/php.png';
import logo8 from '../images/lara.png';

const LogoSection = () => {
  useEffect(() => {
    const logosSlide = document.querySelector('.logos-slide');
    const copy = logosSlide.cloneNode(true);
    document.querySelector('.logos').appendChild(copy);
  }, []);

  return (
    <div className="logos">
      <div className="logos-slide">
        <img src={logo1} alt="React Logo" />
        <img src={logo2} alt="NOP Logo" />
        <img src={logo3} alt="Woo Logo" />
        <img src={logo4} alt="WordPress Logo" />
        <img src={logo5} alt="Shopify Logo" />
        <img src={logo6} alt="Vue Logo" />
        <img src={logo7} alt="PHP Logo" />
        <img src={logo8} alt="Laravel Logo" />
      </div>
    </div>
  );
};

export default LogoSection;
