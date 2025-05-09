import hobbies_styles from './hobbies.module.css'
import skills_styles from './skills.module.css'
import titulo_styles from './titulo.module.css'
import { useState } from 'react' // desestruturação

function App() {
  const [mostrarHobbies, setMostrarHobbies] = useState(false)

  const toggleHobbies = () => {
    if (mostrarHobbies == true) {
      setMostrarHobbies(false)
    } else {
      setMostrarHobbies(true)
    }
  }

  return (
    <div className="container">
      <h1 className={titulo_styles.titulo}>Marcos Antonio dos Santos</h1>
      <p className="descricao-pessoal">Desenvolvedor, músico e adestrador de cães.</p>

      <div className={hobbies_styles.container}>
        <h2 className={hobbies_styles.titulo}>Hobbies</h2>
        <div>
          <button onClick={toggleHobbies}>
            {mostrarHobbies == true ? "Esconder" : "Mostrar"}
          </button>
        </div>
        {
          mostrarHobbies == true ? (
            <ul>
              <li>Música</li>
              <li>Treinamento de cães</li>
            </ul>
          ) : ""
        }


      </div>

      <div className={skills_styles.container}>
        <h2 className={skills_styles.titulo}>Skills</h2>
        <ol>
          <li>React</li>
          <li>JS</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>NodeJS</li>
        </ol>
      </div>
    </div>
  )
}

export default App
