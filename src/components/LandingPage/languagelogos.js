import React, { useEffect } from 'react';
import '../../LandingPage.css'; // Ensure the path is correct
import blogo1 from '../../images/breact.webp';
import blogo2 from '../../images/bnop.webp';
import blogo3 from '../../images/bwoo.webp';
import blogo4 from '../../images/bwordpress.webp';
import blogo5 from '../../images/bshopify.webp';
import blogo6 from '../../images/bvue.webp';
import blogo7 from '../../images/bphp.webp';
import blogo8 from '../../images/blara.webp';

const LanguageLogos = () => {
  useEffect(() => {
    const logosSlide = document.querySelector('.languagelogos-slide');
    const copy = logosSlide.cloneNode(true);
    document.querySelector('.languagelogos').appendChild(copy);
  }, []);

  return (
    <div className="languagelogos">
      <div className="languagelogos-slide">
        <img src={blogo1} alt="React Logo" />
        <img src={blogo2} alt="NOP Logo" />
        <img src={blogo3} alt="Woo Logo" />
        <img src={blogo4} alt="WordPress Logo" />
        <img src={blogo5} alt="Shopify Logo" />
        <img src={blogo6} alt="Vue Logo" />
        <img src={blogo7} alt="PHP Logo" />
        <img src={blogo8} alt="Laravel Logo" />
      </div>
    </div>
  );
};

export default LanguageLogos;
