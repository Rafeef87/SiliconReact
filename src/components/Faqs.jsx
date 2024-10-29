import React, { useEffect, useState } from 'react'
import telefon from '../assets/images/telefon.svg'
import message from '../assets/images/message.svg'

import { Link } from 'react-router-dom'
import FaqCard from './FaqCard'

const Faqs = () => {
    
    

    const [faq, setFaq] = useState([])
    
    const fetchData = async () => {
        try {
            const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq')
            console.log('Response status: ', res.status)
            if(!res.ok) {
                console.log('Failed to fetch questions')
                alert('Failed to fetch questions')
                return;
            }
            const data = await res.json()
            console.log('Fetched data: ', data)
            setFaq(data)
        } catch (error) {
            console.log(error)
        }      
    }

    useEffect(() => {
        fetchData()
    }, [])

    const [open, setOpen] = useState(null)
    const handleQuestionClick = (index) => {
        setOpen(prevIndex => (prevIndex === index ? null : index))
    }

  return (
    <section id="faqs">
        <div className="container">
            <div className="content">
                <h2>Any questions? Check out the FAQs</h2>
                <p>Still have unanswered questions and need to get in touch?</p>
            </div>
            
            <div className="que-wrapper">
                {
                faq.map((faqs, index) => (
                    <FaqCard key={faqs.id} 
                    item={faqs.title}
                    open={open}
                    index={index}
                    handleQuestionClick={handleQuestionClick}
                    />
                )
                )}
            </div>

            <a id="contact-us-now" href="/contact.html" className="btn-contact">Contact us now</a>

            <div className="contact">
                <div className="tel-contact">
                    <img src= {telefon} alt="Telephone image." />
                    <p>Still have  questions?</p>
                    <Link to="/contact">
                        <span>Contact us </span>
                        <span className="btn">
                            <i className="fa-regular fa-arrow-right"></i>
                        </span>
                    </Link>
                </div>
                <div className="sms-contact">
                    <img src= {message} alt="SMS image." />
                    <p>Don't like phone calls?</p>
                    <Link to="/contact" className="green-text">
                        <span>Contact us </span>
                        <span className="btn"> 
                            <i className="fa-regular fa-arrow-right"></i>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Faqs