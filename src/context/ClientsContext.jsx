import React, { createContext, useState, useEffect} from "react";

export const ClientsContext = createContext()

const ClientProvider = ({Children}) => {
    const baseApiUri = `https://win24-assignment.azurewebsites.net/api/`
    const [clients, setClients] = useState([])
    const [client, setClient] = useState({})
    const getClient = async(id) => {
        const res = await fetch(baseApiUri + `${id}`)
        const data = await res.json()
        setClient(data)
    }
}
useEffect (() => {
    const fetchData = async () => {
        const res = await fetch(baseApiUri)
        const data = await res.json()
        setClients(data)
    }
    fetchData()
}, [])
return (
    <ClientProvider.Provider value={{clients, client, getClient }}>
    {Children}
    </ClientProvider.Provider>
)