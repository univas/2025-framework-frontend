import { createContext, useState } from "react"

export const UsuarioContext = createContext()

export default function UsuarioProvider({children}){
    const [usuario, setUsuario] = useState("")

    return (
        <UsuarioContext.Provider value={{usuario, setUsuario}}>
            {children}
        </UsuarioContext.Provider>
    )
}