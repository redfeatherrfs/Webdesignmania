import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 className="text-warning">AMZ BOOK PUBLISHING</h4>
            <p>
              AMZ Book Publishing is a full-service book publishing company
              based in the United States, dedicated to helping authors bring
              their stories to life. Offering a comprehensive range of services,
              including ghostwriting, e-book writing services, book editing, book
              cover design, formatting, and marketing, AMZ Book Publishing
              supports authors throughout the entire digital book publishing
              process.
            </p>
          </div>

          <div className="col-md-3">
            <h5 className="text-warning">Get Social</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://facebook.com" className="text-light">
                  <i className="bi bi-facebook me-2"></i>Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="text-light">
                  <i className="bi bi-instagram me-2"></i>Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="text-warning">Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-telephone me-2"></i>
                (732) 797-9165
              </li>
              <li>
                <i className="bi bi-envelope me-2"></i>
                info@amzbookpublishing.net
              </li>
              <li>
                <i className="bi bi-geo-alt me-2"></i>
                41 Winthrop Rd, Edison, NJ 08817
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-3 bg-dark text-light">
        <p>© 2025 AMZ Book Publishing. All Rights Reserved.</p>
        <p>
          <a href="/privacy-policy" className="text-light">
            Privacy Policy
          </a>{' '}
          |{' '}
          <a href="/terms-conditions" className="text-light">
            Terms & Conditions
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
