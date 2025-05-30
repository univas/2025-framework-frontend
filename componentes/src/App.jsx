import './App.css'
import Titulo from './componentes/Titulo'
import Paragrafo from './componentes/Paragrafo'
import Botao from './componentes/Botao'
import Alerta from './componentes/Alerta'
import { useState } from 'react'

function App() {
  const [numero, setNumero] = useState(0)

  function clique(){
    setNumero(numero+1)
  }

  return (
    <>
      <Titulo>Título dinâmico {numero}</Titulo>
      <Paragrafo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, consequatur maiores impedit officiis facilis asperiores officia minus consequuntur hic odio obcaecati sunt ad, deserunt voluptatum error quasi animi nulla similique.</Paragrafo>

      <Botao funcao={clique}>Botão Padrão</Botao>
      <Botao tipo="info" funcao={clique}>Botão de informação</Botao>
      <Botao tipo="sucesso" funcao={clique}>Botão de sucesso</Botao>
      <Botao tipo="perigo" funcao={clique}>Botão de perigo</Botao>
      
      <Alerta estilo="perigo">Operação realizada</Alerta>
    </>
  )
}

export default App
