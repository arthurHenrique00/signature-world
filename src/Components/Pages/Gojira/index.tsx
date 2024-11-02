import Footer from '../../Footer'
import gojira from '../../signatureimg/gojira.jpg'
import gojira1 from '../../signatureimg/gojira_1.jpg'
import gojira2 from '../../signatureimg/gojira_2.jpg'
import goCarousel from '../../signatureimg/gocarou.jpeg'
import goCarousel1 from '../../signatureimg/gocarou1.jpeg'
import joeD from '../../signatureimg/joeDuplantier.jpg'
import joeD1 from '../../signatureimg/joeDuplantier_1.jpg'
import chrisA from '../../signatureimg/christianAndreu.jpg'
import chrisA1 from '../../signatureimg/christianAndreu_1.jpg'
import marD from '../../signatureimg/marioDuplantier.png'
import marD1 from '../../signatureimg/marioDuplantier_1.jpeg'

const Gojira = () => (
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
          <img style={{ width: '1280px', height: '640px' }} src={gojira} />
        </div>
        <div className="carousel-item">
          <img style={{ width: '1280px', height: '640px' }} src={gojira1} />
        </div>
        <div className="carousel-item">
          <img style={{ width: '1280px', height: '640px' }} src={gojira2} />
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
              src={goCarousel}
            />
          </div>
          <div className="carousel-item">
            <img
              style={{
                width: '450px',
                height: '450px',
                borderRadius: '9px'
              }}
              src={goCarousel1}
            />
          </div>
        </div>
      </div>
      <div style={{ marginLeft: '64px' }}>
        <h2 style={{ color: '#232ADE' }}>Sobre o Gojira</h2>
        <p>
          Gojira é uma banda francesa de metal formada em 1996, originalmente
          sob o nome Godzilla, mas depois renomeada em homenagem ao famoso
          monstro japonês. Conhecida por suas letras que abordam temas
          ecológicos, espirituais e existenciais, a banda mistura elementos de
          death metal progressivo com passagens atmosféricas e complexas,
          criando um som intenso e único. Liderada pelos irmãos Joe e Mario
          Duplantier, Gojira ganhou reconhecimento por sua técnica excepcional e
          pela profundidade emocional de suas músicas. Álbuns como From Mars to
          Sirius e The Way of All Flesh consolidaram a banda como uma força
          inovadora no metal moderno, abordando questões como a preservação
          ambiental e a consciência humana. Ao longo dos anos, Gojira conquistou
          uma base de fãs global e é hoje aclamada por sua originalidade e
          impacto no gênero, elevando o death metal a novas dimensões.
        </p>
      </div>
    </section>
    <section id="members" style={{ textAlign: 'center' }}>
      <div className="card">
        <div className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div data-bs-interval="1000" className="carousel-item active">
              <img style={{ width: '300px', height: '435px' }} src={joeD} />
            </div>
            <div className="carousel-item">
              <img style={{ width: '300px', height: '435px' }} src={joeD1} />
            </div>
          </div>
        </div>
        <div>
          <h2>Joe Duplantier</h2>
          <a style={{ color: '#232ADE' }} href="">
            Signature
          </a>
        </div>
      </div>
      <div className="card">
        <div className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div data-bs-interval="1000" className="carousel-item active">
              <img style={{ width: '300px', height: '435px' }} src={chrisA} />
            </div>
            <div className="carousel-item">
              <img style={{ width: '300px', height: '435px' }} src={chrisA1} />
            </div>
          </div>
        </div>
        <div>
          <h2>Christian Andreu</h2>
          <a style={{ color: '#232ADE' }} href="">
            Signature
          </a>
        </div>
      </div>
      <div className="card">
        <div className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div data-bs-interval="1000" className="carousel-item active">
              <img style={{ width: '300px', height: '435px' }} src={marD} />
            </div>
            <div className="carousel-item">
              <img style={{ width: '300px', height: '435px' }} src={marD1} />
            </div>
          </div>
        </div>
        <h2 className="card-title">Mario Duplantier</h2>
        <a style={{ color: '#232ADE' }} href="">
          Signature
        </a>
      </div>
    </section>
    <Footer />
  </>
)

export default Gojira
