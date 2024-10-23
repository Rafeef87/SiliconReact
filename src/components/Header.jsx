import React from 'react'

const Header = () => {
  return (
    <header>
        <div className="container">
                    <a id="logo" href="index.html">
                        <img className="show-light" src="images/Navbar/silicon.svg" alt="Silicon Logotype." />
                        <img className="show-dark" src="images/Navbar/solid-dark.svg" alt="Silicon Logotype." />
                    </a>
                    <nav id="main-menu" className="navbar">
                        <a className="nav-link" href="#">Features</a>
                        <a className="nav-link" href="/contact.html">Contact</a>
                    </nav>
                    <div id="darkmode-toggle-switch" className="btn-toggle-switch">
                        <span className="label">Dark mode</span>
                        <label htmlFor="darkmode-switch" className="toggle-switch">
                            <input id="darkmode-switch" type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <a id="auth-signin" href="#" className="btn-primary">
                        <i className="fa-duotone fa-solid fa-user-large"></i>
                        <span>Sign in / up</span>
                    </a>
                    <button className="btn-mobile">
                        <i className="fa-regular fa-bars"></i>
                    </button>
        </div>   
    </header>
  )
}

export default Header