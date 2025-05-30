import estilos from './estilo.module.css'

function Botao({children, funcao, tipo}){
    let classeBotao = estilos.padrao

    if(tipo == "info"){
        classeBotao = estilos.info
    }else if(tipo == "sucesso"){
        classeBotao = estilos.sucesso
    }else if(tipo == "perigo"){
        classeBotao = estilos.perigo
    }

    return (
        <button 
            onClick={funcao} 
            className={estilos.container + " " + classeBotao}
        >{children}</button>
    )
}

export default Botao