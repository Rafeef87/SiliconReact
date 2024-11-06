import React, { useContext, useState } from 'react'
import { StarRating } from "star-ratings-react";
import { ClientsContext } from '../context/ClientsContext'
import quotes from '../assets/images/quotes.svg'


const Testimonials = () => {
    
    const { clients } = useContext(ClientsContext)
    

   
    function  StarsRating () {
        const setRating = useState(); // setting initial rating 
        setRating(data)
    }
             


  return (
    <section id="testimonials">
        <div className="container">
            <h2 className="headline">Clients are Loving Our App</h2>
            {clients.map((client) => (
                <div key={client.id} >
                    <img src={quotes} alt="quotes icon." />
                    <div className='colors'>
                        <span> <StarRating rating={StarRating.starRating} /></span>
                    </div>
                    <p>{client.comment}</p>
                    
                    <img className="icon" src={client.avatarUrl} />
                    <div className='text'>
                        <p>{client.author}</p>
                        <p>{client.jobRole}</p>
                    </div>
                    
                </div>
            ))}
                
                
        </div>
    </section>
)
}

export default Testimonials