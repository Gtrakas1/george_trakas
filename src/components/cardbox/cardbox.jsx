import React from 'react'
import george from '../../image/facebook-profile.png'
import './cardbox.scss'

const Cardbox = () =>
    (

        <div className='cardbox-container'>
            <h2>About Me</h2>
            <div className='image-face'>
                <img src={george} alt='facebook' width='50%' height='50%' style={{ borderRadius: "50%" }} />
            </div>
            <div className='content'>
                <h3>Web developer</h3>
                <p>My name is...</p>
            </div>
        </div>
    )

export default Cardbox 