import React, { createContext, useState, useEffect} from "react";

export const FaqContext = createContext();

const FaqProvider = ({ children }) => {
    const baseApiUri = (`https://win24-assignment.azurewebsites.net/api/faq`)
    const [questions, setQuestions] = useState([])
    const [question, setQuestion] = useState({})

    const fetchFaq = async () => {
        const res = await fetch(`${baseApiUri}`)
        const data = await res.json()
        setQuestions(data)
    }
    const getFaq = async (id) => {
        const res = await fetch(`${baseApiUri}/${id}`)
        const data = await res.json()
        setQuestion(data)
    }
    useEffect(() => {

        fetchFaq()
    }, [])

return (
    <FaqContext.Provider value={{ questions, question,  getFaq }}>
    { children }
    </FaqContext.Provider>
)
}
export default FaqProvider