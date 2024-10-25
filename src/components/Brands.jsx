import React from 'react'
import brand1 from '../assets/images/brand/brand-1.svg'
import brand2 from '../assets/images/brand/brand-2.svg'
import brand3 from '../assets/images/brand/brand-3.svg'
import brand4 from '../assets/images/brand/brand-4.svg'
import brand5 from '../assets/images/brand/brand-5.svg'
import brand6 from '../assets/images/brand/brand-6.svg'

const Brands = () => {
  return (
    <section id="brands">
        <div className="container">
            <div id="brand-1" className="brand-box">
                <img src= {brand1} alt="brand-1." />
            </div>
            <div id="brand-2" className="brand-box">
                <img src= {brand2} alt="brand-2." />
            </div>
            <div id="brand-3" className="brand-box">
                <img src= {brand3} alt="brand-3." />
            </div>
            <div id="brand-4" className="brand-box">
                <img src= {brand4} alt="brand-4." />
            </div>
            <div id="brand-5" className="brand-box">
                <img src= {brand5} alt="brand-5." />
            </div>
            <div id="brand-6" className="brand-box">
                <img src= {brand6} alt="brand-6." />
            </div>
        </div>
    </section>
  )
}

export default Brands