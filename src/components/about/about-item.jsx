import React from 'react'
import george from '../../image/facebook-profile.png'
import resume from '../../image/resume.png'
import './about-item.scss'

const AboutItem = () => (

    <div className='about-item'>
        <div className='image-content' alt='facebook' style={{
            backgroundImage: `url(${george})`,


        }} />
        <div className='content'>
            <h2>About</h2>

            <p className='about-me'>&emsp;&emsp; I am a Seneca Alumni from the summer of 2019 with an associate's degree in Computer Programming. I got into programming
            after deciding to switch a 20+ career in hospitality. A colleague of mine introduced me to programming and I enjoyed it so much
            that I decided I wanted to persue a career with it. My hospitality expierience has increased my soft skills because it has taught me
            how important it is to work with a team, lead it, client service and also other skills such as maintaining budgets and creating profit for
            any estasblishment I have worked for.<br />
            &emsp;&emsp; Thank you for taking the time to look through my portfolio. The icon below will connect you to my resume.
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