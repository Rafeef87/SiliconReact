import React from 'react'
import iPhoneBackCard from '../assets/images/iPhone-back-card.svg'
import card from '../assets/images/card.svg'
import payments from '../assets/images/payments.svg'
import security from '../assets/images/security.svg'
import statistics from '../assets/images/statistics.svg'
import support from '../assets/images/support.svg'
import cashback from '../assets/images/cashback.svg'
import happy from '../assets/images/happy.svg'

const Featuers = () => {
  return (
    <section id="featuers">
                <div className="container">
                            <div className="images">
                                <img className="img-phon" src={iPhoneBackCard} alt="iphone may budget back" />
                                <img className="img-card" src={card} alt="your card" />
                            </div>
                        <div className="app-featuer">
                            <div className="content">
                                <h2 className="headline">App Features</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                            </div>
                            <div className="featuer">
                                <div className="wrapper">
                                    <div className="featuer-icon">
                                        <img src={payments} alt="payments card" />  
                                    </div>
                                    <div>    
                                        <h3>Easy Payments</h3>
                                        <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                                    </div>
                                </div>
                                <div className="wrapper">
                                    <div className="featuer-icon">
                                        <img src={security} alt="data security" /> 
                                    </div>     
                                    <div>    
                                        <h3>Data Security</h3>
                                        <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. </p>
                                    </div>
                                </div>
                                <div className="wrapper">
                                    <div className="featuer-icon">
                                        <img src={statistics} alt="cost statistics" /> 
                                    </div>  
                                    <div>    
                                        <h3>Cost Statistics</h3>
                                        <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                                    </div>
                                </div>
                                <div className="wrapper">
                                    <div className="featuer-icon">
                                        <img src={support} alt="support" />
                                    </div>
                                    <div>
                                        <h3>Support 24/7</h3>
                                        <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p> 
                                    </div>
                                </div>    

                                <div className="wrapper">    
                                    <div className="featuer-icon">
                                        <img src={cashback} alt="regular cashback" />   
                                    </div>
                                    <div>
                                        <h3>Regular Cashback</h3>
                                        <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p> 
                                    </div>
                                </div>    

                                <div className="wrapper">
                                    <div className="featuer-icon">
                                        <img src={happy} alt="happy" />
                                    </div>
                                    <div> 
                                        <h3>Top Standards</h3>
                                        <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p> 
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
    </section>
  )
}

export default Featuers