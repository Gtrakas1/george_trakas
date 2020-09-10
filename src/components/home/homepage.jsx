import React from 'react'
import './homepage.scss'
import george from '../../image/George-Portrait1-BW-lowres.jpg'
import SiteDirectory from '../site-directory/site-directory'
import SiteIcon from '../site-item/site_item.data'

const HomePage = () => (

    <div className='home-container'>
        <div className='image-content' alt='facebook' style={{
            backgroundImage: `url(${george})`,


        }} />

        <div className='content'>
            <h2 className='home-title'>Hi. My name is George Trakas<br />
        and I am a Web Developer</h2>
            <SiteDirectory site={SiteIcon} />
        </div>
    </div>
)

export default HomePage