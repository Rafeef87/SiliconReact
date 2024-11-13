import React, { useState }  from 'react'
import axios from 'axios'


const SubscibeForm = () => {
  const [formData, setFormData] = useState({ email: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false)
   
  //Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value})
    validateField(name, value)
  }
  // Validate each field
  const validateField = (name, value) => {
    let error = ''
    if (name === 'email' && !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(value))
        { error = "Must be an valid email (ex:username@example.com)" }
    setErrors(prevErrors => ({...prevErrors, [name]: error}))
  }
  // Validate the entire form
  const validateForm = () => {
    const newErrors = {}
    if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(formData.email)){
      newErrors.email =  "Must be an valid email (ex:username@example.com)"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0;
  } 
  const handleOk = () => {
    setSubmitted(false)
    setFormData({})
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(validateForm()){
      const res = await axios.post('https://win24-assignment.azurewebsites.net/api/forms/subscribe', formData)
      console.log('Form valid', res.data)
      setSubmitted(true)
    } else {
      console.log('Form is invalid')
    }
  }
  if (submitted) {
    return (
      <div className="container informatbox">
      <h1>Thank you for your subscribe.</h1>
      <button className='btn-primary' onClick={handleOk}>OK</button>
    </div>
    )
  }
  
  return (
    <form className="email" onSubmit={handleSubmit} noValidate>
        <div className='form-group'>
            <i className="fa-light fa-envelope email-icon"></i>
            <input className="mail" type="email" name='email' placeholder='Email' value={formData.email} onChange={handleInputChange} required  />
            <span>{errors.email && <span>{errors.email}</span>}</span>
        </div>
        <button type='submit' className="btn-subscribe">Subscribe</button>
    </form>
  )
}

export default SubscibeForm