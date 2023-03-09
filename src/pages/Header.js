import React from 'react'
import {Link} from 'react-router-dom'

class Header extends React.Component {
    render() {
        return(
            <div id='App-header'>
                <div id='home' className='nav-component'>
                    <Link to='/'>Home</Link>
                </div>
                <div id='order' className='nav-component'>
                    <Link to='/order'>Order</Link>
                </div>
                <div id='about' className='nav-component'>
                    <Link to='/about'>About Us</Link>
                </div>
                <div id='contact' className='nav-component'>
                    <Link to='/contact'>Contact</Link>
                </div>
            </div>
        )
    }
}

export default Header