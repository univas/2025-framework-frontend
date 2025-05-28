import './App.css'
import Titulo from './componentes/Titulo'
import Paragrafo from './componentes/Paragrafo'
import Botao from './componentes/Botao'
import { useState } from 'react'

const produtos = [
    {
      "nome": "Smartphone XYZ",
      "valor_total": 1500.00,
      "valor_com_desconto": 1350.00,
      "link_imagem": "https://exemplo.com/imagens/smartphone_xyz.jpg"
    },
    {
      "nome": "Notebook ABC",
      "valor_total": 3200.00,
      "valor_com_desconto": 2880.00,
      "link_imagem": "https://exemplo.com/imagens/notebook_abc.jpg"
    },
    {
      "nome": "Fone de Ouvido Bluetooth",
      "valor_total": 200.00,
      "valor_com_desconto": 180.00,
      "link_imagem": "https://exemplo.com/imagens/fone_bluetooth.jpg"
    },
    {
      "nome": "Smartwatch 123",
      "valor_total": 800.00,
      "valor_com_desconto": 720.00,
      "link_imagem": "https://exemplo.com/imagens/smartwatch_123.jpg"
    }
]


function App() {
  const [numero, setNumero] = useState(0)

  function clique(){
    setNumero(numero+1)
  }

  return (
    <>
      <Titulo>Título dinâmico {numero}</Titulo>
      <Paragrafo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, consequatur maiores impedit officiis facilis asperiores officia minus consequuntur hic odio obcaecati sunt ad, deserunt voluptatum error quasi animi nulla similique.</Paragrafo>

      <Botao funcao={clique}>Botão</Botao>
      
    </>
  )
}

export default App
