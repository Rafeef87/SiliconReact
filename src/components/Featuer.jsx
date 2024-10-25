import React from 'react'
import inner from '../assets/images/inner.svg'
import inner1 from '../assets/images/inner1.svg'
import contants from '../assets/images/contants.svg'
import card1 from '../assets/images/card1.svg'
import Vector1 from '../assets/images/Vector1.svg'
import Vector2 from '../assets/images/Vector2.svg'

const Featuer = () => {
  return (
    <section id="featuer">
        <div className="container">
            <div className="contant">
                <div className="money">
                    <h2 className="headline">Make your money transfer simple and clear</h2>
                    <div className="text">    
                        <div>
                            <i className="fa-regular fa-circle-check btn-cheked"></i>
                            <span>Banking transactions are free for you</span>
                        </div>
                        <div>
                            <i className="fa-regular fa-circle-check btn-cheked"></i>
                            <span>No monthly cash commission</span>
                        </div>
                        <div>
                            <i className="fa-regular fa-circle-check btn-cheked"></i>
                            <span>Manage payments and transactions online</span>
                        </div>
                    </div>
                    <a href="#" className="btn-primary">
                        <span>Learn more </span>
                        <span className="btn">
                            <i className="fa-regular fa-arrow-right"></i>
                        </span>
                    </a>
                </div>
                <div className="images">
                    <img src= {inner} alt="Make your money transfer simple and clear." className="back" />
                    <img src= {inner1} alt="Send mony to." className="front" />
                </div>
            </div>
            <div className="content-1">
                <div className="image">
                    <img src={contants} alt="Contacts Name." className="back" />
                    <img src={card1} alt="Visa card." className="front" />
                </div>
                <div className="details">
                        <h2 className="headline">Receive payment from international bank details</h2>
                        <div className="box-learn-more">
                            <div className="learn-more">
                                <img src={Vector1} alt="Vector icon." />
                                <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                                <a href="#" className="btn-primary">
                                    <span>Learn more </span>
                                    <span className="btn">
                                        <i className="fa-regular fa-arrow-right"></i>
                                    </span>
                                </a>
                            </div>
                            <div className="learn-more1">
                                <img src={Vector2} alt="Vector icon." />
                                <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Featuer