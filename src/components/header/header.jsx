import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

const Header = () => (
    <div className='header'>
        <Link className='name' to='/'>
            George Trakas
    </Link>
    </div>
)

export default Header