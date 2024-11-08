import React, { useState } from 'react'
import silicon from '../assets/images/Navbar/silicon.svg'
import solidDark from '../assets/images/Navbar/solid-dark.svg'
import DarkModeSwitch from './DarkModeSwitch'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
  return (
    <div className="container">
                    <Link id="logo" to="/">
                        <img className="show-light" src={silicon} alt="Silicon Logotype." />
                        <img className="show-dark" src={solidDark} alt="Silicon Logotype." />
                    </Link>
                    <nav id="main-menu" className={`navbar ${showMenu ? 'show' : ''}`} >
                        <Link className="nav-link" to="/">Features</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                        
                    </nav>
                    <DarkModeSwitch />
                    
                    <a id="auth-signin" href="#" className="btn-primary">
                        <i className="fa-duotone fa-solid fa-user-large"></i>
                        <span>Sign in / up</span>
                    </a>
                    <button className= {`btn-mobile ${showMenu ? 'show' : ''}`} onClick={toggleMenu}>
                        <i className="fa-regular fa-bars"></i>
                    </button>
        </div>   
  )
}

export default Navbar