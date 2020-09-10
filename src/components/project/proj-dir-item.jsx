import React from 'react'
import './proj-dir-itme.scss'

const ProjItem = ({ title, imageUrl, urlLink, }) => (
    <div className='proj-item'>
        <a target='_blank' rel="noopener noreferrer" className='image-proj' href={urlLink}>
            <img className='icon-image'
                src={imageUrl}
                alt='icon'

            />
        </a>
        <div className='content'>
            <h2 className='title'>{title.toUpperCase()}</h2>
            <p className='paragraph'> This project is the the back-end to a store-app<br />
            A manager could sign into this database and add,<br />delete or update items to
            each catergory to sell</p>
        </div>
    </div>


)

export default ProjItem