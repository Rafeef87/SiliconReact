import React from 'react'

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
                                <img className="show-light" src="images/appstor.svg" alt="appstor" />
                                <img className="show-dark" src="images/appstore-dark.svg" alt="appstor" />
                            </a>
                            <a className="btn-download-app" href="#">
                                <img className="show-light" src="images/googleplay.svg" alt="google play" />
                                <img className="show-dark" src="images/googleplay-dark.svg" alt="google play" />
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
                        <img className="img-back" src="images/iPhone-mybudget-desktop.svg" alt="iphone my budget." />
                        <img className="img-front" src="images/iPhone-yourcards-desktop.svg" alt="iphone your cards." />
                    </div>
                </div>
            
            </section>
  )
}

export default Hero