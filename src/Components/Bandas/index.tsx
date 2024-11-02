import './style.scss'
import sepulturaLogo from '../signatureimg/sepultura_logo.jpg'
import slayerLogo from '../signatureimg/slayer_logo.jpg'
import gojiraLogo from '../signatureimg/gojira_logo.jpg'
import megadethLogo from '../signatureimg/megadeth_logo.jpg'
import slipknotLogo from '../signatureimg/slipknot_logo.jpg'
import metallicaLogo from '../signatureimg/metallica_logo.jpg'
import deftonesLogo from '../signatureimg/deftones_logo.jpg'
import rammsteinLogo from '../signatureimg/rammstein_logo.jpg'
import brushtxt from '../signatureimg/brushtxt.png'

const Bandas = () => (
  <section id="bandas" style={{ paddingBottom: '120px' }}>
    <div style={{ textAlign: 'center', marginTop: '26px' }}>
      <img style={{ width: '150px', height: '50px' }} src={brushtxt} />
    </div>
    <div style={{ marginBottom: '120px' }}>
      <ul className="logos">
        <li>
          <div data-aos="">
            <a href="/sepultura" style={{ width: '150px', height: '150px' }}>
              <img
                style={{ width: '150px', height: '150px' }}
                src={sepulturaLogo}
              />
            </a>
          </div>
        </li>
        <li>
          <div data-aos="">
            <a href="/slayer" style={{ width: '150px', height: '150px' }}>
              <img
                style={{ width: '150px', height: '150px' }}
                src={slayerLogo}
              />
            </a>
          </div>
        </li>
        <li>
          <div data-aos="">
            <a href="/slipknot" style={{ width: '150px', height: '150px' }}>
              <img
                style={{ width: '150px', height: '150px' }}
                src={slipknotLogo}
              />
            </a>
          </div>
        </li>
        <li>
          <div data-aos="">
            <a href="/gojira" style={{ width: '150px', height: '150px' }}>
              <img
                style={{ width: '150px', height: '150px' }}
                src={gojiraLogo}
              />
            </a>
          </div>
        </li>
        <li>
          <div data-aos="">
            <a href="/megadeth" style={{ width: '150px', height: '150px' }}>
              <img
                style={{ width: '150px', height: '150px' }}
                src={megadethLogo}
              />
            </a>
          </div>
        </li>
        <li>
          <div data-aos="">
            <a href="/metallica" style={{ width: '150px', height: '150px' }}>
              <img
                style={{ width: '150px', height: '150px' }}
                src={metallicaLogo}
              />
            </a>
          </div>
        </li>
        <li>
          <div data-aos="">
            <a href="/rammstein" style={{ width: '150px', height: '150px' }}>
              <img
                style={{ width: '150px', height: '150px' }}
                src={rammsteinLogo}
              />
            </a>
          </div>
        </li>
        <li>
          <div data-aos="">
            <a href="/deftones" style={{ width: '150px', height: '150px' }}>
              <img
                style={{ width: '150px', height: '150px' }}
                src={deftonesLogo}
              />
            </a>
          </div>
        </li>
      </ul>
    </div>
  </section>
)

export default Bandas