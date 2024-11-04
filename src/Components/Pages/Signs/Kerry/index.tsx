import { useState } from 'react'
import '../style.scss'
import kerryBanner from '../../../signatureimg/kerry_sign.jpg'
import kkWRed from '../../../signatureimg/kk_warlock_red.webp'
import kkWRed1 from '../../../signatureimg/kk_warlock_red_1.jpg'
import kkBW from '../../../signatureimg/kk_warlock_black.jpg'
import kkBW1 from '../../../signatureimg/kk_warlock_black_1.webp'
import kkV from '../../../signatureimg/kk_v.jpg'
import kkV1 from '../../../signatureimg/kk_v_1.webp'

const KerrySign = () => {
  const [sign, setSign] = useState(kkWRed)
  const [signBW, setSignBW] = useState(kkBW)
  const [signV, setSignV] = useState(kkV)

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
        <img className="banner" src={kerryBanner} />
        <h2 className="title" style={{ color: 'orange' }}>
          Signatures
        </h2>
        <div>
          <ul>
            <li>
              <img
                className="product"
                src={sign}
                onMouseOver={() => setSign(kkWRed1)}
                onMouseOut={() => setSign(kkWRed)}
              />
              <p>Warlock Red</p>
            </li>
            <li>
              <img
                className="product"
                src={signBW}
                onMouseOver={() => setSignBW(kkBW1)}
                onMouseOut={() => setSignBW(kkBW)}
              />
              <p>Warlock Black</p>
            </li>
            <li>
              <img
                className="product"
                src={signV}
                onMouseOver={() => setSignV(kkV1)}
                onMouseOut={() => setSignV(kkV)}
              />
              <p>Flying V Black</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default KerrySign
