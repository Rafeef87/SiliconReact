

const FaqCard = ({question, index, isOpen, handleQuestionClick}) => {
    

  return (
   
    <div className="faq-card">
        <div className={`question ${isOpen === index ? 'open' : ''} `} onClick={() => handleQuestionClick(index)} >
            
            <h3>{question.title}</h3>
            
            <a className="btn-circle">
                <span>
                    <i className="fa-solid fa-chevron-down" ></i>
                </span>
            </a> 
        </div>
        {isOpen === index && (
        <div className="answer" >
            <p>{question.content}</p>
        </div>
        )}
    </div>
       
  )
}

export default FaqCard