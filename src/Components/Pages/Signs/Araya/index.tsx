import { useState } from 'react'
import '../style.scss'
import arayaBanner from '../../../signatureimg/araya_sign.jpg'
import arayaBass from '../../../signatureimg/ta_sign.jpg'
import arayaBass1 from '../../../signatureimg/ta_sign_1.webp'
import arayaPick from '../../../signatureimg/ta_pick.jpeg'
import arayaPick1 from '../../../signatureimg/ta_pick_1.jpeg'

const ArayaSign = () => {
  const [sign, setSign] = useState(arayaBass)
  const [signB, setSignB] = useState(arayaPick)

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
        <img className="banner" src={arayaBanner} />
        <h2 className="title" style={{ color: 'orange' }}>
          Signatures
        </h2>
        <div>
          <ul>
            <li>
              <img
                className="product"
                src={sign}
                onMouseOver={() => setSign(arayaBass1)}
                onMouseOut={() => setSign(arayaBass)}
              />
              <p>TA-204 FRX</p>
            </li>
            <li>
              <img
                className="product"
                src={signB}
                onMouseOver={() => setSignB(arayaPick1)}
                onMouseOut={() => setSignB(arayaPick)}
              />
              <p>Slaytanic Army - Palheta</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default ArayaSign
