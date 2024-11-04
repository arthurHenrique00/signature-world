import { useState } from 'react'
import '../style.scss'
import cBanner from '../../../signatureimg/chrisan_sign.jpg'
import cVB from '../../../signatureimg/ca_black_.webp'
import cVB1 from '../../../signatureimg/ca_black_1.webp'
import cVW from '../../../signatureimg/ca_white.webp'
import cVW1 from '../../../signatureimg/ca_white_1.webp'

const DaveSign = () => {
  const [sign, setSign] = useState(cVB)
  const [signW, setSignW] = useState(cVW)

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
        <img className="banner" src={cBanner} />
        <h2 className="title" style={{ color: '#25F54A' }}>
          Signatures
        </h2>
        <div>
          <ul>
            <li>
              <img
                className="product"
                src={sign}
                onMouseOver={() => setSign(cVB1)}
                onMouseOut={() => setSign(cVB)}
              />
              <p>Fender - Jaguar Preta</p>
            </li>
            <li>
              <img
                className="product"
                src={signW}
                onMouseOver={() => setSignW(cVW1)}
                onMouseOut={() => setSignW(cVW)}
              />
              <p>Fender - Telecaster White</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default DaveSign
