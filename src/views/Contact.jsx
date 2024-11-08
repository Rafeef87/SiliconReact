import React from 'react'
import { Link } from 'react-router-dom'
import bxEnvelope from '../assets/images/Contact/bx-envelope.svg'
import addGroup from '../assets/images/Contact/add-group.svg'
import Breadcrumb from '../components/Breadcrumb'
import map from '../assets/images/Contact/map.svg'
import boxMap from '../assets/images/Contact/bx-map.svg'
import call from '../assets/images/Contact/bx-phone-call.svg'
import time from '../assets/images/Contact/bx-time-five.svg'
import SocialMediaLinks from '../components/SocialMediaLinks'
import CallbackForm from '../components/forms/CallbackForm'

const Contact = () => {
  
  return (
    <>
    <Breadcrumb />
    <section id="hero-contact">
    <div className="container">
        <div className="contact-consultation">
            <div className="contact">
                <div className="contact-grid">
                    <div className="contact-card">
                        <div className="icon">
                            <img src={bxEnvelope} alt="bx-envelope." />
                        </div>
                        <div>    
                            <h3>Email us</h3>
                            <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
                            <Link to="/">
                                <span>Leave a message  </span>
                                <span className="btn">
                                    <i className="fa-regular fa-arrow-right"></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="contact-card">
                        <div className="icon">
                            <img src={addGroup} alt="add-group." />
                        </div>
                        <div>    
                            <h3>Careers</h3>
                            <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                            <Link to="/">
                                <span>Send an application  </span>
                                <span className="btn">
                                    <i className="fa-regular fa-arrow-right"></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="consultation" >
                <h3>Get Online Consultation</h3>
                <CallbackForm />
            </div>
        </div>
    </div>
    </section>
    <section id='map-contact'>
        <div className="container">
            <div className="map-contact">
                <img src={map} alt="map image." className='image'/>
                <div className="map">
                    <div className="medical-center">
                        <h2 className="headline">Medical Center 1</h2>
                        <div className="map-info">    
                            <div>
                                <img src={boxMap} alt="Map icon." />
                                <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
                            </div>
                            <div>
                                <img src={call} alt="Call icon." />
                                <span>(406) 555-0120</span>
                            </div>
                            <div className='times'>
                            <img src={time} alt="Time icon." />
                            <div className="time">
                                <span>Mon – Fri: 9:00 am – 22:00 am</span>
                                <span>Sat – Sun: 9:00 am – 20:00 am</span>
                            </div>    
                            </div>
                        </div>
                    </div>
                    <div className="medical-center">
                        <h2 className="headline">Medical Center 2</h2>
                        <div className="map-info">    
                            <div>
                                <img src={boxMap} alt="Map icon." />
                                <span>2464 Royal Ln. Mesa,New Jersey 45463</span>
                            </div>
                            <div>
                                <img src={call} alt="Call icon." />
                                <span>(406) 544-0123</span>
                            </div>
                            <div className='times'>
                                <img src={time} alt="Time icon." />
                                <div className="time">
                                    <span>Mon – Fri: 9:00 am – 22:00 am</span>
                                    <span>Sat – Sun: 9:00 am – 20:00 am</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="socail-media">
                    <SocialMediaLinks />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        
    </section>

    </>
  )
}

export default Contact