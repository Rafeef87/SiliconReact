import React from 'react'
import notification from '../assets/images/notification-icon-.svg'
import SubscibeForm from './forms/SubscibeForm'

const Subscribe = () => {
  return (
    <section id="subscribe">
                <div className="container">
                  <div className="notification" >
                    <img src={notification} alt="subscribe." />
                    <h2 className="hide-text">Subscribe to our newsletter </h2>
                    <h2 className="show">Subscribe to our newsletter to stay informed about latest updates</h2>
                  </div>
                  <SubscibeForm />
                </div>
    </section>
  )
}

export default Subscribe