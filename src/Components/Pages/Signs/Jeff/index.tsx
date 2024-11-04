import { useState } from 'react'
import '../style.scss'
import jeffBanner from '../../../signatureimg/jeff_sign.jpg'
import jeffBlack from '../../../signatureimg/jf_black.jpg'
import jeffBlack1 from '../../../signatureimg/jf_black_1.webp'
import jeffUrban from '../../../signatureimg/jf_camo.png'
import jeffUrban1 from '../../../signatureimg/jf_camo_1.jpg'

const JeffSign = () => {
  const [sign, setSign] = useState(jeffBlack)
  const [signBW, setSignBW] = useState(jeffUrban)

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
        <img className="banner" src={jeffBanner} />
        <h2 className="title" style={{ color: 'orange' }}>
          Signatures
        </h2>
        <div>
          <ul>
            <li>
              <img
                className="product"
                src={sign}
                onMouseOver={() => setSign(jeffBlack1)}
                onMouseOut={() => setSign(jeffBlack)}
              />
              <p>ESP JH-STD</p>
            </li>
            <li>
              <img
                className="product"
                src={signBW}
                onMouseOver={() => setSignBW(jeffUrban1)}
                onMouseOut={() => setSignBW(jeffUrban)}
              />
              <p>ESP LTD JH-60</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default JeffSign
