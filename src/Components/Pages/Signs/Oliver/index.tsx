import { useState } from 'react'
import '../style.scss'
import oBanner from '../../../signatureimg/oliver_sign.jpg'
import oB from '../../../signatureimg/or_bass.webp'
import oB1 from '../../../signatureimg/or_bass_1.jpg'

const OlivSign = () => {
  const [sign, setSign] = useState(oB)

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
        <img className="banner" src={oBanner} />
        <h2 className="title" style={{ color: '#ACF5A5' }}>
          Signatures
        </h2>
        <div>
          <ul>
            <li>
              <img
                className="product"
                src={sign}
                onMouseOver={() => setSign(oB1)}
                onMouseOut={() => setSign(oB)}
              />
              <p>OR - 734</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default OlivSign
