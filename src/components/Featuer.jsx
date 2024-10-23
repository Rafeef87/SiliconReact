import React from 'react'

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
                            <img src="images/inner.svg" alt="Make your money transfer simple and clear." className="back" />
                            <img src="images/inner1.svg" alt="Send mony to." className="front" />
                        </div>
                    </div>
                    <div className="content-1">
                        <div className="image">
                            <img src="images/contants.svg" alt="Contacts Name." className="back" />
                            <img src="images/card1.svg" alt="Visa card." className="front" />
                        </div>
                        <div className="details">
                                <h2 className="headline">Receive payment from international bank details</h2>
                                <div className="box-learn-more">
                                    <div className="learn-more">
                                        <img src="images/Vector1.svg" alt="Vector icon." />
                                        <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                                        <a href="#" className="btn-primary">
                                            <span>Learn more </span>
                                            <span className="btn">
                                                <i className="fa-regular fa-arrow-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="learn-more1">
                                        <img src="images/Vector2.svg" alt="Vector icon." />
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