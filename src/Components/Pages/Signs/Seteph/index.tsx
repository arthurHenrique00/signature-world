import { useState } from 'react'
import '../style.scss'
import stepBanner from '../../../signatureimg/stephen_sign.jpg'
import scPurp from '../../../signatureimg/sc_purp.jpg'
import scPurp1 from '../../../signatureimg/sc_purp_1.jpg'
import scRed from '../../../signatureimg/sc_red.jpg'
import scRed1 from '../../../signatureimg/sc_red_1.webp'
import scBlack from '../../../signatureimg/sc_black.jpg'
import scBlack1 from '../../../signatureimg/sc_black_1.jpg'

const StephSign = () => {
  const [stcPurp, setStcPurp] = useState(scPurp)
  const [stcRed, setStcRed] = useState(scRed)
  const [stcBlack, setStcBlack] = useState(scBlack)

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
        <img className="banner" src={stepBanner} />
        <h2 className="title" style={{ color: '#82AEF5' }}>
          Signatures
        </h2>
        <div>
          <ul>
            <li>
              <img
                className="product"
                src={stcPurp}
                onMouseOver={() => setStcPurp(scPurp1)}
                onMouseOut={() => setStcPurp(scPurp)}
              />
              <p>SC-607B Purple Satin 7-String</p>
            </li>
            <li>
              <img
                className="product"
                src={stcRed}
                onMouseOver={() => setStcRed(scRed1)}
                onMouseOut={() => setStcRed(scRed)}
              />
              <p>SC-608 Baritone Red Satin 7-String</p>
            </li>
            <li>
              <img
                className="product"
                src={stcBlack}
                onMouseOver={() => setStcBlack(scBlack1)}
                onMouseOut={() => setStcBlack(scBlack)}
              />
              <p>SC-608B Black Satin 7-String</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default StephSign
