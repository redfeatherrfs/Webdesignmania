import './OurWorkProcess.css'
import workProcessImg from '../../images/work-process.png'
import planningIcon from '../../images/planning-icon.png'
import developedIcon from '../../images/developed-icon.png'
import deliverIcon from '../../images/deliver-icon.png'

const OurWorkProcess = () => {
    return (
        <section className="our-work-process-section">
            <div className="container">
                <div className="text-center">
                    <h1 className="about-heading">Our Work Process</h1>
                    <p className="description">Professional hosting at an affordable price. Distinctively recaptiualize principle-centered core competencies through client-centered core competencies.</p>
                </div>

                <div className='row'>
                    <div className='col-md-6'>
                        <div className='position-relative'>
                            <div className='d-flex align-items-center'>
                                <img src={planningIcon} alt='Planning Icon' className='img-fluid' />
                                <div>
                                    <h4>Planning Idea</h4>
                                    <p>Holisticly architect sustainable meta-services for process-centric core competencies. Enthusiastically re-engineer best-of-breed outsourcing.</p>
                                </div>
                            </div>

                            <div className='d-flex align-items-center'>
                                <div>
                                    <h4>Developed Final Product</h4>
                                    <p>Monotonectally harness holistic web-readiness after multimedia based catalysts for change. Completely brand front-end systems before visionary.</p>
                                </div>
                                <img src={developedIcon} alt='Planning Icon' className='img-fluid' />
                            </div>

                            <div className='d-flex align-items-center'>
                                <img src={deliverIcon} alt='Planning Icon' className='img-fluid' />
                                <div>
                                    <h4>Deliver to Customer</h4>
                                    <p>Monotonectally plagiarize synergistic e-business for stand-alone communities. Professionally enhance visionary manufactured products progressive.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img src={workProcessImg} alt='Our Work Process' className='img-fluid' />
                    </div>
                </div>
            </div>

        </section >
    )
}

export default OurWorkProcess
