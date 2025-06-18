import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.jsx'
import { BrowserRouter, Route, Routes  } from 'react-router'
import App from './App.jsx'
import Form from './Form.jsx'
import Login from './Login.jsx'
import UsuarioProvider from './Context/UsuarioContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UsuarioProvider>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/cadastro" element={<Form/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </UsuarioProvider>
  </BrowserRouter>,
)
