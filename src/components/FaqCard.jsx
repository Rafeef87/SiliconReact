

const FaqCard = ({client, index, isOpen, handleQuestionClick}) => {
    

  return (
   
    <div className="faq-card">
        <div className={`client ${isOpen === index ? 'open' : ''} `} onClick={() => handleQuestionClick(index)} >
            
            <h3>{client.title}</h3>
            
            <a className="btn-circle">
                <span>
                    <i className="fa-solid fa-chevron-down" ></i>
                </span>
            </a> 
        </div>
        {isOpen === index && (
        <div className="answer" >
            <p>{client.content}</p>
        </div>
        )}
    </div>
       
  )
}

export default FaqCard