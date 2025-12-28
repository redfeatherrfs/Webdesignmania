import { Tabs, Tab, Container, Row, Col } from 'react-bootstrap';
import { IoCheckmarkOutline } from 'react-icons/io5'; // Import the desired checkmark icon

import '../../PricingSection.css'; // Import the CSS file


const LpPricingSection = ({ updatePopupTitle }) => {
    const packages = [
        {
            category: 'Website Packages',
            items: [
                {
                    title: " Website Starter Package",
                    subtitle: (
                        <>
                            Professional & Unique Design <br></br>
                        </>
                    ),
                    boldTitle: " Get 70% Off",
                    price: "$149",
                    originalPrice: "$665",
                    features: [
                        "Design Up to 3 Pages",
                        "5 Visual Images",
                        "1 jQuery Slider Banner",
                        "2 CTAs & Lead forms",
                        "Facebook Page Design",
                        "X (Twitter) Page Design",
                        "YouTube Page Design",
                        "48 to 72 hours TAT",
                        "Complete Deployment",
                        "100% Satisfaction Guarantee",
                        "100% Unique Design Guarantee",
                        "100% Money Back Guarantee",
                    ],
                    VAS: [
                        "Cross-Browser Compatibility",
                        "SEO Friendly Coding",
                        "Experienced Account Manager",
                    ],
                },
                {
                    title: "Custom Website Essential Package",
                    subtitle: (
                        <>
                            Professional & Unique Design <br></br>


                        </>
                    ),
                    boldTitle: " Get 70% Off",
                    price: "$345",
                    originalPrice: "$1150",
                    features: [
                        "Design Up to 6 Pages",
                        "8 Visual Images",
                        "3 jQuery Slider Banner",
                        "4 CTAs & Lead forms",
                        "Mobile Responsive Design",
                        "Facebook Page Design",
                        "X (Twitter) Page Design",
                        "Instagram Page Creation",
                        "YouTube Page Design",
                        "Regular Security Plugins",
                        "XML Sitemap",
                        "URL Submission in SE's",
                        "On-Page SEO",
                        "Google Analytics Tracking",
                        "Google Search Console Tracking",
                        "48 to 72 hours TAT",
                        "Complete Deployment",
                        "100% Satisfaction Guarantee",
                        "100% Unique Design Guarantee",
                        "100% Money Back Guarantee",
                    ],
                    VAS: [
                        "Cross-Browser Compatibility",
                        "SEO Friendly Coding",
                        "Experienced Account Manager",
                        "One Month On-going Support",
                    ],
                },
                {
                    title: "Custom Website Business Package",
                    subtitle: (
                        <>
                            Professional & Unique Design <br></br>
                        </>
                    ),
                    boldTitle: " Get 70% Off",
                    price: "$999",
                    originalPrice: "$3990",
                    features: [
                        "Design Up to 10 Pages",
                        "Logo Design",
                        "Professional Custom Design",
                        "12 Visual Images",
                        "4 jQuery Slider Banner",
                        "6 CTAs & Lead Capturing Forms",
                        "Mobile Responsive Design",
                        "Facebook Page Design",
                        "X (Twitter) Page Design",
                        "YouTube Page Design",
                        "Instagram Page Creation",
                        "Standard Security Plugins",
                        "XML Sitemap",
                        "Robots File",
                        "URL Submission in SE's",
                        "On-Page SEO",
                        "Google Analytics Tracking",
                        "Google Search Console Tracking",
                        "Google Business Profile Creation",
                        "Complete Deployment",
                        "100% Satisfaction Guarantee",
                        "100% Unique Design Guarantee",
                        "100% Money Back Guarantee",
                    ],
                    VAS: [
                        "Cross-Browser Compatibility",
                        "SEO Friendly Coding",
                        "Experienced Account Manager",
                        "3 Month On-going Support & Maintenance",
                    ],
                },
            ],
        },
        {
            category: 'E-commerce Website Packages',
            items: [
                {
                    title: " E-commerce Website Starter Package",
                    subtitle: (
                        <>
                            Ideal for small business and start Ups <br></br>
                        </>
                    ),
                    boldTitle: " Get 70% Off",
                    price: "$749",
                    originalPrice: "$2496",
                    features: [
                        "Up-To 10 Unique Pages Website",
                        "Customized Design",
                        "Up-To 100 Products",
                        "Content Management System (CMS)",
                        "Mini Shopping Cart Integration",
                        "Payment Module Integration",
                        "Easy Product Search",
                        "Chatbot/Livechat Setup",
                        "Dedicated Designer & Developer",
                        "Unlimited Revisions",
                        "100% Satisfaction Guarantee",
                        "100% Unique Design Guarantee",
                        "100% Money Back Guarantee"
                    ],
                    VAS: [
                        "Cross-Browser Compatibility",
                        "SEO Friendly Coding",
                        "Experienced Account Manager",
                        "2 Month On-going Support & Maintenance",
                    ],
                },
                {
                    title: "E-commerce Website Business Package",
                    subtitle: (
                        <>
                            Perfect for Small Businesses! <br></br>
                        </>
                    ),

                    boldTitle: " Get 70% Off",
                    price: "$1349",
                    originalPrice: "$4496",
                    features: [
                        "Up-To 15 Unique Pages Website",
                        "Customized Design",
                        "Up-To 500 Products",
                        "Content Management System (CMS)",
                        "Full Shopping Cart Integration",
                        "Payment Module Integration",
                        "Easy Product Search",
                        "Product Reviews",
                        "Chatbot/Livechat Setup",
                        "Team of Expert Designers & Developers",
                        "Unlimited Revisions",
                        "100% Satisfaction Guarantee",
                        "100% Unique Design Guarantee",
                        "100% Money Back Guarantee"
                    ],
                    VAS: [
                        "Cross-Browser Compatibility",
                        "SEO Friendly Coding",
                        "Experienced Account Manager",
                        "3 Month On-going Support & Maintenance",
                    ],
                },
                {
                    title: "Business E-Commerce Package",
                    subtitle: (
                        <>
                            A comprehensive solution for Business and SMEs <br></br>
                        </>
                    ),
                    boldTitle: " Get 70% Off",
                    price: "$4994",
                    originalPrice: "$16645",
                    features: [
                        "Complete Custom Design & Development",
                        "Unique, User Friendly, Interactive, Dynamic, High End UI Design",
                        "Unlimited Banner Designs",
                        "Interactive Sliding Banners",
                        "Special Hover Effects",
                        "Customized Contact us Form",
                        "Multiple Filtration Option (Search by Age, Experience, Talent, Industry etc)",
                        "Client/User Dashboard Area",
                        "Vendor / Agency Dashboard Area",
                        "Custom Coding and Development",
                        "Content Management System (Custom)",
                        "Online Appointment/Scheduling integration (Optional)",
                        "Online Payment Integration",
                        "Invoicing System",
                        "Automated Email Notifications",
                        "Multi Lingual (Optional)",
                        "Custom Dynamic Forms",
                        "Complete Database Creation",
                        "Signup Automated Email Authentication",
                        "Signup Area (For Newsletters, Offers etc.)",
                        "Search Bar for Easy Search",
                        "Live Feeds of Social Networks integration (Optional)",
                        "Search Engine Submission",
                        "SEO friendly",
                        "Mobile Responsive",
                        "Master Admin Panel",
                        "SSL Certification (to make the website and its information secured)",
                        "1 Year Free Hosting",
                        "6 Months of Free Maintenance",
                        "Complete Deployment",
                        "Complete W3C Validation",
                        "Chatbot/Livechat Setup",
                        "Dedicated Team of Designers and Developers",
                        "100% Satisfaction Guarantee",
                        "100% Unique Design Guarantee",
                        "100% Money Back Guarantee"
                    ],
                    VAS: [
                        "Cross-Browser Compatibility",
                        "SEO Friendly Coding",
                        "Experienced Account Manager",
                        "6 Month On-going Support & Maintenance",
                    ],
                },
            ],
        },
        {
            category: 'Logo Design Packages',
            items: [
                {
                    title: "Basic Logo Package",
                    subtitle: (
                        <>
                            Best Value for Money Guaranteed! <br></br>
                        </>
                    ),
                    boldTitle: " Get 70% Off",
                    price: "$45",
                    originalPrice: "$139",
                    features: [
                        "2 Logo Design Concepts",
                        "4 Free Revisions",
                        "Dedicated Project Manager",
                        "24 - 48 Hours Delivery",
                    ],
                    whatYouWillGet: [
                        "1 Finalized Logo",
                        "2 File Formats (PNG, JPG)",
                    ],
                },
                {
                    title: "Professional Logo Package",
                    subtitle: (
                        <>
                            Best Value for Money Guaranteed! <br></br>
                        </>
                    ),
                    boldTitle: " Get 70% Off",
                    price: "$85",
                    originalPrice: "$285",
                    features: [
                        "4 Logo Design Concepts",
                        "8 Free Revisions",
                        "Dedicated Project Manager",
                        "24 - 48 Hours Delivery",
                    ],
                    whatYouWillGet: [
                        "1 Finalized Logo",
                        "3 File Formats (JPG, PNG, PDF)",
                    ],
                },
                {
                    title: "Infinite Logo Package",
                    subtitle: (
                        <>
                            Best Value for Money Guaranteed! <br></br>
                        </>
                    ),
                    boldTitle: " Get 70% Off",
                    price: "$145",
                    originalPrice: "$490",
                    features: [
                        "6 Logo Design Concepts",
                        "Unlimited Revisions",
                        "Dedicated Project Manager",
                        "24 - 48 Hours Delivery",
                    ],
                    whatYouWillGet: [
                        "1 Finalized Logo",
                        "All File Formats (Ai, PSD, EPS, PNG, JPG, PDF)",
                    ],
                },
            ],
        },
        {
            category: 'Stationery Design Packages',
            items: [
                {
                    title: "Stationery Basic Package",
                    subtitle: (
                        <>
                            Complete Branding Solution! <br></br>
                        </>
                    ),
                    boldTitle: " Get 70% Off",
                    price: "$129",
                    originalPrice: "$415",
                    features: [
                        "Business Card Design",
                        "Letterhead Design",
                        "Envelope Design",
                        "MS Word Letterhead",
                        "Email Signature Design",
                        "Invoice Design",
                        "Facebook Banner Design",
                        "YouTube Banner Design",
                        "Twitter Banner Design",
                        "LinkedIn Banner Design",
                        "Logo Watermark",
                    ],
                },
                {
                    title: "Stationery Startup Package",
                    subtitle: (
                        <>
                            Complete Branding Solution! <br></br>
                        </>
                    ),
                    boldTitle: " Get 70% Off",
                    price: "$179",
                    originalPrice: "$574",
                    features: [
                        "Business Card Design",
                        "Letterhead Design",
                        "Envelope Design",
                        "MS Word Letterhead",
                        "Email Signature Design",
                        "Invoice Design",
                        "Facebook Banner Design",
                        "YouTube Banner Design",
                        "Twitter Banner Design",
                        "LinkedIn Banner Design",
                        "Logo Watermark",
                        "Favicon Design",
                        "Polo/T-Shirt Design",
                        "Cap/Hat Design",
                    ],
                },
                {
                    title: "Stationery Infinite Package",
                    subtitle: (
                        <>
                            Complete Branding Solution! <br></br>
                        </>
                    ),
                    boldTitle: " Get 70% Off",
                    price: "$315",
                    originalPrice: "$1035",
                    features: [
                        "Business Card Design",
                        "Letterhead Design",
                        "Envelope Design",
                        "MS Word Letterhead",
                        "Email Signature Design",
                        "Invoice Design",
                        "Facebook Banner Design",
                        "YouTube Banner Design",
                        "Twitter Banner Design",
                        "LinkedIn Banner Design",
                        "Logo Watermark",
                        "Favicon Design",
                        "Polo/T-Shirt Design",
                        "Cap/Hat Design",
                        "Bag Design",
                        "Signage Design",
                        "Flyer Design",
                    ],
                },
            ],
        },
        {
            category: 'SEO Packages',
            items: [
                {
                    title: "Basic SEO Package",
                    subtitle: (
                        <>
                            Complete Branding Solution! <br></br>
                        </>
                    ),
                    boldTitle: " Get 70% Off",
                    price: "$250",
                    originalPrice: "$799",
                    features: [
                        "Prior Analysis",
                        "Business Analysis",
                        "Consumer Analysis",
                        "Competitor Analysis",
                        "15 Selected Keywords Targeting",
                        "15 Pages Keyword Targeted",
                        "Web Page Optimization",
                        "Meta Tags Creation",
                        "Keyword Optimization",
                        "Image Optimization",
                        "Inclusion of anchors",
                        "Tracking & Analysis",
                        "Google Analytics Installation",
                        "Google Webmaster Installation",
                        "Call To Action Plan",
                        "Creation of Sitemaps",
                        "Reporting",
                        "Monthly Reporting",
                        "Recommendation",
                        "Email Support",
                        "Phone Support",
                        "Off-Page Optimization",
                        "Social Bookmarking",
                        "Slideshare Marketing",
                        "Forums/FAQ's",
                        "Link Building",
                        "Directory Submission",
                        "Local Business Listings",
                        "100% Ownership Rights",
                        "100% Satisfaction Guarantee",
                        "100% Unique Design Guarantee",
                        "100% Money Back Guarantee",
                    ],
                },
                {
                    title: "Premium SEO Package",
                    subtitle: (
                        <>
                            Complete Branding Solution! <br></br>
                        </>
                    ),
                    boldTitle: " Get 70% Off",
                    price: "$499",
                    originalPrice: "$1650",
                    features: [
                        "Prior Analysis",
                        "Business Analysis",
                        "Consumer Analysis",
                        "Competitor Analysis",
                        "30 Selected Keywords Targeting",
                        "30 Pages Keyword Targeted",
                        "Web Page Optimization",
                        "Meta Tags Creation",
                        "Keyword Optimization",
                        "Image Optimization",
                        "Inclusion of anchors",
                        "Tracking & Analysis",
                        "Google Analytics Installation",
                        "Google Webmaster Installation",
                        "Call To Action Plan",
                        "Creation of Sitemaps",
                        "Reporting",
                        "Monthly Reporting",
                        "Recommendation",
                        "Email Support",
                        "Phone Support",
                        "Off-Page Optimization",
                        "Social Bookmarking",
                        "Slideshare Marketing",
                        "Forums/FAQ's",
                        "Link Building",
                        "Directory Submission",
                        "Local Business Listings",
                        "100% Ownership Rights",
                        "100% Satisfaction Guarantee",
                        "100% Unique Design Guarantee",
                        "100% Money Back Guarantee",
                    ],
                },
                {
                    title: "Platinum SEO Package",
                    subtitle: (
                        <>
                            Complete Branding Solution! <br></br>
                        </>
                    ),
                    boldTitle: " Get 70% Off",
                    price: "$749",
                    originalPrice: "$2599",
                    features: [
                        "Prior Analysis",
                        "Business Analysis",
                        "Consumer Analysis",
                        "Competitor Analysis",
                        "30 Selected Keywords Targeting",
                        "30 Pages Keyword Targeted",
                        "Web Page Optimization",
                        "Meta Tags Creation",
                        "Keyword Optimization",
                        "Image Optimization",
                        "Inclusion of anchor tags",
                        "Tracking & Analysis",
                        "Google Analytics Installation",
                        "Google Webmaster Installation",
                        "Call To Action Plan",
                        "Creation of Sitemaps",
                        "Reporting",
                        "Monthly Reporting",
                        "Recommendation",
                        "Email Support",
                        "Phone Support",
                        "Off-Page Optimization",
                        "Social Bookmarking",
                        "Slideshare Marketing",
                        "Forums/FAQ's",
                        "Link Building",
                        "Directory Submission",
                        "Local Business Listings",
                        "Blog Content Creation",
                        "Local SEO",
                        "100% Ownership Rights",
                        "100% Satisfaction Guarantee",
                        "100% Unique Design Guarantee",
                        "100% Money Back Guarantee ",
                    ],
                },
            ],
        },
        {
            category: 'SMM Packages',
            items: [
                {
                    title: "Starter Package",
                    subtitle: (
                        <>
                            Complete Branding Solution! <br></br>
                        </>
                    ),
                    boldTitle: " Get 70% Off",
                    price: "$149",
                    originalPrice: "$665",
                    features: [
                        "3 postings per week (per network) Facebook + Twitter + Instagram",
                        "Content Creation",
                        "Business Page Optimization",
                        "Social Media Strategy (Overview)",
                        "Facebook Likes Campaign",
                        "Monthly Progress report",
                        "Copywriting",
                    ],
                },
                {
                    title: "Scaling Package",
                    subtitle: (
                        <>
                            Complete Branding Solution! <br></br>
                        </>
                    ),
                    boldTitle: " Get 70% Off",
                    price: "$399",
                    originalPrice: "$1250",
                    features: [
                        "4 postings per week (per network) Facebook + Twitter + Instagram + LinkedIn",
                        "Content Creation",
                        "Business Page Optimization",
                        "Social Media Strategy (Overview)",
                        "Facebook Likes Campaign",
                        "Monthly Progress report",
                        "Copywriting"
                    ],
                },
                {
                    title: "Venture Package",
                    subtitle: (
                        <>
                            Complete Branding Solution! <br></br>
                        </>
                    ),
                    boldTitle: " Get 70% Off",
                    price: "$549",
                    originalPrice: "$1799",
                    features: [
                            "5 postings per week (per network) Facebook + Twitter + Instagram + LinkedIn + TikTok",
                            "Content Creation",
                            "Business Page Optimization",
                            "Social Media Strategy (Overview)",
                            "Facebook Likes Campaign",
                            "Monthly Progress report",
                            "Copywriting"
                    ],
                },
            ],
        },
    ];
    return (
        <section className="pricing-section text-center py-5" id='pricing-section'>
            <Container>
                <h2 className="price-heading mb-4">Prices for Affordable Web Design Solutions  </h2>

                {/* React Bootstrap Tabs with Centered and No Underline */}
                <Tabs
                    defaultActiveKey="Website Packages"
                    id="pricing-tabs"
                    className="mb-3 justify-content-center" // Center the tabs
                    style={{ borderBottom: 'none' }} // Remove the underline
                >
                    {packages.map((pkg, index) => (
                        <Tab eventKey={pkg.category} title={pkg.category} key={index}>
                            <Row className="justify-content-center">
                                {/* Display items in rows of 3 */}
                                {pkg.items.map((item, index) => (
                                    <Col key={index} lg={4} md={6} sm={12} className="mb-3"> {/* Changed lg={3} to lg={4} */}
                                        <div className="package">
                                            <div className="package-header">
                                                <h5>{item.title}</h5>
                                                <h6>{item.subtitle} <strong> {item.boldTitle}</strong></h6>

                                                {/* Price section */}
                                                <div className="price">
                                                    <h2>{item.price}</h2>
                                                    <div>
                                                        <strike>{item.originalPrice}</strike>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Scrollable Div for Package Details */}
                                            <div className="scrollable-content">
                                                <ul className="package-list">
                                                    {item.features.map((feature, index) => (
                                                        <li key={index}>
                                                            <IoCheckmarkOutline style={{ color: '#3E1EC9', fontSize: '20px', marginRight: '10px' }} />
                                                            {feature}
                                                        </li>
                                                    ))}

                                                    {item?.VAS?.length && (
                                                        <>
                                                            <div className="text-center text-dark">
                                                                <b>Value Added Services</b>
                                                            </div>
                                                            {item.VAS.map((service, index) => (
                                                                <li key={index}>
                                                                    <IoCheckmarkOutline style={{ color: '#3E1EC9', fontSize: '20px', marginRight: '10px' }} />
                                                                    {service}
                                                                </li>
                                                            ))}
                                                        </>
                                                    )}

                                                    {item?.whatYouWillGet?.length && (
                                                        <>
                                                            <div className="text-center text-dark">
                                                                <b>What will you Get?</b>
                                                            </div>
                                                            {item.whatYouWillGet.map((service, index) => (
                                                                <li key={index}>
                                                                    <IoCheckmarkOutline style={{ color: '#3E1EC9', fontSize: '20px', marginRight: '10px' }} />
                                                                    {service}
                                                                </li>
                                                            ))}
                                                        </>
                                                    )}
                                                </ul>
                                            </div>



                                            {/* Button */}
                                            <button data-bs-toggle='modal' data-bs-target="#popupForm" onClick={() => updatePopupTitle(item.price.includes('$') ? `${item.title} - ${item.price}` : item.title)} className="package-btn">START PROJECT</button>
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
