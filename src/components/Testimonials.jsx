import React, { useEffect, useState } from 'react'

import quotes from '../assets/images/quotes.svg'
import rating from '../assets/images/rating.svg'
import girl from '../assets/images/girl.svg'
import rating1 from '../assets/images/rating1.svg'
import boy from '../assets/images/boy.svg'


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

  return (
    <section id="testimonials">
        <div className="container">
            <h2 className="headline">Clients are Loving Our App</h2>
            {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className={index % 2 === 0 ? 'girl-rating' : 'boy-rating'}>
                    <img src={quotes} alt="quotes icon." />
                    <img src={index % 2 === 0 ? rating : rating1} alt="rating." />
                    <p>{testimonial.comment}</p>
                    <div className={index % 2 === 0 ? 'girl' : 'boy'}>
                    <img className="icon" src={index % 2 === 0 ? girl : boy} alt={index % 2 === 0 ? 'girl emoji.' : 'boy emoji.'} />
                    <div className='text'>
                        <p>{testimonial.author}</p>
                    </div>
                    </div>
                </div>
            ))}
                
                
        </div>
    </section>
)
}

export default Testimonials