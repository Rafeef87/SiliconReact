import React from 'react'

const Fqas = () => {
  return (
    <section id="fqas">
                <div className="container">
                    <div className="content">
                        <h2>Any questions? Check out the FAQs</h2>
                        <p>Still have unanswered questions and need to get in touch?</p>
                    </div>
                    <div className="que-wrapper">
                        <div className="wrapper">
                            <div className="text que-1">
                                <h3>Is any of my personal information stored in the App?</h3>
                                <a href="#" className="icon icon1">
                                    <i className="fa-regular fa-chevron-up indicator"></i>
                                </a>
                                <a href="#" className="que-icon icon-1">
                                <span className="btn-circle">
                                    <i className="fa-solid fa-chevron-down"></i>
                                </span>
                                </a>
                            </div>
                            <div className="answer-1">
                                <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod  montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                                <p>Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.</p>
                            </div>
                        </div>    
                        <div className="text">
                                    <h3>What formats can I download my transaction history in?</h3>                             
                                <a href="#" className="que-icon">
                                    <span className="btn-circle">
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </span>
                                </a>
                        </div>  
                        <div className="wrapper">
                            <div className="text">
                                    <h3>Can I schedule future transfers?</h3>
                                    <a href="#" className="icon icon3">
                                        <i className="fa-regular fa-chevron-up indicator"></i>
                                    </a>                      
                                <a href="#" className="que-icon icon-3">
                                    <span className="btn-circle">
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </span>
                                </a>
                            </div>
                            <div className="answer-3">
                                <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                            </div>
                        </div>
                        <div className="text">
                            <div>
                                <h3>When can I use Banking App services?</h3>
                            </div>
                            <div className="que-icon">
                                <a href="#">
                                    <span className="btn-circle">
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="text">
                            <div>
                                <h3>Can I create my own password that is easy for me to remember?</h3>
                            </div>
                            <div className="que-icon">
                                <a href="#">
                                    <span className="btn-circle">
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="text">
                            <div>
                                <h3>What happens if I forget or lose my password?</h3>
                            </div>
                            <div className="que-icon">
                                <a href="#"  className="btn-circle">
                                    <span>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <a id="contact-us-now" href="/contact.html" className="btn-contact">Contact us now</a>
                    <div className="contact">
                        <div className="tel-contact">
                            <img src="images/telefon.svg" alt="Telephone image." />
                            <p>Still have  questions?</p>
                            <a href="/contact.html">
                                <span>Contact us </span>
                                <span className="btn">
                                    <i className="fa-regular fa-arrow-right"></i>
                                </span>
                            </a>
                        </div>
                        <div className="sms-contact">
                            <img src="images/message.svg" alt="SMS image." />
                            <p>Don't like phone calls?</p>
                            <a href="/contact.html" className="green-text">
                                <span>Contact us </span>
                                <span className="btn"> 
                                    <i className="fa-regular fa-arrow-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Fqas