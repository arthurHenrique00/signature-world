import { useState } from 'react'
import '../style.scss'
import andBanner from '../../../signatureimg/andreas_sign.png'
import andSign from '../../../signatureimg/ak_sign.png'
import andSign1 from '../../../signatureimg/ak_sign_1.webp'
import andPick from '../../../signatureimg/ak_pick.jpg'
import andPick1 from '../../../signatureimg/ak_pick1.jpg'
import andChord from '../../../signatureimg/ak_chord.webp'
import andChord1 from '../../../signatureimg/ak_chord_1.webp'

const AndreasSign = () => {
  const [sign, setSign] = useState(andSign)
  const [signBlack, setSignBlack] = useState(andPick)
  const [sign600, setSign600] = useState(andChord)

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
        <img className="banner" src={andBanner} />
        <h2 className="title" style={{ color: 'red' }}>
          Signatures
        </h2>
        <div>
          <ul>
            <li>
              <img
                className="product"
                src={sign}
                onMouseOver={() => setSign(andSign1)}
                onMouseOut={() => setSign(andSign)}
              />
              <p>Jackson Pro Series Soloist</p>
            </li>
            <li>
              <img
                className="product"
                src={signBlack}
                onMouseOver={() => setSignBlack(andPick1)}
                onMouseOut={() => setSignBlack(andPick)}
              />
              <p>Palheta - Schizophrenia</p>
            </li>
            <li>
              <img
                className="product"
                src={sign600}
                onMouseOver={() => setSign600(andChord1)}
                onMouseOut={() => setSign600(andChord)}
              />
              <p>SG - Encordoamento .013</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default AndreasSign
