import React, { createContext, useState, useEffect} from "react";

export const ClientsContext = createContext();

const ClientProvider = ({ children }) => {
    const baseApiUri = (`https://win24-assignment.azurewebsites.net/api/testimonials`)
    const [clients, setClients] = useState([])
    const [client, setClient] = useState({})
    
    const fetchTimonials = async () => {
        const res = await fetch(`${baseApiUri}`)
        const data = await res.json()
        setClients(data)
    }
    const getClient = async (id) => {
        const res = await fetch(`${baseApiUri}/${id}`)
        const data = await res.json()
        setClient(data)
    }

    useEffect(() => {
        fetchTimonials()
    }, []);
return (
    <ClientsContext.Provider value={{ clients, client, getClient }}>
    { children }
    </ClientsContext.Provider>
)
}
export default ClientProvider