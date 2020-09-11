import React from 'react'
import './proj-dir-itme.scss'

const ProjItem = ({ title, paragraph, imageUrl, urlLink, }) => (
    <div className='proj-item'>
        <a target='_blank' rel="noopener noreferrer" className='image-proj' href={urlLink}>
            <img className='icon-image'
                src={imageUrl}
                alt='icon'

            />
        </a>
        <div className='content'>
            <h2 className='title'>{title.toUpperCase()}</h2>
            <p className='paragraph'>{paragraph} </p>
        </div>
    </div>


)

export default ProjItem