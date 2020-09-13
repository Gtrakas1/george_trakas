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

            <p className='about-me'>&emsp;&emsp; I am a Seneca College
            Alumni from the summer of 2019 with an associate's degree in Computer Programming. I got into programming
            when a friend of mine introduced me to it and decided to
            to switch a 20+ year career in hospitality management. <br />
            &emsp;&emsp; Currently. I am working on refreshing what i learnt from Seneca to enhance my skills in
            web development. I finished a course on graph-ql and am also working on a React course that is going into depth with concepts
            such as Hooks, Redux, Promises, async/await and many more.<br />
            &emsp;&emsp; My goal is to use what I have learned from my past career and education to collaborate with
            web development companies to help them grow and learn from them for personal growth. Thank you for your time.

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