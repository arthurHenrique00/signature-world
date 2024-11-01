import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Contact from './Components/Contato'
import Bandas from './Components/Bandas'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import Sobre from './Components/Sobre'
import Releases from './Components/Lancamentos'
import './reset.scss'
import Sepultura from './Components/Pages/Sepultura'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
        <Sobre />
        <Bandas />
        <Releases />
        <Contact />
        <Footer />
      </>
    )
  },
  {
    path: '/sepultura',
    element: <Sepultura />
  }
])

function App() {
  return (
    <>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
