import { useState } from "react"
import App from "./App"
import Form from "./Form"

export default function Home(){
    const [pagina, setPagina] = useState("APP")
    
    if(pagina == "APP"){
        return <App mudaPagina={(novaPagina) => setPagina(novaPagina)} />
    }else if(pagina == "FORM"){
        return <Form mudaPagina={(novaPagina) => setPagina(novaPagina)} />
    }
}