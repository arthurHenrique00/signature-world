import { useState } from 'react'
import '../style.scss'
import maxBanner from '../../../signatureimg/max_sign.jpg'
import mcUrban from '../../../signatureimg/mc_urban.jpg'
import mcUrban1 from '../../../signatureimg/mc_urban_1.jpg'
import mcBlack from '../../../signatureimg/mc_black.jpg'
import mcBlack1 from '../../../signatureimg/mc_black_1.jpg'
import mc600 from '../../../signatureimg/max600_1.png'
import mc6001 from '../../../signatureimg/mc600.jpg'

const MaxSign = () => {
  const [sign, setSign] = useState(mcUrban)
  const [signBlack, setSignBlack] = useState(mcBlack)
  const [sign600, setSign600] = useState(mc600)

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
        <img className="banner" src={maxBanner} />
        <h2 className="title" style={{ color: 'red' }}>
          Signatures
        </h2>
        <div>
          <ul>
            <li>
              <img
                className="product"
                src={sign}
                onMouseOver={() => setSign(mcUrban1)}
                onMouseOut={() => setSign(mcUrban)}
              />
              <p>ESP Explorer Urban Camo</p>
            </li>
            <li>
              <img
                className="product"
                src={signBlack}
                onMouseOver={() => setSignBlack(mcBlack1)}
                onMouseOut={() => setSignBlack(mcBlack)}
              />
              <p>Max-200 Black</p>
            </li>
            <li>
              <img
                className="product"
                src={sign600}
                onMouseOver={() => setSign600(mc6001)}
                onMouseOut={() => setSign600(mc600)}
              />
              <p>Max-600 Urban Camo</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default MaxSign
