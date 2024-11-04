import { useState } from 'react'
import '../style.scss'
import joeBanner from '../../../signatureimg/joed_sign.jpg'
import jTB from '../../../signatureimg/jd_white.jpg'
import jTB1 from '../../../signatureimg/jd_white_1.webp'
import jTW from '../../../signatureimg/jd_black.jpg'
import jTW1 from '../../../signatureimg/jd_black_1.webp'

const JoeDSign = () => {
  const [sign, setSign] = useState(jTB)
  const [signT, setSignT] = useState(jTW)

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
        <img className="banner" src={joeBanner} />
        <h2 className="title" style={{ color: '#232ADE' }}>
          Signatures
        </h2>
        <div>
          <ul>
            <li>
              <img
                className="product"
                src={sign}
                onMouseOver={() => setSign(jTW1)}
                onMouseOut={() => setSign(jTW)}
              />
              <p>Fender - Jaguar Preta</p>
            </li>
            <li>
              <img
                className="product"
                src={signT}
                onMouseOver={() => setSignT(jTB1)}
                onMouseOut={() => setSignT(jTB)}
              />
              <p>Fender - Telecaster White</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default JoeDSign
