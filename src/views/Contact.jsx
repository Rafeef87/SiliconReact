import React from 'react'
import { Link } from 'react-router-dom'
import bxEnvelope from '../assets/images/Contact/bx-envelope.svg'
import addGroup from '../assets/images/Contact/add-group.svg'
import Breadcrumb from '../components/Breadcrumb'


const Contact = () => {
  
    const handleSubmit = (e) => {
      e.preventDefault();
    }

  return (
    <>
      <Breadcrumb />
      <section id="hero-contact">
        <div className="container">
            <div className="contact-cancel">
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
                <div className="cancel">
                    <h3>Get Online Consultation</h3>
                    <form id="regForm">
                        <div className="input-group">
                            <label htmlFor="fullName" className="form-label">Full name</label>
                            <input type="text" id="fullName" className="form-input" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="emailAddress" className="form-label">Email address</label>
                            <input type="email" id="emailAddress" className="form-input" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="specialist" className="form-label">Specialist</label>
                            <div className="specialist">
                                <input type="text" id="specialist" className="form-input" />
                                
                              <i className="fa-solid fa-chevron-down icon"></i>
                                
                            </div>
                        </div>
                        <button id="submit-btn" type="submit" className="btn-primary" onSubmit={handleSubmit}>Make an appointment</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default Contact