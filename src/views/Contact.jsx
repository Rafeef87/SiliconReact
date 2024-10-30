import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import bxEnvelope from '../assets/images/Contact/bx-envelope.svg'
import addGroup from '../assets/images/Contact/add-group.svg'
import Breadcrumb from '../components/Breadcrumb'


const Contact = () => {

const [submitted, setSubmitted] = useState(false)
const {register, handleSubmit, reset, formState: { errors }} = useForm()


const handleOk = () => {
  setSubmitted(false)
  reset()
}
const onSubmit = async (data) => {
    const res = await axios.post('https://win24-assignment.azurewebsites.net/api/forms/contact', data)

  if(res.status === 200) {
    setSubmitted(true)
    reset()
  }
  
}

  if (submitted) {
    return (
    <div className="container informatbox">
      <h1>Thanks for your subscribe</h1>
      <button className='btn-primary' onClick={handleOk}>OK</button>
    </div>
    )
  }
  

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
                <div className="consultation">
                    <h3>Get Online Consultation</h3>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate id="regForm">
                        <div className="input-group">
                            <label htmlFor="fullName" className="form-label">Full name</label>
                            <input type="text" id="fullName" className="form-input" {...register('fullName', { required: 'The Fill name field is required'})} />
                            <span>{errors.email && errors.email.message}</span>
                        </div>
                        <div className="input-group">
                            <label htmlFor="emailAddress" className="form-label">Email address</label>
                            <input type="email" id="emailAddress" className="form-input" {...register('email', { required: 'The email field is required'})}/>
                            <span>{errors.email && errors.email.message}</span>
                        </div>
                        <div className="input-group">
                            <label htmlFor="specialist" className="form-label">Specialist</label>
                            <div className="specialist">
                                <input type="text" id="specialist" className="form-input" {...register('specialist', { required: 'The emaspecialistil field is required'})}/>
                                <span>{errors.email && errors.email.message}</span>
                                <i className="fa-solid fa-chevron-down icon"></i>
                            </div>
                        </div>
                        <button  type="submit" className="btn-primary">Make an appointment</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default Contact