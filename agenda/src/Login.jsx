import { useContext, useState } from "react"
import { UsuarioContext } from "./Context/UsuarioContext"
import { useNavigate } from "react-router"

export default function Login(){
    const [usuarioNovo, setUsuarioNovo] = useState("")
    const {setUsuario} = useContext(UsuarioContext)
    const navigate = useNavigate()
    return (
        <>
            <input type="text" className="form-control" value={usuarioNovo} onChange={(event) => setUsuarioNovo(event.target.value)} placeholder="Digite o nome do usuário"/>

            <button onClick={() => {
                setUsuario(usuarioNovo)
                navigate("/")
            }}>Logar</button>
        </>
    )
}