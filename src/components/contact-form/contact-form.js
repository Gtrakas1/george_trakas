import React, { useState } from 'react'
import './contact-form.scss'
import FormInput from '../form-input/form-input.jsx'
import './contact-form.scss'
import emailjs, { init } from 'emailjs-com'

const Form = () => {
    const [formData, setFormData] = useState({})

    const updateInput = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = event => {
        event.preventDefault()
        const templatedId = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID
        sendFeedback(templatedId, { from_name: formData.name, user_email: formData.email, message: formData.message },)
        setFormData({
            name: '',
            email: '',
            message: '',
        })
    }

    const sendFeedback = (templatedId, userInfo) => {
        emailjs.send(
            process.env.REACT_APP_EMAIL_JS_SERVICE_ID, templatedId,
            userInfo, init(process.env.REACT_APP_EMAIL_JS_USER_ID)
        ).then(response => {
            alert('Email sent successfully', response)
        }).catch(err => {
            console.log('Something went wrong', err)
        })
    }

    return (
        <div className='form-container' >
            <h2 className='title'> Contact </h2>
            <form id='contact-form' onSubmit={handleSubmit}>
                <FormInput name='name' type='text' onChange={updateInput} label='Name' value={formData.name || ''} required />
                <FormInput name='email' type='email' onChange={updateInput} label='Email' value={formData.email || ''} required />
                <textarea
                    className='text-area'
                    type="text"
                    name="message"
                    placeholder="Message"
                    onChange={updateInput}
                    value={formData.message || ''}
                ></textarea>
                <button className='button' type='submit'>Send Email</button>
            </form>
        </div>

    )


}
export default Form