import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../assets/images/github.svg'
import {ReactComponent as Logo2} from '../assets/images/linkedin.svg'
import {ReactComponent as Logo3} from '../assets/images/facebook.svg'
import {ReactComponent as Logo4} from '../assets/images/resume.svg'

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            site_icons: [{
                id: 1,
                title: 'github',
                svg: '../assets/images/github.svg',
                urlLink: ''
            }]
        }
        
}
handleChange = () => {
    this.props.history.push('https://github.com/Gtrakas1')
  }

render(){
    return(
        <div className='home-container'>
    <Link className='github' to='/git' >
    <Logo className='logo' />
    </Link>   
    <Link className='linkedin' to='/linkedin' >
    <Logo2 className='logo2' />
    </Link>
    <Link className='linkedin' to='/facebook' >
    <Logo3 className='logo3' />
    </Link>
    <Link className='linkedin' to='/resume' >
    <Logo4 className='logo4' />
    </Link>
 
 
        </div>
)
}
}
    

export default HomePage
 