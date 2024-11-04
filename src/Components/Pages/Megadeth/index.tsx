import Footer from '../../Footer'
import megadeth from '../../signatureimg/megadeth_1.jpg'
import megadeth1 from '../../signatureimg/megadeth_2.jpg'
import megadeth2 from '../../signatureimg/megadeth_3.jpg'
import mdCarousel from '../../signatureimg/mdCarou.jpg'
import mdCarousel1 from '../../signatureimg/mdCarou1.jpg'
import daveM from '../../signatureimg/daveMustaine.jpg'
import daveM1 from '../../signatureimg/daveMustaine_1.jpg'
import marF from '../../signatureimg/martyF.webp'
import marF1 from '../../signatureimg/martyF1.jpg'

const Megadeth = () => (
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
            <a href="#seabout">Sobre</a>
          </li>
          <li>
            <a href="#semembers">Membros</a>
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
          <img style={{ width: '1280px', height: '640px' }} src={megadeth} />
        </div>
        <div className="carousel-item">
          <img style={{ width: '1280px', height: '640px' }} src={megadeth1} />
        </div>
        <div className="carousel-item">
          <img style={{ width: '1280px', height: '640px' }} src={megadeth2} />
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
              src={mdCarousel}
            />
          </div>
          <div className="carousel-item">
            <img
              style={{
                width: '450px',
                height: '450px',
                borderRadius: '9px'
              }}
              src={mdCarousel1}
            />
          </div>
        </div>
      </div>
      <div style={{ marginLeft: '64px' }}>
        <h2 style={{ color: '#25F54A' }}>Sobre o Megadeth</h2>
        <p>
          Megadeth é uma das bandas mais icônicas do thrash metal, conhecida por
          sua velocidade, técnica e letras agressivas que abordam temas como
          política, guerra, morte e sociedade. Fundada em 1983 pelo guitarrista
          e vocalista Dave Mustaine após sua saída do Metallica, a banda
          rapidamente se estabeleceu com um som distinto, marcado por riffs
          complexos e solos virtuosos. Com álbuns como Peace Sells... But Whos
          Buying?, Rust in Peace, e Countdown to Extinction, o Megadeth
          consolidou sua posição como uma das Big Four do thrash, ao lado de
          Metallica, Slayer e Anthrax. A banda passou por várias formações ao
          longo dos anos, mas a visão de Mustaine sempre manteve o Megadeth
          relevante e influente, tornando-se um verdadeiro símbolo da
          agressividade e técnica no heavy metal.
        </p>
      </div>
    </section>
    <section id="members" style={{ textAlign: 'center' }}>
      <div className="card">
        <div className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div data-bs-interval="1000" className="carousel-item active">
              <img style={{ width: '300px', height: '435px' }} src={daveM1} />
            </div>
            <div className="carousel-item">
              <img style={{ width: '300px', height: '435px' }} src={daveM} />
            </div>
          </div>
        </div>
        <div>
          <h2>Dave Mustaine</h2>
          <a style={{ color: '#25F54A' }} href="">
            Signature
          </a>
        </div>
      </div>
      <div className="card">
        <div className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div data-bs-interval="1000" className="carousel-item active">
              <img style={{ width: '300px', height: '435px' }} src={marF} />
            </div>
            <div className="carousel-item">
              <img style={{ width: '300px', height: '435px' }} src={marF1} />
            </div>
          </div>
        </div>
        <div>
          <h2>Marty Friedman</h2>
          <a style={{ color: '#25F54A' }} href="">
            Signature
          </a>
        </div>
      </div>
    </section>
    <Footer />
  </>
)

export default Megadeth
