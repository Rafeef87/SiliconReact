import React, { useContext } from 'react'

import { ClientsContext } from '../context/ClientsContext'
import quotes from '../assets/images/quotes.svg'


const Testimonials = () => {
    
    const { clients } = useContext(ClientsContext)      

    

  return (
    <section id="testimonials">
        <div className="container">
            <h2 className="headline">Clients are Loving Our App</h2>
            {clients.map((client) => (
                <div className="rating" key={client.id} >
                    <img src={quotes} alt="quotes icon." />
                    <div className="colors">
                        {[...Array(5)].map((_, index) => (
                            <span key={`${client.id}-star-${index}`}>
                                <i
                                    className={`fa-sharp fa-star star-icon ${index < client.starRating ? 'active' : ''}`}
                                ></i>
                            </span>
                        ))}    
                    </div>
                    <p>{client.comment}</p>
                    <div  className='name'>
                    <img className="icon" src={client.avatarUrl} alt="Girl icon." />
                    <div className='text'>
                        <p className='client-name'>{client.author}</p>
                        <p>{client.jobRole}</p>
                    </div>
                    </div>
                    
                </div>
            ))}
                
                
        </div>
    </section>
)
}

export default Testimonials