import estilos from './estilo.module.css'

function Paragrafo({children}){
    return (
        <p className={estilos.container}>{children}</p>
    )
}

export default Paragrafo