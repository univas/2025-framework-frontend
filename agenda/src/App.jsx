import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import './estilos.css'

function App() {
  const [contatos, setContatos] = useState([])
  const [termoPesquisa, setTermoPesquisa] = useState("")

  useEffect(() => {
    axios.get("http://localhost:3000/contatos")
      .then((res) => {
        setContatos(res.data)
      })
  }, [])

  useEffect(() => {
    if(termoPesquisa != ""){
      // Se digitou alguma coisa, filtra o array existente.
      const contatosFiltrados = contatos.filter(contato => {
        return contato.nome.includes(termoPesquisa)
      })
  
      setContatos(contatosFiltrados)
    }else{
      // Se não tem nada no input, traz a lista completa
      axios.get("http://localhost:3000/contatos")
      .then((res) => {
        setContatos(res.data)
      })
    }
  }, [termoPesquisa])

  const handleTermoPesquisa = (event) => {
    setTermoPesquisa(event.target.value)
  }

  return (
    <main>
      <h1>Agenda de contatos</h1>

      <input type="text" className='form-control' placeholder='Digite para pesquisar' value={termoPesquisa} onChange={handleTermoPesquisa} />

      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>E-mail</th>
            <th>Tipo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            {
              contatos.map(contato => {
                return (
                  <tr key={contato.id}>
                    <td>{contato.id}</td>
                    <td>{contato.nome}</td>
                    <td>{contato.telefone}</td>
                    <td>{contato.email}</td>
                    <td>{contato.tipo}</td>
                    <td></td>
                  </tr>
                )
              })
            }
        </tbody>
      </table>
    </main>
  )
}

export default App
