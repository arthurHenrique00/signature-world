import { useState } from 'react'
import '../style.scss'
import abeBanner from '../../../signatureimg/abe_sign.jpg'
import abSnare from '../../../signatureimg/ab_snare.jpg'
import abSnare1 from '../../../signatureimg/ab_snare_1.webp'
import abStick from '../../../signatureimg/ac_baqueta.jpg'
import abStick1 from '../../../signatureimg/ac_baqueta_1.jpg'

const AbeSign = () => {
  const [signSnare, setsignSnare] = useState(abSnare)
  const [signStick, setsignStick] = useState(abStick)

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
        <img className="banner" src={abeBanner} />
        <h2 className="title" style={{ color: '#82AEF5' }}>
          Signatures
        </h2>
        <div>
          <ul>
            <li>
              <img
                className="product"
                src={signSnare}
                onMouseOver={() => setsignSnare(abSnare1)}
                onMouseOut={() => setsignSnare(abSnare)}
              />
              <p>Tambor - Canopus The Maple</p>
            </li>
            <li>
              <img
                className="product"
                src={signStick}
                onMouseOver={() => setsignStick(abStick1)}
                onMouseOut={() => setsignStick(abStick)}
              />
              <p>Baqueta - American Hickory</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default AbeSign
