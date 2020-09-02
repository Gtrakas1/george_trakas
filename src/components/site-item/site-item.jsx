import React from 'react'
import { withRouter } from 'react-router-dom'
import './site-item.scss'

const SiteItem = ({ title, imageUrl, urlLink, }) => (
    <div className='site-item'>
        <a target='_blank' rel="noopener noreferrer" className='site-Item' href={urlLink}>
            <img className='icon-image'
                src={imageUrl}
                alt='icon'

            />
        </a>

    </div>


)

export default withRouter(SiteItem)