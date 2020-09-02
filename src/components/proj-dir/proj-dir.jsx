import React, { Component } from 'react'
import ProjItem from '../project/proj-dir-item'
import './proj-dir.scss'


class ProjDir extends Component {

    render() {
        const { project } = this.props
        return (
            <div className='proj-dir-container'>
                {
                    project.map(({ id, ...otherProps }) => (
                        <ProjItem
                            key={id}
                            {...otherProps} />
                    ))

                }
            </div>
        )

    }



}

export default ProjDir 