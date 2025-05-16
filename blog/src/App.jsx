import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(resposta => {
        console.log(resposta.data)

        const nomes = resposta.data.map(item => item.name)

        console.log("Requisição", nomes)

        setUsuarios(nomes)
      })
  }, [])

  console.log("Estado", usuarios)

  return (
    <>
      <h1>Usuários</h1>
      
      <ul className='list-group'>
        {
          usuarios.length > 0 && usuarios.map(usuario => {
            return (
              <li className='list-group-item'>{usuario}</li>
            )
          })
        }
      </ul>
      {
        usuarios.length == 0 && (<p>Aguarde enquanto carregamos a lista de usuários...</p>)
      }
    </>
  )
}

export default App
