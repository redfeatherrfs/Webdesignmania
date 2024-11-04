import { Tabs, Tab, Container, Row, Col } from 'react-bootstrap';
import '../../PricingSection.css'; // Import the CSS file



const LpPricingSection = ({ updateTitle }) => {
    // Sample packages with more items for each category
    const packages = [
        {
            id: 1,
            category: 'Custom Website',
            items: [
                {
                    title: "LOGO SPECIAL PACKAGE",
                    subtitle: "Professional & Unique Designs!",
                    price: "Let’s talk!",
                    //  originalPrice: "$799", // Corrected property name
                    features: [
                        "Custom Logo Design",
                        "3 Initial Concepts",
                        "Unlimited Revisions",
                        "4 Original Logo Concepts",
                        "4 Dedicated Logo Designers",
                        "4 Revisions",
                        "With Grey Scale Format",
                        "Free Icon Design",
                        "24 – 48 Hours Turnaround Time",
                        "100% Satisfaction",
                        "100% Ownership Rights",
                        "Money Back Guarantee*",
                        "Dedicated Account Manager"
                    ],
                },
                {
                    title: "PROFESSIONAL LOGO PACKAGE",
                    subtitle: "Professional & Unique Designs!",
                    price: "Let’s talk!",
                    // originalPrice: "$799", // Corrected property name
                    features: [
                        "Custom Logo Design",
                        "3 Initial Concepts",
                        "Unlimited Revisions",
                        "4 Original Logo Concepts",
                        "4 Dedicated Logo Designers",
                        "4 Revisions",
                        "With Grey Scale Format",
                        "Free Icon Design",
                        "24 – 48 Hours Turnaround Time",
                        "100% Satisfaction",
                        "100% Ownership Rights",
                        "Money Back Guarantee*",
                        "Dedicated Account Manager"
                    ],
                },
                {
                    title: "LOGO INFINITE PACKAGE",
                    subtitle: "Professional & Unique Designs!",
                    price: "Let’s talk!",
                    // originalPrice: "$799", // Corrected property name
                    features: [
                        "Custom Logo Design",
                        "3 Initial Concepts",
                        "Unlimited Revisions",
                        "4 Original Logo Concepts",
                        "4 Dedicated Logo Designers",
                        "4 Revisions",
                        "With Grey Scale Format",
                        "Free Icon Design",
                        "24 – 48 Hours Turnaround Time",
                        "100% Satisfaction",
                        "100% Ownership Rights",
                        "Money Back Guarantee*",
                        "Dedicated Account Manager"
                    ],
                },
            ],
        },
        {
            id: 2,
            category: 'E-commerce Website',
            items: [
                {
                    title: "Basic Website Package",
                    subtitle: "Best Value for Money Guaranteed!",
                    price: "$199",
                    originalPrice: "$665", // This is correct
                    features: ["3 Page Website", "5 Revisions", "2 Stock Images"],
                },
                {
                    title: "Standard Website Package",
                    subtitle: "Perfect for Small Businesses!",
                    price: "$499",
                    originalPrice: "$899", // This is correct
                    features: ["5 Page Website", "10 Revisions", "SEO Ready"],
                },
                {
                    title: "Premium Website Package",
                    subtitle: "Advanced Features Included!",
                    price: "$999",
                    originalPrice: "$1499", // This is correct
                    features: ["10 Page Website", "Unlimited Revisions", "E-commerce Ready"],
                },
            ],
        },
        {
            id: 3,
            category: 'Logo Design',
            items: [
                {
                    title: "Basic E-Commerce Package",
                    subtitle: "Get Your Store Online!",
                    price: "$399",
                    originalPrice: "$999", // This is correct
                    features: ["10 Products Setup", "Payment Gateway Integration", "Basic SEO Setup"],
                },
                {
                    title: "Standard E-Commerce Package",
                    subtitle: "Launch Your Business!",
                    price: "$699",
                    originalPrice: "$1299", // This is correct
                    features: ["50 Products Setup", "Payment Gateway Integration", "Advanced SEO Setup"],
                },
                {
                    title: "Premium E-Commerce Package",
                    subtitle: "All-in-One Solution!",
                    price: "$1299",
                    originalPrice: "$1999", // This is correct
                    features: ["Unlimited Products", "Custom Features", "Marketing Tools"],
                },
            ],
        },
        {
            id: 4,
            category: 'Stationery Design',
            items: [
                {
                    title: "Stationery Design Package",
                    subtitle: "Complete Branding Solution!",
                    price: "$150",
                    originalPrice: "$450", // This is correct
                    features: ["Business Card Design", "Letterhead Design", "Envelope Design"],
                },
                {
                    title: "Business Branding Package",
                    subtitle: "All Your Needs Covered!",
                    price: "$350",
                    originalPrice: "$750", // This is correct
                    features: ["Business Cards", "Letterhead", "Email Signature"],
                },
                {
                    title: "Custom Stationery Package",
                    subtitle: "Tailored for You!",
                    price: "$250",
                    originalPrice: "$550", // This is correct
                    features: ["Custom Designs", "Unlimited Revisions", "Source Files"],
                },
            ],
        },
        {
            id: 4,
            category: 'SEO',
            items: [
                {
                    title: "Stationery Design Package",
                    subtitle: "Complete Branding Solution!",
                    price: "$150",
                    originalPrice: "$450", // This is correct
                    features: ["Business Card Design", "Letterhead Design", "Envelope Design"],
                },
                {
                    title: "Business Branding Package",
                    subtitle: "All Your Needs Covered!",
                    price: "$350",
                    originalPrice: "$750", // This is correct
                    features: ["Business Cards", "Letterhead", "Email Signature"],
                },
                {
                    title: "Custom Stationery Package",
                    subtitle: "Tailored for You!",
                    price: "$250",
                    originalPrice: "$550", // This is correct
                    features: ["Custom Designs", "Unlimited Revisions", "Source Files"],
                },
            ],
        },
        {
            id: 4,
            category: 'SMM',
            items: [
                {
                    title: "Stationery Design Package",
                    subtitle: "Complete Branding Solution!",
                    price: "$150",
                    originalPrice: "$450", // This is correct
                    features: ["Business Card Design", "Letterhead Design", "Envelope Design"],
                },
                {
                    title: "Business Branding Package",
                    subtitle: "All Your Needs Covered!",
                    price: "$350",
                    originalPrice: "$750", // This is correct
                    features: ["Business Cards", "Letterhead", "Email Signature"],
                },
                {
                    title: "Custom Stationery Package",
                    subtitle: "Tailored for You!",
                    price: "$250",
                    originalPrice: "$550", // This is correct
                    features: ["Custom Designs", "Unlimited Revisions", "Source Files"],
                },
            ],
        },

    ];

    return (
        <section className="pricing-section text-center py-5" id='pricing-section'>
            <Container>
                <h2 className="mb-4">Pocket-Friendly Pricing Solutions </h2>

                {/* React Bootstrap Tabs with Centered and No Underline */}
                <Tabs
                    defaultActiveKey="Custom Website"
                    id="pricing-tabs"
                    className="mb-3 justify-content-center" // Center the tabs
                    style={{ borderBottom: 'none' }} // Remove the underline
                >
                    {packages.map((pkg) => (
                        <Tab eventKey={pkg.category} title={pkg.category} key={pkg.id}>
                            <Row className="justify-content-center">
                                {/* Display items in rows of 3 */}
                                {pkg.items.map((item, index) => (
                                    <Col key={index} lg={4} md={6} sm={12} className="mb-3"> {/* Changed lg={3} to lg={4} */}
                                        <div className="package">
                                            <div className="package-header">
                                                <h5>{item.title}</h5>
                                                <h6>{item.subtitle}</h6>

                                                {/* Price section */}
                                                <div className="price">
                                                    <h2>{item.price}</h2>
                                                    <div>
                                                        <strike>{item.originalPrice}</strike> {/* Ensure originalPrice is used */}
                                                        {/* <span> Only</span> */}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Scrollable Div for Package Details */}
                                            <div className="scrollable-content">
                                                <ul className="package-list">
                                                    {item.features.map((feature, index) => (
                                                        <li key={index}>{feature}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Button */}
                                            <button data-bs-toggle='modal' data-bs-target="#popupForm" onClick={() => updateTitle(item.title)} className="package-btn">START PROJECT</button>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Tab>
                    ))}
                </Tabs>
            </Container>
        </section>
    );
};

export default LpPricingSection;
