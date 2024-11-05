import { useState } from 'react'
import '../style.scss'
import plBanner from '../../../signatureimg/paul_sign.jpg'
import plLP from '../../../signatureimg/pl_lp.jpg'
import plLP1 from '../../../signatureimg/pl_lp_1.jpg'

const LandersSign = () => {
  const [sign, setSign] = useState(plLP)

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
        <img className="banner" src={plBanner} />
        <h2 className="title" style={{ color: '#ACF5A5' }}>
          Signatures
        </h2>
        <div>
          <ul>
            <li>
              <img
                className="product"
                src={sign}
                onMouseOver={() => setSign(plLP1)}
                onMouseOut={() => setSign(plLP)}
              />
              <p>Jackson - PL-308</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default LandersSign
