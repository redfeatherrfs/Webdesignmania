import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const TermsCondition = () => {
    return (
        <div className="container simple-section">
            <div className="row align-items-center justify-content-center text-center">
                <div className="col-lg-12 py-5 custom-content-v3">
                    <h2>Terms & Conditions</h2>
                    <p style={{ textAlign: 'justify' }}>
                        <h4>Revision Policy</h4>
                        <p>The chosen package determines the authorized number of revisions. Clients may request changes as specified in the package details. We are committed to delivering excellent services and will revise designs until client needs are met. If design concepts remain unchanged, no additional charges apply. Revisions include a new logo version within 48 hours, website design adjustments within 24 hours, and website development revisions within 24 to 48 hours (depending on complexity). Illustrative logos have a 48-hour turnaround for revisions.</p>
                        <h4>Ownership and Rights of the Logo</h4>
                        <p>Customer understands that Company retains the rights to all Design and does not transfer any rights to Customer unless and until Customer purchases exclusive rights of the Design. Upon purchasing exclusive rights to a Design, the Company provides a Copyright agreement that indicates that all the rights have been transferred under the (Customer / Company Name). The associated fee is £475 (One-time Cost).</p>
                        <h4>New Order Processing Time</h4>
                        <p>The turnaround time is between providing design concepts and purchasing the package. For new logos, it is 24 to 48 hours. Orders with four or more logo concepts have a minimum 48-hour turnaround. Orders placed on Friday or Saturday begin processing on Monday. The first concept for illustrative logos is sent within 48 to 72 hours of order confirmation.</p>
                        {/* <h4>Refund Procedure</h4>
                        <p>Our refund policy is applicable under specific conditions:</p>
                        <ul>
                            <li>Opting for an all-inclusive plan.</li>
                            <li>Acceptance of the main design idea.</li>
                            <li>Requesting adjustments to the design.</li>
                            <li>Cancellation for non-company-related reasons.</li>
                            <li>No contact with the company for over two weeks.</li>
                            <li>Violation of company policies.</li>
                            <li>Engaging with another business or designer for the same job.</li>
                            <li>Missing essential details in the creative brief.</li>
                            <li>Requesting a complete redesign.</li>
                            <li>Exceeding the “refund request” timeframe.</li>
                            <li>Changes in the company’s name or operations.</li>
                        </ul>
                        <p>Refunds are granted for the specific service, not the entire bundle. No return request is accepted after final files are sent. Free items are exempt from returns and revisions. No refund for websites or logos after 30 days. Non-refundable services include social media, SEO, domain registration, and web hosting. No returns once the client accepts the website design. Creative Logo Design may refuse any project or terminate the agreement, retaining exclusive rights to the designs after a refund. The designs legally belong to the company.</p> */}
                        <h4>Refund Procedure</h4>
<p>At Web Design Mania, refunds will not be granted under the following circumstances:</p>
<ul>
    <li>Opting for an all-inclusive plan.</li>
    <li>Acceptance of the main design concept.</li>
    <li>Requesting adjustments to the approved design.</li>
    <li>Cancellation for reasons unrelated to the company.</li>
    <li>Failure to communicate with the company for more than one week.</li>
    <li>Violation of company policies.</li>
    <li>Engaging another business or designer for the same project.</li>
    <li>Failure to provide essential details in the creative brief.</li>
    <li>Requesting a complete redesign.</li>
    <li>Exceeding the allowed timeframe for submitting a refund request.</li>
    <li>Changes in the company’s name or operations.</li>
</ul>
<p><strong>Additional Notes on Refunds</strong></p>
<ul>
    <li>Refunds are granted only for the specific service, not for an entire bundle.</li>
    <li>Refund requests are not accepted once final files have been delivered.</li>
    <li>Free items included in the service are not eligible for refunds or revisions.</li>
    <li>Websites and logos are non-refundable after 30 days.</li>
</ul>
<p><strong>The following services are strictly non-refundable:</strong></p>
<ul>
    <li>Social media services</li>
    <li>SEO services</li>
    <li>Domain registration</li>
    <li>Web hosting</li>
</ul>
<p>No refund will be issued once the client approves the website design.</p>
<p><strong>Rights Reserved by Web Design Mania</strong></p>
<p>Web Design Mania reserves the right to decline any project or terminate an agreement. In the event of a refund, the company retains exclusive ownership of the designs. All designs remain the legal property of Web Design Mania.</p>

                        <h4>Request Your Refund</h4>
                        <p>To initiate a refund, follow these steps:</p>
                        <ol>
                            <li>Contact us via live chat at our toll-free number <a href="tel:+02045112009">0204 511 2009</a></li>
                            <li>Send an email to <a href="mailto:info@webdesignmania.co.uk">info@webdesignmania.co.uk</a></li>
                        </ol>
                        <p>Upon receiving your refund request, we’ll promptly begin the analysis and processing. Please note that after receiving a refund, you won’t retain ownership rights to designs from Web Design Mania. The designs will be submitted to Government Copyright Agencies for legal copyright acquisition.</p>
                        <h4>Quality Assurance Policy</h4>
                        <p>Our dedication is to fulfill your needs, and our designers strive to exceed your expectations. We are committed to delivering top-notch designs, and each creation undergoes thorough planning and execution.</p>
                        <h4>100% Satisfaction Guaranteed!</h4>
                        <p>We stand by our commitment to your satisfaction with an unlimited revisions policy. We aim not just to meet but also to exceed your expectations. We persist in making adjustments until your design brings you complete delight (number of revisions as per your package).</p>
                        <h4>Delivery Policy</h4>
                        <p>Your complete order and a confirmation email will be sent to your specified account on the agreed-upon date mentioned in the order confirmation. Turnaround times vary based on the chosen package, with a minimum of two business days. For urgent orders, reach out to our customer service team.</p>
                        <h4>Record Maintenance</h4>
                        <p>For your convenience, we retain final designs for up to three months post-project delivery. This ensures you can retrieve identical files in case of order loss. Web Design Mania designates the account as dormant if a client remains unresponsive for three months, regardless of project progress or deadline expiry. The client must settle the associated penalty fee to reactivate the account and resume project work.</p>
                        <h4>24/7 Customer Service</h4>
                        <p>Rest assured, our dedicated customer service team is available 24/7, ready to address any questions or concerns. Your satisfaction is our top priority.</p>
                        <h4>Policy on Communication</h4>
                        <p>For your security, all communication with Web Design Mania should be conducted through “<a href="mailto:info@webdesignmania.co.uk">info@webdesignmania.co.uk</a>” or the official phone numbers listed on our website. We cannot be held responsible for messages sent through other platforms. Trust our official channels for accurate and reliable communication.</p>
                        <Link className='btn btn-primary' to='/lp' style={{ backgroundColor: '#ED5E39', border: 'none' }}>Back to Homepage</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsCondition;
