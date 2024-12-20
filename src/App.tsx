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
import KerrySign from './Components/Pages/Signs/Kerry'
import JeffSign from './Components/Pages/Signs/Jeff'
import ArayaSign from './Components/Pages/Signs/Araya'
import LombardoSign from './Components/Pages/Signs/Lombardo'
import MickSign from './Components/Pages/Signs/Mick'
import JoeySign from './Components/Pages/Signs/Joey'
import JaySign from './Components/Pages/Signs/Jay'
import JimSign from './Components/Pages/Signs/Jim'
import PaulSign from './Components/Pages/Signs/Paul'
import JoeDSign from './Components/Pages/Signs/JoeD'
import ChrisSign from './Components/Pages/Signs/Chris'
import MarioSign from './Components/Pages/Signs/Mario'
import DaveSign from './Components/Pages/Signs/Dave'
import MartySign from './Components/Pages/Signs/Marty'
import KirkSign from './Components/Pages/Signs/Kirk'
import LarsSign from './Components/Pages/Signs/Lars'
import JamesSign from './Components/Pages/Signs/James'
import RichSign from './Components/Pages/Signs/Richard'
import LandersSign from './Components/Pages/Signs/Landers'
import OlivSign from './Components/Pages/Signs/Oliver'

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
  },
  {
    path: '/kerrysign',
    element: <KerrySign />
  },
  {
    path: '/jeffsign',
    element: <JeffSign />
  },
  {
    path: '/arayasign',
    element: <ArayaSign />
  },
  {
    path: '/lombardosign',
    element: <LombardoSign />
  },
  {
    path: '/micksign',
    element: <MickSign />
  },
  {
    path: '/joeysign',
    element: <JoeySign />
  },
  {
    path: '/jaysign',
    element: <JaySign />
  },
  {
    path: '/jimsign',
    element: <JimSign />
  },
  {
    path: '/paulsign',
    element: <PaulSign />
  },
  {
    path: '/joedsign',
    element: <JoeDSign />
  },
  {
    path: '/chrisasign',
    element: <ChrisSign />
  },
  {
    path: '/mariosign',
    element: <MarioSign />
  },
  {
    path: '/davemsign',
    element: <DaveSign />
  },
  {
    path: '/martysign',
    element: <MartySign />
  },
  {
    path: '/jamessign',
    element: <JamesSign />
  },
  {
    path: '/kirksign',
    element: <KirkSign />
  },
  {
    path: '/larssign',
    element: <LarsSign />
  },
  {
    path: '/richsign',
    element: <RichSign />
  },
  {
    path: '/lenderssign',
    element: <LandersSign />
  },
  {
    path: '/oliversign',
    element: <OlivSign />
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
