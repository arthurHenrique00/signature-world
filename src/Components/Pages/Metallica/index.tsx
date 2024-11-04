import metallica1 from '../../signatureimg/metallica.jpg'
import metallica2 from '../../signatureimg/metallica_1.jpg'
import metallica3 from '../../signatureimg/metallica_2.jpg'
import meCarousel from '../../signatureimg/meCarou.jpeg'
import meCarousel1 from '../../signatureimg/meCarou.jpg'
import jamH from '../../signatureimg/jamesHetfield.jpg'
import jamH1 from '../../signatureimg/jamesHetfield_1.jpg'
import kirkH from '../../signatureimg/kirkHammett.jpg'
import kirkH1 from '../../signatureimg/kirkHammett_1.jpg'
import larsU from '../../signatureimg/larsU1.jpeg'
import larsU1 from '../../signatureimg/larsUlrich.jpg'
import Footer from '../../Footer'

const Metallica = () => (
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
            <img
              style={{ width: '1280px', height: '640px' }}
              src={metallica1}
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ width: '1280px', height: '640px' }}
              src={metallica2}
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ width: '1280px', height: '640px' }}
              src={metallica3}
            />
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
          <h2 style={{ color: '#5139F4' }}>Sobre o Metallica</h2>
          <p>
            Metallica é uma das bandas mais influentes e populares da história
            do heavy metal, conhecida por sua capacidade de inovar e redefinir o
            gênero. Formada em 1981 por James Hetfield e Lars Ulrich, a banda
            alcançou sucesso mundial com seu som agressivo e técnico, mesclando
            elementos de thrash e heavy metal com melodias cativantes. Álbuns
            como Master of Puppets, Ride the Lightning e o autointitulado Black
            Album ajudaram a consolidar o Metallica como uma das Big Four do
            thrash metal e trouxeram o gênero para o mainstream. A banda é
            conhecida por sua constante reinvenção, indo desde o thrash dos anos
            80 até os experimentos mais alternativos dos anos 90, sempre se
            mantendo relevante e atraindo novas gerações de fãs
          </p>
        </div>
        <div
          id="carousel-home"
          className="carousel slide carousel-fade"
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
                src={meCarousel}
              />
            </div>
            <div className="carousel-item">
              <img
                style={{
                  width: '450px',
                  height: '450px',
                  borderRadius: '9px'
                }}
                src={meCarousel1}
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
                <img style={{ width: '300px', height: '435px' }} src={jamH} />
              </div>
              <div className="carousel-item">
                <img style={{ width: '300px', height: '435px' }} src={jamH1} />
              </div>
            </div>
          </div>
          <div>
            <h2>James Hetfield</h2>
            <a href="/jamessign" style={{ color: '#5139F4' }}>
              Signature
            </a>
          </div>
        </div>
        <div className="card">
          <div className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div data-bs-interval="1000" className="carousel-item active">
                <img style={{ width: '300px', height: '435px' }} src={kirkH} />
              </div>
              <div className="carousel-item">
                <img style={{ width: '300px', height: '435px' }} src={kirkH1} />
              </div>
            </div>
          </div>
          <div>
            <h2>Kirk Hammett</h2>
            <a href="/kirksign" style={{ color: '#5139F4' }}>
              Signature
            </a>
          </div>
        </div>
        <div className="card">
          <div className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div data-bs-interval="1000" className="carousel-item active">
                <img style={{ width: '300px', height: '435px' }} src={larsU} />
              </div>
              <div className="carousel-item">
                <img style={{ width: '300px', height: '435px' }} src={larsU1} />
              </div>
            </div>
          </div>
          <h2 className="card-title">Lars Ulrich</h2>
          <a href="/larssign" style={{ color: '#5139F4' }}>
            Signature
          </a>
        </div>
      </section>
    </div>
    <Footer />
  </>
)

export default Metallica
