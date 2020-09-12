import React from 'react'
import landscape from '../../image/George-Landscape2-BW.jpg'
import resume from '../../image/resume.png'
import './about-item.scss'

const AboutItem = () => (

    <div className='about-item'>
        <div className='image-content' alt='facebook' style={{
            backgroundImage: `url(${landscape})`,


        }} />
        <div className='content'>
            <h2 className='title'>About</h2>

            <p className='about-me'>&emsp;&emsp; I am a Seneca College
            Alumni from the summer of 2019 with an associate's degree in Computer Programming. I got into programming
            when a friend of mine introduced me to it and decided to
            to switch a 20+ year career in hospitality. <br />I fell in love with programming because of how challenging and
            creative it could be. Programming compliements my career as a kitchen Manager which is creating and challenging
            I am ready for a new chapter, to collaborate with the web development industry and bring what I have learned from shool
            and my career and implement it. Happy coding and Thank you for your time.

            </p>
            <div className='resume-icon'>
                <a target='_blank' rel="noopener noreferrer" className='site-Item' href='https://drive.google.com/file/d/1OqG-Aqb25--ZFfadv_3MXqJjw587XIE4/view?usp=sharing'>
                    <img className='icon-image'
                        src={resume}
                        alt='resume'
                    />
                </a>
                <h3>Hire Me</h3>
            </div>
        </div>
    </div>
)

export default AboutItem;