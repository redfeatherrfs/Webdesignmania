import iconWithLinesImg from '../images/icons-line.png'


const AppDevelopmentProcessSection = () => {
    return (
        <section className="app-dev-process-section my-5 py-5">
            <div className='container'>
                <div className="text-center">
                    <h6 className="sub-heading">ABOUT US</h6>
                    <h2 className="about-heading">Our Mobile App Development Process</h2>
                </div>

                <div className="row mt-5">
                    <div className="col-md-5">
                        <div className='text-end mt-3'>
                            <h1 className='steps-heading mb-4'>Step 1</h1>
                            <h1 className='mb-3'>Define Your Vision</h1>
                            <p>We begin your mobile app development journey by going on an in-depth discussion with you to grasp the core purpose, understand the target audience, and identify the features you want in your mobile app. Our collaborative approach helps us define a clear vision, knowing whether the mobile app design aligns with your end consumer expectations.</p>
                        </div>

                        <div className='text-end step-3'>
                            <h1 className='steps-heading mb-4'>Step 3</h1>
                            <h1 className='mb-3'>Develop the App</h1>
                            <p>Our skilled engineers bring your mobile app to life by making use of proven programming languages and app development tools. The robust architecture that we use ensures your mobile optimally performs across all devices. These tools also help us to ensure your mobile app is scalable and can undergo different testing procedures.</p>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <img src={iconWithLinesImg} />
                    </div>
                    <div className="col-md-5">
                        <div className='step-2'>
                            <h1 className='steps-heading mb-4'>Step 2</h1>
                            <h1 className='mb-3'>Design the Mobile App</h1>
                            <p>The next phase involves our expert designers translating your mobile app vision into a satisfying user experience. Here, we create initial mockups and wireframes to understand how the app will appear to your end customers. Our mobile app team will create user flow and interaction diagrams to map out your user journey, testing and validating every step.</p>
                        </div>

                        <div className='step-4'>
                            <h1 className='steps-heading mb-4'>Step 4</h1>
                            <h1 className='mb-3'>Deliver & Launch</h1>
                            <p>Once the final mobile app design is complete, we plan the app launch, ensuring its availability for the target market. To ensure your mobile app appears in front of your target audience, we take the necessary steps for app store optimization and provide ongoing support for continuous improvement to meet user satisfaction.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AppDevelopmentProcessSection
