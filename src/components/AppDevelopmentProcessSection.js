import iconWithLinesImg from '../images/icons-line.png'


const AppDevelopmentProcessSection = () => {
    return (
        <section className="app-dev-process-section my-5 py-5">
            <div className='container'>
                <div className="text-center">
                    <h6 className="sub-heading">App Design</h6>
                    <h2 className="about-heading">Navigating the Mobile Development Path </h2>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-5">
                        <div className=' mt-3'>
                            <h1 className='steps-heading mb-4'>Step 1</h1>
                            <h1 className='mb-3'>Blueprinting</h1>
                            <p>This is where we work together to define your app's goals and objectives. We dive into your target audience to find out what your potential users need. A competitor analysis is conducted to pinpoint key features that will make your app stand out. This foundational step is crucial for ensuring that we have a clear vision of what we want to achieve with your app.
                            </p>
                        </div>

                        <div className='d-block d-lg-none'>
                            <h1 className='steps-heading mb-4'>Step 2</h1>
                            <h1 className='mb-3'> UI/UX Design</h1>
                            <p>Once we have a solid plan in place, our design team will create wireframes and mockups to visualize how your app will look and feel, keeping the focus on user experience (UX) and user interface (UI). At this stage, your feedback will be highly acknowledgeable which will help us refine the app before we start the development process.</p>
                        </div>

                        <div className=' step-3 d-none d-lg-block'>
                            <h1 className='steps-heading mb-4'>Step 3</h1>
                            <h1 className='mb-3'>Development</h1>
                            <p>Our expert developers will start coding your app, integrating all the necessary features, and setting up the back-end infrastructure. Our team will keep you informed at every stage of the process, ensuring you're always in the loop. We will conduct regular testing to minimize the possibility of any errors and maintain the highest quality standards. </p>
                        </div>

                        <div className=' d-block d-lg-none'>
                            <h1 className='steps-heading mb-4'>Step 3</h1>
                            <h1 className='mb-3'>Development</h1>
                            <p>Our expert developers will start coding your app, integrating all the necessary features, and setting up the back-end infrastructure. Our team will keep you informed at every stage of the process, ensuring you're always in the loop. We will conduct regular testing to minimize the possibility of any errors and maintain the highest quality standards. </p>
                        </div>

                        <div className='d-block d-lg-none'>
                            <h1 className='steps-heading mb-4'>Step 4</h1>
                            <h1 className='mb-3'>Testing & Launch</h1>
                            <p>Our developers will conduct thorough testing to ensure your app functions smoothly and meets all design specifications. Your app will run on different devices for usability testing and performance checks. Once everything is in perfect shape, we'll prepare to launch your app on the relevant app stores, like Google Play or the Apple App Store.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-auto d-none d-lg-block">
                        <img src={iconWithLinesImg} />
                    </div>
                    <div className="col-lg-5 d-none d-lg-block">
                        <div className='step-2'>
                            <h1 className='steps-heading mb-4'>Step 2</h1>
                            <h1 className='mb-3'> UI/UX Design</h1>
                            <p>Once we have a solid plan in place, our design team will create wireframes and mockups to visualize how your app will look and feel, keeping the focus on user experience (UX) and user interface (UI). At this stage, your feedback will be highly acknowledgeable which will help us refine the app before we start the development process.</p>
                        </div>

                        <div className='step-4'>
                            <h1 className='steps-heading mb-4'>Step 4</h1>
                            <h1 className='mb-3'>Testing & Launch</h1>
                            <p>Our developers will conduct thorough testing to ensure your app functions smoothly and meets all design specifications. Your app will run on different devices for usability testing and performance checks. Once everything is in perfect shape, we'll prepare to launch your app on the relevant app stores, like Google Play or the Apple App Store.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AppDevelopmentProcessSection
