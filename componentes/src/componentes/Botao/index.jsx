import estilos from './estilo.module.css'

function Botao({children, funcao}){
    return (
        <button onClick={funcao} className={estilos.container}>{children}</button>
    )
}

export default Botao