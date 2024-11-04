import { useState } from 'react'
import '../style.scss'
import jimBanner from '../../../signatureimg/jimroot_sign.jpg'
import jimJB from '../../../signatureimg/fender_jr_black.jpg'
import jimJB1 from '../../../signatureimg/fender_jr_black_1.jpg'
import jimTW from '../../../signatureimg/telecaster_white.jpg'
import jimTW1 from '../../../signatureimg/telecaster_jr_1.webp'
import jimPick from '../../../signatureimg/jr_pick.jpeg'
import jimPick1 from '../../../signatureimg/jr_pick_1.jpeg'

const JimSign = () => {
  const [sign, setSign] = useState(jimJB)
  const [signT, setSignT] = useState(jimTW)
  const [signP, setSignP] = useState(jimPick)

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
        <img className="banner" src={jimBanner} />
        <h2 className="title" style={{ color: 'red' }}>
          Signatures
        </h2>
        <div>
          <ul>
            <li>
              <img
                className="product"
                src={sign}
                onMouseOver={() => setSign(jimJB1)}
                onMouseOut={() => setSign(jimJB)}
              />
              <p>Fender - Jaguar Preta</p>
            </li>
            <li>
              <img
                className="product"
                src={signT}
                onMouseOver={() => setSignT(jimTW1)}
                onMouseOut={() => setSignT(jimTW)}
              />
              <p>Fender - Telecaster White</p>
            </li>
            <li>
              <img
                className="product"
                src={signP}
                onMouseOver={() => setSignP(jimPick1)}
                onMouseOut={() => setSignP(jimPick)}
              />
              <p>Palheta - Iowa Number 4</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default JimSign
