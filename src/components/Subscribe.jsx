import React from 'react'

import notification from '../assets/images/notification-icon-.svg'

const Subscribe = () => {
  return (
    <section id="subscribe">
                <div className="container">
                    <div className="notification" >
                        <img src={notification} alt="subscribe." />
                        <h2 className="hide-text">Subscribe to our newsletter </h2>
                        <h2 className="show">Subscribe to our newsletter to stay informed about latest updates</h2>
                    </div>
                    <div className="email">
                        <i className="fa-light fa-envelope email-icon"></i>
                        <input className="mail" type="email" required placeholder=" Your email" />
                        <a id="subscribe" href="#" className="btn-subscribe">Subscribe</a>
                    </div>
                </div>
    </section>
  )
}

export default Subscribe