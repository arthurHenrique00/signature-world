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
import Slayer from './Components/Pages/Slayer'
import Slipknot from './Components/Pages/Slipknot'
import Gojira from './Components/Pages/Gojira'
import Megadeth from './Components/Pages/Megadeth'
import Metallica from './Components/Pages/Metallica'
import Rammstein from './Components/Pages/Rammstein'
import Deftones from './Components/Pages/Deftones'
import StephSign from './Components/Pages/Signs/Seteph'
import AbeSign from './Components/Pages/Signs/Abe'
import MaxSign from './Components/Pages/Signs/Max'
import AndreasSign from './Components/Pages/Signs/Andreas'
import IgorSign from './Components/Pages/Signs/Igor'

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
  },
  {
    path: '/slayer',
    element: <Slayer />
  },
  {
    path: '/slipknot',
    element: <Slipknot />
  },
  {
    path: '/gojira',
    element: <Gojira />
  },
  {
    path: '/megadeth',
    element: <Megadeth />
  },
  {
    path: '/metallica',
    element: <Metallica />
  },
  {
    path: '/rammstein',
    element: <Rammstein />
  },
  {
    path: '/deftones',
    element: <Deftones />
  },
  {
    path: '/stepsign',
    element: <StephSign />
  },
  {
    path: '/abesign',
    element: <AbeSign />
  },
  {
    path: '/maxsign',
    element: <MaxSign />
  },
  {
    path: '/andreassign',
    element: <AndreasSign />
  },
  {
    path: '/igorsign',
    element: <IgorSign />
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
