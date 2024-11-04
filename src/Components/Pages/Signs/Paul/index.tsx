import { useState } from 'react'
import '../style.scss'
import paulBanner from '../../../signatureimg/paulg_sign.jpg'
import paulB from '../../../signatureimg/pg_bass.jpg'
import paulB1 from '../../../signatureimg/pg_bass_1.jpg'

const PaulSign = () => {
  const [sign, setSign] = useState(paulB)

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
        <img className="banner" src={paulBanner} />
        <h2 className="title" style={{ color: 'red' }}>
          Signatures
        </h2>
        <div>
          <ul>
            <li>
              <img
                className="product"
                src={sign}
                onMouseOver={() => setSign(paulB1)}
                onMouseOut={() => setSign(paulB)}
              />
              <p>Ibanez - PGB1</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default PaulSign
