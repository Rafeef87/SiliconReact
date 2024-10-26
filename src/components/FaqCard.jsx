import React from 'react'

const FaqCard = ({item, open, index, handleQuestionClick}) => {

  return (

    <div className="faq-card">
        <div className={`question ${open === index ? 'open' : ''}`} onClick={() => handleQuestionClick(index)}>
            
            <h3>{item.question}</h3>
            
            <a className="btn-circle">
                <span>
                    <i className="fa-solid fa-chevron-down"></i>
                </span>
            </a> 
        </div>
        {open === index && (
        <div className="answer">
            <p>{item.answer}</p>
        </div>
        )}
    </div>
  )
}

export default FaqCard