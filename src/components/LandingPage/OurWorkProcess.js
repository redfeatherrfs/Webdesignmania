import './OurWorkProcess.css'
import workProcessImg from '../../images/work-process.png'
import planningIcon from '../../images/planning-icon.png'
import developedIcon from '../../images/developed-icon.png'
import deliverIcon from '../../images/deliver-icon.png'

const OurWorkProcess = () => {
    return (
        <section className="our-work-process-section my-xl-5 py-5">
            <div className="container">
                <div className="text-center mb-4">
                    <h1 className="about-heading">Our Work Process</h1>
                    <p className="description">Professional hosting at an affordable price. Distinctively recaptiualize principle-centered core competencies through client-centered core competencies.</p>
                </div>

                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='position-relative'>
                            <div className='d-flex align-items-center mb-3'>
                                <img src={planningIcon} alt='Planning Icon' className='img-fluid icon' />
                                <div className='steps-content'>
                                    <h4>Planning Idea</h4>
                                    <p className='m-0'>: We proactively streamline scalable digital solutions, driving robust, market-driven innovation that fosters growth, enhances user experiences, and empowers businesses to stay competitive in dynamic markets.</p>
                                </div>
                            </div>

                            <div className='d-flex align-items-center mb-3'>
                                <div className='text-end steps-content'>
                                    <h4>Developed Final Product</h4>
                                    <p className='m-0'>We meticulously refine, test, and finalize products, ensuring market readiness with seamless functionality, user-centric design, and competitive quality to drive success.</p>
                                </div>
                                <img src={developedIcon} alt='Planning Icon' className='img-fluid icon' />
                            </div>

                            <div className='d-flex align-items-center mb-3'>
                                <img src={deliverIcon} alt='Planning Icon' className='img-fluid icon' />
                                <div className='steps-content'>
                                    <h4>Deliver to Customer</h4>
                                    <p className='m-0'>We conduct comprehensive QA to guarantee optimal functionality, responsiveness, and a consistent user experience across all devices, ensuring top-tier performance and client satisfaction.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='d-flex align-items-center justify-content-center h-100'>
                            <img src={workProcessImg} alt='Our Work Process' className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default OurWorkProcess
