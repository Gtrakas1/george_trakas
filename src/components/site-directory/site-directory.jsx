import React from 'react'
import SiteItem from '../site-item/site-item';
import './site-directory.scss'

class SiteDirectory extends React.Component {



    render() {
        const { list } = this.props

        return (
            <div className='site-container'>
                {
                    list.map(({ id, ...otherIconProps }) => (
                        <SiteItem
                            key={id}
                            {...otherIconProps} />
                    ))


                }


            </div>
        )
    }
}


export default SiteDirectory
