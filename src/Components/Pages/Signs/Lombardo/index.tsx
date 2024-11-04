import { useState } from 'react'
import '../style.scss'
import lombardoBanner from '../../../signatureimg/lombardo_sign.jpg'
import lombSnare from '../../../signatureimg/dl_snare.webp'
import lombSnare1 from '../../../signatureimg/dl_snare_1.jpg'
import lombStick from '../../../signatureimg/dl_baqueta.jpg'
import lombStick1 from '../../../signatureimg/dl_baqueta_1.jpg'

const LombardoSign = () => {
  const [sign, setSign] = useState(lombSnare)
  const [signS, setSignS] = useState(lombStick)

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
          </ul>
        </div>
      </header>
      <section id="signature">
        <img className="banner" src={lombardoBanner} />
        <h2 className="title" style={{ color: 'orange' }}>
          Signatures
        </h2>
        <div>
          <ul>
            <li>
              <img
                className="product"
                src={sign}
                onMouseOver={() => setSign(lombSnare1)}
                onMouseOut={() => setSign(lombSnare)}
              />
              <p>Snare 14 5.5 Drum Ikebukuro</p>
            </li>
            <li>
              <img
                className="product"
                src={signS}
                onMouseOver={() => setSignS(lombStick1)}
                onMouseOut={() => setSignS(lombStick)}
              />
              <p>Pro Mark TX2BXN</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default LombardoSign
