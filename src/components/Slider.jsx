import React from 'react'

import imgRight from '../assets/images/how does it work-tablet.svg'
import imgIphone from '../assets/images/how does it work-mobile.svg'
import imgLeft from '../assets/images/how does it work-tablet1.svg'
import imgDesktop from '../assets/images/how does it work-desktop.svg'
import imgDesktop1 from '../assets/images/how does it work-desktop1.svg'
import imgDesktop2 from '../assets/images/how does it work-desktop2.svg'

const Slider = () => {
  return (
    <section id="slider">
                <div className="container">
                    <h2>How Does it work</h2>
                    <div className="images">
                        <img className="img-right" src={imgRight} alt="transactions" />
                        <img className="img-iphone" src={imgIphone} alt="How Does it work" />
                        <img className="img-left" src={imgLeft} alt="transfer visa" />
                        <img className="img-desktop" src={imgDesktop} alt="transactions" />
                        <img className="img-desktop" src={imgDesktop1} alt="How Does it work" />
                        <img className="img-desktop" src={imgDesktop2} alt="transfer visa" />
                    </div>
                    <h3 className="mobile-text">Transfers to people from your contact list</h3>
                    <h3 className="tablet-text">Step 3. Transfers to people from your contact list</h3>
                    <h4 className="desktop-text">Latest transaction history</h4>
                    <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                </div>
            </section>
  )
}

export default Slider