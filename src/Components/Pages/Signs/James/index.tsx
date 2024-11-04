import { useState } from 'react'
import '../style.scss'
import jBanner from '../../../signatureimg/james_sign.jpg'
import jEW from '../../../signatureimg/jh_white.png'
import jEW1 from '../../../signatureimg/jh_white_1.jpg'
import jLW from '../../../signatureimg/jh_ironcross.webp'
import jLW1 from '../../../signatureimg/jh_ironcross_1.jpg'
import jPB from '../../../signatureimg/jh_pick_black.jpg'
import jPB1 from '../../../signatureimg/jh_pick_black_1.webp'
import jPW from '../../../signatureimg/jh_pick_white.jpg'
import jPW1 from '../../../signatureimg/jh_pick_white_1.webp'
import jC from '../../../signatureimg/jh_chords.webp'
import jC1 from '../../../signatureimg/jh_chords_1.webp'

const JamesSign = () => {
  const [sign, setsign] = useState(jEW)
  const [signLW, setSignLW] = useState(jLW)
  const [signPB, setSignPB] = useState(jPB)
  const [signPW, setSignPW] = useState(jPW)
  const [signC, setSignC] = useState(jC)

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
        <img className="banner" src={jBanner} />
        <h2 className="title" style={{ color: '#5139F4' }}>
          Signatures
        </h2>
        <div>
          <ul>
            <li>
              <img
                className="product"
                src={sign}
                onMouseOver={() => setsign(jEW1)}
                onMouseOut={() => setsign(jEW)}
              />
              <p>Explorer - White</p>
            </li>
            <li>
              <img
                className="product"
                src={signLW}
                onMouseOver={() => setSignLW(jLW1)}
                onMouseOut={() => setSignLW(jLW)}
              />
              <p>Les Paul - Iron Cross</p>
            </li>
            <li>
              <img
                className="product"
                src={signPB}
                onMouseOver={() => setSignPB(jPB)}
                onMouseOut={() => setSignPB(jPB1)}
              />
              <p>Palheta - Black Fang</p>
            </li>
            <li>
              <img
                className="product"
                src={signPW}
                onMouseOver={() => setSignPW(jPW)}
                onMouseOut={() => setSignPW(jPW1)}
              />
              <p>Palheta - White Fang</p>
            </li>
            <li>
              <img
                className="product"
                src={signC}
                onMouseOver={() => setSignC(jC1)}
                onMouseOut={() => setSignC(jC)}
              />
              <p>Earnie Ball - .011</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default JamesSign
