import React, { useState } from 'react'

import notification from '../assets/images/notification-icon-.svg'

const Subscribe = () => {
/*en enklare form av validering*/
const [email, setEmail] = useState('')
const [error, setError] = useState('')

const handleSubscribe = (e) => {
  e.preventDefault();
  if(!email) {
    setError('Please enter a valid email address.')
  } else {
    setError('')

    console.log('Subscribed with email: ', email)
    setEmail('') //Clear the entry after subscription
  }
}

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
                        <input className="mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder=" Your email" />
                        <a onClick={handleSubscribe} id="subscribe" href="#" className="btn-subscribe">Subscribe</a>
                    </div>
                    {error && <p className='error-message'>{error}</p>}
                </div>
    </section>
  )
}

export default Subscribe