import React, { useState } from 'react'
import silicon from '../assets/images/Navbar/silicon.svg'
import solidDark from '../assets/images/Navbar/solid-dark.svg'
import DarkModeSwitch from './DarkModeSwitch'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [isActive, setIsActive] = useState(false)

  return (
    <div className="container">
                    <Link id="logo" to="/">
                        <img className="show-light" src={silicon} alt="Silicon Logotype." />
                        <img className="show-dark" src={solidDark} alt="Silicon Logotype." />
                    </Link>
                        <nav id="main-menu" className="nav-bar" >
                            <a className="nav-link" to="/">Features</a>
                            <Link className="nav-link" to="/contact" onClick={ () => { setIsActive(prev = !prev)}}>Contact</Link>
                            {` ${isActive ? 'active' : ''}`}
                        </nav>
                    <DarkModeSwitch />
                    
                    <a id="auth-signin" href="#" className="btn-primary">
                        <i className="fa-duotone fa-solid fa-user-large"></i>
                        <span>Sign in / up</span>
                    </a>
                    <button className="btn-mobile">
                        <i className="fa-regular fa-bars"></i>
                    </button>
        </div>   
  )
}

export default Navbar