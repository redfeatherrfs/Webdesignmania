import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import contactusbg from '../images/contactpgbg.png'
import '../ContactUspg.css';

const ContactUsform = () => {
  return (
    <section className="contactuspg-section py-5">
      <div className="container">
      <div className="row justify-content-center">
          {/* Heading and Text */}
          <div className="col-12 text-center py-5">
            <h2 className="contactuspg-heading-row">Want a Guide Contact Us today</h2>
            <p className="contactuspg-subtext">A place where talent and ambition can soar. Unleash your creativity and let your talents take center stage.  <br/>When you work with us, you step into a world where your passion meets our purpose.</p>
          </div>
        </div>
        {/* First Row - Heading and Subtext */}

        <div className= "contactuspg-bg py-5">
        <div className="contactuspg-heading-row text-center mb-4">
          <h2 className="contactuspg-heading">Contact Us</h2>
          <p className="contactuspg-subtext">Any question or remarks? Just write us a message!</p>
        </div>

        {/* Second Row - 2 Columns */}
        <div className="row">
          {/* First Column - Contact Information */}
          <div className="col-lg-5 contactuspg-info mb-4">

          <div
              className="contactuspg-info-box p-4"
              style={{
                backgroundImage: `url(${contactusbg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '10px',
                
                color: '#fff',
              }}
            >
           
              <h3>Contact Information</h3>
              <p>Say something to start a live chat</p>
              <address>
      <FaMapMarkerAlt /> 43 3rd Ave 2nd Floor, Edison, NJ 08837<br />
    </address>
                <a href="tel:+923003601830" className="contactuspg-link">
                  <FaPhoneAlt />+1 (551) 554-3283
                </a><br />
                <a href="mailto:info@webdesignmania.com" className="contactuspg-link">
                  <FaEnvelope /> info@webdesignmania.com
                </a>
              
              {/* Social Icons */}
              <div className="contactuspg-social-icons d-flex">
                <a href="#" className="contactuspg-icon"><FaFacebookF /></a>
                <a href="#" className="contactuspg-icon"><FaInstagram /></a>
                <a href="#" className="contactuspg-icon"><FaTwitter /></a>
                <a href="#" className="contactuspg-icon"><FaLinkedin /></a>
              </div>
            </div>
          </div>

          {/* Second Column - Form */}
          <div className="col-lg-7 contactuspg-form bg-light p-4">
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control contactuspg-input" placeholder="First Name" />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control contactuspg-input" placeholder="Last Name" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="email" className="form-control contactuspg-input" placeholder="Email" />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control contactuspg-input" placeholder="Phone Number" />
                </div>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control contactuspg-input" placeholder="Subject" />
              </div>
              <div className="mb-3">
                <textarea className="form-control contactuspg-input" rows="5" placeholder="Message"></textarea>
              </div>
              <div className="text-right">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ContactUsform;
