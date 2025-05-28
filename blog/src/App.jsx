import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [usuarios, setUsuarios] = useState([])
  const [usuario, setUsuario] = useState(undefined)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    if(!usuario){
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then(resposta => {
        console.log(resposta.data)

        const nomes = resposta.data.map(item => {
          return {
            "nome": item.name,
            "id": item.id
          }
        })

        console.log("Requisição", nomes)

        setUsuarios(nomes)
        setPosts([])
      })
    }else{
      axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${usuario}`)
        .then(resposta => {
          setPosts(resposta.data)
        })
    }
  }, [usuario])

  console.log("Estado", usuarios)

  return (
    <>
      <h1>Usuários</h1>
      
      <ul className='list-group'>
        {
          usuarios.length > 0 && !usuario && usuarios.map(usuario => {
            return (
              <li className='list-group-item' onClick={() => setUsuario(usuario.id)}>{usuario.nome}</li>
            )
          })
        }
      </ul>
      {
        usuarios.length == 0 && !usuario && (<p>Aguarde enquanto carregamos a lista de usuários...</p>)
      }

      {
        posts.length > 0 && usuario && 
        [
          ...posts.map(post => {
            return (
              <p className='alert alert-info text-uppercase fw-bold'>{post.title}</p>
            )
          }),
          <button className='btn btn-warning fw-bold text-uppercase' onClick={() => setUsuario(undefined)}>Voltar</button>
        ]
        
      }
    </>
  )
}

export default App
