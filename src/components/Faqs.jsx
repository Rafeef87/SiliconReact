import React, { useState } from 'react'
import telefon from '../assets/images/telefon.svg'
import message from '../assets/images/message.svg'
import FaqCard from './FaqCard'

const Faqs = () => {
    
    const [open, setOpen] = useState(null)

    const faqCards= [
        {id: 1, question: "Is any of my personal information stored in the App?", answer: "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod  montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat. Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer."},
        {id: 2, question: "What formats can I download my transaction history in?" , answer: ""},
        {id: 3, question: "Can I schedule future transfers?", answer:"Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat." },
        {id: 4, question: "When can I use Banking App services?" , answer: ""},
        {id: 5, question: "Can I create my own password that is easy for me to remember?", answer: ""},
        {id: 6, question: "What happens if I forget or lose my password?", answer: ""}
    ]

    const handleQuestionClick = (index) => {
        setOpen(prevIndex => (prevIndex === index ? null : index))
    }

  return (
    <section id="faqs">
        <div className="container">
            <div className="content">
                <h2>Any questions? Check out the FAQs</h2>
                <p>Still have unanswered questions and need to get in touch?</p>
            </div>
            
            <div className="que-wrapper">
                {faqCards.map((item, index) => (
                    <FaqCard key={item.id} 
                    item={item}
                    open={open}
                    index={index}
                    handleQuestionClick={handleQuestionClick}
                    />
                ))}
            </div>

            <a id="contact-us-now" href="/contact.html" className="btn-contact">Contact us now</a>

            <div className="contact">
                <div className="tel-contact">
                    <img src= {telefon} alt="Telephone image." />
                    <p>Still have  questions?</p>
                    <a href="/contact.html">
                        <span>Contact us </span>
                        <span className="btn">
                            <i className="fa-regular fa-arrow-right"></i>
                        </span>
                    </a>
                </div>
                <div className="sms-contact">
                    <img src= {message} alt="SMS image." />
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

export default Faqs