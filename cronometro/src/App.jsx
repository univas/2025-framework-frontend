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
  const [time, setTime] = useState(0)
  const [timer, setTimer] = useState()

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

  }, [categoria, time]) // Monitora o estado de categoria para buscar uma nova piada quando atualizado

  return (
    <>
      {/* <h1>Tempo decorrido: {segundos}</h1> */}
      <h1>Piada Aleatória:</h1>
      <p>{piada == "" ? "Aguardando carregar..." : piada}</p>

      <div>
        {/* Ao clicar no botão de categoria, limpa o intervalo e atualiza a categoria */}
        <button onClick={() => {
          clearInterval(timer)
          setTimer(undefined)
          setCategoria("Animal")
        }}>Animal</button>

        <button onClick={() => {
          clearInterval(timer)
          setTimer(undefined)
          setCategoria("Career")
        }}>Career</button>

        <button onClick={() => {
          clearInterval(timer)
          setTimer(undefined)
          setCategoria("Dev")
        }}>Dev</button>

        {/* Ao clicar no botão random, inicia um intervalo para atualizar a cada 2 segundos */}
        <button onClick={() => {
          const interval = setInterval(()  => {
            setCategoria("")
            setTime((time) => time+1)
          }, 2000)

          setTimer(interval)
        }}
        // Caso estiver em modo aleatório, desabilita o botão
        disabled={(timer == undefined) ? false : true}
        >Random</button>
      </div>
    </>
  )
}

export default App
