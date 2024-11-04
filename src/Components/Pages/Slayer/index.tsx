import Footer from '../../Footer'
import slayer from '../../signatureimg/slayer.jpg'
import slayer1 from '../../signatureimg/slayer_1.jpg'
import slayer2 from '../../signatureimg/slayer_2.jpg'
import slCarousel from '../../signatureimg/slCarousel.jpeg'
import slCarousel1 from '../../signatureimg/slCarousel1.jpg'
import kerryK from '../../signatureimg/kerryKing.jpg'
import kerryK1 from '../../signatureimg/kerryKing1.jpg'
import jeffH from '../../signatureimg/jeffH.jpg'
import jeffH1 from '../../signatureimg/JeffH1.jpg'
import tomA from '../../signatureimg/tomAraya.jpg'
import tomA1 from '../../signatureimg/tomAraya_1.jpg'
import daveL from '../../signatureimg/daveL.jpg'
import daveL1 from '../../signatureimg/daveL1.jpg'

const Slayer = () => (
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
          <img style={{ width: '1280px', height: '640px' }} src={slayer} />
        </div>
        <div className="carousel-item">
          <img style={{ width: '1280px', height: '640px' }} src={slayer1} />
        </div>
        <div className="carousel-item">
          <img style={{ width: '1280px', height: '640px' }} src={slayer2} />
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
              src={slCarousel}
            />
          </div>
          <div className="carousel-item">
            <img
              style={{
                width: '450px',
                height: '450px',
                borderRadius: '9px'
              }}
              src={slCarousel1}
            />
          </div>
        </div>
      </div>
      <div style={{ marginLeft: '64px' }}>
        <h2 style={{ color: 'orange' }}>Sobre o Slayer</h2>
        <p>
          Slayer foi uma das bandas mais icônicas do thrash metal, conhecida por
          seu som brutal e letras que exploravam temas sombrios e controversos.
          Formada em 1981 por Kerry King, Jeff Hanneman, Tom Araya e Dave
          Lombardo, a banda fez parte do Big Four do thrash metal, ao lado de
          Metallica, Megadeth e Anthrax. O som agressivo e o estilo veloz da
          banda, com riffs pesados, bateria explosiva e vocais ferozes,
          redefiniram o metal extremo e influenciaram gerações de músicos.
          Álbuns como *Reign in Blood* (1986) consolidaram a banda no cenário do
          metal com músicas como Angel of Death e Raining Blood, que se tornaram
          hinos do gênero. Slayer continuou a impactar o metal por décadas,
          mantendo uma postura intransigente e fiel às suas raízes até seu show
          de despedida em 2019. A banda é reverenciada por seus fãs e continua a
          ser uma lenda no metal pesado.
        </p>
      </div>
    </section>
    <section id="members" style={{ textAlign: 'center' }}>
      <div className="card">
        <div className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div data-bs-interval="1000" className="carousel-item active">
              <img style={{ width: '300px', height: '435px' }} src={kerryK} />
            </div>
            <div className="carousel-item">
              <img style={{ width: '300px', height: '435px' }} src={kerryK1} />
            </div>
          </div>
        </div>
        <div>
          <h2>Kerry King</h2>
          <a style={{ color: 'orange' }} href="/kerrysign">
            Signature
          </a>
        </div>
      </div>
      <div className="card">
        <div className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div data-bs-interval="1000" className="carousel-item active">
              <img style={{ width: '300px', height: '435px' }} src={jeffH} />
            </div>
            <div className="carousel-item">
              <img style={{ width: '300px', height: '435px' }} src={jeffH1} />
            </div>
          </div>
        </div>
        <div>
          <h2>Jeff Hanneman</h2>
          <a style={{ color: 'orange' }} href="/jeffsign">
            Signature
          </a>
        </div>
      </div>
      <div className="card">
        <div className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div data-bs-interval="1000" className="carousel-item active">
              <img style={{ width: '300px', height: '435px' }} src={tomA} />
            </div>
            <div className="carousel-item">
              <img style={{ width: '300px', height: '435px' }} src={tomA1} />
            </div>
          </div>
        </div>
        <h2 className="card-title">Tom Araya</h2>
        <a style={{ color: 'orange' }} href="/arayasign">
          Signature
        </a>
      </div>
      <div className="card">
        <div className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div data-bs-interval="1000" className="carousel-item active">
              <img style={{ width: '300px', height: '435px' }} src={daveL} />
            </div>
            <div className="carousel-item">
              <img style={{ width: '300px', height: '435px' }} src={daveL1} />
            </div>
          </div>
        </div>
        <h2 className="card-title">Dave Lombardo</h2>
        <a style={{ color: 'orange' }} href="/lombardosign">
          Signature
        </a>
      </div>
    </section>
    <Footer />
  </>
)

export default Slayer
