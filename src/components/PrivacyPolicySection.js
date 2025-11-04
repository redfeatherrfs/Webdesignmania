import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';



const PrivacyPolicySection = () => {
    return (
        <div className="container simple-section">
            <div className="row align-items-center justify-content-center text-center">
                <div className="col-lg-12 py-5 custom-content-v3">
                    <h2>Privacy Policy</h2>
                    <p style={{ textAlign: 'justify' }}>
                        <h4>Information Collection and Use</h4>
                        <p>At Red Feather Solutions, we value your privacy and are committed to protecting your personal information. We collect personal information, such as your name and email address, to improve your experience and provide you with updates about our expert and affordable web design services, including but not limited to eCommerce Development, Responsive Websites Design, and Digital Marketing Services.</p>
                        <h4>Data Security</h4>
                        <p>We take appropriate measures to protect your personal information from unauthorized access, damage, or destruction.</p>
                        <h4>Sharing of Personal Information</h4>
                        <p>We do not sell or rent your personal information to third parties. We may share your personal information with trusted service providers who assist us in operating our website or providing our services to you.</p>
                        <h4>Your Choices</h4>
                        <p>You have the right to access, correct, or delete your personal information. You may also opt-out of promotional communications from us.</p>
                        <h4>Links to Other Websites</h4>
                        <p>Our website may contain links to third-party websites. We are not responsible for the content or privacy policies of those websites.</p>
                        <h4>Children's Privacy</h4>
                        <p>Our website is not intended for children under the age of 13, and we do not knowingly collect personal information from children under the age of 13.</p>
                        <h4>Changes to This Privacy Policy</h4>
                        <p>We may update our Privacy Policy from time to time. We will post any changes on this page and encourage you to review our Privacy Policy whenever you access our website.</p>
                        <h4>Contact Us</h4>
                        <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:support@webdesignmania.co.uk">support@webdesignmania.co.uk</a>. Thank you for choosing Red Feather Solutions!</p>
                        <p>Last updated: April 2, 2024</p>
                        <Link className='btn btn-primary' to='/lp' style={{ backgroundColor: '#3E1EC9', border: 'none' }}>Back to Homepage</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicySection;
