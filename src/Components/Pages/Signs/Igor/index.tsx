import { useState } from 'react'
import '../style.scss'
import igorBanner from '../../../signatureimg/igor_sign.jpg'
import icBaqueta from '../../../signatureimg/ic_sign.jpg'
import icBaqueta1 from '../../../signatureimg/ic_sign_1.jpg'
import icSnare from '../../../signatureimg/ic_snare.jpg'
import icSnare1 from '../../../signatureimg/ic_snare1.jpg'
const IgorSign = () => {
  const [sign, setSign] = useState(icBaqueta)
  const [signSnare, setSignSnare] = useState(icSnare)

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
        <img className="banner" src={igorBanner} />
        <h2 className="title" style={{ color: 'red' }}>
          Signatures
        </h2>
        <div>
          <ul>
            <li>
              <img
                className="product"
                src={sign}
                onMouseOver={() => setSign(icBaqueta1)}
                onMouseOut={() => setSign(icBaqueta)}
              />
              <p>Vic Firth Igor Cavalera Drum</p>
            </li>
            <li>
              <img
                className="product"
                src={signSnare}
                onMouseOver={() => setSignSnare(icSnare1)}
                onMouseOut={() => setSignSnare(icSnare)}
              />
              <p>Yamaha AMS1460</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default IgorSign
