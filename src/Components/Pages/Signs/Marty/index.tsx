import { useState } from 'react'
import '../style.scss'
import mBanner from '../../../signatureimg/marty_sign.jpg'
import mB from '../../../signatureimg/mf_black.webp'
import mB1 from '../../../signatureimg/mf_black1.webp'
import mP from '../../../signatureimg/mf_purp.webp'
import mP1 from '../../../signatureimg/mf_purp1.jpg'

const MartySign = () => {
  const [sign, setSign] = useState(mB)
  const [signP, setSignP] = useState(mP)

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
        <img className="banner" src={mBanner} />
        <h2 className="title" style={{ color: '#25F54A' }}>
          Signatures
        </h2>
        <div>
          <ul>
            <li>
              <img
                className="product"
                src={sign}
                onMouseOver={() => setSign(mB1)}
                onMouseOut={() => setSign(mB)}
              />
              <p>Jackson - LP Black</p>
            </li>
            <li>
              <img
                className="product"
                src={signP}
                onMouseOver={() => setSignP(mP1)}
                onMouseOut={() => setSignP(mP)}
              />
              <p>Jackson - MF-1</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default MartySign
