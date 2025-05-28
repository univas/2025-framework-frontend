

function Titulo({children, funcao}){

    return (
        <h1 onClick={funcao}>{children} </h1>
    )
}

export default Titulo