import '../style.scss'
import Footer from '../../Footer'
import sepultura1 from '../../signatureimg/sepultura_2.jpg'
import sepultura2 from '../../signatureimg/sepultura.jpg'
import sepultura3 from '../../signatureimg/sepultura_1.jpg'
import seCarousel from '../../signatureimg/seCarousel.jpeg'
import seCarousel1 from '../../signatureimg/seCarousel1.jpg'
import maxCavalera from '../../signatureimg/maxCavalera.jpg'
import maxCavalera1 from '../../signatureimg/maxCavalera1.jpg'
import andreasKisser from '../../signatureimg/andreasKisser.jpeg'
import andreasKisser1 from '../../signatureimg/andreasKisser1.jpg'
import igorCavalera from '../../signatureimg/igorCavalera.jpg'
import igorCavalera1 from '../../signatureimg/igorCavalera_1.jpg'

const Sepultura = () => {
  return (
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
                src={sepultura1}
              />
            </div>
            <div className="carousel-item">
              <img
                style={{ width: '1280px', height: '640px' }}
                src={sepultura2}
              />
            </div>
            <div className="carousel-item">
              <img
                style={{ width: '1280px', height: '640px' }}
                src={sepultura3}
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
            <h2>Sobre o Sepultura</h2>
            <p>
              Sepultura é uma das bandas mais influentes do metal brasileiro e
              uma referência mundial no gênero. Fundada em 1984 em Belo
              Horizonte pelos irmãos Max e Igor Cavalera, o grupo se destacou
              inicialmente no cenário do thrash e death metal, trazendo uma
              sonoridade pesada e letras que abordavam temas sombrios, políticos
              e sociais. Com o passar dos anos, a banda evoluiu para um som mais
              experimental, incorporando elementos de música brasileira e world
              music, especialmente nos álbuns Chaos A.D. e Roots. Estes álbuns
              solidificaram a presença da banda no exterior, transformando o
              Sepultura em um nome respeitado na cena do metal global. Mesmo
              após a saída de Max Cavalera em 1996, o Sepultura continuou com
              uma formação renovada, explorando novos horizontes sonoros e
              mantendo-se relevante por meio de sucessivos lançamentos.
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
                  src={seCarousel}
                />
              </div>
              <div className="carousel-item">
                <img
                  style={{
                    width: '450px',
                    height: '450px',
                    borderRadius: '9px'
                  }}
                  src={seCarousel1}
                />
              </div>
            </div>
          </div>
        </section>
        <section id="members" style={{ textAlign: 'center' }}>
          <div className="card">
            <div
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div data-bs-interval="1000" className="carousel-item active">
                  <img
                    style={{ width: '300px', height: '435px' }}
                    src={maxCavalera}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    style={{ width: '300px', height: '435px' }}
                    src={maxCavalera1}
                  />
                </div>
              </div>
            </div>
            <div>
              <h2>Max Cavalera</h2>
              <a href="/maxsign">Signature</a>
            </div>
          </div>
          <div className="card">
            <div
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div data-bs-interval="1000" className="carousel-item active">
                  <img
                    style={{ width: '300px', height: '435px' }}
                    src={andreasKisser}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    style={{ width: '300px', height: '435px' }}
                    src={andreasKisser1}
                  />
                </div>
              </div>
            </div>
            <div>
              <h2>Andreas Kisser</h2>
              <a href="/andreassign">Signature</a>
            </div>
          </div>
          <div className="card">
            <div
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div data-bs-interval="1000" className="carousel-item active">
                  <img
                    style={{ width: '300px', height: '435px' }}
                    src={igorCavalera}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    style={{ width: '300px', height: '435px' }}
                    src={igorCavalera1}
                  />
                </div>
              </div>
            </div>
            <h2 className="card-title">Igor Cavalera</h2>
            <a href="/igorsign">Signature</a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Sepultura
