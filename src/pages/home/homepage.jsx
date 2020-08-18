import React from 'react'
import './homepage.scss'
import SiteDirectory from '../../components/site-directory/site-directory'
import SiteIcon from '../../components/site-item/site_item.data'
import ProjDir from '../../components/proj-dir/proj-dir.data'

const HomePage = () => (

    <div className='home-container'>
        <h2 className='title'>Site Directory</h2>
        <SiteDirectory list={SiteIcon} />
        <h2 className='title-2'>Project Directory</h2>
        <SiteDirectory list={ProjDir} />
    </div>
)

export default HomePage