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
  const [signPurp, setsignPurp] = useState(scPurp)
  const [signRed, setsignRed] = useState(scRed)
  const [signBlack, setsignBlack] = useState(scBlack)

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
                src={signPurp}
                onMouseOver={() => setsignPurp(scPurp1)}
                onMouseOut={() => setsignPurp(scPurp)}
              />
              <p>SC-607B Purple Satin 7-String</p>
            </li>
            <li>
              <img
                className="product"
                src={signRed}
                onMouseOver={() => setsignRed(scRed1)}
                onMouseOut={() => setsignRed(scRed)}
              />
              <p>SC-608 Baritone Red Satin 7-String</p>
            </li>
            <li>
              <img
                className="product"
                src={signBlack}
                onMouseOver={() => setsignBlack(scBlack1)}
                onMouseOut={() => setsignBlack(scBlack)}
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
