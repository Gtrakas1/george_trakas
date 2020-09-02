import React from 'react'
import './projects.scss'
import ProjData from '../proj-dir/proj-dir.data'
import ProjDir from '../proj-dir/proj-dir'

const Work = () => (

    <div className='work-container'>
        <h2 className='title'>Site Directory</h2>
        <ProjDir project={ProjData} />
    </div>
)

export default Work