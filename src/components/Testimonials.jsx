import React from 'react'

import quotes from '../assets/images/quotes.svg'
import rating from '../assets/images/rating.svg'
import girl from '../assets/images/girl.svg'
import rating1 from '../assets/images/rating1.svg'
import boy from '../assets/images/boy.svg'


const Testimonials = () => {
  return (
    <section id="testimonials">
                <div className="container">
                    <h2 className="headline">Clients are Loving Our App</h2>
                    <div className="girl-rating">
                        <img src={quotes} alt="quotes icon." />
                        <img src={rating} alt="rating." />
                        <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
                        <div className="girl">
                            <img className="icon" src={girl} alt="girl emoji." />
                            <div className="text">
                                <p>Fannie Summers</p>
                                <p>Designer</p>
                            </div>
                        </div>
                    </div>
                    <div className="boy-rating">
                        <img src={quotes} alt="quotes icon." />
                        <img src={rating1} alt="rating." />
                        <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
                        <div className="boy">
                            <img className="icon" src={boy} alt="boy emoji." />
                            <div className="text">
                                <p>Albert Flores</p>
                                <p>Developer</p>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
  )
}

export default Testimonials