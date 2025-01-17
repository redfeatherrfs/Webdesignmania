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
                    <p className="description">Premium hosting, designed for value. Drive success by blending innovation and client-focused efficiency.</p>
                </div>

                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='position-relative'>
                            <div className='d-flex align-items-center mb-3'>
                                <img src={planningIcon} alt='Planning Icon' className='img-fluid icon' />
                                <div className='steps-content'>
                                    <h4>Planning Idea</h4>
                                    <p className='m-0'>Optimize efficient solutions to drive strong, market-oriented innovation with the expert assistance of our website design company.</p>
                                </div>
                            </div>

                            <div className='d-flex align-items-center mb-3'>
                                <div className='steps-content'>
                                    <h4>Developed Final Product</h4>
                                    <p className='m-0'>Our professional website developers refine, test, and finalize the product to ensure it is ready for the market.</p>
                                </div>
                                <img src={developedIcon} alt='Planning Icon' className='img-fluid icon' />
                            </div>

                            <div className='d-flex align-items-center mb-3'>
                                <img src={deliverIcon} alt='Planning Icon' className='img-fluid icon' />
                                <div className='steps-content'>
                                    <h4>Deliver to Customer</h4>
                                    <p className='m-0'>Our website designers conduct comprehensive quality assurance (QA) to guarantee functionality and responsiveness across all devices.</p>
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
