import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import './estilos.css'
import z from 'zod'

const ContatoSchema = z.object({
  nome: z.string().min(3, 'Nome muito curto!'),
  email: z.string().email('Deve digitar um e-mail válido!'),
  telefone: z.string().regex(/^\(([1-9]{2})\) (9[1-9][0-9]{3})-([0-9]{4})$/, "Telefone inválido!"),
  tipo: z.string()
})

function Form({mudaPagina}) {

  const [contato, setContato] = useState({
    nome: '', telefone: '', email: '', tipo: ''
  })

  const [erro, setErro] = useState("")

  function handleSubmitForm(event){
    event.preventDefault()

    try{
      ContatoSchema.parse(contato)

      axios.post("http://localhost:3000/contatos", contato)
        .then(res => {
          if(res.status == 201){
            alert("Contato salvo com sucesso!")
          }
        })
    }catch(err){
      alert("Erro ao cadastrar contato!")
      console.log(err)
      if(err.errors){
        const erros = err.errors.reduce((ant, atual) => {
          return ant + " | " + atual.message
        }, "")

        setErro(erros)
      }
    }
  }

  function handleNome(event){
    setContato({
      ...contato,
      nome: event.target.value
    })
  }

  function handleEmail(event) {
    setContato({
      ...contato,
      email: event.target.value
    })
  }

  function handleTelefone(event){
    setContato({
      ...contato,
      telefone: event.target.value
    })
  }

  function handleTipo(event){
    setContato({
      ...contato,
      tipo: event.target.value
    })
  }

  const lista = () => {
    mudaPagina("APP")
  }


  return (
    <main>
      <h1>Cadastro de contatos</h1>
      <a href="#" onClick={lista} className='btn btn-primary'>Lista de contatos</a>

      <form action="" method='POST' onSubmit={handleSubmitForm}>
        {erro != "" && <p className='alert alert-danger'>{erro}</p>}
        <div className='my-3'>
          <label htmlFor="nome">Nome Completo:</label>
          <input required className='form-control' type="text" name="nome" id="nome" onChange={handleNome} value={contato.nome} />
        </div>

        <div className='my-3'>
          <label htmlFor="email">E-mail:</label>
          <input required className='form-control' type="text" name="email" id="email" onChange={handleEmail} value={contato.email} />
        </div>

        <div className='my-3'>
          <label htmlFor="telefone">Telefone:</label>
          <input required className='form-control' type="text" name="telefone" id="telefone" onChange={handleTelefone} value={contato.telefone} />
        </div>

        <div className='my-3'>
          <label htmlFor="tipo">Tipo de Contato:</label>
          <select required className='form-control' name="tipo" id="tipo" onChange={handleTipo} value={contato.tipo}>
            <option value="" disabled></option>
            <option value="pessoal">Pessoal</option>
            <option value="profissional">Profissional</option>
          </select>
        </div>

        <div className='my-3 text-center'>
          <button type='submit' className='btn btn-success'>Salvar</button>
        </div>
      </form>
    </main>
  )
}

export default Form
