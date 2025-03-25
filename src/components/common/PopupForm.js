import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { isAlphanumeric, isAlphabetic, fieldLengthValidator } from '../../utils/validationHelpers'


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

    const validateEmailAndPhone = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            // phoneRegex = /^\+1\d{10}$/
            phoneRegex = /^\+?\d{10,15}$/

            

        if (!emailRegex.test(formData.email))
            document.querySelector('#popupForm input[name=email]').classList.add('is-invalid')
        else
            document.querySelector('#popupForm input[name=email]').classList.remove('is-invalid')

        if (!phoneRegex.test(formData.phone))
            document.querySelector('#popupForm input[name=phone]').classList.add('is-invalid');
        else
            document.querySelector('#popupForm input[name=phone]').classList.remove('is-invalid');

        return phoneRegex.test(formData.phone) && emailRegex.test(formData.email)
    }

    const validateFormFields = () => {
        let isValid = true

        // Name validation
        if (!isAlphabetic(formData.name) || !isAlphanumeric(formData.name) || !fieldLengthValidator(formData.name, 50)) {
            document.querySelector('#popupForm input[name=name]').classList.add('is-invalid')
            isValid = false
        }
        else
            document.querySelector('#popupForm input[name=name]').classList.remove('is-invalid')

        // Message validation
        if (!fieldLengthValidator(formData.message, 2000)) {
            document.querySelector('#popupForm textarea').classList.add('is-invalid')
            isValid = false
        }
        else
            document.querySelector('#popupForm textarea').classList.remove('is-invalid')

        return isValid
    }

    const handleSubmit = async e => {
        e.preventDefault()

        if (!validateEmailAndPhone())
            return

      
        if (!validateFormFields())
            return

        setLoading(true)

        await fetch("https://creativelogodesign.co.uk/lp/php_mailer/package.php", {
            method: 'POST',
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(({ success, message }) => {
                document.querySelector('button[data-bs-dismiss]').click()
                setLoading(false)
                if (success)
                    navigate('./thanks.php')
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
                        {/* <form method='POST' onSubmit={handleSubmit}>
                            <input type='hidden' name='title' value={formData.title} />
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Full name <span className='text-danger'>*</span></label>
                                <input type="text" className="form-control" id="name" placeholder="John Doe" name='name' value={formData.name} onChange={handleChange} required />
                                <div className="invalid-feedback">
                                    Name must be alphabetic or alphanumeric & must not be greater than 50 characters.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address <span className='text-danger'>*</span></label>
                                <input type="email" className="form-control" id="email" placeholder="example@test.com" name='email' value={formData.email} onChange={handleChange} required />
                                <div className="invalid-feedback">
                                    Invalid Email address
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone number</label>
                                <input type="tel" className="form-control" id="phone" placeholder="1234567890" pattern="^\+?\d{10,15}$"  name='phone' value={formData.phone} onChange={handleChange} required />
                                <div className="invalid-feedback">
                                    Invalid Phone number. Example: 02071234564
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message <span className='text-danger'>*</span></label>
                                <textarea className="form-control" id="message" placeholder="Your message..." rows="5" name='message' onChange={handleChange} value={formData.message} required></textarea>
                                <div className="invalid-feedback">
                                    Message must not be greater than 200 characters.
                                </div>
                            </div>
                            <div className="d-grid mb-3">
                                <button type='submit' className='btn orange-button' disabled={loading}>
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                                            <span role="status">Submitting...</span>
                                        </>
                                    ) : 'Submit'}
                                </button>
                            </div>
                        </form> */}
                        <form method="POST" onSubmit={handleSubmit} noValidate>
    <input type="hidden" name="title" value={formData.title} />
    <div className="mb-3">
        <label htmlFor="name" className="form-label">
            Full name <span className="text-danger">*</span>
        </label>
        <input
  type="text"
  className="form-control"
  id="name"
  placeholder="John Doe"
  name="name"
  value={formData.name}
  onChange={handleChange}
  required
    pattern="^[a-zA-Z][a-zA-Z ]{0,50}$"
                                    maxLength="52"
  title="Please enter a valid name"
/>
{formData.name && !/^[a-zA-Z][a-zA-Z ]{0,50}$/.test(formData.name) && (
                                    <div className="error-message">Not allowed more than 50 characters and it must be in alphabet</div>
                                )}


    </div>
    <div className="mb-3">
        <label htmlFor="email" className="form-label">
            Email address <span className="text-danger">*</span>
        </label>
        <input
            type="email"
           className="form-control"
            id="email"
            placeholder="example@gmail.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            pattern="[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}"
            title="Please enter a valid email address"
        />
        {formData.email && !/^[^\s][^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
                                    <div className="error-message">Please enter a valid email address (no spaces at the beginning).</div>
                                )}
    </div>
    <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone number</label>
        <input
            type="tel"
          className="form-control"
            id="phone"
            placeholder="1234567890"
            pattern="^\+?\d{10,15}$"
                                    title="Please enter a valid phone number"
                                    maxLength="16"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
           
        />
          {formData.phone && !/^\+?\d{10,15}$/.test(formData.phone) && (
                                    <div className="error-message">Please enter a valid phone number (between 10 and 15 digits, with an optional '+').</div>
                                )}
    </div>
    <div className="mb-3">
        <label htmlFor="message" className="form-label">
            Message <span className="text-danger">*</span>
        </label>
        <textarea
           className="form-control"
            id="message"
            placeholder="Your message..."
            rows="5"
            name="message"
            onChange={handleChange}
            value={formData.message}
            required
            maxLength="2002"
            title="Message must not exceed 2000 characters."
        ></textarea>
        {formData.message && formData.message.length > 2000 && (
                                    <div className="error-message">Message should not exceed 2000 characters.</div>
                                )}
    </div>
    <div className="d-grid mb-3">
        <button type="submit" className="btn orange-button" disabled={loading}>
            {loading ? (
                <>
                    <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                    <span role="status">Submitting...</span>
                </>
            ) : (
                'Submit'
            )}
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
