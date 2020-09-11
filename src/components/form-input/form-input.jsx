import React from 'react'
import './form-input.scss'

const FormInput = ({ updateInput, label, ...otherProps }) => (
    <div className='group'>
        {
            label ?
                (<label className={`${otherProps.value.length} ? 'shrink' : ''
} form-input-label ` } >
                    {label}
                </label>)
                : null
        }

        <input className='form-input' onChange={updateInput} {...otherProps} />
    </div>
)

export default FormInput