import slipknot1 from '../../signatureimg/slipknot_2.jpg'
import slipknot2 from '../../signatureimg/slipknot.jpg'
import slipknot3 from '../../signatureimg/slipknot_1.jpg'
import sliCarousel from '../../signatureimg/slipCarousel.jpg'
import sliCarousel1 from '../../signatureimg/slipCarousel1.jpg'
import mickT from '../../signatureimg/mickT.jpeg'
import mickT1 from '../../signatureimg/mickThomson1.jpeg'
import joeyJ from '../../signatureimg/joeyJordison.png'
import joeyJ1 from '../../signatureimg/joeyJordison_1.jpg'
import joeyW from '../../signatureimg/jayWeinberg.jpg'
import joeyW1 from '../../signatureimg/jayWeinberg_1.webp'
import jimR from '../../signatureimg/jimRoot.jpg'
import jimR1 from '../../signatureimg/jimR1.jpeg'
import paulG from '../../signatureimg/paulG1.jpeg'
import paulG1 from '../../signatureimg/paulG.jpeg'

import Footer from '../../Footer'

const Slipknot = () => (
  <>
    <header>
      <div className="title">
        <h1 style={{ fontFamily: 'Sacramento, sans serif' }}>
          Signature <br />{' '}
          <span
            style={{
              fontFamily: 'Big Shoulders Display, sans serif',
              fontWeight: 'bold'
            }}
          >
            World
          </span>
        </h1>
      </div>
      <div className="navBar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#members">Membros</a>
          </li>
        </ul>
      </div>
    </header>
    <div
      id="carousel-sepultura"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ textAlign: 'center', marginBottom: '64px' }}
    >
      <div className="carousel-inner">
        <div data-bs-interval="1000" className="carousel-item active">
          <img style={{ width: '1280px', height: '640px' }} src={slipknot1} />
        </div>
        <div className="carousel-item">
          <img style={{ width: '1280px', height: '640px' }} src={slipknot2} />
        </div>
        <div className="carousel-item">
          <img style={{ width: '1280px', height: '640px' }} src={slipknot3} />
        </div>
      </div>
    </div>
    <button
      data-bs-target="#carousel-sepultura"
      data-bs-slide="next"
      className="carousel-control-next"
      type="button"
    >
      <span className="carousel-control-next-icon" />
    </button>
    <button
      data-bs-target="#carousel-sepultura"
      data-bs-slide="prev"
      className="carousel-control-prev"
      type="button"
    >
      <span className="carousel-control-prev-icon" />
    </button>
    <section id="about" style={{ display: 'flex' }}>
      <div style={{ marginRight: '64px' }}>
        <h2>Sobre o Slipknot</h2>
        <p>
          Slipknot é uma banda americana de metal formada em 1995 em Des Moines,
          Iowa, conhecida por sua intensidade brutal, apresentações ao vivo
          caóticas e uma estética visual inconfundível. A banda se destaca por
          suas máscaras grotescas e uniformes que criam uma atmosfera única e
          sombria, combinando elementos do nu metal e metal alternativo. Com
          letras que abordam temas como angústia, raiva e experiências pessoais
          intensas, Slipknot rapidamente conquistou uma base de fãs leais ao
          redor do mundo. Seu álbum de estreia autointitulado, lançado em 1999,
          trouxe um som agressivo e experimental que redefiniu o metal moderno.
          Músicas como Wait and Bleed e Spit It Out se tornaram hits,
          impulsionando a banda ao sucesso. Slipknot continuou a evoluir com
          álbuns icônicos como Iowa e Vol. 3: (The Subliminal Verses),
          consolidando-se como uma das bandas mais influentes e inovadoras do
          metal.
        </p>
      </div>
      <div
        id="carousel-home"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" style={{ marginBottom: '32px' }}>
          <div data-bs-interval="1000" className="carousel-item active">
            <img
              style={{
                width: '450px',
                height: '450px',
                borderRadius: '9px'
              }}
              src={sliCarousel}
            />
          </div>
          <div className="carousel-item">
            <img
              style={{
                width: '450px',
                height: '450px',
                borderRadius: '9px'
              }}
              src={sliCarousel1}
            />
          </div>
        </div>
      </div>
    </section>
    <section id="members" style={{ textAlign: 'center' }}>
      <div className="card">
        <div className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div data-bs-interval="1000" className="carousel-item active">
              <img style={{ width: '300px', height: '435px' }} src={mickT} />
            </div>
            <div className="carousel-item">
              <img style={{ width: '300px', height: '435px' }} src={mickT1} />
            </div>
          </div>
        </div>
        <div>
          <h2>Mick Thomson</h2>
          <a href="">Signature</a>
        </div>
      </div>
      <div className="card">
        <div className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div data-bs-interval="1000" className="carousel-item active">
              <img style={{ width: '300px', height: '435px' }} src={joeyJ} />
            </div>
            <div className="carousel-item">
              <img style={{ width: '300px', height: '435px' }} src={joeyJ1} />
            </div>
          </div>
        </div>
        <div>
          <h2>Joey Jordison</h2>
          <a href="">Signature</a>
        </div>
      </div>
      <div className="card">
        <div className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div data-bs-interval="1000" className="carousel-item active">
              <img style={{ width: '300px', height: '435px' }} src={joeyW} />
            </div>
            <div className="carousel-item">
              <img style={{ width: '300px', height: '435px' }} src={joeyW1} />
            </div>
          </div>
        </div>
        <h2 className="card-title">Jay Weinberg</h2>
        <a href="">Signature</a>
      </div>
      <div className="card">
        <div className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div data-bs-interval="1000" className="carousel-item active">
              <img style={{ width: '300px', height: '435px' }} src={jimR} />
            </div>
            <div className="carousel-item">
              <img style={{ width: '300px', height: '435px' }} src={jimR1} />
            </div>
          </div>
        </div>
        <h2 className="card-title">Jim Root</h2>
        <a href="">Signature</a>
      </div>
      <div className="card">
        <div className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div data-bs-interval="1000" className="carousel-item active">
              <img style={{ width: '300px', height: '435px' }} src={paulG} />
            </div>
            <div className="carousel-item">
              <img style={{ width: '300px', height: '435px' }} src={paulG1} />
            </div>
          </div>
        </div>
        <h2 className="card-title">Paul Gray</h2>
        <a href="">Signature</a>
      </div>
    </section>
    <Footer />
  </>
)

export default Slipknot
