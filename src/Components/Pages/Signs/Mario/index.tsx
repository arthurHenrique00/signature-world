import { useState } from 'react'
import '../style.scss'
import marBanner from '../../../signatureimg/mario_sign.jpg'
import mS from '../../../signatureimg/md_baqueta.webp'
import mS1 from '../../../signatureimg/md_baqueta1.webp'
import mSn from '../../../signatureimg/md_snare.jpg'
import mSn1 from '../../../signatureimg/md_snare1.jpg'

const MarioSign = () => {
  const [sign, setSign] = useState(mS)
  const [signS, setSignS] = useState(mSn)

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
        <img className="banner" src={marBanner} />
        <h2 className="title" style={{ color: '#232ADE' }}>
          Signatures
        </h2>
        <div>
          <ul>
            <li>
              <img
                className="product"
                src={sign}
                onMouseOver={() => setSign(mS1)}
                onMouseOut={() => setSign(mS)}
              />
              <p>Tama - Mario Signature</p>
            </li>
            <li>
              <img
                className="product"
                src={signS}
                onMouseOver={() => setSignS(mSn1)}
                onMouseOut={() => setSignS(mSn)}
              />
              <p>Snare - Mario Signature</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default MarioSign
