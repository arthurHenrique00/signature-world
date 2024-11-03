import Footer from '../../Footer'
import deftones1 from '../../signatureimg/deftones_2.jpg'
import deftones2 from '../../signatureimg/deftones_1.jpg'
import deftones3 from '../../signatureimg/deftones.webp'
import defCarousel from '../../signatureimg/defCarou.jpg'
import defCarousel1 from '../../signatureimg/defCarou1.jpeg'
import steC from '../../signatureimg/stepCarp.jpg'
import steC1 from '../../signatureimg/stepCarp_1.jpg'
import abeC from '../../signatureimg/abeC.jpg'
import abeC1 from '../../signatureimg/abeC1.jpg'

const Deftones = () => (
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
    <div>
      <div
        id="carousel-sepultura"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ textAlign: 'center', marginBottom: '64px' }}
      >
        <div className="carousel-inner">
          <div data-bs-interval="1000" className="carousel-item active">
            <img style={{ width: '1280px', height: '640px' }} src={deftones1} />
          </div>
          <div className="carousel-item">
            <img style={{ width: '1280px', height: '640px' }} src={deftones2} />
          </div>
          <div className="carousel-item">
            <img style={{ width: '1280px', height: '640px' }} src={deftones3} />
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
          <h2 style={{ color: '#82AEF5' }}>Sobre o Deftones</h2>
          <p>
            Deftones é uma banda de rock alternativo e metal experimental
            formada em Sacramento, Califórnia, em 1988. Com um som que mistura
            elementos de shoegaze, post-metal, dream pop e nu-metal, a banda
            rapidamente se destacou pela originalidade e intensidade de suas
            composições. A voz distinta de Chino Moreno, que alterna entre
            sussurros melódicos e gritos carregados de emoção, aliada à guitarra
            atmosférica de Stephen Carpenter e ao trabalho dinâmico da bateria
            de Abe Cunningham, cria uma sonoridade densa e cheia de camadas.
            Álbuns icônicos como White Pony (2000) estabeleceram a Deftones como
            uma força inovadora no rock alternativo, explorando temas de
            introspecção, amor, dor e surrealismo. Eles são conhecidos por
            trazer uma forte carga emocional em cada trabalho, envolvendo os
            ouvintes em um som hipnótico que transita entre a agressividade e a
            suavidade.
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
                src={defCarousel}
              />
            </div>
            <div className="carousel-item">
              <img
                style={{
                  width: '450px',
                  height: '450px',
                  borderRadius: '9px'
                }}
                src={defCarousel1}
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
                <img style={{ width: '300px', height: '435px' }} src={steC} />
              </div>
              <div className="carousel-item">
                <img style={{ width: '300px', height: '435px' }} src={steC1} />
              </div>
            </div>
          </div>
          <div>
            <h2>Stephen Carpenter</h2>
            <a href="/stepsign" style={{ color: '#82AEF5' }}>
              Signature
            </a>
          </div>
        </div>
        <div className="card">
          <div className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div data-bs-interval="1000" className="carousel-item active">
                <img style={{ width: '300px', height: '435px' }} src={abeC} />
              </div>
              <div className="carousel-item">
                <img style={{ width: '300px', height: '435px' }} src={abeC1} />
              </div>
            </div>
          </div>
          <div>
            <h2>Abe Cunningham</h2>
            <a href="" style={{ color: '#82AEF5' }}>
              Signature
            </a>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </>
)

export default Deftones
