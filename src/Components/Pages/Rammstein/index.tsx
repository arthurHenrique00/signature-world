import Footer from '../../Footer'
import rammstein from '../../signatureimg/rammstein.webp'
import rammstein1 from '../../signatureimg/rammstein_1.webp'
import rammstein2 from '../../signatureimg/rammstein_2.webp'
import raCarousel from '../../signatureimg/raCarou.jpeg'
import raCarousel1 from '../../signatureimg/ramCarou.jpg'
import richK from '../../signatureimg/richardKruspe.webp'
import richK1 from '../../signatureimg/richardKruspe1.jpg'
import paulL from '../../signatureimg/paulLanders_1.jpg'
import paulL1 from '../../signatureimg/paulLanders.jpg'
import olvR from '../../signatureimg/oliverRiedel.webp'
import olvR1 from '../../signatureimg/oliverRiedel_1.jpg'

const Rammstein = () => (
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
          <img style={{ width: '1280px', height: '640px' }} src={rammstein} />
        </div>
        <div className="carousel-item">
          <img style={{ width: '1280px', height: '640px' }} src={rammstein1} />
        </div>
        <div className="carousel-item">
          <img style={{ width: '1280px', height: '640px' }} src={rammstein2} />
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
              src={raCarousel}
            />
          </div>
          <div className="carousel-item">
            <img
              style={{
                width: '450px',
                height: '450px',
                borderRadius: '9px'
              }}
              src={raCarousel1}
            />
          </div>
        </div>
      </div>
      <div style={{ marginLeft: '64px' }}>
        <h2 style={{ color: '#ACF5A5' }}>Sobre o Rammstein</h2>
        <p>
          Rammstein é uma banda alemã de metal industrial conhecida por suas
          performances teatrais, letras provocativas e som pesado, que combina
          guitarras intensas com sintetizadores eletrônicos. Fundada em 1994, a
          banda rapidamente conquistou notoriedade por seu estilo visual
          marcante e por abordar temas complexos e, por vezes, controversos.
          Músicas como Du Hast, Sonne e Ich Will tornaram-se hinos do metal
          industrial, enquanto os álbuns da banda, como Mutter e Sehnsucht,
          consolidaram sua popularidade mundial. Rammstein é famosa também por
          seus shows ao vivo, que incluem elementos pirotécnicos e cenários
          impressionantes, transformando cada apresentação em uma experiência
          única e explosiva.
        </p>
      </div>
    </section>
    <section id="members" style={{ textAlign: 'center' }}>
      <div className="card">
        <div className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div data-bs-interval="1000" className="carousel-item active">
              <img style={{ width: '300px', height: '435px' }} src={richK} />
            </div>
            <div className="carousel-item">
              <img style={{ width: '300px', height: '435px' }} src={richK1} />
            </div>
          </div>
        </div>
        <div>
          <h2>Richard Kruspe</h2>
          <a style={{ color: '#ACF5A5' }} href="">
            Signature
          </a>
        </div>
      </div>
      <div className="card">
        <div className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div data-bs-interval="1000" className="carousel-item active">
              <img style={{ width: '300px', height: '435px' }} src={paulL} />
            </div>
            <div className="carousel-item">
              <img style={{ width: '300px', height: '435px' }} src={paulL1} />
            </div>
          </div>
        </div>
        <div>
          <h2>Paul Lenders</h2>
          <a style={{ color: '#ACF5A5' }} href="">
            Signature
          </a>
        </div>
      </div>
      <div className="card">
        <div className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div data-bs-interval="1000" className="carousel-item active">
              <img style={{ width: '300px', height: '435px' }} src={olvR} />
            </div>
            <div className="carousel-item">
              <img style={{ width: '300px', height: '435px' }} src={olvR1} />
            </div>
          </div>
        </div>
        <h2 className="card-title">Oliver Riedel</h2>
        <a style={{ color: '#ACF5A5' }} href="">
          Signature
        </a>
      </div>
    </section>
    <Footer />
  </>
)

export default Rammstein
