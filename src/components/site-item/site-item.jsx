import React from 'react'
import { withRouter } from 'react-router-dom'
import './site-item.scss'

const SiteItem = ({ title, imageUrl, urlLink, }) => (
    <div className='content'>
        <a target='_blank' rel="noopener noreferrer" className='site-Item' href={urlLink}>
            <img className='icon-image'
                src={imageUrl}
                alt='icon'
            />
        </a>
        <div className='title'>{title.toUpperCase()}</div>
    </div>


)

export default withRouter(SiteItem)