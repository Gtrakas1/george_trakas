import React from 'react'
import {Link} from 'react-router-dom'
import './header.scss'

const Header = () => (
    <div className='header'>
    <Link className='name'>
    George Trakas
    </Link>
    <div className='navigation'>
    <Link className='nav'>
    Home
    </Link>
    <Link className='nav'>
    About
    </Link>
    <Link className='nav'>
    Contact
    </Link>
    
    </div>
    </div>
)

export default Header