import React, { useEffect, useState } from 'react'
import { StarRating } from "star-ratings-react";

import quotes from '../assets/images/quotes.svg'

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])
    
    const fetchData = async () => {
        try {
            const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
            if(!res.ok) {
                console.log('Failed to fetch testimonials')
                alert('Failed to fetch testimonials')
            }
            const data = await res.json()
            setTestimonials(data)
                

        } catch (error) {
            console.log(error)
        }     

    }

    useEffect(() => {
        fetchData()
    }, [])

    function  StarsRating () {
        const setRating = useState(); // setting initial rating 
        setRating(data)
    }
             


  return (
    <section id="testimonials">
        <div className="container">
            <h2 className="headline">Clients are Loving Our App</h2>
            {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className={index % 2 === 0 ? 'girl-rating' : 'boy-rating'}>
                    <img src={quotes} alt="quotes icon." />
                    <div className='colors'>
                        <span> <StarRating rating={testimonial.starRating} /></span>
                    </div>
                    <p>{testimonial.comment}</p>
                    <div className={index % 2 === 0 ? 'girl' : 'boy'}>
                    <img className="icon" src={testimonial.avatarUrl} />
                    <div className='text'>
                        <p>{testimonial.author}</p>
                        <p>{testimonial.jobRole}</p>
                    </div>
                    </div>
                </div>
            ))}
                
                
        </div>
    </section>
)
}

export default Testimonials