import React from 'react'

import appstor from '../assets/images/appstor.svg'
import appstoreDark from '../assets/images/appstore-dark.svg'
import googleplay from '../assets/images/googleplay.svg'
import googleplayDark from '../assets/images/googleplay-dark.svg'
import iPhoneMybudgetDesktop from '../assets/images/iPhone-mybudget-desktop.svg'
import iPhoneYourcardsDesktop from '../assets/images/iPhone-yourcards-desktop.svg'

const Hero = () => {
  return (
    <section id="hero">
                <div className="container">
                    <div className="headline">
                        <h1>Manage All Your Money in One App</h1>
                    </div>
                    <div className="content">
                        <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
                        <div className="buttons">
                            <a className="btn-download-app" href="#">
                                <img className="show-light" src={appstor} alt="appstor" />
                                <img className="show-dark" src={appstoreDark} alt="appstor" />
                            </a>
                            <a className="btn-download-app" href="#">
                                <img className="show-light" src={googleplay} alt="google play" />
                                <img className="show-dark" src={googleplayDark} alt="google play" />
                            </a>
                        </div>

                        <a href="#" className="discover-more">
                            <span className="btn-circle">
                                <i className="fa-solid fa-chevron-down"></i>
                            </span>
                            <span>Discover more</span>
                        </a>
                    </div>

                    <div className="images">
                        <img className="img-back" src={iPhoneMybudgetDesktop} alt="iphone my budget." />
                        <img className="img-front" src={iPhoneYourcardsDesktop} alt="iphone your cards." />
                    </div>
                </div>
            
            </section>
  )
}

export default Hero