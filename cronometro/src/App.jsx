import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [segundos, setSegundos] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSegundos((valorAnterior) => valorAnterior + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <h1>Tempo decorrido: {segundos}</h1>
    </>
  )
}

export default App
