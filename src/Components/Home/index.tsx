import sepulturaH from '../signatureimg/sepultura_1.jpg'
import gojiraH from '../signatureimg/gojira_2.jpg'
import megadethH from '../signatureimg/megadeth_1.jpg'
import slayerH from '../signatureimg/slayer.jpg'

const Home = () => (
  <>
    <div
      style={{ textAlign: 'center' }}
      id="carousel-home"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div data-bs-interval="1000" className="carousel-item active">
          <img style={{ width: '1280px', height: '640px' }} src={sepulturaH} />
        </div>
        <div className="carousel-item">
          <img style={{ width: '1280px', height: '640px' }} src={gojiraH} />
        </div>
        <div className="carousel-item">
          <img style={{ width: '1280px', height: '640px' }} src={megadethH} />
        </div>
        <div className="carousel-item">
          <img style={{ width: '1280px', height: '640px' }} src={slayerH} />
        </div>
      </div>
    </div>
    <button
      data-bs-target="#carousel-home"
      data-bs-slide="next"
      className="carousel-control-next"
      type="button"
    >
      <span className="carousel-control-next-icon" />
    </button>
    <button
      data-bs-target="#carousel-home"
      data-bs-slide="prev"
      className="carousel-control-prev"
      type="button"
    >
      <span className="carousel-control-prev-icon" />
    </button>
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carousel-home"
        data-bs-slide-to="0"
      ></button>
      <button
        type="button"
        data-bs-target="#carousel-home"
        data-bs-slide-to="1"
      ></button>
      <button
        type="button"
        data-bs-target="#carousel-home"
        data-bs-slide-to="2"
      ></button>
      <button
        type="button"
        data-bs-target="#carousel-home"
        data-bs-slide-to="3"
      ></button>
    </div>
  </>
)

export default Home
