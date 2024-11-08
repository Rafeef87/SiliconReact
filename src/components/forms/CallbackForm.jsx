import React, { useState } from 'react'
import axios from 'axios'

const CallbackForm = () => {

    const [options, setOptions] = useState([{ id: 1, text: "Financial Consulting"}, { id: 2, text: "Risk Managment"}, { id: 3, text: "Bonds & Commodities"}]);
    const [formData, setFormData] = useState({fullName: '', email: '', specialist: options[0].id, });
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
        if (name === 'fullName' && !/^[A-Öa-ö\s\-]{2,}$/.test(value))
            { error = "Must be at least 2 charachter long, no numbers." }
        else if (name === 'email' && !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(value))
            { error = "Must be an valid email (ex:username@example.com)" }
        setErrors(prevErrors => ({...prevErrors, [name]: error}))
    }
      // Validate the entire form
    const validateForm = () => {
        const newErrors = {}
        if (!/^[A-Öa-ö\s\-]{2,}$/.test(formData.fullName)){
        newErrors.fullName = "Must be at least 2 charachter long, no numbers." 
        }else if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(formData.email)){
        newErrors.email =  "Must be an valid email (ex:username@example.com)"
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0;
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
       if(validateForm()){
        const res = await axios.post('https://win24-assignment.azurewebsites.net/api/forms/contact', formData)
        console.log('Form valid', res.data)
        setSubmitted(true)
       } else {
        console.log('Form is invalid')
       }
    }
    if(submitted) {
        return(
            <div>
                <h1>We will get back to you as soon as we can.</h1>
            </div>
        )
    }

  return (
    <form id="regForm" onSubmit={handleSubmit} noValidate>
        <div className="input-group">
            <label htmlFor="fullName" className="form-label">Full name</label>
            <input type="text" id="fullName" className="form-input" name='fullName' placeholder='Full Name' value={formData.fullName} onChange={handleInputChange} required />
            <span>{errors.fullName && <span>{errors.fullName}</span>}</span>
        </div>
        <div className="input-group">
            <label htmlFor="emailAddress" className="form-label">Email address</label>
            <input type="email" id="emailAddress" className="form-input" name='email' placeholder='Email' value={formData.email} onChange={handleInputChange} required />
            <span>{errors.email && <span>{errors.email}</span>}</span>
        </div>
        <div className="input-group">
            <label htmlFor="specialist" className="form-label">Specialist</label>
            <div className="specialist">
                <select name="specialist" id="specialist" className="form-input" value={formData.specialist} onChange={handleInputChange} required >
                    {options.map(option => (<option key={option.id} value={option.id}>{option.text}</option>))}
                </select>
            </div>
        </div>
        <button type="submit" className="btn-primary">Make an appointment</button>
    </form>
  )
}

export default CallbackForm