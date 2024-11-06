import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const PopupForm = ({ title }) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false); // Loading state
    const [formData, setFormData] = useState({
        title: '',
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    // Handle form input changes
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    useEffect(() => {
        setFormData({ ...formData, title })
    }, [title])

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        await fetch(/*'http://localhost:9090/packages.php'*/"https://webdesignmania.co.uk/php/packages.php", {
            method: 'POST',
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(({ success, message }) => {
                document.querySelector('button[data-bs-dismiss]').click()
                setLoading(false)
                if (success)
                    navigate('/thank-you')
                else
                    Swal.fire('Error', message, 'error')
            })
    }

    return (
        <div className="modal fade" id="popupForm" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <h4 className="modal-title">{title}</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body pt-0">
                        <form method='POST' onSubmit={handleSubmit}>
                            <input type='hidden' name='title' value={formData.title} />
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Full name</label>
                                <input type="text" className="form-control" id="name" placeholder="John Doe" name='name' value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="example@test.com" name='email' value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone number</label>
                                <input type="tel" className="form-control" id="phone" placeholder="1234567890" name='phone' value={formData.phone} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" placeholder="Your message..." rows="5" name='message' onChange={handleChange} value={formData.message} required></textarea>
                            </div>
                            <div className="d-grid mb-3">
                                <button type='submit' className='btn btn-primary' disabled={loading}>
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                                            <span role="status">Loading...</span>
                                        </>
                                    ) : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopupForm;
