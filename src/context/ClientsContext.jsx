import React, { createContext, useState, useEffect} from "react";

export const ClientsContext = createContext();

const ClientProvider = ({ children }) => {
    const baseApiUri = (`https://win24-assignment.azurewebsites.net/api`)
    const [clients, setClients] = useState([])
    const [client, setClient] = useState({})

    const fetchTimonials = async () => {
        const res = await fetch(`${baseApiUri}/testimonials`)
        const data = await res.json()
        setClients(data)
    }
    const getClient = async (id) => {
        const res = await fetch(`${baseApiUri}/testimonials/${id}`)
        const data = await res.json()
        setClient(data)
    }
    useEffect(() => {

        fetchTimonials()
    }, [])

    const fetchFaq = async () => {
        const res = await fetch(`${baseApiUri}/faq`)
        const data = await res.json()
        setClients(data)
    }
    const get = async (id) => {
        const res = await fetch(`${baseApiUri}/faq/${id}`)
        const data = await res.json()
        setClient(data)
    }
    useEffect(() => {

        fetchFaq()
    }, [])

return (
    <ClientsContext.Provider value={{ clients, client, getClient, get }}>
    { children }
    </ClientsContext.Provider>
)
}
export default ClientProvider