import { useState } from 'react'
import '../style.scss'
import lBanner from '../../../signatureimg/lars_sign.webp'
import abSnare from '../../../signatureimg/lu_snare.jpeg'
import abSnare1 from '../../../signatureimg/lu_snare_11.jpg'
import abStick from '../../../signatureimg/lu_baqueta.webp'
import abStick1 from '../../../signatureimg/lu_baqueta_1.webp'

const LarsSign = () => {
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
        <img className="banner" src={lBanner} />
        <h2 className="title" style={{ color: '#5139F4' }}>
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

export default LarsSign
