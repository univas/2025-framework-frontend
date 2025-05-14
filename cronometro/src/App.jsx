import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // const [segundos, setSegundos] = useState(0)

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setSegundos((valorAnterior) => valorAnterior + 1)
  //   }, 1000)

  //   return () => clearInterval(timer)
  // }, [])


  const [piada, setPiada] = useState("")

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json()) // traz a resposta da api
    .then(dados => { // converte o conteúdo da resposta pra json
      setPiada(dados.value)
    })
    .catch(err => setPiada("Erro ao carregar dados..."))
  }, [])

  return (
    <>
      {/* <h1>Tempo decorrido: {segundos}</h1> */}
      <h1>Piada Aleatória:</h1>
      <p>{piada == "" ? "Aguardando carregar..." : piada}</p>
    </>
  )
}

export default App
