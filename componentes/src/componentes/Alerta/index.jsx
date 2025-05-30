import { useEffect, useState } from 'react'
import estilos from './estilos.module.css'
function Alerta({estilo, children}){
    const [mostrar, setMostrar] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setMostrar(false)
        }, 3000)
    }, [])

    if(mostrar)
        return (
            <p 
                className={estilos[estilo] + " " + estilos.cartao}
            >{children}</p>
        )
    else return (<></>)
}

export default Alerta