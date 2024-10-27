import React from 'react'
import silicon from '../assets/images/Navbar/silicon.svg'
import solidDark from '../assets/images/Navbar/solid-dark.svg'
import DarkModeSwitch from './DarkModeSwitch'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="container">
                    <Link id="logo" to="/">
                        <img className="show-light" src={silicon} alt="Silicon Logotype." />
                        <img className="show-dark" src={solidDark} alt="Silicon Logotype." />
                    </Link>
                    <nav id="main-menu" className="navbar">
                        <a className="nav-link" href="#">Features</a>
                        <a className="nav-link" href="/contact.html">Contact</a>
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