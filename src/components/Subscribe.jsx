import React, { useState } from 'react'
import axios from 'axios'

import notification from '../assets/images/notification-icon-.svg'
import { useForm } from 'react-hook-form'


const Subscribe = () => {
/*Form av validering*/

const [submitted, setSubmitted] = useState(false)
const {register, handleSubmit, reset, formState: { errors }} = useForm()


const handleOk = () => {
  setSubmitted(false)
  reset()
}
const onSubmit = async (data) => {
    const res = await axios.post('https://win24-assignment.azurewebsites.net/api/forms/subscribe', data)

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
    <section id="subscribe">
                <div className="container">
                    <div className="notification" >
                        <img src={notification} alt="subscribe." />
                        <h2 className="hide-text">Subscribe to our newsletter </h2>
                        <h2 className="show">Subscribe to our newsletter to stay informed about latest updates</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate className="email">
                      <div className='form-group'>
                          <i className="fa-light fa-envelope email-icon"></i>
                          <input className="mail" type="email" {...register('email', { required: 'The email field is required'})}  placeholder=" Your email" />
                          <span>{errors.email && errors.email.message}</span>
                      </div>
                      <button type='submit' id="subscribe" className="btn-subscribe">Subscribe</button>
                        
                    </form>
                    
                </div>
    </section>
  )
}

export default Subscribe