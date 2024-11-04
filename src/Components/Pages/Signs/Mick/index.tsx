import { useState } from 'react'
import '../style.scss'
import mickBanner from '../../../signatureimg/mickthom_sign.jpg'
import mkW from '../../../signatureimg/seven_white_mt.png'
import mkW1 from '../../../signatureimg/seven_white_mt_1.jpg'
import mkB from '../../../signatureimg/seven_black_mt.jpg'
import mkB1 from '../../../signatureimg/seven_black_mt_1.jpg'
import mkPick from '../../../signatureimg/mt_pick.jpg'
import mkPick1 from '../../../signatureimg/mt_pick_1.jpg'

const MickSign = () => {
  const [sign, setSign] = useState(mkW)
  const [signBlack, setSignBlack] = useState(mkB)
  const [signPick, setSignPick] = useState(mkPick)

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
        <img className="banner" src={mickBanner} />
        <h2 className="title" style={{ color: 'red' }}>
          Signatures
        </h2>
        <div>
          <ul>
            <li>
              <img
                className="product"
                src={sign}
                onMouseOver={() => setSign(mkW1)}
                onMouseOut={() => setSign(mkW)}
              />
              <p>Jackson - Seven Black</p>
            </li>
            <li>
              <img
                className="product"
                src={signBlack}
                onMouseOver={() => setSignBlack(mkB1)}
                onMouseOut={() => setSignBlack(mkB)}
              />
              <p>Jackson - Seven White</p>
            </li>
            <li>
              <img
                className="product"
                src={signPick}
                onMouseOver={() => setSignPick(mkPick1)}
                onMouseOut={() => setSignPick(mkPick)}
              />
              <p>Código de barra - Palheta</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default MickSign
