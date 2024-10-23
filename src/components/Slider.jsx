import React from 'react'

const Slider = () => {
  return (
    <section id="slider">
                <div className="container">
                    <h2>How Does it work</h2>
                    <div className="images">
                        <img className="img-right" src="images/how does it work-tablet.svg" alt="transactions" />
                        <img className="img-iphone" src="images/how does it work-mobile.svg" alt="How Does it work" />
                        <img className="img-left" src="images/how does it work-tablet1.svg" alt="transfer visa" />
                        <img className="img-desktop" src="images/how does it work-desktop.svg" alt="transactions" />
                        <img className="img-desktop" src="images/how does it work-desktop1.svg" alt="How Does it work" />
                        <img className="img-desktop" src="images/how does it work-desktop2.svg" alt="transfer visa" />
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