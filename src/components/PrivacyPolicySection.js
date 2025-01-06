import React from 'react';
import { Link } from 'react-router-dom';



const PrivacyPolicySection = () => {
    return (
        <div className="container simple-section">
            <div className="row align-items-center justify-content-center text-center">
                <div className="col-lg-10 mt-5 custom-content-v3">
                    <h2>Privacy Policy</h2>
                    <p style={{ textAlign: 'justify' }}>
                        <p><strong>Information Collection and Use</strong></p>
                        <p>At Web Design Mania, we value your privacy and are committed to protecting your personal information. We collect personal information, such as your name and email address, to improve your experience and provide you with updates about our expert and affordable web design services, including but not limited to eCommerce Development, Responsive Websites Design, and Digital Marketing Services.</p>
                        <p><strong>Data Security</strong></p>
                        <p>We take appropriate measures to protect your personal information from unauthorized access, damage, or destruction.</p>
                        <p><strong>Sharing of Personal Information</strong></p>
                        <p>We do not sell or rent your personal information to third parties. We may share your personal information with trusted service providers who assist us in operating our website or providing our services to you.</p>
                        <p><strong>Your Choices</strong></p>
                        <p>You have the right to access, correct, or delete your personal information. You may also opt-out of promotional communications from us.</p>
                        <p><strong>Links to Other Websites</strong></p>
                        <p>Our website may contain links to third-party websites. We are not responsible for the content or privacy policies of those websites.</p>
                        <p><strong>Children's Privacy</strong></p>
                        <p>Our website is not intended for children under the age of 13, and we do not knowingly collect personal information from children under the age of 13.</p>
                        <p><strong>Changes to This Privacy Policy</strong></p>
                        <p>We may update our Privacy Policy from time to time. We will post any changes on this page and encourage you to review our Privacy Policy whenever you access our website.</p>
                        <p><strong>Contact Us</strong></p>
                        <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:support@webdesignmania.co.uk">support@webdesignmania.co.uk</a>. Thank you for choosing Web Design Mania!</p>
                        <p>Last updated: April 2, 2024</p>
                        <Link className='btn btn-primary' to='/lp' style={{ backgroundColor: '#ED5E39', border: 'none' }}>Back to Homepage</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicySection;
