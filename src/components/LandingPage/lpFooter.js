import React from 'react';
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import webdesignlogo from '../../images/Web-Design-Mania-Logo-White-04-04.svg';

const LpFooter = () => {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            {/* Logo above the company name */}
            <img src={webdesignlogo} alt="AMZ Book Publishing" className="img-fluid mb-3" />
            <p className="text-light">
              AMZ Book Publishing is a full-service book publishing company based in the United States, dedicated to helping authors bring their stories to life. Offering a comprehensive range of services, including ghostwriting, e-book writing services, book editing, book cover design, formatting, and marketing, AMZ Book Publishing supports authors throughout the entire digital book publishing process.
            </p>
          </div>

          <div className="col-md-3 mb-3">
            <h5 className="highlight-orange-text">Get Social</h5>
            <ul className="list-unstyled">
              <li className="text-light">
                <FaFacebookF /> 
                <a href="https://www.facebook.com/AmzBookPublishingUS" target="_blank" className="text-light text-decoration-none"> Facebook </a>
              </li>
              <li className="text-light">
                <FaInstagram /> 
                <a href="https://www.instagram.com/amz_book_publishing/" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none"> Instagram</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="highlight-orange-text">Contact Us</h5>
            <div className="contact-details">
              <p className="mb-1 text-light">
                <FaPhoneAlt /> 
                <a href="tel:+17327979165" className="text-light text-decoration-none"> (732) 797-9165</a>
              </p>
              <p className="mb-1 text-light">
                <FaEnvelope /> 
                <a href="mailto:info@amzbookpublishing.net" className="text-light text-decoration-none"> info@amzbookpublishing.net</a>
              </p>
              <p className="text-light">
                <FaMapMarkerAlt /> 
                <a href="https://www.google.com/maps/search/?api=1&query=41+Winthrop+Rd,+Edison,+NJ+08817" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none"> 41 Winthrop Rd, Edison, NJ 08817</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom text-center py-3 bg-secondary">
        <div className="row">
          <div className="col-md-6 col-12">
            <p>&copy; 2025 AMZ Book Publishing. All Rights Reserved.</p>
          </div>
          <div className="col-md-6 col-12">
            <p>
              <a href="/privacy-policy" target="_blank" className="text-light">Privacy Policy</a> | 
              <a href="/terms-condition" target="_blank" className="text-light"> Terms & Conditions</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default LpFooter;
