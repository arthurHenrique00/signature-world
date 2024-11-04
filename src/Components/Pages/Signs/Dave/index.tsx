import { useState } from 'react'
import '../style.scss'
import dBanner from '../../../signatureimg/davem_sign.jpg'
import dR from '../../../signatureimg/dm_rip.jpg'
import dR1 from '../../../signatureimg/dm_rip_1.jpg'
import dA from '../../../signatureimg/dm_angel.jpg'
import dA1 from '../../../signatureimg/dm_angel_1.jpg'
import dP from '../../../signatureimg/dm_v_orange.webp'
import dP1 from '../../../signatureimg/dm_v_orange_1.jpg'
import dB from '../../../signatureimg/dm_v_black.webp'
import dB1 from '../../../signatureimg/dm_v_black_1.jpg'

const DaveSign = () => {
  const [sign, setSign] = useState(dR)
  const [signA, setSignA] = useState(dA)
  const [signP, setSignP] = useState(dP)
  const [signB, setSignB] = useState(dB)

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
        <img className="banner" src={dBanner} />
        <h2 className="title" style={{ color: '#25F54A' }}>
          Signatures
        </h2>
        <div>
          <ul>
            <li>
              <img
                className="product"
                src={sign}
                onMouseOver={() => setSign(dR1)}
                onMouseOut={() => setSign(dR)}
              />
              <p>Gibson V - Rust in Peace</p>
            </li>
            <li>
              <img
                className="product"
                src={signA}
                onMouseOver={() => setSignA(dA1)}
                onMouseOut={() => setSignA(dA)}
              />
              <p>Gibson V - Angel</p>
            </li>
            <li>
              <img
                className="product"
                src={signB}
                onMouseOver={() => setSignB(dB1)}
                onMouseOut={() => setSignB(dB)}
              />
              <p>Gibson V - Black</p>
            </li>
            <li>
              <img
                className="product"
                src={signP}
                onMouseOver={() => setSignP(dP1)}
                onMouseOut={() => setSignP(dP)}
              />
              <p>Gibson V - Peace is Sells...</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default DaveSign
