import { useState } from 'react'
import '../style.scss'
import jayBanner from '../../../signatureimg/jaywein_sign.jpg'
import jaySnare1 from '../../../signatureimg/caixa_jw.webp'
import jaySnare from '../../../signatureimg/caixa_jw_1.webp'
import jayStick from '../../../signatureimg/baqueta_jw.jpg'
import jayStick1 from '../../../signatureimg/baqueta_jw_1.jpg'

const JaySign = () => {
  const [sign, setSign] = useState(jaySnare)
  const [signStick, setSignStick] = useState(jayStick)

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
        <img className="banner" src={jayBanner} />
        <h2 className="title" style={{ color: 'red' }}>
          Signatures
        </h2>
        <div>
          <ul>
            <li>
              <img
                className="product"
                src={sign}
                onMouseOver={() => setSign(jaySnare1)}
                onMouseOut={() => setSign(jaySnare)}
              />
              <p>Slipknot - Snare</p>
            </li>
            <li>
              <img
                className="product"
                src={signStick}
                onMouseOver={() => setSignStick(jayStick1)}
                onMouseOut={() => setSignStick(jayStick)}
              />
              <p>Vater VHJW908</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default JaySign
