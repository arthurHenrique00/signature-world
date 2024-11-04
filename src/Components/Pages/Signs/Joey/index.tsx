import { useState } from 'react'
import '../style.scss'
import joeyBanner from '../../../signatureimg/joey_sign.png'
import jjSnare from '../../../signatureimg/jj_snare.jpg'
import jjSnare1 from '../../../signatureimg/jj_snare_1.webp'
import jjStick from '../../../signatureimg/baqueta_jj.webp'
import jjStick1 from '../../../signatureimg/baqueta_jj_1.jpg'
import jjWar from '../../../signatureimg/jj_w.jpg'
import jjWar1 from '../../../signatureimg/jj_w1.jpg'

const JoeySign = () => {
  const [sign, setSign] = useState(jjSnare)
  const [signStick, setSignStick] = useState(jjStick)
  const [signWar, setSignWar] = useState(jjWar)

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
        <img className="banner" src={joeyBanner} />
        <h2 className="title" style={{ color: 'red' }}>
          Signatures
        </h2>
        <div>
          <ul>
            <li>
              <img
                className="product"
                src={sign}
                onMouseOver={() => setSign(jjSnare1)}
                onMouseOut={() => setSign(jjSnare)}
              />
              <p>Slipknot - Snare</p>
            </li>
            <li>
              <img
                className="product"
                src={signStick}
                onMouseOver={() => setSignStick(jjStick1)}
                onMouseOut={() => setSignStick(jjStick)}
              />
              <p> Hickory TX515W PRO</p>
            </li>
            <li>
              <img
                className="product"
                src={signWar}
                onMouseOver={() => setSignWar(jjWar1)}
                onMouseOut={() => setSignWar(jjWar)}
              />
              <p>B. C. Rich - Warlock Branca</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default JoeySign
