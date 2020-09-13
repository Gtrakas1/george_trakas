import React, { useState } from 'react'
import './contact-form.scss'
import FormInput from '../form-input/form-input.jsx'
import { Axios, db } from '../../firebase/firebase-config'
import './contact-form.scss'

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
        sendEmail()
        setFormData({
            name: '',
            email: '',
            message: '',
        })
    }
    const sendEmail = () => {
        Axios.post(
            'https://us-central1-emails-23fd7.cloudfunctions.net/submit',
            formData
        )
            .then(res => {
                db.collection('emails').add({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    time: new Date(),
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='form-container' >
            <h2 className='title'> Contact </h2>
            <form id='contact-form' onSubmit={handleSubmit}>
                <FormInput name='name' type='text' onChange={updateInput} label='Name' value={formData.name || ''} />
                <FormInput name='email' type='email' onChange={updateInput} label='Email' value={formData.email || ''} />
                <textarea
                    className='text-area'
                    type="text"
                    name="message"
                    placeholder="Message"
                    onChange={updateInput}
                    value={formData.message || ''}
                ></textarea>
                <button className='button' type='submit'>Submit</button>
            </form>
        </div>

    )


}
export default Form