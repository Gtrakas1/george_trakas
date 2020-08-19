import React, { Component } from 'react'
import './contact-form.scss'
import FormInput from '../form-input/form-input'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            FirstName: '',
            LastName: '',
            Email: ''
        }
    }


    handleChange = e => {
        const { value, name } = e.target

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='form-container' >
                <h2> Contact Me</h2>
                <span>Thank you for taking the time to look through my portfolio.
                I look forward to meeting with you.</span>
                <form id='contact-form' action="mailto:gtrakas23@gmail.com" method="GET">
                    <FormInput name='FirstName' type='FirstName' handleChange={this.handleChange} label='FirstName' value={this.state.FirstName} />
                    <FormInput name='LastName' type='LastName' label='LastName' handleChange={this.handleChange} value={this.state.LastName} />
                    <FormInput name='Email' type='email' label='Email' handleChange={this.handleChange} value={this.state.Email} />
                    <button className='button'><a class="btn btn-primary"
                        onclick="document.getElementById('contact-form').submit();">Send</a>submit</button>
                </form>
            </div>

        )
    }

}
export default Form