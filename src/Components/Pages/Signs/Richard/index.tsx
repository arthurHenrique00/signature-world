import { useState } from 'react'
import '../style.scss'
import rkBanner from '../../../signatureimg/rich_sign.jpg'
import rkS from '../../../signatureimg/rk_sts.jpg'
import rkS1 from '../../../signatureimg/rk_sts_1.jpg'
import rkLP from '../../../signatureimg/rk_lp.jpg'
import rkLP1 from '../../../signatureimg/rk_lp_1.jpg'

const RichSign = () => {
  const [sign, setSign] = useState(rkS)
  const [signLP, setSignLP] = useState(rkLP)

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
        <img className="banner" src={rkBanner} />
        <h2 className="title" style={{ color: '#ACF5A5' }}>
          Signatures
        </h2>
        <div>
          <ul>
            <li>
              <img
                className="product"
                src={sign}
                onMouseOver={() => setSign(rkS1)}
                onMouseOut={() => setSign(rkS)}
              />
              <p>STS - RK-285</p>
            </li>
            <li>
              <img
                className="product"
                src={signLP}
                onMouseOver={() => setSignLP(rkLP1)}
                onMouseOut={() => setSignLP(rkLP)}
              />
              <p>LP - RK-435</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default RichSign
