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

  // Cria os estados locais para gerenciar o componente
  const [piada, setPiada] = useState("")
  const [categoria, setCategoria] = useState("")

  useEffect(() => {
    // Atribui vazio na piada para mostrar que está carregando.
    setPiada("")

    // Faz a requisição na api enviando a categoria caso esteja preenchida
    fetch(`https://api.chucknorris.io/jokes/random${categoria == "" ? "" : `?category${categoria}`}`)
    .then(res => res.json()) // traz a resposta da api
    .then(dados => { // converte o conteúdo da resposta pra json
            setPiada(dados.value)
          })
    // Imprime uma mensagem de erro na tela caso falhe na busca pela piada
    .catch(() => setPiada("Erro ao carregar dados..."))

  }, [categoria]) // Monitora o estado de categoria para buscar uma nova piada quando atualizado

  return (
    <>
      {/* <h1>Tempo decorrido: {segundos}</h1> */}
      <h1>Piada Aleatória:</h1>
      <p>{piada == "" ? "Aguardando carregar..." : piada}</p>

      <div>
        <button onClick={() => setCategoria("Animal")}>Animal</button>
        <button onClick={() => setCategoria("Career")}>Career</button>
        <button onClick={() => setCategoria("Dev")}>Dev</button>
      </div>
    </>
  )
}

export default App
